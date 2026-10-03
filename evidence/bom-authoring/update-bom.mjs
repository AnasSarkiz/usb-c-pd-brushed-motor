import fs from "node:fs/promises";
import { Workbook } from "@oai/artifact-tool";

const revision = process.argv.find(argument => /^A\d+$/.test(argument)) ?? "A10";

const workbook = await Workbook.fromCSV(await fs.readFile("docs/BOM.csv", "utf8"), { sheetName: "BOM" });
const sheet = workbook.worksheets.getItem("BOM");
const originalRows = sheet.getUsedRange().values;
if (process.argv.includes("--inspect")) {
  console.log((await workbook.inspect({ kind: "table", range: "BOM!A1:G6", tableMaxRows: 6, tableMaxCols: 7, maxChars: 1800 })).ndjson);
  const preview = await workbook.render({ sheetName: "BOM", range: "A1:G6", scale: 1, format: "png" });
  await fs.writeFile(`evidence/bom-authoring/before-${revision}.png`, new Uint8Array(await preview.arrayBuffer()));
  console.log(workbook.help("workbook.toCSV", { include: "index,examples,notes", maxChars: 2000 }).ndjson);
} else {
  const manifest = JSON.parse(await fs.readFile("docs/design-manifest.json", "utf8"));
  const header = originalRows[0];
  const metadata = new Map(originalRows.slice(1).map(row => [row[5], Object.fromEntries(header.map((field, i) => [field, row[i]]))]));
  const groups = new Map();
  for (const part of manifest) {
    const group = groups.get(part.code) ?? [];
    group.push(part);
    groups.set(part.code, group);
  }
  const newMetadata = JSON.parse(await fs.readFile(`evidence/new-bom-metadata-${revision}.json`, "utf8"));
  for (const supplier of newMetadata) metadata.set(supplier.JLCPCB_LCSC_Number, supplier);
  const updatedHeader = header.map(field => field === "Stock_Observed_2026_10_02" ? "Stock_Observed" : field).filter((field, index, fields) => fields.indexOf(field) === index);
  if (!updatedHeader.includes("Availability_Checked_On")) updatedHeader.push("Availability_Checked_On");
  const updatedRows = [updatedHeader];
  for (const [code, parts] of groups) {
    const supplier = metadata.get(code);
    if (!supplier) throw new Error(`BOM metadata missing for ${code}`);
    const row = { ...supplier, References: parts.map(part => part.ref).join(","), Quantity: parts.length,
      Function: parts.map(part => part.purpose).join("; "), Review_Status: code === "C178373" ? `${revision} independent import/pin/schema/polarity review passes; land variation documented; loop, current sharing, thermal and assembly process pending` : ["C1849461", "C44377", "C1855818"].includes(code) ? `${revision} native import checks pass with authorized thermal-via policy; thermal copper/process and power approval pending` : `${revision} connected draft; metadata, mechanical and power approval pending` };
    row.Stock_Observed = supplier.Stock_Observed ?? supplier.Stock_Observed_2026_10_02;
    row.Availability_Checked_On = supplier.Availability_Checked_On ?? "2026-10-02";
    for (const field of ["Value", "Manufacturer", "Manufacturer_Part_Number", "JLCPCB_LCSC_Number", "Package", "Supplier_Import", "Catalog_URL", "Datasheet_URL", "Review_Status", "Availability_Checked_On"]) {
      if (typeof row[field] !== "string" || !row[field].trim()) throw new Error(`Missing required ${field} for ${code}`);
    }
    updatedRows.push(updatedHeader.map(field => row[field] ?? ""));
  }
  sheet.getUsedRange().clear({ applyTo: "contents" });
  sheet.getRange("A1").write(updatedRows);
  workbook.recalculate();
  const allRows = sheet.getUsedRange().values;
  if (allRows.slice(updatedRows.length).some(row => row.some(cell => cell !== null && cell !== undefined && cell !== ""))) throw new Error("Unexpected residual BOM data");
  const writtenRows = sheet.getRange(`A1:O${updatedRows.length}`).values;
  const total = writtenRows.slice(1).reduce((sum, row) => sum + Number(row[1]), 0);
  if (total !== manifest.length || writtenRows.length !== groups.size + 1) throw new Error("BOM totals disagree with design manifest");
  const references = writtenRows.slice(1).flatMap(row => String(row[0]).split(","));
  if (new Set(references).size !== references.length) throw new Error("Duplicate BOM reference");
  const escapedRows = writtenRows.map(row => row.map(cell => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  await fs.writeFile("docs/BOM.csv", `${escapedRows}\n`);
  const capacitorIndex = writtenRows.findIndex(row => row[5] === "C178373");
  if (capacitorIndex < 1) throw new Error("C18 supplier metadata absent");
  sheet.getRange(`A${capacitorIndex+1}:G${capacitorIndex+1}`).format.autofitColumns();
  const capacitorPreview = await workbook.render({ sheetName: "BOM", range: `A${capacitorIndex+1}:G${capacitorIndex+1}`, scale: 1, format: "png" });
  await fs.writeFile(`evidence/bom-authoring/C18-${revision}.png`, new Uint8Array(await capacitorPreview.arrayBuffer()));
  const check = await workbook.inspect({ kind: "table", range: "BOM!A1:G6", tableMaxRows: 6, tableMaxCols: 7, maxChars: 1800 });
  await fs.writeFile(`evidence/bom-authoring/reconciliation-${revision}.json`, JSON.stringify({ componentCount: total, supplierPartCount: groups.size, duplicateReferences: 0, inspected: check.ndjson }, null, 2));
  sheet.getRange("A1:G6").format.autofitColumns();
  const preview = await workbook.render({ sheetName: "BOM", range: "A1:G6", scale: 1, format: "png" });
  await fs.writeFile(`evidence/bom-authoring/after-${revision}.png`, new Uint8Array(await preview.arrayBuffer()));
  console.log(`BOM reconciled: ${total} components / ${groups.size} supplier parts`);
}
