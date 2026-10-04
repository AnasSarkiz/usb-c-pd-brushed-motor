import { FanoutSolver } from "./fanout-manufacturing-A22/lib/fanout-solver"
import { routeBus } from "./fanout-manufacturing-A22/lib/route-bus"
const args: ConstructorParameters<typeof FanoutSolver> = await Bun.file("evidence/fanout-source-fix-A22/pd-ground-physical-match-constructor.json").json()
const solver = new FanoutSolver(...args)
const bus = solver.preparedBuses.find(bus => bus.busId === "source_trace_24")
if (!bus) throw new Error("Required failing plane bus missing")
console.log(JSON.stringify({direction:bus.direction,pitchX:bus.pitchX,pitchY:bus.pitchY,xCoordinates:bus.xCoordinates,yCoordinates:bus.yCoordinates,config:solver.config},null,2))
console.log("NATURAL",routeBus({srj: args[0], bus, targetLayer: "bottom", acceptedPlans: [], layerNames: solver.config.layerNames, traceWidth: solver.config.traceWidth, viaDiameter: solver.config.viaDiameter, viaHoleDiameter: solver.config.viaHoleDiameter, clearance: solver.config.clearance, compactBusTracks: true, allowBlindAndBuriedVias: false})?.map(plan => plan.via))
for (const x of [-27.25,-27.5,-27.75,-27.9,-28]) {
 const plans = routeBus({srj: args[0], bus, targetLayer: "bottom", acceptedPlans: [], layerNames: solver.config.layerNames, traceWidth: solver.config.traceWidth, viaDiameter: solver.config.viaDiameter, viaHoleDiameter: solver.config.viaHoleDiameter, clearance: solver.config.clearance, compactBusTracks: true, allowBlindAndBuriedVias: false, fixedViaPointsByConnectionIndex: new Map([[bus.connections[0].connectionIndex,{x,y:3.750064}]])})
 console.log(x,plans?.map(plan=>plan.via))
}
