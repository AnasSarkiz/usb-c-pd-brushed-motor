import fs from "node:fs/promises";
import { Workbook } from "@oai/artifact-tool";

const workbook = await Workbook.fromCSV(await fs.readFile("docs/BOM.csv", "utf8"), { sheetName: "BOM" });
const sheet = workbook.worksheets.getItem("BOM");
const originalRows = sheet.getUsedRange().values;
if (process.argv.includes("--inspect")) {
  console.log((await workbook.inspect({ kind: "table", range: "BOM!A1:G6", tableMaxRows: 6, tableMaxCols: 7, maxChars: 1800 })).ndjson);
  const preview = await workbook.render({ sheetName: "BOM", range: "A1:G6", scale: 1, format: "png" });
  await fs.writeFile("evidence/bom-authoring/before-A8.png", new Uint8Array(await preview.arrayBuffer()));
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
  const newMetadata = JSON.parse(await fs.readFile("evidence/new-bom-metadata-A7.json", "utf8"));
  for (const supplier of newMetadata) metadata.set(supplier.JLCPCB_LCSC_Number, supplier);
  const updatedHeader = header.map(field => field === "Stock_Observed_2026_10_02" ? "Stock_Observed" : field).filter((field, index, fields) => fields.indexOf(field) === index);
  if (!updatedHeader.includes("Availability_Checked_On")) updatedHeader.push("Availability_Checked_On");
  const updatedRows = [updatedHeader];
  for (const [code, parts] of groups) {
    const supplier = metadata.get(code);
    if (!supplier) throw new Error(`BOM metadata missing for ${code}`);
    const row = { ...supplier, References: parts.map(part => part.ref).join(","), Quantity: parts.length,
      Function: parts.map(part => part.purpose).join("; "), Review_Status: ["C1849461", "C44377", "C1855818"].includes(code) ? "A8 native import checks pass with authorized thermal-via policy; thermal copper/process and power approval pending" : "A8 connected draft; metadata, mechanical and power approval pending" };
    row.Stock_Observed = supplier.Stock_Observed ?? supplier.Stock_Observed_2026_10_02;
    row.Availability_Checked_On = supplier.Availability_Checked_On ?? "2026-10-02";
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
  const escapedRows = writtenRows.map(row => row.map(cell => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  await fs.writeFile("docs/BOM.csv", `${escapedRows}\r\n`);
  const check = await workbook.inspect({ kind: "table", range: "BOM!A1:G6", tableMaxRows: 6, tableMaxCols: 7, maxChars: 1800 });
  await fs.writeFile("evidence/bom-authoring/reconciliation-A8.json", JSON.stringify({ componentCount: total, supplierPartCount: groups.size, duplicateReferences: 0, inspected: check.ndjson }, null, 2));
  sheet.getRange("A1:G6").format.autofitColumns();
  const preview = await workbook.render({ sheetName: "BOM", range: "A1:G6", scale: 1, format: "png" });
  await fs.writeFile("evidence/bom-authoring/after-A8.png", new Uint8Array(await preview.arrayBuffer()));
  console.log(`BOM reconciled: ${total} components / ${groups.size} supplier parts`);
}
