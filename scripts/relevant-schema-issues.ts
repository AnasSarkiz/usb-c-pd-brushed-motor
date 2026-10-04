import * as circuitJsonSchemas from "circuit-json"
import { z, type ZodError, type ZodIssue } from "zod"

/** Present only branches for this Circuit JSON type; validation remains unchanged. */
export function relevantSchemaIssues(
  element: { type: string },
  error: ZodError,
): ZodIssue[] {
  const schema = Object.entries(circuitJsonSchemas).find(
    ([schemaName]) => schemaName === element.type,
  )?.[1]
  if (schema instanceof z.ZodType) {
    const parsed = schema.safeParse(element)
    if (!parsed.success) return parsed.error.issues
  }
  // Unknown types retain the complete diagnostic; no validation result is changed.
  return error.issues
}
