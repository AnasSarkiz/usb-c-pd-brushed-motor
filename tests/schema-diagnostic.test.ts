import { expect, test } from "bun:test"
import { any_circuit_element } from "circuit-json"
import { relevantSchemaIssues } from "../scripts/relevant-schema-issues"

test("nested union diagnostics retain the actual invalid board-label field", () => {
  const element = {
    type: "pcb_silkscreen_text",
    pcb_component_id: null,
    text: "USB-C",
    layer: "top",
  }
  const parsed = any_circuit_element.safeParse(element)
  expect(parsed.success).toBe(false)
  if (parsed.success)
    throw new Error("Invalid association unexpectedly accepted")
  const issues = relevantSchemaIssues(element, parsed.error)
  expect(issues.map((issue) => issue.path)).toEqual([["pcb_component_id"]])
  expect(issues[0].code).toBe("invalid_type")
})
