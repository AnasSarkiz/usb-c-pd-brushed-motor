import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("USB-C correction preserves the supplier geometry and clears every adjacent land", () => {
  const review = spawnSync(
    "tooling/power-review-venv/bin/python",
    ["scripts/review-usb-c-pad-shifts.py"],
    { encoding: "utf8" },
  )
  expect(review.status).toBe(0)
  expect(review.stderr).toBe("")

  const original = spawnSync(
    "tooling/power-review-venv/bin/python",
    [
      "scripts/review-usb-c-pad-shifts.py",
      "--source",
      "evidence/usb-c-C165948-original-import-A44.tsx.txt",
    ],
    { encoding: "utf8" },
  )
  expect(original.status).toBe(1)
  expect(original.stderr).toContain("adjacent-pad gap remains below0.20mm")
})
