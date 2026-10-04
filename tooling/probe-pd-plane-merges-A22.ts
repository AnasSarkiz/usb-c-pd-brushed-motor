import { FanoutSolver } from "./fanout-manufacturing-A22/lib/fanout-solver"
import { getSvgFromGraphicsObject } from "graphics-debug"
const args: ConstructorParameters<typeof FanoutSolver> = await Bun.file("evidence/fanout-source-fix-A22/pd-ground-physical-match-padding2-constructor.json").json()
const solver = new FanoutSolver(args[0], { ...args[1], allowSameNetMerges: true })
solver.solve()
const report = { solved: solver.solved, failed: solver.failed, error: solver.error, attempts: solver.attempts, ...(solver.solved ? { output: solver.getOutput() } : {}) }
await Bun.write("evidence/fanout-source-fix-A22/pd-plane-merges-report.json", JSON.stringify(report, null, 2))
await Bun.write("evidence/fanout-source-fix-A22/pd-plane-merges.svg", getSvgFromGraphicsObject(solver.visualize()))
console.log({solved:solver.solved,failed:solver.failed,error:solver.error,attempts:solver.attempts})
