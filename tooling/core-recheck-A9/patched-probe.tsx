import { writeFile } from "node:fs/promises"
import { Circuit } from "@tscircuit/core"
import { any_circuit_element } from "circuit-json"
import { z } from "zod"
import CoordinateSerializationProbe from "../../tests/coordinate-serialization-probe.circuit"
const circuit = new Circuit()
circuit.add(<CoordinateSerializationProbe />)
await circuit.renderUntilSettled()
const raw = circuit.getCircuitJson()
const parsed = z.array(any_circuit_element).safeParse(raw)
const failures = parsed.success ? [] : parsed.error.issues
const report = { localCoreBaseVersion: "0.0.2069", sourceCommit: "24d72602641a1bccb3516d6ab9fad7b95ec523bd", experimentalLocalPatch: true, schemaVersion: "0.0.512", boardDependencyUnchanged: true, failures, raw }
await writeFile("evidence/local-patched-core-coordinate-A9.json", JSON.stringify(report, null, 2) + "\n")
console.log(JSON.stringify({ localCoreBaseVersion: report.localCoreBaseVersion, failureCount: failures.length, failures }, null, 2))
if (failures.length) process.exitCode = 1
