import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"

test("48 V USB-C replacement preserves manufacturer geometry and rejects original sub-rule gaps", () => {
  const review = spawnSync(
    "tooling/power-review-venv/bin/python",
    ["scripts/review-usb-c-replacement.py"],
    { encoding: "utf8" },
  )
  expect(review.status).toBe(0)
  expect(review.stderr).toBe("")
  const original = spawnSync(
    "tooling/power-review-venv/bin/python",
    [
      "scripts/review-usb-c-replacement.py",
      "--source",
      "evidence/usb-c-C5184243-original-import-A45.tsx.txt",
    ],
    { encoding: "utf8" },
  )
  expect(original.status).toBe(1)
  expect(original.stderr).toContain("adjacent-pad gap remains below0.20mm")
})
