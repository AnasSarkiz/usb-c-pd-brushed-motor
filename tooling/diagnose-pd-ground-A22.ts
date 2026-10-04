import { FanoutAutorouter } from "./core-manufacturing-A22/lib/utils/autorouting/FanoutAutorouter"
import type { SimpleRouteJson } from "./core-manufacturing-A22/lib/utils/autorouting/SimpleRouteJson"
import { FanoutSolver } from "./fanout-manufacturing-A22/lib/fanout-solver"
import { getSvgFromGraphicsObject } from "graphics-debug"

const label = process.argv[2] ?? "original"
const input: SimpleRouteJson = await Bun.file("evidence/routing-thirteenth-debug-A22/phase-1.input.simple-route.json").json()
const fanoutBounds = FanoutAutorouter.resolveFanoutBounds(input, { mode: "fanout", fanoutBoundaryPadding: Number(process.argv[3] ?? "1.5"), allowBlindAndBuriedVias: false })
const router = new FanoutAutorouter(input, {
  mode: "fanout", fanoutBounds, allowBlindAndBuriedVias: false,
  onSolverStarted: async ({ solverConstructorArgs }) => {
    await Bun.write(`evidence/fanout-source-fix-A22/pd-ground-${label}-constructor.json`, JSON.stringify(solverConstructorArgs, null, 2))
    const solver = new FanoutSolver(...solverConstructorArgs)
    const startedAt = performance.now()
    solver.solve()
    const report = { failed: solver.failed, solved: solver.solved, error: solver.error, durationMs: performance.now() - startedAt, attempts: solver.attempts, config: solver.config, buses: solver.preparedBuses.map(bus => ({ busId: bus.busId, direction: bus.direction, source: bus.connections.map(connection => ({ name: connection.connection.name, point: connection.sourcePoint, obstacle: connection.sourceObstacle })), componentBounds: bus.componentBounds, grid: bus.grid })) }
    await Bun.write(`evidence/fanout-source-fix-A22/pd-ground-${label}-report.json`, JSON.stringify(report, null, 2))
    await Bun.write(`evidence/fanout-source-fix-A22/pd-ground-${label}.svg`, getSvgFromGraphicsObject(solver.visualize()))
    console.log(JSON.stringify(report, null, 2))
  },
})
try { router.solveSync() } catch (error) { console.error(String(error)) }
