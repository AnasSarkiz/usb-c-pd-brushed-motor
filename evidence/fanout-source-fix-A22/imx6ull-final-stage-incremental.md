# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 45.12s | 29633 | 1.0ms | 729 |

**Top 10:** `stepOnce` 14.6%, `fillTraceOccupants` 12.1%, `(anonymous)` 11.8%, `(anonymous)` 7.0%, `computeH` 4.6%, `pushFlatOccupants` 4.4%, `segmentIsClearOfObstacles` 3.7%, `pop` 2.8%, `(anonymous)` 2.5%, `hypot` 2.4%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 14.6% | 6.58s | 74.0% | 33.40s | `stepOnce` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 12.1% | 5.45s | 15.7% | 7.09s | `fillTraceOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 11.8% | 5.36s | 42.5% | 19.19s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` |
| 7.0% | 3.17s | 7.0% | 3.17s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:33` |
| 4.6% | 2.09s | 5.4% | 2.46s | `computeH` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 4.4% | 1.98s | 4.4% | 1.98s | `pushFlatOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 3.7% | 1.68s | 3.7% | 1.69s | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1784` |
| 2.8% | 1.29s | 2.8% | 1.29s | `pop` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 2.5% | 1.13s | 6.1% | 2.76s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:42` |
| 2.4% | 1.11s | 2.4% | 1.11s | `hypot` | `[native code]` |
| 2.4% | 1.10s | 2.4% | 1.10s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 1.9% | 887.0ms | 2.7% | 1.24s | `distanceSegmentToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:142` |
| 1.9% | 880.6ms | 2.6% | 1.20s | `pushFlatOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 1.6% | 747.7ms | 4.0% | 1.81s | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2104` |
| 1.3% | 606.3ms | 3.4% | 1.54s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:334` |
| 0.9% | 435.4ms | 75.0% | 33.84s | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.8% | 401.3ms | 0.8% | 401.3ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:191` |
| 0.8% | 391.0ms | 1.6% | 737.4ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:622` |
| 0.7% | 339.5ms | 3.7% | 1.69s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1200` |
| 0.7% | 326.2ms | 0.7% | 326.2ms | `Ii` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.7% | 325.4ms | 0.7% | 325.4ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:30` |
| 0.7% | 316.6ms | 0.7% | 316.6ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:53` |
| 0.6% | 314.3ms | 0.8% | 377.6ms | `pointsMatch` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:34` |
| 0.6% | 291.7ms | 0.6% | 291.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1371` |
| 0.5% | 258.6ms | 0.8% | 363.6ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:370` |
| 0.5% | 250.9ms | 8.7% | 3.94s | `bound computeMoveCostAndRips` | `[native code]` |
| 0.5% | 246.7ms | 1.5% | 682.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1381` |
| 0.4% | 208.3ms | 0.6% | 284.0ms | `sort` | `[native code]` |
| 0.4% | 199.0ms | 30.0% | 13.53s | `computeMoveCostAndRips` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.3% | 175.7ms | 0.3% | 175.7ms | `pointAt` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1007` |
| 0.3% | 154.6ms | 0.3% | 154.6ms | `copyDataProperties` | `[native code]` |
| 0.3% | 152.4ms | 0.8% | 377.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2116` |
| 0.3% | 147.3ms | 0.8% | 369.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:540` |
| 0.3% | 143.6ms | 0.9% | 438.5ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:59` |
| 0.3% | 141.4ms | 0.3% | 141.4ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:468` |
| 0.3% | 139.2ms | 0.3% | 139.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:424` |
| 0.2% | 131.0ms | 1.2% | 545.7ms | `bound pushFlatOccupants` | `[native code]` |
| 0.2% | 128.9ms | 0.4% | 199.6ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:371` |
| 0.2% | 126.3ms | 0.2% | 126.3ms | `cloneObject` | `[native code]` |
| 0.2% | 116.7ms | 0.3% | 145.1ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:82` |
| 0.2% | 116.7ms | 0.3% | 179.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:343` |
| 0.2% | 108.6ms | 0.5% | 229.3ms | `reduce` | `[native code]` |
| 0.2% | 106.8ms | 0.2% | 106.8ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1015` |
| 0.2% | 103.9ms | 0.2% | 103.9ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.2% | 99.1ms | 9.4% | 4.27s | `every` | `[native code]` |
| 0.2% | 95.4ms | 0.2% | 95.4ms | `Set` | `[native code]` |
| 0.2% | 92.4ms | 0.2% | 103.3ms | `append` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 89.9ms | 0.1% | 89.9ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:36` |
| 0.1% | 87.1ms | 0.6% | 283.1ms | `finalizeRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 85.9ms | 0.1% | 85.9ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:69` |
| 0.1% | 84.8ms | 0.1% | 84.8ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:23` |
| 0.1% | 83.6ms | 0.8% | 404.8ms | `some` | `[native code]` |
| 0.1% | 83.2ms | 0.1% | 83.2ms | `includes` | `[native code]` |
| 0.1% | 82.8ms | 2.4% | 1.11s | `next` | `[native code]` |
| 0.1% | 82.2ms | 0.3% | 144.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:50` |
| 0.1% | 79.4ms | 0.1% | 79.4ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:50` |
| 0.1% | 77.6ms | 0.1% | 77.6ms | `pointAt` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1006` |
| 0.1% | 75.7ms | 0.1% | 75.7ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.1% | 75.6ms | 0.1% | 75.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:88` |
| 0.1% | 72.5ms | 0.6% | 307.4ms | `forEachCellNearCircle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 71.6ms | 0.1% | 71.6ms | `arrayIteratorNextHelper` | `[native code]` |
| 0.1% | 70.7ms | 0.1% | 70.7ms | `add` | `[native code]` |
| 0.1% | 69.0ms | 0.1% | 69.0ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:61` |
| 0.1% | 67.9ms | 0.7% | 337.1ms | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1811` |
| 0.1% | 66.3ms | 0.4% | 207.2ms | `filter` | `[native code]` |
| 0.1% | 62.1ms | 0.1% | 62.1ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2113` |
| 0.1% | 61.3ms | 0.1% | 61.3ms | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:320` |
| 0.1% | 55.1ms | 1.6% | 755.3ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:70` |
| 0.1% | 54.5ms | 1.8% | 841.7ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:31` |
| 0.1% | 52.7ms | 0.2% | 91.8ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:580` |
| 0.1% | 51.7ms | 0.2% | 128.3ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:613` |
| 0.1% | 51.5ms | 0.1% | 51.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1379` |
| 0.1% | 49.3ms | 0.1% | 49.3ms | `push` | `[native code]` |
| 0.1% | 46.1ms | 0.1% | 46.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:78` |
| 0.0% | 44.7ms | 0.0% | 44.7ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:42` |
| 0.0% | 44.6ms | 0.0% | 44.6ms | `distance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:28` |
| 0.0% | 42.7ms | 0.0% | 42.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1274` |
| 0.0% | 42.3ms | 0.0% | 42.3ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:55` |
| 0.0% | 41.3ms | 0.0% | 41.3ms | `set` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/static-edge-clearance-cache.ts` |
| 0.0% | 41.0ms | 0.0% | 41.0ms | `computeMoveCostAndRips` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 40.9ms | 0.0% | 40.9ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:373` |
| 0.0% | 40.6ms | 0.0% | 40.6ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:587` |
| 0.0% | 39.2ms | 0.3% | 144.3ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:62` |
| 0.0% | 39.1ms | 0.3% | 151.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:425` |
| 0.0% | 37.4ms | 0.4% | 185.8ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:127` |
| 0.0% | 34.9ms | 0.0% | 34.9ms | `max` | `[native code]` |
| 0.0% | 34.4ms | 3.0% | 1.35s | `bound pop` | `[native code]` |
| 0.0% | 33.8ms | 0.0% | 33.8ms | `get` | `[native code]` |
| 0.0% | 33.4ms | 0.2% | 109.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2108` |
| 0.0% | 32.6ms | 0.1% | 45.1ms | `parseModule` | `[native code]` |
| 0.0% | 32.5ms | 0.1% | 47.1ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:367` |
| 0.0% | 31.8ms | 0.0% | 33.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:436` |
| 0.0% | 29.5ms | 0.0% | 29.5ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:166` |
| 0.0% | 29.4ms | 0.1% | 55.8ms | `push` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 28.2ms | 0.1% | 85.4ms | `map` | `[native code]` |
| 0.0% | 28.1ms | 0.1% | 56.3ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:75` |
| 0.0% | 27.3ms | 0.0% | 27.3ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1829` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:197` |
| 0.0% | 26.4ms | 0.0% | 28.1ms | `ensureCapacity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 26.3ms | 0.0% | 26.3ms | `pop` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 25.9ms | 2.2% | 1.00s | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:65` |
| 0.0% | 24.3ms | 0.0% | 24.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 24.3ms | 0.1% | 63.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2115` |
| 0.0% | 23.4ms | 0.1% | 49.1ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:330` |
| 0.0% | 21.7ms | 0.0% | 27.8ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1003` |
| 0.0% | 21.6ms | 0.1% | 52.8ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1954` |
| 0.0% | 21.1ms | 0.0% | 21.1ms | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2400` |
| 0.0% | 21.0ms | 0.0% | 21.0ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:58` |
| 0.0% | 20.8ms | 0.1% | 88.9ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:79` |
| 0.0% | 20.1ms | 0.1% | 60.4ms | `buildFiveRegionGrid` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 19.9ms | 0.0% | 19.9ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1986` |
| 0.0% | 19.9ms | 0.0% | 19.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:49` |
| 0.0% | 19.1ms | 0.1% | 46.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:506` |
| 0.0% | 19.1ms | 0.0% | 35.9ms | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 18.9ms | 0.0% | 37.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1879` |
| 0.0% | 17.2ms | 0.0% | 17.2ms | `min` | `[native code]` |
| 0.0% | 17.1ms | 0.4% | 212.5ms | `classifyStaticEdge` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1339` |
| 0.0% | 17.0ms | 0.1% | 45.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:144` |
| 0.0% | 16.7ms | 0.0% | 16.7ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:51` |
| 0.0% | 16.2ms | 0.0% | 16.2ms | `getAlignedPitch` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:175` |
| 0.0% | 16.1ms | 0.2% | 91.7ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:122` |
| 0.0% | 15.8ms | 0.1% | 45.2ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:81` |
| 0.0% | 15.4ms | 0.2% | 103.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2405` |
| 0.0% | 15.2ms | 0.0% | 16.6ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1924` |
| 0.0% | 15.1ms | 0.0% | 15.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:326` |
| 0.0% | 14.6ms | 0.0% | 14.6ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6660` |
| 0.0% | 14.0ms | 0.0% | 15.8ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:38` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `removeOccupant` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 13.2ms | 0.0% | 19.4ms | `c` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1240` |
| 0.0% | 12.6ms | 0.0% | 32.5ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:80` |
| 0.0% | 12.4ms | 0.0% | 31.5ms | `anonymous` | `[native code]` |
| 0.0% | 12.3ms | 0.0% | 12.3ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:32` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `getSolvedRoutesForConn` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.0% | 11.9ms | 0.0% | 20.8ms | `toSorted` | `[native code]` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `computeH` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2124` |
| 0.0% | 11.6ms | 0.0% | 19.5ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:59` |
| 0.0% | 11.5ms | 0.0% | 11.5ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 11.5ms | 1.4% | 658.5ms | `classifyStaticEdge` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1338` |
| 0.0% | 11.5ms | 0.0% | 24.2ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:361` |
| 0.0% | 11.2ms | 0.0% | 17.1ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:96` |
| 0.0% | 11.1ms | 0.0% | 11.1ms | `sleep` | `[native code]` |
| 0.0% | 11.1ms | 0.3% | 170.1ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:76` |
| 0.0% | 11.1ms | 2.9% | 1.34s | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:64` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:423` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:316` |
| 0.0% | 10.9ms | 0.0% | 12.4ms | `ry` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 10.9ms | 0.9% | 446.5ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:95` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `cross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:49` |
| 0.0% | 10.6ms | 0.1% | 66.5ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:143` |
| 0.0% | 10.5ms | 0.0% | 10.5ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` |
| 0.0% | 10.3ms | 0.0% | 10.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2134` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` |
| 0.0% | 10.1ms | 0.0% | 20.7ms | `from` | `[native code]` |
| 0.0% | 10.1ms | 0.0% | 19.4ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1987` |
| 0.0% | 10.1ms | 0.0% | 22.4ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:886` |
| 0.0% | 10.0ms | 0.0% | 12.9ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:93` |
| 0.0% | 9.9ms | 0.0% | 11.5ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1041` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2103` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `cell` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:384` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `ensureCapacity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 8.9ms | 0.0% | 10.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:895` |
| 0.0% | 8.8ms | 0.0% | 20.1ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2125` |
| 0.0% | 8.6ms | 0.2% | 126.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1239` |
| 0.0% | 8.4ms | 0.0% | 9.7ms | `flattenNeighborLists` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 8.4ms | 0.0% | 11.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:57` |
| 0.0% | 8.3ms | 0.0% | 8.3ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:22` |
| 0.0% | 7.8ms | 0.1% | 52.5ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:617` |
| 0.0% | 7.8ms | 0.0% | 7.8ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:358` |
| 0.0% | 7.7ms | 0.0% | 10.6ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1295` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:60` |
| 0.0% | 7.7ms | 99.8% | 45.05s | `evaluate` | `[native code]` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `segmentIsLegalTerminalBodyEscape` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts` |
| 0.0% | 7.6ms | 0.0% | 14.2ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2142` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2056` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2394` |
| 0.0% | 7.4ms | 0.0% | 10.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1237` |
| 0.0% | 7.2ms | 0.0% | 8.9ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:124` |
| 0.0% | 7.2ms | 0.4% | 190.8ms | `fillViaOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 7.2ms | 0.0% | 21.0ms | `getSolvedRouteCount` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 7.1ms | 1.1% | 516.3ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:96` |
| 0.0% | 6.9ms | 0.0% | 34.6ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:362` |
| 0.0% | 6.0ms | 0.1% | 47.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1445` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `connectorVariants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:80` |
| 0.0% | 5.9ms | 0.0% | 36.1ms | `distancePointToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:127` |
| 0.0% | 5.9ms | 0.4% | 186.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 5.7ms | 0.1% | 67.7ms | `_setup` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 5.5ms | 0.0% | 16.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:439` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:372` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `cell` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 4.8ms | 0.0% | 12.9ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:366` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1323` |
| 0.0% | 4.7ms | 0.0% | 6.2ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:607` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1000` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `typedArrayViewTypedArrayFromFast` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:353` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `values` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 29.0ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:438` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2140` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:567` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:30` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:13` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:351` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` |
| 0.0% | 4.0ms | 0.0% | 21.0ms | `ripTrace` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `stepOnce` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `withinBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1010` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:246` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:342` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1370` |
| 0.0% | 3.3ms | 0.2% | 128.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:539` |
| 0.0% | 3.2ms | 0.0% | 9.1ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:359` |
| 0.0% | 3.2ms | 0.0% | 6.3ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1286` |
| 0.0% | 3.2ms | 0.0% | 9.4ms | `findIndex` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:148` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:887` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1310` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `WeakMap` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 5.8ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:375` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:125` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `set` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 18.9ms | `performIteration` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `hypot` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:467` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:354` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1272` |
| 0.0% | 3.0ms | 4.9% | 2.21s | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:129` |
| 0.0% | 3.0ms | 0.0% | 22.3ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` |
| 0.0% | 2.9ms | 1.9% | 875.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1444` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `removeOccupant` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 2.9ms | 0.0% | 6.1ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2145` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:489` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1004` |
| 0.0% | 2.9ms | 0.0% | 9.0ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2061` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `getBusSkew` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1093` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `resolve` | `[native code]` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2101` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:655` |
| 0.0% | 2.7ms | 0.0% | 5.8ms | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:48` |
| 0.0% | 2.7ms | 0.0% | 13.1ms | `acceptCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1588` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:157` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:586` |
| 0.0% | 2.6ms | 0.0% | 6.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1429` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:893` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `connectorVariants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:86` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `stepActiveOperation` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1647` |
| 0.0% | 2.6ms | 0.3% | 177.1ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1300` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `inside` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `splitSegmentAtDenseBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:391` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `flatIntoArray` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:44` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:27` |
| 0.0% | 2.3ms | 99.6% | 44.97s | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:17` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1830` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `cellIdFor` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `extractTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:223` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1285` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `isFinite` | `[native code]` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `augmentMatching` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:688` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:98` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `staticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 1.7ms | 0.0% | 10.3ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:123` |
| 0.0% | 1.7ms | 0.0% | 6.4ms | `getWireMetadata` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:63` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:195` |
| 0.0% | 1.7ms | 0.0% | 4.3ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:352` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2087` |
| 0.0% | 1.7ms | 0.2% | 118.7ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1085` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:687` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1421` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `slice` | `[native code]` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `distancePointToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `convertRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:498` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `SegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:157` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:464` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `clone` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:378` |
| 0.0% | 1.6ms | 0.0% | 4.3ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:801` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `queryVia` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:40` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:997` |
| 0.0% | 1.6ms | 0.0% | 17.8ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1314` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:34` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `push` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.6ms | 0.0% | 4.4ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:162` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1260` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts:105` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `finalizeRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:48` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1086` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `getSolverName` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:510` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.6ms | 0.0% | 9.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:321` |
| 0.0% | 1.6ms | 0.0% | 2.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:620` |
| 0.0% | 1.6ms | 0.0% | 3.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:828` |
| 0.0% | 1.6ms | 0.0% | 5.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1024` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:137` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1892` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1036` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:198` |
| 0.0% | 1.5ms | 0.0% | 2.8ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:317` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:150` |
| 0.0% | 1.5ms | 0.0% | 3.1ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1993` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:393` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `collect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:8` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `fetch` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `c` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.5ms | 0.0% | 4.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1030` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:76` |
| 0.0% | 1.5ms | 0.0% | 15.8ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2059` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:624` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:72` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `forEachCellNearCircle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.5ms | 0.0% | 2.7ms | `getKnownNetKeys` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:41` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` |
| 0.0% | 1.5ms | 1.9% | 897.8ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:916` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2006` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:253` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:570` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `find` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 12.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:677` |
| 0.0% | 1.5ms | 0.0% | 2.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:829` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2085` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `bind` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1716` |
| 0.0% | 1.4ms | 0.0% | 29.5ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:260` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:619` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:73` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `node_modules/cdt2d/lib/filter.js` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.4ms | 0.0% | 3.1ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:61` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `matchBusPlanLengths` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1324` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:70` |
| 0.0% | 1.4ms | 0.0% | 3.0ms | `computeProgress` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6787` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:163` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1360` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:616` |
| 0.0% | 1.4ms | 0.0% | 25.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2055` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1042` |
| 0.0% | 1.4ms | 0.1% | 77.6ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1018` |
| 0.0% | 1.3ms | 6.6% | 3.00s | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2382` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `node:worker_threads` | `node:worker_threads:233` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `inward` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getCopperLayerNames` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:12` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2098` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `sign` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `cellIdFor` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.3ms | 1.1% | 496.4ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:26` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `extractViaCellIds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:832` |
| 0.0% | 1.3ms | 0.0% | 3.8ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:614` |
| 0.0% | 1.3ms | 0.0% | 11.5ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:85` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1283` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:249` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:78` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1991` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getOutwardSourcePadOwner` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-outward-source-pad-owner.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `shouldSkipFixedPortHalo` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.3ms | 0.0% | 4.2ms | `viaDrillsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts:28` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getPerpendicularAxis` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 1.3ms | 0.0% | 7.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1423` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:398` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `Int32Array` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 31.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2010` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:49` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getRouteViaSpanLayers` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:62` |
| 0.0% | 1.2ms | 0.0% | 4.3ms | `createMeanderPoints` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:737` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:375` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getLayerSpan` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:26` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `decode` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 11.7ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:505` |
| 0.0% | 1.2ms | 0.0% | 38.7ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:481` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:559` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1365` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `convertRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:497` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1038` |
| 0.0% | 1.2ms | 0.0% | 2.8ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1994` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1783` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `candidatesAreMutuallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:573` |
| 0.0% | 1.1ms | 100.0% | 123.78s | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:34` |
| 0.0% | 1.1ms | 99.6% | 44.94s | `stepActiveOperation` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1649` |
| 0.0% | 1.0ms | 0.5% | 239.4ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1017` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `sharesNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:966` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:557` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 123.78s | 0.0% | 1.1ms | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:34` |
| 100.0% | 59.33s | 0.0% | 0us | `generatorResume` | `[native code]` |
| 99.8% | 45.05s | 0.0% | 0us | `async asyncModuleEvaluation` | `[native code]` |
| 99.8% | 45.05s | 0.0% | 7.7ms | `evaluate` | `[native code]` |
| 99.6% | 44.97s | 0.0% | 2.3ms | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:17` |
| 99.6% | 44.95s | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6661` |
| 99.6% | 44.94s | 0.0% | 1.1ms | `stepActiveOperation` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1649` |
| 75.0% | 33.87s | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:151` |
| 75.0% | 33.84s | 0.9% | 435.4ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 75.0% | 33.84s | 0.0% | 0us | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 75.0% | 33.84s | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:252` |
| 74.0% | 33.40s | 14.6% | 6.58s | `stepOnce` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 42.5% | 19.19s | 11.8% | 5.36s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` |
| 30.0% | 13.53s | 0.4% | 199.0ms | `computeMoveCostAndRips` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 24.5% | 11.06s | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:170` |
| 24.5% | 11.05s | 0.0% | 0us | `retryLayerReservedRoutingSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/retry-layer-reserved-routing.ts:27` |
| 24.5% | 11.05s | 0.0% | 0us | `routeLayerReservedBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:256` |
| 22.9% | 10.35s | 0.0% | 0us | `evaluateLayerReservedRoutingSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1307` |
| 21.2% | 9.60s | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:994` |
| 17.0% | 7.70s | 0.0% | 0us | `matchBusPlanLengths` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1301` |
| 16.7% | 7.55s | 0.0% | 0us | `repairWideSourceLengthsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:135` |
| 16.7% | 7.55s | 0.0% | 0us | `match` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:111` |
| 15.7% | 7.09s | 12.1% | 5.45s | `fillTraceOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 11.3% | 5.09s | 0.0% | 0us | `acceptCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1593` |
| 9.6% | 4.37s | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1888` |
| 9.4% | 4.27s | 0.2% | 99.1ms | `every` | `[native code]` |
| 8.7% | 3.94s | 0.5% | 250.9ms | `bound computeMoveCostAndRips` | `[native code]` |
| 7.0% | 3.17s | 7.0% | 3.17s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:33` |
| 6.6% | 3.00s | 0.0% | 1.3ms | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2382` |
| 6.5% | 2.97s | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2418` |
| 6.1% | 2.76s | 2.5% | 1.13s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:42` |
| 5.4% | 2.46s | 4.6% | 2.09s | `computeH` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 4.9% | 2.24s | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:348` |
| 4.9% | 2.21s | 0.0% | 3.0ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:129` |
| 4.6% | 2.09s | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2413` |
| 4.6% | 2.09s | 0.0% | 0us | `staticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2352` |
| 4.5% | 2.05s | 0.0% | 0us | `repairWideSourceLengthsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:100` |
| 4.5% | 2.03s | 0.0% | 0us | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1913` |
| 4.4% | 1.98s | 4.4% | 1.98s | `pushFlatOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 4.1% | 1.87s | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1887` |
| 4.0% | 1.81s | 1.6% | 747.7ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2104` |
| 3.7% | 1.69s | 0.7% | 339.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1200` |
| 3.7% | 1.69s | 3.7% | 1.68s | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1784` |
| 3.6% | 1.64s | 0.0% | 0us | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:324` |
| 3.4% | 1.54s | 1.3% | 606.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:334` |
| 3.0% | 1.35s | 0.0% | 34.4ms | `bound pop` | `[native code]` |
| 2.9% | 1.34s | 0.0% | 11.1ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:64` |
| 2.8% | 1.29s | 2.8% | 1.29s | `pop` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 2.7% | 1.24s | 1.9% | 887.0ms | `distanceSegmentToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:142` |
| 2.6% | 1.20s | 1.9% | 880.6ms | `pushFlatOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 2.4% | 1.11s | 0.1% | 82.8ms | `next` | `[native code]` |
| 2.4% | 1.11s | 2.4% | 1.11s | `hypot` | `[native code]` |
| 2.4% | 1.10s | 2.4% | 1.10s | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 2.2% | 1.00s | 0.0% | 25.9ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:65` |
| 1.9% | 897.8ms | 0.0% | 1.5ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:916` |
| 1.9% | 885.3ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:952` |
| 1.9% | 875.4ms | 0.0% | 2.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1444` |
| 1.8% | 841.7ms | 0.1% | 54.5ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:31` |
| 1.6% | 757.2ms | 0.0% | 0us | `augmentMatching` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:711` |
| 1.6% | 755.3ms | 0.1% | 55.1ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:70` |
| 1.6% | 737.4ms | 0.8% | 391.0ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:622` |
| 1.5% | 682.3ms | 0.5% | 246.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1381` |
| 1.4% | 658.5ms | 0.0% | 11.5ms | `classifyStaticEdge` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1338` |
| 1.4% | 653.0ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:559` |
| 1.4% | 644.9ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1854` |
| 1.3% | 622.1ms | 0.0% | 0us | `evaluateLayerReservedRoutingSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1294` |
| 1.3% | 613.1ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:577` |
| 1.2% | 568.9ms | 0.0% | 0us | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2100` |
| 1.2% | 562.1ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:634` |
| 1.2% | 551.7ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:908` |
| 1.2% | 545.7ms | 0.2% | 131.0ms | `bound pushFlatOccupants` | `[native code]` |
| 1.2% | 544.3ms | 0.0% | 0us | `routeSourceOriginBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:142` |
| 1.1% | 516.3ms | 0.0% | 7.1ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:96` |
| 1.1% | 496.4ms | 0.0% | 1.3ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:26` |
| 1.0% | 472.9ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1853` |
| 0.9% | 446.5ms | 0.0% | 10.9ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:95` |
| 0.9% | 438.5ms | 0.3% | 143.6ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:59` |
| 0.8% | 404.8ms | 0.1% | 83.6ms | `some` | `[native code]` |
| 0.8% | 401.3ms | 0.8% | 401.3ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:191` |
| 0.8% | 377.6ms | 0.3% | 152.4ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2116` |
| 0.8% | 377.6ms | 0.6% | 314.3ms | `pointsMatch` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:34` |
| 0.8% | 375.4ms | 0.0% | 0us | `validatedPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1673` |
| 0.8% | 369.0ms | 0.3% | 147.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:540` |
| 0.8% | 363.6ms | 0.5% | 258.6ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:370` |
| 0.7% | 355.2ms | 0.0% | 0us | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:141` |
| 0.7% | 337.1ms | 0.1% | 67.9ms | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1811` |
| 0.7% | 326.2ms | 0.7% | 326.2ms | `Ii` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.7% | 325.4ms | 0.7% | 325.4ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:30` |
| 0.7% | 316.6ms | 0.7% | 316.6ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:53` |
| 0.6% | 310.3ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:926` |
| 0.6% | 307.4ms | 0.1% | 72.5ms | `forEachCellNearCircle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.6% | 291.7ms | 0.6% | 291.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1371` |
| 0.6% | 284.0ms | 0.4% | 208.3ms | `sort` | `[native code]` |
| 0.6% | 283.1ms | 0.1% | 87.1ms | `finalizeRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.6% | 282.3ms | 0.0% | 0us | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:87` |
| 0.6% | 273.8ms | 0.0% | 0us | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:338` |
| 0.5% | 270.0ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:444` |
| 0.5% | 255.4ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1076` |
| 0.5% | 239.4ms | 0.0% | 1.0ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1017` |
| 0.5% | 229.3ms | 0.2% | 108.6ms | `reduce` | `[native code]` |
| 0.4% | 217.7ms | 0.0% | 0us | `fullPlansAreValid` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1586` |
| 0.4% | 212.5ms | 0.0% | 17.1ms | `classifyStaticEdge` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1339` |
| 0.4% | 207.2ms | 0.1% | 66.3ms | `filter` | `[native code]` |
| 0.4% | 199.6ms | 0.2% | 128.9ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:371` |
| 0.4% | 198.4ms | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 0.4% | 190.8ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:53` |
| 0.4% | 190.8ms | 0.0% | 7.2ms | `fillViaOccupants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.4% | 186.7ms | 0.0% | 5.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.4% | 185.8ms | 0.0% | 37.4ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:127` |
| 0.3% | 179.8ms | 0.2% | 116.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:343` |
| 0.3% | 177.1ms | 0.0% | 2.6ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1300` |
| 0.3% | 175.7ms | 0.3% | 175.7ms | `pointAt` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1007` |
| 0.3% | 170.1ms | 0.0% | 11.1ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:76` |
| 0.3% | 165.9ms | 0.0% | 0us | `fanoutPlansAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2289` |
| 0.3% | 159.6ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1745` |
| 0.3% | 159.1ms | 0.0% | 0us | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:340` |
| 0.3% | 157.6ms | 0.0% | 0us | `fullPlansAreValid` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1594` |
| 0.3% | 154.6ms | 0.3% | 154.6ms | `copyDataProperties` | `[native code]` |
| 0.3% | 152.8ms | 0.0% | 0us | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:213` |
| 0.3% | 152.6ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:699` |
| 0.3% | 151.2ms | 0.0% | 39.1ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:425` |
| 0.3% | 145.1ms | 0.2% | 116.7ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:82` |
| 0.3% | 144.3ms | 0.0% | 39.2ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:62` |
| 0.3% | 144.1ms | 0.1% | 82.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:50` |
| 0.3% | 143.7ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1035` |
| 0.3% | 141.4ms | 0.3% | 141.4ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:468` |
| 0.3% | 139.2ms | 0.3% | 139.2ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:424` |
| 0.3% | 136.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1037` |
| 0.2% | 128.7ms | 0.0% | 3.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:539` |
| 0.2% | 128.3ms | 0.1% | 51.7ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:613` |
| 0.2% | 126.5ms | 0.0% | 0us | `fanoutPlansAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2261` |
| 0.2% | 126.3ms | 0.2% | 126.3ms | `cloneObject` | `[native code]` |
| 0.2% | 126.0ms | 0.0% | 8.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1239` |
| 0.2% | 125.4ms | 0.0% | 0us | `hasAdjacencyExemption` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:513` |
| 0.2% | 118.7ms | 0.0% | 1.7ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1085` |
| 0.2% | 109.3ms | 0.0% | 33.4ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2108` |
| 0.2% | 106.8ms | 0.2% | 106.8ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1015` |
| 0.2% | 106.5ms | 0.0% | 0us | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:577` |
| 0.2% | 105.7ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1827` |
| 0.2% | 103.9ms | 0.2% | 103.9ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.2% | 103.6ms | 0.0% | 15.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2405` |
| 0.2% | 103.3ms | 0.2% | 92.4ms | `append` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.2% | 101.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1043` |
| 0.2% | 96.3ms | 0.0% | 0us | `bound fillViaOccupants` | `[native code]` |
| 0.2% | 95.4ms | 0.2% | 95.4ms | `Set` | `[native code]` |
| 0.2% | 92.4ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1837` |
| 0.2% | 91.8ms | 0.1% | 52.7ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:580` |
| 0.2% | 91.7ms | 0.0% | 16.1ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:122` |
| 0.1% | 89.9ms | 0.1% | 89.9ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:36` |
| 0.1% | 88.9ms | 0.0% | 20.8ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:79` |
| 0.1% | 85.9ms | 0.1% | 85.9ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:69` |
| 0.1% | 85.4ms | 0.0% | 28.2ms | `map` | `[native code]` |
| 0.1% | 85.1ms | 0.0% | 0us | `link` | `[native code]` |
| 0.1% | 84.8ms | 0.1% | 84.8ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:23` |
| 0.1% | 83.2ms | 0.1% | 83.2ms | `includes` | `[native code]` |
| 0.1% | 80.6ms | 0.0% | 0us | `evaluateLayerReservedRoutingSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1282` |
| 0.1% | 79.4ms | 0.1% | 79.4ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:50` |
| 0.1% | 77.6ms | 0.0% | 1.4ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1018` |
| 0.1% | 77.6ms | 0.1% | 77.6ms | `pointAt` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1006` |
| 0.1% | 75.7ms | 0.1% | 75.7ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.1% | 75.6ms | 0.1% | 75.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:88` |
| 0.1% | 73.2ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:681` |
| 0.1% | 71.6ms | 0.1% | 71.6ms | `arrayIteratorNextHelper` | `[native code]` |
| 0.1% | 70.7ms | 0.1% | 70.7ms | `add` | `[native code]` |
| 0.1% | 69.0ms | 0.1% | 69.0ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:61` |
| 0.1% | 67.7ms | 0.0% | 0us | `bound _setup` | `[native code]` |
| 0.1% | 67.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1045` |
| 0.1% | 67.7ms | 0.0% | 0us | `setup` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 67.7ms | 0.0% | 5.7ms | `_setup` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 67.7ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1500` |
| 0.1% | 66.5ms | 0.0% | 10.6ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:143` |
| 0.1% | 63.6ms | 0.0% | 24.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2115` |
| 0.1% | 62.7ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:420` |
| 0.1% | 62.1ms | 0.1% | 62.1ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2113` |
| 0.1% | 61.3ms | 0.1% | 61.3ms | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:320` |
| 0.1% | 60.4ms | 0.0% | 20.1ms | `buildFiveRegionGrid` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 59.7ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:678` |
| 0.1% | 56.3ms | 0.0% | 28.1ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:75` |
| 0.1% | 55.8ms | 0.0% | 29.4ms | `push` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.1% | 55.2ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2438` |
| 0.1% | 52.8ms | 0.0% | 21.6ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1954` |
| 0.1% | 52.5ms | 0.0% | 7.8ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:617` |
| 0.1% | 51.5ms | 0.1% | 51.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1379` |
| 0.1% | 51.0ms | 0.0% | 0us | `async (anonymous)` | `[native code]` |
| 0.1% | 50.9ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:284` |
| 0.1% | 49.3ms | 0.1% | 49.3ms | `push` | `[native code]` |
| 0.1% | 49.1ms | 0.0% | 23.4ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:330` |
| 0.1% | 47.4ms | 0.0% | 6.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1445` |
| 0.1% | 47.1ms | 0.0% | 32.5ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:367` |
| 0.1% | 46.5ms | 0.0% | 0us | `routeSourceOriginBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:239` |
| 0.1% | 46.4ms | 0.0% | 0us | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:339` |
| 0.1% | 46.3ms | 0.0% | 19.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:506` |
| 0.1% | 46.1ms | 0.1% | 46.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:78` |
| 0.1% | 45.8ms | 0.0% | 17.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:144` |
| 0.1% | 45.2ms | 0.0% | 15.8ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:81` |
| 0.1% | 45.1ms | 0.0% | 32.6ms | `parseModule` | `[native code]` |
| 0.0% | 44.7ms | 0.0% | 44.7ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:42` |
| 0.0% | 44.6ms | 0.0% | 44.6ms | `distance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:28` |
| 0.0% | 42.7ms | 0.0% | 42.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1274` |
| 0.0% | 42.3ms | 0.0% | 42.3ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:55` |
| 0.0% | 41.3ms | 0.0% | 41.3ms | `set` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/static-edge-clearance-cache.ts` |
| 0.0% | 41.0ms | 0.0% | 41.0ms | `computeMoveCostAndRips` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 40.9ms | 0.0% | 40.9ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:373` |
| 0.0% | 40.6ms | 0.0% | 40.6ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:587` |
| 0.0% | 39.9ms | 0.0% | 0us | `routeSourceOriginBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:139` |
| 0.0% | 39.9ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:573` |
| 0.0% | 38.7ms | 0.0% | 1.2ms | `segmentsIntersect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:481` |
| 0.0% | 37.5ms | 0.0% | 18.9ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1879` |
| 0.0% | 37.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2105` |
| 0.0% | 37.3ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2102` |
| 0.0% | 36.1ms | 0.0% | 5.9ms | `distancePointToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:127` |
| 0.0% | 35.9ms | 0.0% | 19.1ms | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 35.8ms | 0.0% | 0us | `findMultiSpanCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1818` |
| 0.0% | 35.8ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1897` |
| 0.0% | 35.4ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:308` |
| 0.0% | 34.9ms | 0.0% | 34.9ms | `max` | `[native code]` |
| 0.0% | 34.6ms | 0.0% | 6.9ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:362` |
| 0.0% | 34.3ms | 0.0% | 0us | `prepareSourceOriginReservations` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:68` |
| 0.0% | 34.1ms | 0.0% | 0us | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1831` |
| 0.0% | 34.0ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:97` |
| 0.0% | 33.8ms | 0.0% | 33.8ms | `get` | `[native code]` |
| 0.0% | 33.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1443` |
| 0.0% | 33.2ms | 0.0% | 31.8ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:436` |
| 0.0% | 32.8ms | 0.0% | 0us | `matchComponentDogboneViaSites` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:750` |
| 0.0% | 32.5ms | 0.0% | 12.6ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:80` |
| 0.0% | 31.9ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2007` |
| 0.0% | 31.9ms | 0.0% | 1.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2010` |
| 0.0% | 31.5ms | 0.0% | 12.4ms | `anonymous` | `[native code]` |
| 0.0% | 29.5ms | 0.0% | 1.4ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` |
| 0.0% | 29.5ms | 0.0% | 29.5ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:166` |
| 0.0% | 29.0ms | 0.0% | 4.6ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:438` |
| 0.0% | 28.1ms | 0.0% | 26.4ms | `ensureCapacity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 28.0ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:259` |
| 0.0% | 27.8ms | 0.0% | 21.7ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1003` |
| 0.0% | 27.3ms | 0.0% | 27.3ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1829` |
| 0.0% | 26.8ms | 0.0% | 26.8ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:197` |
| 0.0% | 26.3ms | 0.0% | 26.3ms | `pop` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 25.8ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:397` |
| 0.0% | 25.6ms | 0.0% | 1.4ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2055` |
| 0.0% | 24.3ms | 0.0% | 24.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 24.2ms | 0.0% | 0us | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2097` |
| 0.0% | 24.2ms | 0.0% | 11.5ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:361` |
| 0.0% | 23.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:309` |
| 0.0% | 22.4ms | 0.0% | 10.1ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:886` |
| 0.0% | 22.3ms | 0.0% | 3.0ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` |
| 0.0% | 22.2ms | 0.0% | 0us | `routeSourceOriginBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:242` |
| 0.0% | 21.4ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1797` |
| 0.0% | 21.1ms | 0.0% | 21.1ms | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2400` |
| 0.0% | 21.0ms | 0.0% | 4.0ms | `ripTrace` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 21.0ms | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:256` |
| 0.0% | 21.0ms | 0.0% | 7.2ms | `getSolvedRouteCount` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 21.0ms | 0.0% | 21.0ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:58` |
| 0.0% | 20.8ms | 0.0% | 11.9ms | `toSorted` | `[native code]` |
| 0.0% | 20.7ms | 0.0% | 10.1ms | `from` | `[native code]` |
| 0.0% | 20.7ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:698` |
| 0.0% | 20.7ms | 0.0% | 0us | `rerouteOverlongBusLanesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:279` |
| 0.0% | 20.5ms | 0.0% | 0us | `FanoutSolver` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1117` |
| 0.0% | 20.5ms | 0.0% | 0us | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:11` |
| 0.0% | 20.1ms | 0.0% | 8.8ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2125` |
| 0.0% | 19.9ms | 0.0% | 19.9ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1986` |
| 0.0% | 19.9ms | 0.0% | 0us | `search` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1811` |
| 0.0% | 19.9ms | 0.0% | 19.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:49` |
| 0.0% | 19.5ms | 0.0% | 11.6ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:59` |
| 0.0% | 19.4ms | 0.0% | 0us | `matchComponent` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:718` |
| 0.0% | 19.4ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1020` |
| 0.0% | 19.4ms | 0.0% | 10.1ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1987` |
| 0.0% | 19.4ms | 0.0% | 13.2ms | `c` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 18.9ms | 0.0% | 3.0ms | `performIteration` | `[native code]` |
| 0.0% | 18.6ms | 0.0% | 0us | `normalizeLayeredPath` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:128` |
| 0.0% | 17.8ms | 0.0% | 1.6ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1314` |
| 0.0% | 17.6ms | 0.0% | 0us | `getViableCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:676` |
| 0.0% | 17.6ms | 0.0% | 0us | `augmentMatching` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:692` |
| 0.0% | 17.3ms | 0.0% | 0us | `getPlansForIndices` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1100` |
| 0.0% | 17.3ms | 0.0% | 0us | `acceptCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1591` |
| 0.0% | 17.2ms | 0.0% | 17.2ms | `min` | `[native code]` |
| 0.0% | 17.1ms | 0.0% | 0us | `rerouteLane` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:216` |
| 0.0% | 17.1ms | 0.0% | 11.2ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:96` |
| 0.0% | 17.0ms | 0.0% | 0us | `bound require` | `[native code]` |
| 0.0% | 16.7ms | 0.0% | 16.7ms | `query` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:51` |
| 0.0% | 16.6ms | 0.0% | 15.2ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1924` |
| 0.0% | 16.6ms | 0.0% | 0us | `prepareSourceOriginReservations` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:87` |
| 0.0% | 16.3ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:826` |
| 0.0% | 16.2ms | 0.0% | 0us | `findComponentGrids` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:332` |
| 0.0% | 16.2ms | 0.0% | 16.2ms | `getAlignedPitch` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:175` |
| 0.0% | 16.2ms | 0.0% | 0us | `prepareFanoutBuses` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1164` |
| 0.0% | 16.2ms | 0.0% | 5.5ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:439` |
| 0.0% | 16.1ms | 0.0% | 0us | `flatIntoArrayWithCallback` | `[native code]` |
| 0.0% | 15.9ms | 0.0% | 0us | `search` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1796` |
| 0.0% | 15.8ms | 0.0% | 1.5ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2059` |
| 0.0% | 15.8ms | 0.0% | 14.0ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:38` |
| 0.0% | 15.1ms | 0.0% | 15.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:326` |
| 0.0% | 15.1ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:855` |
| 0.0% | 14.8ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 0.0% | 14.6ms | 0.0% | 14.6ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6660` |
| 0.0% | 14.2ms | 0.0% | 7.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2142` |
| 0.0% | 14.1ms | 0.0% | 0us | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:562` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `removeOccupant` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 13.9ms | 0.0% | 13.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 13.1ms | 0.0% | 2.7ms | `acceptCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1588` |
| 0.0% | 12.9ms | 0.0% | 4.8ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:366` |
| 0.0% | 12.9ms | 0.0% | 10.0ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:93` |
| 0.0% | 12.9ms | 0.0% | 12.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1240` |
| 0.0% | 12.8ms | 0.0% | 0us | `shortenCompletePlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:692` |
| 0.0% | 12.7ms | 0.0% | 0us | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1816` |
| 0.0% | 12.6ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:937` |
| 0.0% | 12.4ms | 0.0% | 0us | `require` | `[native code]` |
| 0.0% | 12.4ms | 0.0% | 10.9ms | `ry` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 12.3ms | 0.0% | 12.3ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:32` |
| 0.0% | 12.2ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:677` |
| 0.0% | 12.2ms | 0.0% | 12.2ms | `getSolvedRoutesForConn` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 12.1ms | 0.0% | 12.1ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.0% | 12.1ms | 0.0% | 0us | `linkAndEvaluateModule` | `[native code]` |
| 0.0% | 12.0ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:600` |
| 0.0% | 12.0ms | 0.0% | 0us | `matchComponent` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:597` |
| 0.0% | 12.0ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:631` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `computeH` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 11.8ms | 0.0% | 11.8ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2124` |
| 0.0% | 11.7ms | 0.0% | 8.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:57` |
| 0.0% | 11.7ms | 0.0% | 1.2ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` |
| 0.0% | 11.5ms | 0.0% | 9.9ms | `extraViaIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1041` |
| 0.0% | 11.5ms | 0.0% | 11.5ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 11.5ms | 0.0% | 1.3ms | `build` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:85` |
| 0.0% | 11.1ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1612` |
| 0.0% | 11.1ms | 0.0% | 0us | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:19` |
| 0.0% | 11.1ms | 0.0% | 11.1ms | `sleep` | `[native code]` |
| 0.0% | 11.0ms | 0.0% | 11.0ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:423` |
| 0.0% | 10.9ms | 0.0% | 10.9ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:316` |
| 0.0% | 10.9ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2006` |
| 0.0% | 10.8ms | 0.0% | 10.8ms | `cross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:49` |
| 0.0% | 10.7ms | 0.0% | 0us | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1316` |
| 0.0% | 10.6ms | 0.0% | 8.9ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:895` |
| 0.0% | 10.6ms | 0.0% | 7.7ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1295` |
| 0.0% | 10.5ms | 0.0% | 10.5ms | `overlaps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` |
| 0.0% | 10.4ms | 0.0% | 7.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1237` |
| 0.0% | 10.3ms | 0.0% | 1.7ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:123` |
| 0.0% | 10.3ms | 0.0% | 10.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2134` |
| 0.0% | 10.2ms | 0.0% | 10.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` |
| 0.0% | 9.9ms | 0.0% | 0us | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1779` |
| 0.0% | 9.8ms | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:166` |
| 0.0% | 9.7ms | 0.0% | 8.4ms | `flattenNeighborLists` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 9.5ms | 0.0% | 0us | `queryVia` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:41` |
| 0.0% | 9.5ms | 0.0% | 0us | `mutuallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2437` |
| 0.0% | 9.4ms | 0.0% | 9.4ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2103` |
| 0.0% | 9.4ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:946` |
| 0.0% | 9.4ms | 0.0% | 3.2ms | `findIndex` | `[native code]` |
| 0.0% | 9.2ms | 0.0% | 1.6ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:321` |
| 0.0% | 9.1ms | 0.0% | 3.2ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:359` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `cell` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:384` |
| 0.0% | 9.0ms | 0.0% | 9.0ms | `ensureCapacity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 9.0ms | 0.0% | 2.9ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2061` |
| 0.0% | 8.9ms | 0.0% | 0us | `normalizeLayeredPath` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:106` |
| 0.0% | 8.9ms | 0.0% | 7.2ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:124` |
| 0.0% | 8.3ms | 0.0% | 8.3ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:22` |
| 0.0% | 8.1ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2101` |
| 0.0% | 7.9ms | 0.0% | 0us | `markViaFootprint` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 7.9ms | 0.0% | 0us | `createSegmentIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:969` |
| 0.0% | 7.9ms | 0.0% | 0us | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:979` |
| 0.0% | 7.8ms | 0.0% | 0us | `shortenCompletePlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:685` |
| 0.0% | 7.8ms | 0.0% | 7.8ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:358` |
| 0.0% | 7.8ms | 0.0% | 0us | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:147` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:60` |
| 0.0% | 7.7ms | 0.0% | 7.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `segmentIsLegalTerminalBodyEscape` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts` |
| 0.0% | 7.6ms | 0.0% | 7.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2056` |
| 0.0% | 7.5ms | 0.0% | 1.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1423` |
| 0.0% | 7.4ms | 0.0% | 7.4ms | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2394` |
| 0.0% | 7.4ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:900` |
| 0.0% | 7.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:902` |
| 0.0% | 7.4ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:357` |
| 0.0% | 7.2ms | 0.0% | 0us | `createMeanderPoints` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:760` |
| 0.0% | 7.1ms | 0.0% | 0us | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1962` |
| 0.0% | 7.0ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1046` |
| 0.0% | 6.7ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2005` |
| 0.0% | 6.4ms | 0.0% | 1.7ms | `getWireMetadata` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:63` |
| 0.0% | 6.3ms | 0.0% | 2.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1429` |
| 0.0% | 6.3ms | 0.0% | 3.2ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1286` |
| 0.0% | 6.2ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:830` |
| 0.0% | 6.2ms | 0.0% | 4.7ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:607` |
| 0.0% | 6.1ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:804` |
| 0.0% | 6.1ms | 0.0% | 2.9ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2145` |
| 0.0% | 5.9ms | 0.0% | 5.9ms | `connectorVariants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:80` |
| 0.0% | 5.8ms | 0.0% | 3.1ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:375` |
| 0.0% | 5.8ms | 0.0% | 2.7ms | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:48` |
| 0.0% | 5.7ms | 0.0% | 5.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 5.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1428` |
| 0.0% | 5.0ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1024` |
| 0.0% | 4.9ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:372` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:372` |
| 0.0% | 4.9ms | 0.0% | 4.9ms | `cell` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 4.8ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:86` |
| 0.0% | 4.7ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2089` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1323` |
| 0.0% | 4.7ms | 0.0% | 4.7ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1000` |
| 0.0% | 4.7ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:88` |
| 0.0% | 4.7ms | 0.0% | 0us | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:158` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1330` |
| 0.0% | 4.6ms | 0.0% | 0us | `SegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:158` |
| 0.0% | 4.6ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:368` |
| 0.0% | 4.6ms | 0.0% | 0us | `splitBoundaryClusters` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:281` |
| 0.0% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:284` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `typedArrayViewTypedArrayFromFast` | `[native code]` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:353` |
| 0.0% | 4.6ms | 0.0% | 4.6ms | `values` | `[native code]` |
| 0.0% | 4.5ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1053` |
| 0.0% | 4.5ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1052` |
| 0.0% | 4.5ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:333` |
| 0.0% | 4.5ms | 0.0% | 0us | `getConnectionCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:405` |
| 0.0% | 4.5ms | 0.0% | 0us | `viaDrillsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts:45` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `nearby` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 4.5ms | 0.0% | 4.5ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2140` |
| 0.0% | 4.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1030` |
| 0.0% | 4.4ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:612` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:567` |
| 0.0% | 4.4ms | 0.0% | 1.6ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:162` |
| 0.0% | 4.4ms | 0.0% | 4.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:30` |
| 0.0% | 4.3ms | 0.0% | 1.7ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:352` |
| 0.0% | 4.3ms | 0.0% | 1.2ms | `createMeanderPoints` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:737` |
| 0.0% | 4.3ms | 0.0% | 4.3ms | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:13` |
| 0.0% | 4.3ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:955` |
| 0.0% | 4.3ms | 0.0% | 1.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:801` |
| 0.0% | 4.2ms | 0.0% | 0us | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2128` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:351` |
| 0.0% | 4.2ms | 0.0% | 0us | `prepareFanoutBuses` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1173` |
| 0.0% | 4.2ms | 0.0% | 1.3ms | `viaDrillsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts:28` |
| 0.0% | 4.2ms | 0.0% | 4.2ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 4.1ms | 0.0% | 4.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` |
| 0.0% | 4.1ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:761` |
| 0.0% | 3.8ms | 0.0% | 1.3ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:614` |
| 0.0% | 3.8ms | 0.0% | 0us | `getConnectionCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:389` |
| 0.0% | 3.8ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:318` |
| 0.0% | 3.8ms | 0.0% | 3.8ms | `stepOnce` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 3.6ms | 0.0% | 3.6ms | `withinBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1010` |
| 0.0% | 3.5ms | 0.0% | 3.5ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:246` |
| 0.0% | 3.5ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:809` |
| 0.0% | 3.4ms | 0.0% | 0us | `lb` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `bound default` | `[native code]` |
| 0.0% | 3.4ms | 0.0% | 0us | `default` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:342` |
| 0.0% | 3.3ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:925` |
| 0.0% | 3.3ms | 0.0% | 0us | `getViaChannelGridPhase` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:171` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `visit` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` |
| 0.0% | 3.3ms | 0.0% | 3.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1370` |
| 0.0% | 3.2ms | 0.0% | 0us | `t` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:148` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:887` |
| 0.0% | 3.1ms | 0.0% | 1.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1993` |
| 0.0% | 3.1ms | 0.0% | 1.4ms | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:61` |
| 0.0% | 3.1ms | 0.0% | 0us | `rerouteBusWithRetainedBoundaryTailsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:899` |
| 0.0% | 3.1ms | 0.0% | 0us | `rerouteTwoOverlongLanesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:733` |
| 0.0% | 3.1ms | 0.0% | 0us | `getSourceReservations` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:179` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1310` |
| 0.0% | 3.1ms | 0.0% | 0us | `clearOf` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2397` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `WeakMap` | `[native code]` |
| 0.0% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/object-hash@3.0.0/node_modules/object-hash/index.js:3` |
| 0.0% | 3.1ms | 0.0% | 0us | `node:crypto` | `node:crypto:2` |
| 0.0% | 3.1ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:292` |
| 0.0% | 3.1ms | 0.0% | 3.1ms | `shortcutSection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:125` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `set` | `[native code]` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `hypot` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` |
| 0.0% | 3.0ms | 0.0% | 1.4ms | `computeProgress` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6787` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:467` |
| 0.0% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:48` |
| 0.0% | 3.0ms | 0.0% | 0us | `normalizeLayeredPath` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:48` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `add` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:354` |
| 0.0% | 3.0ms | 0.0% | 3.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1272` |
| 0.0% | 3.0ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:828` |
| 0.0% | 3.0ms | 0.0% | 0us | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:628` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `removeOccupant` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 2.9ms | 0.0% | 0us | `move` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1015` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:489` |
| 0.0% | 2.9ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` |
| 0.0% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1197` |
| 0.0% | 2.9ms | 0.0% | 0us | `chooseSourceGrid` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:769` |
| 0.0% | 2.9ms | 0.0% | 0us | `findPointObstacleMatches` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:393` |
| 0.0% | 2.9ms | 0.0% | 0us | `t` | `[native code]` |
| 0.0% | 2.9ms | 0.0% | 2.9ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1004` |
| 0.0% | 2.8ms | 0.0% | 1.2ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1994` |
| 0.0% | 2.8ms | 0.0% | 1.5ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:317` |
| 0.0% | 2.8ms | 0.0% | 0us | `splitSegmentAtDenseBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:427` |
| 0.0% | 2.8ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:867` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `getBusSkew` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1093` |
| 0.0% | 2.8ms | 0.0% | 0us | `acceptCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1592` |
| 0.0% | 2.8ms | 0.0% | 2.8ms | `resolve` | `[native code]` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2101` |
| 0.0% | 2.7ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:277` |
| 0.0% | 2.7ms | 0.0% | 1.5ms | `getKnownNetKeys` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:41` |
| 0.0% | 2.7ms | 0.0% | 0us | `getElectricalNetIdentity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:141` |
| 0.0% | 2.7ms | 0.0% | 0us | `createElectricalNetIdentity` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:85` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:655` |
| 0.0% | 2.7ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:829` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:157` |
| 0.0% | 2.7ms | 0.0% | 2.7ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:586` |
| 0.0% | 2.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2410` |
| 0.0% | 2.7ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:400` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:893` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `connectorVariants` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:86` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `stepActiveOperation` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1647` |
| 0.0% | 2.6ms | 0.0% | 0us | `clear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:323` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `inside` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 2.6ms | 0.0% | 2.6ms | `splitSegmentAtDenseBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:391` |
| 0.0% | 2.5ms | 0.0% | 0us | `addRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1770` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `flatIntoArray` | `[native code]` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `distancePointToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:44` |
| 0.0% | 2.4ms | 0.0% | 2.4ms | `step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:27` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `getPlanVias` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1830` |
| 0.0% | 2.2ms | 0.0% | 2.2ms | `cellIdFor` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 2.2ms | 0.0% | 0us | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:896` |
| 0.0% | 2.2ms | 0.0% | 0us | `getBlockingCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:556` |
| 0.0% | 2.1ms | 0.0% | 0us | `getConnectionCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:370` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts` |
| 0.0% | 1.8ms | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6667` |
| 0.0% | 1.8ms | 0.0% | 0us | `shouldUseSourceOriginRouting` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:412` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `extractTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:223` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1285` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `isFinite` | `[native code]` |
| 0.0% | 1.8ms | 0.0% | 0us | `getAxisPhase` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:105` |
| 0.0% | 1.8ms | 0.0% | 1.8ms | `augmentMatching` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:688` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/xml-reader@2.4.3/node_modules/xml-reader/dist/reader.js:4` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/svgson@5.3.1/node_modules/svgson/dist/svgson.cjs.js:6` |
| 0.0% | 1.7ms | 0.0% | 0us | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2009` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:98` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `staticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:195` |
| 0.0% | 1.7ms | 0.0% | 0us | `rerouteLane` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:194` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2087` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:149` |
| 0.0% | 1.7ms | 0.0% | 0us | `createMeanderPoints` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:759` |
| 0.0% | 1.7ms | 0.0% | 0us | `buildViaMinimalWindingPlan` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:683` |
| 0.0% | 1.7ms | 0.0% | 0us | `rerouteLane` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:224` |
| 0.0% | 1.7ms | 0.0% | 0us | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1861` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:687` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1421` |
| 0.0% | 1.7ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/polished@4.3.1/node_modules/polished/dist/polished.cjs.js:5` |
| 0.0% | 1.7ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:73` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `slice` | `[native code]` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `distancePointToObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 0.0% | 1.7ms | 0.0% | 0us | `internal:promisify` | `internal:promisify:53` |
| 0.0% | 1.7ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1737` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `convertRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:498` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `SegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:157` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:464` |
| 0.0% | 1.7ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1764` |
| 0.0% | 1.7ms | 0.0% | 1.7ms | `clone` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:378` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `queryVia` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:40` |
| 0.0% | 1.6ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:71` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:997` |
| 0.0% | 1.6ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:302` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `querySegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:34` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `push` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1260` |
| 0.0% | 1.6ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:433` |
| 0.0% | 1.6ms | 0.0% | 0us | `repairBusLengthsWithTransitSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts:105` |
| 0.0% | 1.6ms | 0.0% | 0us | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:933` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts:105` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `finalizeRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.6ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:317` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:48` |
| 0.0% | 1.6ms | 0.0% | 0us | `collectPartialCandidate` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1086` |
| 0.0% | 1.6ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1027` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `getSolverName` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:510` |
| 0.0% | 1.6ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1842` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.6ms | 0.0% | 0us | `bound or` | `[native code]` |
| 0.0% | 1.6ms | 0.0% | 0us | `Hy` | `[native code]` |
| 0.0% | 1.6ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:332` |
| 0.0% | 1.6ms | 0.0% | 1.6ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:620` |
| 0.0% | 1.6ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1068` |
| 0.0% | 1.6ms | 0.0% | 0us | `pointIsInsideObstacle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:92` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:137` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1892` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1036` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `segmentsAreClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:198` |
| 0.0% | 1.5ms | 0.0% | 0us | `normalizeLayeredPath` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:134` |
| 0.0% | 1.5ms | 0.0% | 0us | `abs` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:231` |
| 0.0% | 1.5ms | 0.0% | 0us | `matchComponentDogboneViaSites` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:749` |
| 0.0% | 1.5ms | 0.0% | 0us | `uniqueSortedCoordinates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:150` |
| 0.0% | 1.5ms | 0.0% | 0us | `getComponentMatchingInputs` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:223` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:150` |
| 0.0% | 1.5ms | 0.0% | 0us | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:392` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:393` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `collect` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.5ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:387` |
| 0.0% | 1.5ms | 0.0% | 0us | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:10` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:8` |
| 0.0% | 1.5ms | 0.0% | 0us | `requestSatisfyUtil` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `(anonymous)` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `c` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `fetch` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `requestInstantiate` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `requestFetch` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `getAxisPhase` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:74` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:76` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:624` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:72` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `forEachCellNearCircle` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `routeViaMinimalWindingAlternativesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` |
| 0.0% | 1.5ms | 0.0% | 0us | `SegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:173` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2006` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:253` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:570` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `find` | `[native code]` |
| 0.0% | 1.5ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:345` |
| 0.0% | 1.5ms | 0.0% | 0us | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2008` |
| 0.0% | 1.5ms | 0.0% | 1.5ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2085` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `bind` | `[native code]` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1716` |
| 0.0% | 1.4ms | 0.0% | 0us | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:152` |
| 0.0% | 1.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1034` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `shortcutFanoutPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:260` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:619` |
| 0.0% | 1.4ms | 0.0% | 0us | `getLayerReservedBusTargets` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:161` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:73` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `node_modules/cdt2d/lib/filter.js` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.4ms | 0.0% | 0us | `node_modules/cdt2d/cdt2d.js` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `matchBusPlanLengths` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1324` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:70` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `obstacleSharesElectricalNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:163` |
| 0.0% | 1.4ms | 0.0% | 0us | `extend` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.4ms | 0.0% | 0us | `Cx` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1360` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `candidatesAreCompatible` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:616` |
| 0.0% | 1.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/svgson@5.3.1/node_modules/svgson/dist/svgson.cjs.js:5` |
| 0.0% | 1.4ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1525` |
| 0.0% | 1.4ms | 0.0% | 1.4ms | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1042` |
| 0.0% | 1.4ms | 0.0% | 0us | `RouteSegmentSpatialIndex` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:17` |
| 0.0% | 1.4ms | 0.0% | 0us | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:808` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `node:worker_threads` | `node:worker_threads:233` |
| 0.0% | 1.3ms | 0.0% | 0us | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/fflate@0.8.3/node_modules/fflate/esm/index.mjs:18` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `inward` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:342` |
| 0.0% | 1.3ms | 0.0% | 0us | `getConnectionCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:346` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getCopperLayerNames` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:12` |
| 0.0% | 1.3ms | 0.0% | 0us | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:27` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `planIsClearOfPlans` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2098` |
| 0.0% | 1.3ms | 0.0% | 0us | `splitSegmentAtDenseBounds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:426` |
| 0.0% | 1.3ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:777` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `sign` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `normalizeLayeredPath` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:91` |
| 0.0% | 1.3ms | 0.0% | 0us | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:85` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `cellIdFor` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `routeLayerReservedAttemptSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:streams/lazy_transform` | `internal:streams/lazy_transform:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:streams/transform` | `internal:streams/transform:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `internal:streams/legacy` | `internal:streams/legacy:2` |
| 0.0% | 1.3ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:466` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getConnectedPathDistance` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `extractViaCellIds` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1026` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `createTunedPlanCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:832` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `blockerIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1283` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:249` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `distanceSegmentToSegment` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:78` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1991` |
| 0.0% | 1.3ms | 0.0% | 0us | `routeReservedViaBusesWorker` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1961` |
| 0.0% | 1.3ms | 0.0% | 0us | `getOutput` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:6` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getOutwardSourcePadOwner` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-outward-source-pad-owner.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `classifyStaticEdge` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1343` |
| 0.0% | 1.3ms | 0.0% | 0us | `_step` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:172` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1202` |
| 0.0% | 1.3ms | 0.0% | 0us | `findPointObstacleMatches` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:390` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:391` |
| 0.0% | 1.3ms | 0.0% | 0us | `prepareConnection` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:861` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `shouldSkipFixedPortHalo` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1266` |
| 0.0% | 1.3ms | 0.0% | 0us | `getLayerReservedBusTargets` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:105` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `getPerpendicularAxis` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 0.0% | 1.3ms | 0.0% | 0us | `packBoundaryBusIntervals` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/pack-boundary-bus-intervals.ts:70` |
| 0.0% | 1.3ms | 0.0% | 0us | `getBoundaryTargetTrack` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:461` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:182` |
| 0.0% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/fromTransformAttribute.js:7` |
| 0.0% | 1.3ms | 0.0% | 0us | `matchBusPlanLengthsWithBudget` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1551` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:398` |
| 0.0% | 1.3ms | 0.0% | 1.3ms | `Int32Array` | `[native code]` |
| 0.0% | 1.3ms | 0.0% | 0us | `segmentsProperlyCross` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:60` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `rebuildTraceRoute` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:49` |
| 0.0% | 1.2ms | 0.0% | 0us | `createExtendedFoldCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:971` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getRouteViaSpanLayers` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:62` |
| 0.0% | 1.2ms | 0.0% | 0us | `extractTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:149` |
| 0.0% | 1.2ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1844` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts` |
| 0.0% | 1.2ms | 0.0% | 0us | `matchComponent` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:722` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:375` |
| 0.0% | 1.2ms | 0.0% | 0us | `getRouteViaSpanLayers` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:57` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `getLayerSpan` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:26` |
| 0.0% | 1.2ms | 0.0% | 0us | `getRoutedTraceCopper` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:48` |
| 0.0% | 1.2ms | 0.0% | 0us | `getViaSpanLayers` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:44` |
| 0.0% | 1.2ms | 0.0% | 0us | `(module)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/fflate@0.8.3/node_modules/fflate/esm/index.mjs:1684` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `decode` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 0us | `repairBoundaryRouteTails` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:637` |
| 0.0% | 1.2ms | 0.0% | 0us | `rerouteExistingAndShortenedBoundaryTailsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:635` |
| 0.0% | 1.2ms | 0.0% | 0us | `rerouteExistingBoundaryTailsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:402` |
| 0.0% | 1.2ms | 0.0% | 0us | `rerouteBusWithRetainedBoundaryTailsSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:897` |
| 0.0% | 1.2ms | 0.0% | 0us | `getSourceReservations` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:173` |
| 0.0% | 1.2ms | 0.0% | 0us | `rerouteIndividualBusesSteps` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:209` |
| 0.0% | 1.2ms | 0.0% | 0us | `replacementCopperIsSelfClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:627` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:505` |
| 0.0% | 1.2ms | 0.0% | 0us | `validateRoutedCopperDrc` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:312` |
| 0.0% | 1.2ms | 0.0% | 0us | `createPlanWithSegments` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:150` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:559` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1365` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `convertRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:497` |
| 0.0% | 1.2ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1846` |
| 0.0% | 1.2ms | 0.0% | 0us | `eb` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1038` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `segmentIsClearOfObstacles` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1783` |
| 0.0% | 1.2ms | 0.0% | 0us | `finalizeSourceOriginRoutes` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1790` |
| 0.0% | 1.2ms | 0.0% | 0us | `forEach` | `[native code]` |
| 0.0% | 1.2ms | 0.0% | 1.2ms | `candidatesAreMutuallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:573` |
| 0.0% | 1.0ms | 0.0% | 0us | `connectorCandidates` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1164` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `sharesNet` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:966` |
| 0.0% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1323` |
| 0.0% | 1.0ms | 0.0% | 0us | `segmentIsClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1107` |
| 0.0% | 1.0ms | 0.0% | 1.0ms | `(anonymous)` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:557` |
| 0.0% | 998us | 0.0% | 0us | `planIsStaticallyClear` | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1966` |

## Function Details

### `stepOnce`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 14.6% (6.58s) | Total: 74.0% (33.40s) | Samples: 4362

**Called by:**
- `_step` (21947)

**Calls:**
- `(anonymous)` (12639)
- `computeH` (1625)
- `(anonymous)` (1094)
- `(anonymous)` (706)
- `(anonymous)` (555)
- `(anonymous)` (453)
- `finalizeRoute` (187)
- `(anonymous)` (184)
- `push` (34)
- `(anonymous)` (31)
- `(anonymous)` (31)
- `(anonymous)` (22)
- `computeH` (8)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `finalizeRoute` (1)
- `(anonymous)` (1)
- `push` (1)

### `fillTraceOccupants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 12.1% (5.45s) | Total: 15.7% (7.09s) | Samples: 3595

**Called by:**
- `computeMoveCostAndRips` (4648)
- `(anonymous)` (4)

**Calls:**
- `pushFlatOccupants` (1005)
- `pushFlatOccupants` (52)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` | Self: 11.8% (5.36s) | Total: 42.5% (19.19s) | Samples: 3555

**Called by:**
- `stepOnce` (12639)
- `collectPartialCandidate` (1)

**Calls:**
- `computeMoveCostAndRips` (6535)
- `bound computeMoveCostAndRips` (2549)
- `computeMoveCostAndRips` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:33` | Self: 7.0% (3.17s) | Total: 7.0% (3.17s) | Samples: 2100

**Called by:**
- `computeMoveCostAndRips` (2100)

### `computeH`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 4.6% (2.09s) | Total: 5.4% (2.46s) | Samples: 1384

**Called by:**
- `stepOnce` (1625)

**Calls:**
- `hypot` (239)
- `hypot` (2)

### `pushFlatOccupants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 4.4% (1.98s) | Total: 4.4% (1.98s) | Samples: 1271

**Called by:**
- `fillTraceOccupants` (1005)
- `bound pushFlatOccupants` (247)
- `(anonymous)` (15)
- `(anonymous)` (4)

### `segmentIsClearOfObstacles`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1784` | Self: 3.7% (1.68s) | Total: 3.7% (1.69s) | Samples: 1098

**Called by:**
- `planIsStaticallyClear` (1103)

**Calls:**
- `includes` (3)
- `hypot` (2)

### `pop`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 2.8% (1.29s) | Total: 2.8% (1.29s) | Samples: 837

**Called by:**
- `bound pop` (837)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:42` | Self: 2.5% (1.13s) | Total: 6.1% (2.76s) | Samples: 741

**Called by:**
- `computeMoveCostAndRips` (1808)

**Calls:**
- `pushFlatOccupants` (725)
- `bound pushFlatOccupants` (327)
- `pushFlatOccupants` (15)

### `hypot`
`[native code]` | Self: 2.4% (1.11s) | Total: 2.4% (1.11s) | Samples: 734

**Called by:**
- `computeH` (239)
- `distanceSegmentToObstacle` (225)
- `planIsClearOfPlans` (64)
- `pointsMatch` (41)
- `(anonymous)` (40)
- `replacementCopperIsSelfClear` (26)
- `(anonymous)` (19)
- `distanceSegmentToSegment` (12)
- `distanceSegmentToSegment` (11)
- `distanceSegmentToSegment` (10)
- `distancePointToObstacle` (10)
- `distanceSegmentToSegment` (9)
- `c` (4)
- `createExtendedFoldCandidates` (4)
- `validateRoutedCopperDrc` (4)
- `viaDrillsAreClear` (3)
- `blockerIsClear` (2)
- `segmentIsClearOfObstacles` (2)
- `replacementCopperIsSelfClear` (1)
- `pointIsInsideObstacle` (1)
- `(anonymous)` (1)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `validateRoutedCopperDrc` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 2.4% (1.10s) | Total: 2.4% (1.10s) | Samples: 706

**Called by:**
- `stepOnce` (706)

### `distanceSegmentToObstacle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:142` | Self: 1.9% (887.0ms) | Total: 2.7% (1.24s) | Samples: 588

**Called by:**
- `(anonymous)` (621)
- `segmentIsClearOfObstacles` (178)
- `validateRoutedCopperDrc` (18)
- `(anonymous)` (5)
- `(anonymous)` (3)
- `blockerIsClear` (2)
- `(anonymous)` (1)

**Calls:**
- `hypot` (225)
- `distancePointToSegment` (14)
- `distancePointToSegment` (1)

### `pushFlatOccupants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 1.9% (880.6ms) | Total: 2.6% (1.20s) | Samples: 591

**Called by:**
- `(anonymous)` (725)
- `fillTraceOccupants` (52)
- `(anonymous)` (19)
- `bound pushFlatOccupants` (14)

**Calls:**
- `Ii` (219)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2104` | Self: 1.6% (747.7ms) | Total: 4.0% (1.81s) | Samples: 492

**Called by:**
- `clearOf` (1144)
- `fanoutPlansAreClear` (45)

**Calls:**
- `querySegment` (475)
- `querySegment` (212)
- `querySegment` (7)
- `querySegment` (1)
- `query` (1)
- `query` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:334` | Self: 1.3% (606.3ms) | Total: 3.4% (1.54s) | Samples: 401

**Called by:**
- `every` (1022)

**Calls:**
- `distanceSegmentToObstacle` (621)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.9% (435.4ms) | Total: 75.0% (33.84s) | Samples: 281

**Called by:**
- `step` (22231)

**Calls:**
- `stepOnce` (21947)
- `stepOnce` (3)

### `segmentsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:191` | Self: 0.8% (401.3ms) | Total: 0.8% (401.3ms) | Samples: 263

**Called by:**
- `replacementCopperIsSelfClear` (145)
- `validateRoutedCopperDrc` (72)
- `planIsClearOfPlans` (37)
- `planIsStaticallyClear` (5)
- `every` (4)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:622` | Self: 0.8% (391.0ms) | Total: 1.6% (737.4ms) | Samples: 258

**Called by:**
- `createTunedPlanCandidates` (372)
- `createExtendedFoldCandidates` (110)

**Calls:**
- `segmentsAreClear` (145)
- `segmentsAreClear` (62)
- `segmentsAreClear` (15)
- `segmentsAreClear` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1200` | Self: 0.7% (339.5ms) | Total: 3.7% (1.69s) | Samples: 216

**Called by:**
- `stepOnce` (1094)

**Calls:**
- `bound pop` (878)

### `Ii`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.7% (326.2ms) | Total: 0.7% (326.2ms) | Samples: 219

**Called by:**
- `pushFlatOccupants` (219)

### `querySegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:30` | Self: 0.7% (325.4ms) | Total: 0.7% (325.4ms) | Samples: 212

**Called by:**
- `planIsClearOfPlans` (212)

### `overlaps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:53` | Self: 0.7% (316.6ms) | Total: 0.7% (316.6ms) | Samples: 209

**Called by:**
- `visit` (158)
- `visit` (51)

### `pointsMatch`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:34` | Self: 0.6% (314.3ms) | Total: 0.8% (377.6ms) | Samples: 210

**Called by:**
- `hasAdjacencyExemption` (83)
- `replacementCopperIsSelfClear` (70)
- `(anonymous)` (69)
- `rebuildTraceRoute` (22)
- `(anonymous)` (3)
- `replacementCopperIsSelfClear` (2)
- `replacementCopperIsSelfClear` (1)
- `rebuildTraceRoute` (1)

**Calls:**
- `hypot` (41)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1371` | Self: 0.6% (291.7ms) | Total: 0.6% (291.7ms) | Samples: 184

**Called by:**
- `stepOnce` (184)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:370` | Self: 0.5% (258.6ms) | Total: 0.8% (363.6ms) | Samples: 161

**Called by:**
- `classifyStaticEdge` (195)
- `extraViaIsClear` (21)
- `segmentIsClear` (9)
- `segmentIsClear` (3)

**Calls:**
- `next` (43)
- `get` (21)
- `values` (3)

### `bound computeMoveCostAndRips`
`[native code]` | Self: 0.5% (250.9ms) | Total: 8.7% (3.94s) | Samples: 165

**Called by:**
- `(anonymous)` (2549)

**Calls:**
- `computeMoveCostAndRips` (2358)
- `computeMoveCostAndRips` (26)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1381` | Self: 0.5% (246.7ms) | Total: 1.5% (682.3ms) | Samples: 167

**Called by:**
- `stepOnce` (453)

**Calls:**
- `extraViaIsClear` (162)
- `extraViaIsClear` (68)
- `extraViaIsClear` (49)
- `extraViaIsClear` (7)

### `sort`
`[native code]` | Self: 0.4% (208.3ms) | Total: 0.6% (284.0ms) | Samples: 137

**Called by:**
- `build` (186)
- `routeLayerReservedAttemptSteps` (1)

**Calls:**
- `(anonymous)` (50)

### `computeMoveCostAndRips`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.4% (199.0ms) | Total: 30.0% (13.53s) | Samples: 133

**Called by:**
- `(anonymous)` (6535)
- `bound computeMoveCostAndRips` (2358)

**Calls:**
- `fillTraceOccupants` (4648)
- `(anonymous)` (2100)
- `(anonymous)` (1808)
- `(anonymous)` (124)
- `append` (69)
- `(anonymous)` (8)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `pointAt`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1007` | Self: 0.3% (175.7ms) | Total: 0.3% (175.7ms) | Samples: 120

**Called by:**
- `extraViaIsClear` (120)

### `copyDataProperties`
`[native code]` | Self: 0.3% (154.6ms) | Total: 0.3% (154.6ms) | Samples: 100

**Called by:**
- `rebuildTraceRoute` (96)
- `rebuildTraceRoute` (3)
- `createPlanWithSegments` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2116` | Self: 0.3% (152.4ms) | Total: 0.8% (377.6ms) | Samples: 101

**Called by:**
- `clearOf` (251)
- `fanoutPlansAreClear` (1)

**Calls:**
- `distancePointToSegment` (69)
- `hypot` (64)
- `distancePointToSegment` (11)
- `distancePointToSegment` (6)
- `distancePointToSegment` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:540` | Self: 0.3% (147.3ms) | Total: 0.8% (369.0ms) | Samples: 96

**Called by:**
- `createTunedPlanCandidates` (240)

**Calls:**
- `segmentsIntersect` (75)
- `segmentsIntersect` (45)
- `segmentsIntersect` (24)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:59` | Self: 0.3% (143.6ms) | Total: 0.9% (438.5ms) | Samples: 92

**Called by:**
- `query` (162)
- `visit` (66)
- `visit` (56)

**Calls:**
- `overlaps` (158)
- `overlaps` (27)
- `overlaps` (7)

### `segmentsIntersect`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:468` | Self: 0.3% (141.4ms) | Total: 0.3% (141.4ms) | Samples: 92

**Called by:**
- `(anonymous)` (75)
- `(anonymous)` (13)
- `(anonymous)` (4)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:424` | Self: 0.3% (139.2ms) | Total: 0.3% (139.2ms) | Samples: 91

**Called by:**
- `shortcutFanoutPlans` (51)
- `fullPlansAreValid` (30)
- `repairBoundaryRouteTails` (10)

### `bound pushFlatOccupants`
`[native code]` | Self: 0.2% (131.0ms) | Total: 1.2% (545.7ms) | Samples: 85

**Called by:**
- `(anonymous)` (327)
- `(anonymous)` (19)

**Calls:**
- `pushFlatOccupants` (247)
- `pushFlatOccupants` (14)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:371` | Self: 0.2% (128.9ms) | Total: 0.4% (199.6ms) | Samples: 84

**Called by:**
- `classifyStaticEdge` (114)
- `extraViaIsClear` (7)
- `segmentIsClear` (5)
- `segmentIsClear` (2)

**Calls:**
- `add` (44)

### `cloneObject`
`[native code]` | Self: 0.2% (126.3ms) | Total: 0.2% (126.3ms) | Samples: 78

**Called by:**
- `rebuildTraceRoute` (49)
- `build` (7)
- `(anonymous)` (5)
- `getWireMetadata` (3)
- `createMeanderPoints` (2)
- `build` (2)
- `(anonymous)` (2)
- `move` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `rebuildTraceRoute` (1)
- `createMeanderPoints` (1)
- `createPlanWithSegments` (1)
- `SegmentSpatialIndex` (1)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:82` | Self: 0.2% (116.7ms) | Total: 0.3% (145.1ms) | Samples: 76

**Called by:**
- `segmentsAreClear` (60)
- `blockerIsClear` (31)
- `(anonymous)` (1)

**Calls:**
- `hypot` (11)
- `distancePointToSegment` (3)
- `distancePointToSegment` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:343` | Self: 0.2% (116.7ms) | Total: 0.3% (179.8ms) | Samples: 76

**Called by:**
- `every` (118)
- `abs` (1)

**Calls:**
- `hypot` (40)
- `distancePointToSegment` (2)
- `distancePointToSegment` (1)

### `reduce`
`[native code]` | Self: 0.2% (108.6ms) | Total: 0.5% (229.3ms) | Samples: 71

**Called by:**
- `build` (103)
- `createPlanWithSegments` (37)
- `shortcutSection` (7)
- `createTunedPlanCandidates` (2)
- `createExtendedFoldCandidates` (1)

**Calls:**
- `(anonymous)` (30)
- `(anonymous)` (30)
- `(anonymous)` (17)
- `(anonymous)` (2)

### `extraViaIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1015` | Self: 0.2% (106.8ms) | Total: 0.2% (106.8ms) | Samples: 68

**Called by:**
- `(anonymous)` (68)

### `distancePointToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` | Self: 0.2% (103.9ms) | Total: 0.2% (103.9ms) | Samples: 69

**Called by:**
- `planIsClearOfPlans` (69)

### `every`
`[native code]` | Self: 0.2% (99.1ms) | Total: 9.4% (4.27s) | Samples: 69

**Called by:**
- `shortcutSection` (1468)
- `clear` (1089)
- `clear` (105)
- `(anonymous)` (37)
- `clear` (32)
- `every` (30)
- `(anonymous)` (22)
- `(anonymous)` (18)
- `segmentIsClear` (7)
- `mutuallyClear` (6)
- `extraViaIsClear` (6)
- `(anonymous)` (5)
- `filter` (4)
- `getConnectionCandidates` (3)
- `getConnectionCandidates` (3)
- `normalizeLayeredPath` (2)
- `normalizeLayeredPath` (2)
- `getSourceReservations` (1)
- `connectorCandidates` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `clear` (1083)
- `(anonymous)` (1022)
- `clear` (184)
- `(anonymous)` (118)
- `clear` (105)
- `clearOf` (46)
- `clear` (40)
- `(anonymous)` (37)
- `clear` (32)
- `every` (30)
- `segmentsAreClear` (24)
- `(anonymous)` (10)
- `(anonymous)` (7)
- `blockerIsClear` (4)
- `segmentsAreClear` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `candidatesAreCompatible` (3)
- `(anonymous)` (3)
- `clear` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `segmentsAreClear` (1)
- `segmentIsClear` (1)
- `blockerIsClear` (1)
- `candidatesAreCompatible` (1)
- `candidatesAreCompatible` (1)
- `(anonymous)` (1)
- `candidatesAreCompatible` (1)
- `(anonymous)` (1)

### `Set`
`[native code]` | Self: 0.2% (95.4ms) | Total: 0.2% (95.4ms) | Samples: 64

**Called by:**
- `(anonymous)` (59)
- `nearby` (4)
- `getConnectionCandidates` (1)

### `append`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.2% (92.4ms) | Total: 0.2% (103.3ms) | Samples: 62

**Called by:**
- `computeMoveCostAndRips` (69)

**Calls:**
- `ensureCapacity` (6)
- `ensureCapacity` (1)

### `distancePointToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:36` | Self: 0.1% (89.9ms) | Total: 0.1% (89.9ms) | Samples: 60

**Called by:**
- `distanceSegmentToSegment` (20)
- `distanceSegmentToObstacle` (14)
- `planIsClearOfPlans` (11)
- `distanceSegmentToSegment` (5)
- `distanceSegmentToSegment` (3)
- `validateRoutedCopperDrc` (3)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `distanceSegmentToSegment` (1)

### `finalizeRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.1% (87.1ms) | Total: 0.6% (283.1ms) | Samples: 58

**Called by:**
- `stepOnce` (187)

**Calls:**
- `(anonymous)` (81)
- `ripTrace` (15)
- `push` (12)
- `(anonymous)` (7)
- `from` (7)
- `markViaFootprint` (5)
- `extractViaCellIds` (1)
- `collect` (1)

### `query`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:69` | Self: 0.1% (85.9ms) | Total: 0.1% (85.9ms) | Samples: 55

**Called by:**
- `querySegment` (53)
- `queryVia` (2)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:23` | Self: 0.1% (84.8ms) | Total: 0.1% (84.8ms) | Samples: 56

**Called by:**
- `planIsClearOfPlans` (55)
- `shortcutFanoutPlans` (1)

### `some`
`[native code]` | Self: 0.1% (83.6ms) | Total: 0.8% (404.8ms) | Samples: 56

**Called by:**
- `createExtendedFoldCandidates` (98)
- `(anonymous)` (93)
- `createExtendedFoldCandidates` (19)
- `planIsStaticallyClear` (13)
- `planIsStaticallyClear` (12)
- `some` (7)
- `createTunedPlanCandidates` (5)
- `planIsClearOfPlans` (4)
- `splitBoundaryClusters` (3)
- `validateRoutedCopperDrc` (3)
- `createExtendedFoldCandidates` (2)
- `(anonymous)` (2)
- `viaDrillsAreClear` (2)
- `createTunedPlanCandidates` (2)
- `createExtendedFoldCandidates` (1)
- `(anonymous)` (1)
- `getConnectionCandidates` (1)
- `repairBoundaryRouteTails` (1)
- `repairBusLengthsWithTransitSteps` (1)
- `getLayerReservedBusTargets` (1)

**Calls:**
- `(anonymous)` (93)
- `(anonymous)` (69)
- `(anonymous)` (8)
- `some` (7)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (3)
- `includes` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `includes`
`[native code]` | Self: 0.1% (83.2ms) | Total: 0.1% (83.2ms) | Samples: 55

**Called by:**
- `planIsClearOfPlans` (26)
- `validateRoutedCopperDrc` (16)
- `planIsClearOfPlans` (3)
- `some` (3)
- `segmentIsClearOfObstacles` (3)
- `planIsStaticallyClear` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `planIsStaticallyClear` (1)

### `next`
`[native code]` | Self: 0.1% (82.8ms) | Total: 2.4% (1.11s) | Samples: 52

**Called by:**
- `matchBusPlanLengthsWithBudget` (315)
- `createTunedPlanCandidates` (183)
- `matchBusPlanLengthsWithBudget` (70)
- `replacementCopperIsSelfClear` (50)
- `nearby` (43)
- `matchBusPlanLengthsWithBudget` (13)
- `routeLayerReservedAttemptSteps` (11)
- `routeSourceOriginBusesSteps` (11)
- `(anonymous)` (11)
- `evaluateLayerReservedRoutingSteps` (6)
- `retryLayerReservedRoutingSteps` (6)
- `_step` (6)
- `routeLayerReservedBusesSteps` (6)
- `rebuildTraceRoute` (4)
- `evaluateLayerReservedRoutingSteps` (1)
- `getKnownNetKeys` (1)

**Calls:**
- `generatorResume` (638)
- `arrayIteratorNextHelper` (47)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:50` | Self: 0.1% (82.2ms) | Total: 0.3% (144.1ms) | Samples: 51

**Called by:**
- `(anonymous)` (93)

**Calls:**
- `bound pushFlatOccupants` (19)
- `pushFlatOccupants` (19)
- `pushFlatOccupants` (4)

### `query`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:50` | Self: 0.1% (79.4ms) | Total: 0.1% (79.4ms) | Samples: 52

**Called by:**
- `querySegment` (51)
- `planIsClearOfPlans` (1)

### `pointAt`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1006` | Self: 0.1% (77.6ms) | Total: 0.1% (77.6ms) | Samples: 51

**Called by:**
- `extraViaIsClear` (41)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (2)

### `segmentsIntersect`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` | Self: 0.1% (75.7ms) | Total: 0.1% (75.7ms) | Samples: 49

**Called by:**
- `(anonymous)` (45)
- `(anonymous)` (4)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:88` | Self: 0.1% (75.6ms) | Total: 0.1% (75.6ms) | Samples: 50

**Called by:**
- `sort` (50)

### `forEachCellNearCircle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.1% (72.5ms) | Total: 0.6% (307.4ms) | Samples: 46

**Called by:**
- `fillViaOccupants` (119)
- `(anonymous)` (74)
- `markViaFootprint` (5)

**Calls:**
- `(anonymous)` (111)
- `(anonymous)` (29)
- `(anonymous)` (7)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `arrayIteratorNextHelper`
`[native code]` | Self: 0.1% (71.6ms) | Total: 0.1% (71.6ms) | Samples: 47

**Called by:**
- `next` (47)

### `add`
`[native code]` | Self: 0.1% (70.7ms) | Total: 0.1% (70.7ms) | Samples: 44

**Called by:**
- `nearby` (44)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:61` | Self: 0.1% (69.0ms) | Total: 0.1% (69.0ms) | Samples: 46

**Called by:**
- `visit` (24)
- `visit` (22)

### `segmentIsClearOfObstacles`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1811` | Self: 0.1% (67.9ms) | Total: 0.7% (337.1ms) | Samples: 45

**Called by:**
- `planIsStaticallyClear` (223)

**Calls:**
- `distanceSegmentToObstacle` (178)

### `filter`
`[native code]` | Self: 0.1% (66.3ms) | Total: 0.4% (207.2ms) | Samples: 44

**Called by:**
- `matchBusPlanLengthsWithBudget` (25)
- `validateRoutedCopperDrc` (24)
- `matchBusPlanLengthsWithBudget` (22)
- `getPlanVias` (22)
- `getViableCandidates` (12)
- `getPlansForIndices` (12)
- `createMeanderPoints` (5)
- `(anonymous)` (2)
- `findPointObstacleMatches` (2)
- `splitSegmentAtDenseBounds` (2)
- `createTunedPlanCandidates` (2)
- `normalizeLayeredPath` (2)
- `createTunedPlanCandidates` (1)
- `validateRoutedCopperDrc` (1)
- `getPlanVias` (1)
- `rerouteLane` (1)
- `matchBusPlanLengthsWithBudget` (1)
- `findPointObstacleMatches` (1)
- `shouldUseSourceOriginRouting` (1)

**Calls:**
- `(anonymous)` (25)
- `(anonymous)` (22)
- `(anonymous)` (16)
- `(anonymous)` (8)
- `obstacleSharesElectricalNet` (5)
- `every` (4)
- `obstacleSharesElectricalNet` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `pointIsInsideObstacle` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2113` | Self: 0.1% (62.1ms) | Total: 0.1% (62.1ms) | Samples: 41

**Called by:**
- `clearOf` (39)
- `fanoutPlansAreClear` (2)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:320` | Self: 0.1% (61.3ms) | Total: 0.1% (61.3ms) | Samples: 40

**Called by:**
- `every` (40)

### `query`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:70` | Self: 0.1% (55.1ms) | Total: 1.6% (755.3ms) | Samples: 35

**Called by:**
- `querySegment` (385)
- `clear` (106)
- `queryVia` (4)
- `planIsClearOfPlans` (1)

**Calls:**
- `visit` (228)
- `visit` (162)
- `visit` (69)
- `visit` (2)

### `querySegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:31` | Self: 0.1% (54.5ms) | Total: 1.8% (841.7ms) | Samples: 38

**Called by:**
- `planIsClearOfPlans` (475)
- `clear` (77)

**Calls:**
- `query` (385)
- `query` (53)
- `query` (51)
- `query` (14)
- `query` (11)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:580` | Self: 0.1% (52.7ms) | Total: 0.2% (91.8ms) | Samples: 35

**Called by:**
- `createTunedPlanCandidates` (55)
- `createExtendedFoldCandidates` (6)

**Calls:**
- `hypot` (26)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:613` | Self: 0.1% (51.7ms) | Total: 0.2% (128.3ms) | Samples: 33

**Called by:**
- `createTunedPlanCandidates` (63)
- `createExtendedFoldCandidates` (20)

**Calls:**
- `next` (50)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1379` | Self: 0.1% (51.5ms) | Total: 0.1% (51.5ms) | Samples: 31

**Called by:**
- `stepOnce` (31)

### `push`
`[native code]` | Self: 0.1% (49.3ms) | Total: 0.1% (49.3ms) | Samples: 34

**Called by:**
- `visit` (21)
- `finalizeRoute` (12)
- `SegmentSpatialIndex` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:78` | Self: 0.1% (46.1ms) | Total: 0.1% (46.1ms) | Samples: 30

**Called by:**
- `reduce` (30)

### `distancePointToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:42` | Self: 0.0% (44.7ms) | Total: 0.0% (44.7ms) | Samples: 29

**Called by:**
- `distanceSegmentToSegment` (16)
- `planIsClearOfPlans` (6)
- `distanceSegmentToSegment` (2)
- `distanceSegmentToSegment` (2)
- `distanceSegmentToSegment` (2)
- `(anonymous)` (1)

### `distance`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:28` | Self: 0.0% (44.6ms) | Total: 0.0% (44.6ms) | Samples: 29

**Called by:**
- `(anonymous)` (17)
- `distancePointToObstacle` (10)
- `planIsClearOfPlans` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1274` | Self: 0.0% (42.7ms) | Total: 0.0% (42.7ms) | Samples: 29

**Called by:**
- `forEachCellNearCircle` (29)

### `overlaps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:55` | Self: 0.0% (42.3ms) | Total: 0.0% (42.3ms) | Samples: 27

**Called by:**
- `visit` (27)

### `set`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/static-edge-clearance-cache.ts` | Self: 0.0% (41.3ms) | Total: 0.0% (41.3ms) | Samples: 27

**Called by:**
- `(anonymous)` (27)

### `computeMoveCostAndRips`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (41.0ms) | Total: 0.0% (41.0ms) | Samples: 27

**Called by:**
- `bound computeMoveCostAndRips` (26)
- `(anonymous)` (1)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:373` | Self: 0.0% (40.9ms) | Total: 0.0% (40.9ms) | Samples: 25

**Called by:**
- `classifyStaticEdge` (23)
- `extraViaIsClear` (1)
- `extraViaIsClear` (1)

### `getConnectedPathDistance`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:587` | Self: 0.0% (40.6ms) | Total: 0.0% (40.6ms) | Samples: 28

**Called by:**
- `replacementCopperIsSelfClear` (28)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:62` | Self: 0.0% (39.2ms) | Total: 0.3% (144.3ms) | Samples: 26

**Called by:**
- `visit` (54)
- `visit` (44)

**Calls:**
- `overlaps` (51)
- `push` (21)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:425` | Self: 0.0% (39.1ms) | Total: 0.3% (151.2ms) | Samples: 26

**Called by:**
- `shortcutFanoutPlans` (57)
- `fullPlansAreValid` (35)
- `repairBoundaryRouteTails` (8)

**Calls:**
- `segmentsAreClear` (72)
- `segmentsAreClear` (1)
- `segmentsAreClear` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:127` | Self: 0.0% (37.4ms) | Total: 0.4% (185.8ms) | Samples: 23

**Called by:**
- `createPlanWithSegments` (119)

**Calls:**
- `copyDataProperties` (96)

### `max`
`[native code]` | Self: 0.0% (34.9ms) | Total: 0.0% (34.9ms) | Samples: 22

**Called by:**
- `nearby` (13)
- `nearby` (8)
- `RouteSegmentSpatialIndex` (1)

### `bound pop`
`[native code]` | Self: 0.0% (34.4ms) | Total: 3.0% (1.35s) | Samples: 23

**Called by:**
- `(anonymous)` (878)

**Calls:**
- `pop` (837)
- `pop` (18)

### `get`
`[native code]` | Self: 0.0% (33.8ms) | Total: 0.0% (33.8ms) | Samples: 23

**Called by:**
- `nearby` (21)
- `add` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2108` | Self: 0.0% (33.4ms) | Total: 0.2% (109.3ms) | Samples: 22

**Called by:**
- `fanoutPlansAreClear` (56)
- `clearOf` (18)

**Calls:**
- `segmentsAreClear` (37)
- `segmentsAreClear` (15)

### `parseModule`
`[native code]` | Self: 0.0% (32.6ms) | Total: 0.1% (45.1ms) | Samples: 21

**Called by:**
- `async (anonymous)` (29)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:367` | Self: 0.0% (32.5ms) | Total: 0.1% (47.1ms) | Samples: 21

**Called by:**
- `classifyStaticEdge` (28)
- `extraViaIsClear` (3)

**Calls:**
- `max` (8)
- `cell` (2)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:436` | Self: 0.0% (31.8ms) | Total: 0.0% (33.2ms) | Samples: 21

**Called by:**
- `shortcutFanoutPlans` (11)
- `fullPlansAreValid` (7)
- `repairBoundaryRouteTails` (3)
- `prepareSourceOriginReservations` (1)

**Calls:**
- `hypot` (1)

### `obstacleSharesElectricalNet`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:166` | Self: 0.0% (29.5ms) | Total: 0.0% (29.5ms) | Samples: 20

**Called by:**
- `(anonymous)` (15)
- `filter` (5)

### `push`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (29.4ms) | Total: 0.1% (55.8ms) | Samples: 19

**Called by:**
- `stepOnce` (34)

**Calls:**
- `ensureCapacity` (15)

### `map`
`[native code]` | Self: 0.0% (28.2ms) | Total: 0.1% (85.4ms) | Samples: 18

**Called by:**
- `createExtendedFoldCandidates` (12)
- `matchComponent` (8)
- `createTunedPlanCandidates` (8)
- `acceptCandidate` (7)
- `planIsStaticallyClear` (5)
- `flatIntoArrayWithCallback` (3)
- `prepareFanoutBuses` (3)
- `getSourceReservations` (2)
- `packBoundaryBusIntervals` (1)
- `matchComponent` (1)
- `shortcutFanoutPlans` (1)
- `getComponentMatchingInputs` (1)
- `buildViaMinimalWindingPlan` (1)
- `createTunedPlanCandidates` (1)
- `routeViaMinimalWindingAlternativesSteps` (1)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (5)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `getRoutedTraceCopper` (1)
- `getRoutedTraceCopper` (1)
- `getRoutedTraceCopper` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `buildViaMinimalWindingPlan` (1)
- `prepareConnection` (1)
- `getRoutedTraceCopper` (1)
- `getBoundaryTargetTrack` (1)
- `(anonymous)` (1)
- `getRoutedTraceCopper` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:75` | Self: 0.0% (28.1ms) | Total: 0.1% (56.3ms) | Samples: 18

**Called by:**
- `blockerIsClear` (17)
- `segmentsAreClear` (13)
- `segmentsIntersect` (5)
- `(anonymous)` (1)

**Calls:**
- `segmentsProperlyCross` (12)
- `segmentsProperlyCross` (3)
- `segmentsProperlyCross` (2)
- `segmentsProperlyCross` (1)

### `getPlanVias`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1829` | Self: 0.0% (27.3ms) | Total: 0.0% (27.3ms) | Samples: 18

**Called by:**
- `planIsClearOfPlans` (8)
- `planIsClearOfPlans` (6)
- `planIsClearOfPlans` (4)

### `segmentsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:197` | Self: 0.0% (26.8ms) | Total: 0.0% (26.8ms) | Samples: 17

**Called by:**
- `replacementCopperIsSelfClear` (15)
- `validateRoutedCopperDrc` (1)
- `planIsStaticallyClear` (1)

### `ensureCapacity`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (26.4ms) | Total: 0.0% (28.1ms) | Samples: 15

**Called by:**
- `push` (15)
- `append` (1)

**Calls:**
- `set` (1)

### `pop`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (26.3ms) | Total: 0.0% (26.3ms) | Samples: 18

**Called by:**
- `bound pop` (18)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:65` | Self: 0.0% (25.9ms) | Total: 2.2% (1.00s) | Samples: 18

**Called by:**
- `visit` (330)
- `visit` (279)
- `query` (69)

**Calls:**
- `visit` (279)
- `visit` (253)
- `visit` (56)
- `visit` (44)
- `visit` (24)
- `visit` (2)
- `visit` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` | Self: 0.0% (24.3ms) | Total: 0.0% (24.3ms) | Samples: 15

**Called by:**
- `some` (5)
- `map` (5)
- `createTunedPlanCandidates` (3)
- `findIndex` (1)
- `filter` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2115` | Self: 0.0% (24.3ms) | Total: 0.1% (63.6ms) | Samples: 16

**Called by:**
- `clearOf` (42)

**Calls:**
- `includes` (26)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:330` | Self: 0.0% (23.4ms) | Total: 0.1% (49.1ms) | Samples: 16

**Called by:**
- `shortcutFanoutPlans` (18)
- `repairBoundaryRouteTails` (7)
- `fullPlansAreValid` (7)
- `prepareSourceOriginReservations` (2)

**Calls:**
- `distanceSegmentToObstacle` (18)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1003` | Self: 0.0% (21.7ms) | Total: 0.0% (27.8ms) | Samples: 15

**Called by:**
- `generatorResume` (19)

**Calls:**
- `hypot` (4)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1954` | Self: 0.0% (21.6ms) | Total: 0.1% (52.8ms) | Samples: 15

**Called by:**
- `staticallyClear` (35)

**Calls:**
- `distancePointToObstacle` (19)
- `distancePointToObstacle` (1)

### `clearOf`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2400` | Self: 0.0% (21.1ms) | Total: 0.0% (21.1ms) | Samples: 14

**Called by:**
- `(anonymous)` (14)

### `query`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:58` | Self: 0.0% (21.0ms) | Total: 0.0% (21.0ms) | Samples: 14

**Called by:**
- `querySegment` (14)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:79` | Self: 0.0% (20.8ms) | Total: 0.1% (88.9ms) | Samples: 14

**Called by:**
- `blockerIsClear` (28)
- `segmentsIntersect` (20)
- `segmentsAreClear` (11)

**Calls:**
- `distancePointToSegment` (20)
- `distancePointToSegment` (16)
- `hypot` (9)

### `buildFiveRegionGrid`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (20.1ms) | Total: 0.1% (60.4ms) | Samples: 14

**Called by:**
- `_setup` (42)

**Calls:**
- `c` (13)
- `flattenNeighborLists` (7)
- `from` (3)
- `cellIdFor` (2)
- `cellIdFor` (1)
- `min` (1)
- `c` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1986` | Self: 0.0% (19.9ms) | Total: 0.0% (19.9ms) | Samples: 13

**Called by:**
- `fanoutPlansAreClear` (11)
- `staticallyClear` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:49` | Self: 0.0% (19.9ms) | Total: 0.0% (19.9ms) | Samples: 13

**Called by:**
- `(anonymous)` (13)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:506` | Self: 0.0% (19.1ms) | Total: 0.1% (46.3ms) | Samples: 13

**Called by:**
- `createTunedPlanCandidates` (31)

**Calls:**
- `segmentsIntersect` (13)
- `segmentsIntersect` (4)
- `segmentsIntersect` (1)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (19.1ms) | Total: 0.0% (35.9ms) | Samples: 13

**Called by:**
- `evaluate` (24)

**Calls:**
- `(anonymous)` (4)
- `bound default` (2)
- `(anonymous)` (2)
- `Cx` (1)
- `bound or` (1)
- `extend` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1879` | Self: 0.0% (18.9ms) | Total: 0.0% (37.5ms) | Samples: 11

**Called by:**
- `staticallyClear` (23)

**Calls:**
- `some` (12)

### `min`
`[native code]` | Self: 0.0% (17.2ms) | Total: 0.0% (17.2ms) | Samples: 12

**Called by:**
- `nearby` (8)
- `nearby` (3)
- `buildFiveRegionGrid` (1)

### `classifyStaticEdge`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1339` | Self: 0.0% (17.1ms) | Total: 0.4% (212.5ms) | Samples: 11

**Called by:**
- `(anonymous)` (135)

**Calls:**
- `blockerIsClear` (104)
- `blockerIsClear` (8)
- `blockerIsClear` (7)
- `blockerIsClear` (4)
- `blockerIsClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:144` | Self: 0.0% (17.0ms) | Total: 0.1% (45.8ms) | Samples: 11

**Called by:**
- `reduce` (30)

**Calls:**
- `hypot` (19)

### `query`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:51` | Self: 0.0% (16.7ms) | Total: 0.0% (16.7ms) | Samples: 11

**Called by:**
- `querySegment` (11)

### `getAlignedPitch`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:175` | Self: 0.0% (16.2ms) | Total: 0.0% (16.2ms) | Samples: 1

**Called by:**
- `findComponentGrids` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:122` | Self: 0.0% (16.1ms) | Total: 0.2% (91.7ms) | Samples: 10

**Called by:**
- `createPlanWithSegments` (59)

**Calls:**
- `cloneObject` (49)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:81` | Self: 0.0% (15.8ms) | Total: 0.1% (45.2ms) | Samples: 11

**Called by:**
- `blockerIsClear` (21)
- `segmentsAreClear` (8)
- `(anonymous)` (1)

**Calls:**
- `hypot` (12)
- `distancePointToSegment` (5)
- `distancePointToSegment` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2405` | Self: 0.0% (15.4ms) | Total: 0.2% (103.6ms) | Samples: 10

**Called by:**
- `acceptCandidate` (69)

**Calls:**
- `Set` (59)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1924` | Self: 0.0% (15.2ms) | Total: 0.0% (16.6ms) | Samples: 9

**Called by:**
- `staticallyClear` (10)

**Calls:**
- `set` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:326` | Self: 0.0% (15.1ms) | Total: 0.0% (15.1ms) | Samples: 10

**Called by:**
- `every` (10)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6660` | Self: 0.0% (14.6ms) | Total: 0.0% (14.6ms) | Samples: 9

**Called by:**
- `step` (9)

### `getPlanVias`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:38` | Self: 0.0% (14.0ms) | Total: 0.0% (15.8ms) | Samples: 9

**Called by:**
- `replacementCopperIsSelfClear` (9)
- `rebuildTraceRoute` (1)

**Calls:**
- `filter` (1)

### `removeOccupant`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (13.9ms) | Total: 0.0% (13.9ms) | Samples: 10

**Called by:**
- `ripTrace` (10)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` | Self: 0.0% (13.9ms) | Total: 0.0% (13.9ms) | Samples: 9

**Called by:**
- `some` (8)
- `filter` (1)

### `c`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (13.2ms) | Total: 0.0% (19.4ms) | Samples: 9

**Called by:**
- `buildFiveRegionGrid` (13)

**Calls:**
- `hypot` (4)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1240` | Self: 0.0% (12.9ms) | Total: 0.0% (12.9ms) | Samples: 7

**Called by:**
- `forEachCellNearCircle` (7)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:80` | Self: 0.0% (12.6ms) | Total: 0.0% (32.5ms) | Samples: 8

**Called by:**
- `blockerIsClear` (12)
- `segmentsAreClear` (9)

**Calls:**
- `hypot` (10)
- `distancePointToSegment` (2)
- `distancePointToSegment` (1)

### `anonymous`
`[native code]` | Self: 0.0% (12.4ms) | Total: 0.0% (31.5ms) | Samples: 8

**Called by:**
- `require` (8)
- `bound require` (3)
- `node:crypto` (2)
- `node:events` (1)
- `internal:streams/lazy_transform` (1)
- `internal:streams/legacy` (1)
- `internal:streams/transform` (1)
- `internal:shared` (1)
- `internal:validators` (1)
- `internal:promisify` (1)
- `internal:streams/duplex` (1)

**Calls:**
- `node:crypto` (2)
- `(anonymous)` (1)
- `node:worker_threads` (1)
- `internal:shared` (1)
- `internal:streams/duplex` (1)
- `internal:streams/lazy_transform` (1)
- `internal:streams/legacy` (1)
- `internal:streams/transform` (1)
- `internal:validators` (1)
- `(anonymous)` (1)
- `internal:promisify` (1)
- `node:events` (1)

### `querySegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:32` | Self: 0.0% (12.3ms) | Total: 0.0% (12.3ms) | Samples: 8

**Called by:**
- `planIsClearOfPlans` (7)
- `clear` (1)

### `getSolvedRoutesForConn`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (12.2ms) | Total: 0.0% (12.2ms) | Samples: 8

**Called by:**
- `getSolvedRouteCount` (8)

### `moduleDeclarationInstantiation`
`[native code]` | Self: 0.0% (12.1ms) | Total: 0.0% (12.1ms) | Samples: 8

**Called by:**
- `link` (8)

### `toSorted`
`[native code]` | Self: 0.0% (11.9ms) | Total: 0.0% (20.8ms) | Samples: 8

**Called by:**
- `createTunedPlanCandidates` (11)
- `uniqueSortedCoordinates` (1)
- `getAxisPhase` (1)
- `splitSegmentAtDenseBounds` (1)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `computeH`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (11.8ms) | Total: 0.0% (11.8ms) | Samples: 8

**Called by:**
- `stepOnce` (8)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2124` | Self: 0.0% (11.8ms) | Total: 0.0% (11.8ms) | Samples: 8

**Called by:**
- `clearOf` (8)

### `segmentsProperlyCross`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:59` | Self: 0.0% (11.6ms) | Total: 0.0% (19.5ms) | Samples: 7

**Called by:**
- `distanceSegmentToSegment` (12)

**Calls:**
- `cross` (5)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 0.0% (11.5ms) | Total: 0.0% (11.5ms) | Samples: 8

**Called by:**
- `classifyStaticEdge` (8)

### `classifyStaticEdge`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1338` | Self: 0.0% (11.5ms) | Total: 1.4% (658.5ms) | Samples: 8

**Called by:**
- `(anonymous)` (417)

**Calls:**
- `nearby` (195)
- `nearby` (114)
- `nearby` (28)
- `nearby` (23)
- `nearby` (17)
- `nearby` (14)
- `nearby` (7)
- `nearby` (5)
- `nearby` (4)
- `nearby` (2)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:361` | Self: 0.0% (11.5ms) | Total: 0.0% (24.2ms) | Samples: 7

**Called by:**
- `classifyStaticEdge` (14)
- `extraViaIsClear` (2)

**Calls:**
- `min` (8)
- `cell` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:96` | Self: 0.0% (11.2ms) | Total: 0.0% (17.1ms) | Samples: 8

**Called by:**
- `createPlanWithSegments` (12)

**Calls:**
- `next` (4)

### `sleep`
`[native code]` | Self: 0.0% (11.1ms) | Total: 0.0% (11.1ms) | Samples: 5

**Called by:**
- `(module)` (5)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:76` | Self: 0.0% (11.1ms) | Total: 0.3% (170.1ms) | Samples: 7

**Called by:**
- `build` (50)
- `build` (38)
- `RouteSegmentSpatialIndex` (22)

**Calls:**
- `reduce` (103)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:64` | Self: 0.0% (11.1ms) | Total: 2.9% (1.34s) | Samples: 8

**Called by:**
- `visit` (417)
- `visit` (253)
- `query` (228)

**Calls:**
- `visit` (417)
- `visit` (330)
- `visit` (66)
- `visit` (54)
- `visit` (22)
- `visit` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:423` | Self: 0.0% (11.0ms) | Total: 0.0% (11.0ms) | Samples: 7

**Called by:**
- `fullPlansAreValid` (3)
- `shortcutFanoutPlans` (3)
- `repairBoundaryRouteTails` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:316` | Self: 0.0% (10.9ms) | Total: 0.0% (10.9ms) | Samples: 7

**Called by:**
- `shortcutFanoutPlans` (4)
- `fullPlansAreValid` (3)

### `ry`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (10.9ms) | Total: 0.0% (12.4ms) | Samples: 7

**Called by:**
- `t` (2)
- `t` (2)
- `lb` (2)
- `Hy` (1)
- `eb` (1)

**Calls:**
- `bind` (1)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:95` | Self: 0.0% (10.9ms) | Total: 0.9% (446.5ms) | Samples: 7

**Called by:**
- `RouteSegmentSpatialIndex` (125)
- `build` (89)
- `build` (78)

**Calls:**
- `build` (101)
- `build` (78)
- `build` (58)
- `build` (38)
- `build` (5)
- `build` (5)

### `cross`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:49` | Self: 0.0% (10.8ms) | Total: 0.0% (10.8ms) | Samples: 7

**Called by:**
- `segmentsProperlyCross` (5)
- `segmentsProperlyCross` (1)
- `segmentsProperlyCross` (1)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:143` | Self: 0.0% (10.6ms) | Total: 0.1% (66.5ms) | Samples: 7

**Called by:**
- `createTunedPlanCandidates` (33)
- `createExtendedFoldCandidates` (10)
- `createTunedPlanCandidates` (1)

**Calls:**
- `reduce` (37)

### `overlaps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` | Self: 0.0% (10.5ms) | Total: 0.0% (10.5ms) | Samples: 7

**Called by:**
- `visit` (7)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2134` | Self: 0.0% (10.3ms) | Total: 0.0% (10.3ms) | Samples: 7

**Called by:**
- `clearOf` (7)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` | Self: 0.0% (10.2ms) | Total: 0.0% (10.2ms) | Samples: 7

**Called by:**
- `every` (7)

### `from`
`[native code]` | Self: 0.0% (10.1ms) | Total: 0.0% (20.7ms) | Samples: 7

**Called by:**
- `finalizeRoute` (7)
- `buildFiveRegionGrid` (3)
- `(anonymous)` (2)
- `_setup` (1)
- `getOutput` (1)

**Calls:**
- `(anonymous)` (3)
- `typedArrayViewTypedArrayFromFast` (3)
- `(anonymous)` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1987` | Self: 0.0% (10.1ms) | Total: 0.0% (19.4ms) | Samples: 6

**Called by:**
- `fanoutPlansAreClear` (11)
- `staticallyClear` (1)

**Calls:**
- `segmentsAreClear` (5)
- `segmentsAreClear` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:886` | Self: 0.0% (10.1ms) | Total: 0.0% (22.4ms) | Samples: 7

**Called by:**
- `generatorResume` (15)

**Calls:**
- `map` (8)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:93` | Self: 0.0% (10.0ms) | Total: 0.0% (12.9ms) | Samples: 7

**Called by:**
- `build` (5)
- `build` (3)
- `RouteSegmentSpatialIndex` (1)

**Calls:**
- `cloneObject` (2)

### `extraViaIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1041` | Self: 0.0% (9.9ms) | Total: 0.0% (11.5ms) | Samples: 6

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `nearby` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2103` | Self: 0.0% (9.4ms) | Total: 0.0% (9.4ms) | Samples: 6

**Called by:**
- `clearOf` (6)

### `cell`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:384` | Self: 0.0% (9.0ms) | Total: 0.0% (9.0ms) | Samples: 6

**Called by:**
- `nearby` (3)
- `nearby` (2)
- `nearby` (1)

### `ensureCapacity`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (9.0ms) | Total: 0.0% (9.0ms) | Samples: 6

**Called by:**
- `append` (6)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:895` | Self: 0.0% (8.9ms) | Total: 0.0% (10.6ms) | Samples: 6

**Called by:**
- `generatorResume` (7)

**Calls:**
- `slice` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2125` | Self: 0.0% (8.8ms) | Total: 0.0% (20.1ms) | Samples: 6

**Called by:**
- `clearOf` (12)
- `fanoutPlansAreClear` (1)

**Calls:**
- `queryVia` (6)
- `queryVia` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1239` | Self: 0.0% (8.6ms) | Total: 0.2% (126.0ms) | Samples: 6

**Called by:**
- `finalizeRoute` (81)

**Calls:**
- `forEachCellNearCircle` (74)
- `forEachCellNearCircle` (1)

### `flattenNeighborLists`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (8.4ms) | Total: 0.0% (9.7ms) | Samples: 6

**Called by:**
- `buildFiveRegionGrid` (7)

**Calls:**
- `Int32Array` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:57` | Self: 0.0% (8.4ms) | Total: 0.0% (11.7ms) | Samples: 6

**Called by:**
- `computeMoveCostAndRips` (8)

**Calls:**
- `from` (2)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:22` | Self: 0.0% (8.3ms) | Total: 0.0% (8.3ms) | Samples: 6

**Called by:**
- `planIsClearOfPlans` (6)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:617` | Self: 0.0% (7.8ms) | Total: 0.1% (52.5ms) | Samples: 5

**Called by:**
- `createTunedPlanCandidates` (26)
- `createExtendedFoldCandidates` (10)

**Calls:**
- `getConnectedPathDistance` (28)
- `getConnectedPathDistance` (2)
- `getConnectedPathDistance` (1)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:358` | Self: 0.0% (7.8ms) | Total: 0.0% (7.8ms) | Samples: 4

**Called by:**
- `classifyStaticEdge` (4)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1295` | Self: 0.0% (7.7ms) | Total: 0.0% (10.6ms) | Samples: 5

**Called by:**
- `classifyStaticEdge` (7)

**Calls:**
- `hypot` (2)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:60` | Self: 0.0% (7.7ms) | Total: 0.0% (7.7ms) | Samples: 5

**Called by:**
- `visit` (2)
- `query` (2)
- `visit` (1)

### `evaluate`
`[native code]` | Self: 0.0% (7.7ms) | Total: 99.8% (45.05s) | Samples: 5

**Called by:**
- `async asyncModuleEvaluation` (29568)
- `moduleEvaluation` (26)

**Calls:**
- `(module)` (29554)
- `(module)` (24)
- `(module)` (5)
- `(module)` (4)
- `(module)` (1)
- `(module)` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` | Self: 0.0% (7.7ms) | Total: 0.0% (7.7ms) | Samples: 5

**Called by:**
- `some` (5)

### `segmentIsLegalTerminalBodyEscape`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts` | Self: 0.0% (7.6ms) | Total: 0.0% (7.6ms) | Samples: 5

**Called by:**
- `validateRoutedCopperDrc` (5)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2142` | Self: 0.0% (7.6ms) | Total: 0.0% (14.2ms) | Samples: 5

**Called by:**
- `clearOf` (9)

**Calls:**
- `some` (4)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2056` | Self: 0.0% (7.6ms) | Total: 0.0% (7.6ms) | Samples: 5

**Called by:**
- `clearOf` (5)

### `clearOf`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2394` | Self: 0.0% (7.4ms) | Total: 0.0% (7.4ms) | Samples: 5

**Called by:**
- `(anonymous)` (5)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1237` | Self: 0.0% (7.4ms) | Total: 0.0% (10.4ms) | Samples: 5

**Called by:**
- `finalizeRoute` (7)

**Calls:**
- `pointAt` (2)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:124` | Self: 0.0% (7.2ms) | Total: 0.0% (8.9ms) | Samples: 5

**Called by:**
- `createPlanWithSegments` (6)

**Calls:**
- `getWireMetadata` (1)

### `fillViaOccupants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (7.2ms) | Total: 0.4% (190.8ms) | Samples: 5

**Called by:**
- `bound fillViaOccupants` (63)
- `(anonymous)` (61)

**Calls:**
- `forEachCellNearCircle` (119)

### `getSolvedRouteCount`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (7.2ms) | Total: 0.0% (21.0ms) | Samples: 5

**Called by:**
- `_step` (14)

**Calls:**
- `getSolvedRoutesForConn` (8)
- `collectPartialCandidate` (1)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:96` | Self: 0.0% (7.1ms) | Total: 1.1% (516.3ms) | Samples: 5

**Called by:**
- `build` (119)
- `RouteSegmentSpatialIndex` (119)
- `build` (101)

**Calls:**
- `build` (119)
- `build` (89)
- `build` (70)
- `build` (50)
- `build` (3)
- `build` (3)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:362` | Self: 0.0% (6.9ms) | Total: 0.0% (34.6ms) | Samples: 5

**Called by:**
- `classifyStaticEdge` (17)
- `extraViaIsClear` (5)

**Calls:**
- `max` (13)
- `cell` (3)
- `cell` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1445` | Self: 0.0% (6.0ms) | Total: 0.1% (47.4ms) | Samples: 4

**Called by:**
- `stepOnce` (31)

**Calls:**
- `set` (27)

### `connectorVariants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:80` | Self: 0.0% (5.9ms) | Total: 0.0% (5.9ms) | Samples: 4

**Called by:**
- `shortcutSection` (4)

### `distancePointToObstacle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:127` | Self: 0.0% (5.9ms) | Total: 0.0% (36.1ms) | Samples: 4

**Called by:**
- `planIsStaticallyClear` (19)
- `(anonymous)` (3)
- `validateRoutedCopperDrc` (2)

**Calls:**
- `hypot` (10)
- `distance` (10)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (5.9ms) | Total: 0.4% (186.7ms) | Samples: 4

**Called by:**
- `forEachCellNearCircle` (111)
- `(module)` (4)
- `from` (3)
- `Cx` (1)
- `node_modules/cdt2d/cdt2d.js` (1)
- `bound or` (1)

**Calls:**
- `(anonymous)` (93)
- `(anonymous)` (13)
- `fillTraceOccupants` (4)
- `t` (2)
- `Hy` (1)
- `t` (1)
- `eb` (1)
- `node_modules/cdt2d/lib/filter.js` (1)
- `node_modules/cdt2d/cdt2d.js` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (5.7ms) | Total: 0.0% (5.7ms) | Samples: 4

**Called by:**
- `(module)` (2)
- `forEachCellNearCircle` (1)
- `from` (1)

### `_setup`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (5.7ms) | Total: 0.1% (67.7ms) | Samples: 4

**Called by:**
- `bound _setup` (47)

**Calls:**
- `buildFiveRegionGrid` (42)
- `from` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:439` | Self: 0.0% (5.5ms) | Total: 0.0% (16.2ms) | Samples: 4

**Called by:**
- `shortcutFanoutPlans` (5)
- `repairBoundaryRouteTails` (4)
- `fullPlansAreValid` (2)

**Calls:**
- `hypot` (4)
- `distancePointToSegment` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:372` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 3

**Called by:**
- `some` (3)

### `cell`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 0.0% (4.9ms) | Total: 0.0% (4.9ms) | Samples: 3

**Called by:**
- `nearby` (2)
- `nearby` (1)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:366` | Self: 0.0% (4.8ms) | Total: 0.0% (12.9ms) | Samples: 3

**Called by:**
- `classifyStaticEdge` (7)
- `extraViaIsClear` (1)

**Calls:**
- `min` (3)
- `cell` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1323` | Self: 0.0% (4.7ms) | Total: 0.0% (4.7ms) | Samples: 3

**Called by:**
- `every` (3)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:607` | Self: 0.0% (4.7ms) | Total: 0.0% (6.2ms) | Samples: 3

**Called by:**
- `createTunedPlanCandidates` (3)
- `createExtendedFoldCandidates` (1)

**Calls:**
- `hypot` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1000` | Self: 0.0% (4.7ms) | Total: 0.0% (4.7ms) | Samples: 3

**Called by:**
- `generatorResume` (3)

### `segmentsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 3

**Called by:**
- `replacementCopperIsSelfClear` (2)
- `validateRoutedCopperDrc` (1)

### `typedArrayViewTypedArrayFromFast`
`[native code]` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 3

**Called by:**
- `from` (3)

### `add`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:353` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 3

**Called by:**
- `routeReservedViaBusesWorker` (1)
- `addRoute` (1)
- `routeReservedViaBusesWorker` (1)

### `values`
`[native code]` | Self: 0.0% (4.6ms) | Total: 0.0% (4.6ms) | Samples: 3

**Called by:**
- `nearby` (3)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:438` | Self: 0.0% (4.6ms) | Total: 0.0% (29.0ms) | Samples: 3

**Called by:**
- `shortcutFanoutPlans` (11)
- `repairBoundaryRouteTails` (5)
- `fullPlansAreValid` (3)

**Calls:**
- `includes` (16)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 0.0% (4.5ms) | Total: 0.0% (4.5ms) | Samples: 3

**Called by:**
- `classifyStaticEdge` (2)
- `extraViaIsClear` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2140` | Self: 0.0% (4.5ms) | Total: 0.0% (4.5ms) | Samples: 3

**Called by:**
- `clearOf` (3)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:567` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 2

**Called by:**
- `createExtendedFoldCandidates` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:30` | Self: 0.0% (4.4ms) | Total: 0.0% (4.4ms) | Samples: 2

**Called by:**
- `computeMoveCostAndRips` (2)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:13` | Self: 0.0% (4.3ms) | Total: 0.0% (4.3ms) | Samples: 3

**Called by:**
- `planIsClearOfPlans` (3)

### `add`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:351` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 3

**Called by:**
- `routeReservedViaBusesWorker` (2)
- `routeReservedViaBusesWorker` (1)

### `segmentsProperlyCross`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` | Self: 0.0% (4.2ms) | Total: 0.0% (4.2ms) | Samples: 3

**Called by:**
- `distanceSegmentToSegment` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` | Self: 0.0% (4.1ms) | Total: 0.0% (4.1ms) | Samples: 3

**Called by:**
- `some` (3)

### `ripTrace`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (4.0ms) | Total: 0.0% (21.0ms) | Samples: 3

**Called by:**
- `finalizeRoute` (15)

**Calls:**
- `removeOccupant` (10)
- `removeOccupant` (2)

### `stepOnce`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (3.8ms) | Total: 0.0% (3.8ms) | Samples: 3

**Called by:**
- `_step` (3)

### `withinBounds`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1010` | Self: 0.0% (3.6ms) | Total: 0.0% (3.6ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:246` | Self: 0.0% (3.5ms) | Total: 0.0% (3.5ms) | Samples: 2

**Called by:**
- `step` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:342` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 2

**Called by:**
- `every` (2)

### `visit`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 2

**Called by:**
- `visit` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1370` | Self: 0.0% (3.3ms) | Total: 0.0% (3.3ms) | Samples: 2

**Called by:**
- `generatorResume` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:539` | Self: 0.0% (3.3ms) | Total: 0.2% (128.7ms) | Samples: 2

**Called by:**
- `createTunedPlanCandidates` (85)

**Calls:**
- `hasAdjacencyExemption` (83)

### `nearby`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:359` | Self: 0.0% (3.2ms) | Total: 0.0% (9.1ms) | Samples: 2

**Called by:**
- `classifyStaticEdge` (5)
- `extraViaIsClear` (1)

**Calls:**
- `Set` (4)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1286` | Self: 0.0% (3.2ms) | Total: 0.0% (6.3ms) | Samples: 2

**Called by:**
- `classifyStaticEdge` (4)

**Calls:**
- `distanceSegmentToObstacle` (2)

### `findIndex`
`[native code]` | Self: 0.0% (3.2ms) | Total: 0.0% (9.4ms) | Samples: 2

**Called by:**
- `createPlanWithSegments` (5)
- `shortcutFanoutPlans` (1)

**Calls:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:148` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `findIndex` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:887` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `map` (2)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1310` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `WeakMap`
`[native code]` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `clearOf` (2)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:375` | Self: 0.0% (3.1ms) | Total: 0.0% (5.8ms) | Samples: 2

**Called by:**
- `prepareSourceOriginReservations` (3)
- `fullPlansAreValid` (1)

**Calls:**
- `distancePointToObstacle` (2)

### `shortcutSection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:125` | Self: 0.0% (3.1ms) | Total: 0.0% (3.1ms) | Samples: 2

**Called by:**
- `shortcutFanoutPlans` (2)

### `set`
`[native code]` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `planIsStaticallyClear` (1)
- `ensureCapacity` (1)

### `performIteration`
`[native code]` | Self: 0.0% (3.0ms) | Total: 0.0% (18.9ms) | Samples: 2

**Called by:**
- `search` (10)
- `(anonymous)` (2)

**Calls:**
- `generatorResume` (10)

### `hypot`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1451` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `computeH` (2)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:467` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `fullPlansAreValid` (1)
- `shortcutFanoutPlans` (1)

### `add`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:354` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `routeReservedViaBusesWorker` (1)
- `routeReservedViaBusesWorker` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1272` | Self: 0.0% (3.0ms) | Total: 0.0% (3.0ms) | Samples: 2

**Called by:**
- `forEachCellNearCircle` (2)

### `shortcutSection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:129` | Self: 0.0% (3.0ms) | Total: 4.9% (2.21s) | Samples: 2

**Called by:**
- `shortcutFanoutPlans` (1470)

**Calls:**
- `every` (1468)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1937` | Self: 0.0% (3.0ms) | Total: 0.0% (22.3ms) | Samples: 2

**Called by:**
- `staticallyClear` (15)

**Calls:**
- `some` (13)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1444` | Self: 0.0% (2.9ms) | Total: 1.9% (875.4ms) | Samples: 2

**Called by:**
- `stepOnce` (555)

**Calls:**
- `classifyStaticEdge` (417)
- `classifyStaticEdge` (135)
- `classifyStaticEdge` (1)

### `removeOccupant`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 2

**Called by:**
- `ripTrace` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2145` | Self: 0.0% (2.9ms) | Total: 0.0% (6.1ms) | Samples: 2

**Called by:**
- `clearOf` (4)

**Calls:**
- `distance` (2)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:489` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 2

**Called by:**
- `fullPlansAreValid` (2)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1004` | Self: 0.0% (2.9ms) | Total: 0.0% (2.9ms) | Samples: 2

**Called by:**
- `generatorResume` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2061` | Self: 0.0% (2.9ms) | Total: 0.0% (9.0ms) | Samples: 2

**Called by:**
- `clearOf` (6)

**Calls:**
- `viaDrillsAreClear` (2)
- `viaDrillsAreClear` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 2

**Called by:**
- `some` (1)
- `flatIntoArrayWithCallback` (1)

### `getBusSkew`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1093` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 2

**Called by:**
- `acceptCandidate` (2)

### `resolve`
`[native code]` | Self: 0.0% (2.8ms) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2101` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 2

**Called by:**
- `clearOf` (2)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:655` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 2

**Called by:**
- `createTunedPlanCandidates` (1)
- `createExtendedFoldCandidates` (1)

### `step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:48` | Self: 0.0% (2.7ms) | Total: 0.0% (5.8ms) | Samples: 2

**Called by:**
- `(module)` (2)
- `_step` (2)

**Calls:**
- `computeProgress` (2)

### `acceptCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1588` | Self: 0.0% (2.7ms) | Total: 0.0% (13.1ms) | Samples: 2

**Called by:**
- `matchBusPlanLengthsWithBudget` (8)
- `matchBusPlanLengthsWithBudget` (1)

**Calls:**
- `map` (7)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:157` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 2

**Called by:**
- `createTunedPlanCandidates` (2)

### `getConnectedPathDistance`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:586` | Self: 0.0% (2.7ms) | Total: 0.0% (2.7ms) | Samples: 2

**Called by:**
- `replacementCopperIsSelfClear` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1429` | Self: 0.0% (2.6ms) | Total: 0.0% (6.3ms) | Samples: 2

**Called by:**
- `stepOnce` (4)

**Calls:**
- `withinBounds` (2)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:893` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 2

**Called by:**
- `generatorResume` (2)

### `connectorVariants`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:86` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 1

**Called by:**
- `shortcutSection` (1)

### `stepActiveOperation`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1647` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 2

**Called by:**
- `_step` (2)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1300` | Self: 0.0% (2.6ms) | Total: 0.3% (177.1ms) | Samples: 2

**Called by:**
- `classifyStaticEdge` (104)
- `every` (4)
- `(anonymous)` (3)

**Calls:**
- `distanceSegmentToSegment` (31)
- `distanceSegmentToSegment` (28)
- `distanceSegmentToSegment` (21)
- `distanceSegmentToSegment` (17)
- `distanceSegmentToSegment` (12)

### `inside`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 2

**Called by:**
- `clear` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 2

**Called by:**
- `clearOf` (1)
- `fanoutPlansAreClear` (1)

### `splitSegmentAtDenseBounds`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:391` | Self: 0.0% (2.6ms) | Total: 0.0% (2.6ms) | Samples: 2

**Called by:**
- `flatIntoArrayWithCallback` (2)

### `flatIntoArray`
`[native code]` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `flatIntoArrayWithCallback` (2)

### `distancePointToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:44` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `planIsClearOfPlans` (1)
- `distanceSegmentToObstacle` (1)

### `step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:27` | Self: 0.0% (2.4ms) | Total: 0.0% (2.4ms) | Samples: 2

**Called by:**
- `(module)` (1)
- `_step` (1)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:17` | Self: 0.0% (2.3ms) | Total: 99.6% (44.97s) | Samples: 2

**Called by:**
- `evaluate` (29554)

**Calls:**
- `step` (29549)
- `step` (2)
- `step` (1)

### `getPlanVias`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1830` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `planIsClearOfPlans` (1)
- `planIsStaticallyClear` (1)

### `cellIdFor`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (2.2ms) | Total: 0.0% (2.2ms) | Samples: 2

**Called by:**
- `buildFiveRegionGrid` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `filter` (1)

### `extractTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:223` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `validateRoutedCopperDrc` (1)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1285` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `classifyStaticEdge` (1)

### `isFinite`
`[native code]` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `getAxisPhase` (1)

### `augmentMatching`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:688` | Self: 0.0% (1.8ms) | Total: 0.0% (1.8ms) | Samples: 1

**Called by:**
- `augmentMatching` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:98` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `createPlanWithSegments` (1)

### `staticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `shortcutSection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:123` | Self: 0.0% (1.7ms) | Total: 0.0% (10.3ms) | Samples: 1

**Called by:**
- `shortcutFanoutPlans` (6)

**Calls:**
- `connectorVariants` (4)
- `connectorVariants` (1)

### `getWireMetadata`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:63` | Self: 0.0% (1.7ms) | Total: 0.0% (6.4ms) | Samples: 1

**Called by:**
- `rebuildTraceRoute` (3)
- `rebuildTraceRoute` (1)

**Calls:**
- `cloneObject` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:195` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `filter` (1)

### `add`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:352` | Self: 0.0% (1.7ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `addRoute` (1)
- `routeReservedViaBusesWorker` (1)
- `routeReservedViaBusesWorker` (1)

**Calls:**
- `get` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2087` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `clearOf` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1085` | Self: 0.0% (1.7ms) | Total: 0.2% (118.7ms) | Samples: 1

**Called by:**
- `generatorResume` (76)

**Calls:**
- `createPlanWithSegments` (62)
- `createPlanWithSegments` (10)
- `createPlanWithSegments` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:687` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `map` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1421` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `stepOnce` (1)

### `slice`
`[native code]` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (1)

### `distancePointToObstacle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `planIsStaticallyClear` (1)

### `convertRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:498` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `finalizeSourceOriginRoutes` (1)

### `SegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:157` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `createSegmentIndex` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:464` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `fullPlansAreValid` (1)

### `clone`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:378` | Self: 0.0% (1.7ms) | Total: 0.0% (1.7ms) | Samples: 1

**Called by:**
- `finalizeSourceOriginRoutes` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:801` | Self: 0.0% (1.6ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `generatorResume` (3)

**Calls:**
- `reduce` (2)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `matchBusPlanLengthsWithBudget` (1)

### `queryVia`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:40` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `planIsClearOfPlans` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:997` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1314` | Self: 0.0% (1.6ms) | Total: 0.0% (17.8ms) | Samples: 1

**Called by:**
- `(anonymous)` (12)

**Calls:**
- `nearby` (9)
- `nearby` (2)

### `querySegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:34` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `planIsClearOfPlans` (1)

### `push`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `stepOnce` (1)

### `obstacleSharesElectricalNet`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:162` | Self: 0.0% (1.6ms) | Total: 0.0% (4.4ms) | Samples: 1

**Called by:**
- `filter` (3)

**Calls:**
- `getElectricalNetIdentity` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1260` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `forEachCellNearCircle` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts:105` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `some` (1)

### `finalizeRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `stepOnce` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:48` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `computeMoveCostAndRips` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1086` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `getSolverName`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `computeProgress` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:510` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `matchBusPlanLengthsWithBudget` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:321` | Self: 0.0% (1.6ms) | Total: 0.0% (9.2ms) | Samples: 1

**Called by:**
- `shortcutFanoutPlans` (4)
- `fullPlansAreValid` (2)

**Calls:**
- `segmentIsLegalTerminalBodyEscape` (5)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` | Self: 0.0% (1.6ms) | Total: 0.0% (2.9ms) | Samples: 1

**Called by:**
- `reduce` (2)

**Calls:**
- `hypot` (1)

### `candidatesAreCompatible`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:620` | Self: 0.0% (1.6ms) | Total: 0.0% (1.6ms) | Samples: 1

**Called by:**
- `every` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:828` | Self: 0.0% (1.6ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `toSorted` (2)

**Calls:**
- `hypot` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1024` | Self: 0.0% (1.6ms) | Total: 0.0% (5.0ms) | Samples: 1

**Called by:**
- `map` (3)

**Calls:**
- `cloneObject` (2)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:137` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1892` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `staticallyClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1036` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `some` (1)

### `segmentsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:198` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `every` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:317` | Self: 0.0% (1.5ms) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `prepareSourceOriginReservations` (1)
- `repairBoundaryRouteTails` (1)

**Calls:**
- `includes` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:150` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `toSorted` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1993` | Self: 0.0% (1.5ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `fanoutPlansAreClear` (2)

**Calls:**
- `includes` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:393` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `findIndex` (1)

### `collect`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `finalizeRoute` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:8` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `RouteSegmentSpatialIndex` (1)

### `fetch`
`[native code]` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `requestFetch` (1)

### `c`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `buildFiveRegionGrid` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1030` | Self: 0.0% (1.5ms) | Total: 0.0% (4.5ms) | Samples: 1

**Called by:**
- `map` (3)

**Calls:**
- `move` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:76` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `toSorted` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2059` | Self: 0.0% (1.5ms) | Total: 0.0% (15.8ms) | Samples: 1

**Called by:**
- `clearOf` (10)

**Calls:**
- `getPlanVias` (5)
- `getPlanVias` (4)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:624` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (1)

### `getRoutedTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:72` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `map` (1)

### `forEachCellNearCircle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `getKnownNetKeys`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:41` | Self: 0.0% (1.5ms) | Total: 0.0% (2.7ms) | Samples: 1

**Called by:**
- `createElectricalNetIdentity` (2)

**Calls:**
- `next` (1)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `routeViaMinimalWindingAlternativesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:916` | Self: 0.0% (1.5ms) | Total: 1.9% (897.8ms) | Samples: 1

**Called by:**
- `generatorResume` (588)

**Calls:**
- `replacementCopperIsSelfClear` (372)
- `replacementCopperIsSelfClear` (63)
- `replacementCopperIsSelfClear` (57)
- `replacementCopperIsSelfClear` (55)
- `replacementCopperIsSelfClear` (26)
- `replacementCopperIsSelfClear` (7)
- `replacementCopperIsSelfClear` (3)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2006` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `staticallyClear` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:253` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `step` (1)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:570` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `createExtendedFoldCandidates` (1)

### `find`
`[native code]` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `validateRoutedCopperDrc` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:677` | Self: 0.0% (1.5ms) | Total: 0.0% (12.2ms) | Samples: 1

**Called by:**
- `filter` (8)

**Calls:**
- `every` (5)
- `performIteration` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:829` | Self: 0.0% (1.5ms) | Total: 0.0% (2.7ms) | Samples: 1

**Called by:**
- `toSorted` (2)

**Calls:**
- `hypot` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2085` | Self: 0.0% (1.5ms) | Total: 0.0% (1.5ms) | Samples: 1

**Called by:**
- `clearOf` (1)

### `bind`
`[native code]` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `ry` (1)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1716` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1001` | Self: 0.0% (1.4ms) | Total: 0.0% (29.5ms) | Samples: 1

**Called by:**
- `generatorResume` (20)

**Calls:**
- `some` (19)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:260` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `routeLayerReservedAttemptSteps` (1)

### `candidatesAreCompatible`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:619` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `every` (1)

### `getRoutedTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:73` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `map` (1)

### `node_modules/cdt2d/lib/filter.js`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `segmentsProperlyCross`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:61` | Self: 0.0% (1.4ms) | Total: 0.0% (3.1ms) | Samples: 1

**Called by:**
- `distanceSegmentToSegment` (2)

**Calls:**
- `cross` (1)

### `matchBusPlanLengths`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1324` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `match` (1)

### `getRoutedTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:70` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `map` (1)

### `computeProgress`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6787` | Self: 0.0% (1.4ms) | Total: 0.0% (3.0ms) | Samples: 1

**Called by:**
- `step` (2)

**Calls:**
- `getSolverName` (1)

### `obstacleSharesElectricalNet`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:163` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1360` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `candidatesAreCompatible`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:616` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `every` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2055` | Self: 0.0% (1.4ms) | Total: 0.0% (25.6ms) | Samples: 1

**Called by:**
- `clearOf` (17)

**Calls:**
- `getPlanVias` (8)
- `getPlanVias` (8)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1042` | Self: 0.0% (1.4ms) | Total: 0.0% (1.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `extraViaIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1018` | Self: 0.0% (1.4ms) | Total: 0.1% (77.6ms) | Samples: 1

**Called by:**
- `(anonymous)` (49)

**Calls:**
- `nearby` (21)
- `nearby` (7)
- `every` (6)
- `nearby` (5)
- `nearby` (3)
- `nearby` (2)
- `nearby` (1)
- `nearby` (1)
- `nearby` (1)
- `nearby` (1)

### `clearOf`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2382` | Self: 0.0% (1.3ms) | Total: 6.6% (3.00s) | Samples: 1

**Called by:**
- `(anonymous)` (1934)
- `every` (46)

**Calls:**
- `planIsClearOfPlans` (1144)
- `planIsClearOfPlans` (376)
- `planIsClearOfPlans` (251)
- `planIsClearOfPlans` (42)
- `planIsClearOfPlans` (39)
- `planIsClearOfPlans` (18)
- `planIsClearOfPlans` (17)
- `planIsClearOfPlans` (16)
- `planIsClearOfPlans` (12)
- `planIsClearOfPlans` (10)
- `planIsClearOfPlans` (9)
- `planIsClearOfPlans` (8)
- `planIsClearOfPlans` (7)
- `planIsClearOfPlans` (6)
- `planIsClearOfPlans` (6)
- `planIsClearOfPlans` (5)
- `planIsClearOfPlans` (4)
- `planIsClearOfPlans` (3)
- `planIsClearOfPlans` (2)
- `planIsClearOfPlans` (1)
- `planIsClearOfPlans` (1)
- `planIsClearOfPlans` (1)
- `planIsClearOfPlans` (1)

### `node:worker_threads`
`node:worker_threads:233` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `inward`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `repairBoundaryRouteTails` (1)

### `getCopperLayerNames`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:12` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `getRoutedTraceCopper` (1)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2098` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `clearOf` (1)

### `sign`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `normalizeLayeredPath` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `cellIdFor`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `buildFiveRegionGrid` (1)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:26` | Self: 0.0% (1.3ms) | Total: 1.1% (496.4ms) | Samples: 1

**Called by:**
- `planIsClearOfPlans` (310)
- `shortcutFanoutPlans` (16)

**Calls:**
- `build` (125)
- `build` (119)
- `build` (58)
- `build` (22)
- `build` (1)

### `getConnectedPathDistance`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `replacementCopperIsSelfClear` (1)

### `extractViaCellIds`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `finalizeRoute` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:832` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `candidatesAreCompatible`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:614` | Self: 0.0% (1.3ms) | Total: 0.0% (3.8ms) | Samples: 1

**Called by:**
- `every` (3)

**Calls:**
- `segmentsAreClear` (1)
- `candidatesAreMutuallyClear` (1)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:85` | Self: 0.0% (1.3ms) | Total: 0.0% (11.5ms) | Samples: 1

**Called by:**
- `build` (5)
- `build` (3)

**Calls:**
- `cloneObject` (7)

### `blockerIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1283` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `every` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:249` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `step` (1)

### `distanceSegmentToSegment`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:78` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `segmentsAreClear` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1991` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `fanoutPlansAreClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `filter` (1)

### `getOutwardSourcePadOwner`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-outward-source-pad-owner.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `classifyStaticEdge` (1)

### `shouldSkipFixedPortHalo`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `viaDrillsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts:28` | Self: 0.0% (1.3ms) | Total: 0.0% (4.2ms) | Samples: 1

**Called by:**
- `planIsClearOfPlans` (2)
- `validateRoutedCopperDrc` (1)

**Calls:**
- `some` (2)

### `getPerpendicularAxis`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `getBoundaryTargetTrack` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1423` | Self: 0.0% (1.3ms) | Total: 0.0% (7.5ms) | Samples: 1

**Called by:**
- `stepOnce` (5)

**Calls:**
- `pointAt` (4)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:398` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `shortcutFanoutPlans` (1)

### `Int32Array`
`[native code]` | Self: 0.0% (1.3ms) | Total: 0.0% (1.3ms) | Samples: 1

**Called by:**
- `flattenNeighborLists` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2010` | Self: 0.0% (1.3ms) | Total: 0.0% (31.9ms) | Samples: 1

**Called by:**
- `filter` (22)

**Calls:**
- `every` (18)
- `mutuallyClear` (3)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:49` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `createPlanWithSegments` (1)

### `getRouteViaSpanLayers`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:62` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `extractTraceCopper` (1)

### `createMeanderPoints`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:737` | Self: 0.0% (1.2ms) | Total: 0.0% (4.3ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (3)

**Calls:**
- `cloneObject` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `map` (1)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:375` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `finalizeSourceOriginRoutes` (1)

### `getLayerSpan`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:26` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `getViaSpanLayers` (1)

### `decode`
`[native code]` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `shortcutSection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:126` | Self: 0.0% (1.2ms) | Total: 0.0% (11.7ms) | Samples: 1

**Called by:**
- `shortcutFanoutPlans` (8)

**Calls:**
- `reduce` (7)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:505` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `createTunedPlanCandidates` (1)

### `segmentsIntersect`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:481` | Self: 0.0% (1.2ms) | Total: 0.0% (38.7ms) | Samples: 1

**Called by:**
- `(anonymous)` (24)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `distanceSegmentToSegment` (20)
- `distanceSegmentToSegment` (5)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:559` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `map` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1365` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `generatorResume` (1)

### `convertRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:497` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `finalizeSourceOriginRoutes` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1038` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `some` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1994` | Self: 0.0% (1.2ms) | Total: 0.0% (2.8ms) | Samples: 1

**Called by:**
- `fanoutPlansAreClear` (2)

**Calls:**
- `hypot` (1)

### `segmentIsClearOfObstacles`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1783` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `planIsStaticallyClear` (1)

### `candidatesAreMutuallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:573` | Self: 0.0% (1.2ms) | Total: 0.0% (1.2ms) | Samples: 1

**Called by:**
- `candidatesAreCompatible` (1)

### `step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js:34` | Self: 0.0% (1.1ms) | Total: 100.0% (123.78s) | Samples: 1

**Called by:**
- `(module)` (29549)
- `stepActiveOperation` (29536)
- `_step` (22249)

**Calls:**
- `_step` (29539)
- `_step` (22252)
- `_step` (22231)
- `_step` (7278)
- `_step` (14)
- `_step` (9)
- `_step` (4)
- `_step` (2)
- `_step` (1)
- `_step` (1)
- `_step` (1)
- `_step` (1)

### `stepActiveOperation`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1649` | Self: 0.0% (1.1ms) | Total: 99.6% (44.94s) | Samples: 1

**Called by:**
- `_step` (29537)

**Calls:**
- `step` (29536)

### `extraViaIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1017` | Self: 0.0% (1.0ms) | Total: 0.5% (239.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (162)

**Calls:**
- `pointAt` (120)
- `pointAt` (41)

### `sharesNet`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:966` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `segmentIsClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:557` | Self: 0.0% (1.0ms) | Total: 0.0% (1.0ms) | Samples: 1

**Called by:**
- `flatIntoArrayWithCallback` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:900` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `generatorResume` (5)

**Calls:**
- `some` (5)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:573` | Self: 0.0% (0us) | Total: 0.0% (39.9ms) | Samples: 0

**Called by:**
- `generatorResume` (28)

**Calls:**
- `generatorResume` (17)
- `next` (11)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:600` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Called by:**
- `map` (8)

**Calls:**
- `getConnectionCandidates` (3)
- `getConnectionCandidates` (3)
- `getConnectionCandidates` (1)
- `getConnectionCandidates` (1)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:804` | Self: 0.0% (0us) | Total: 0.0% (6.1ms) | Samples: 0

**Called by:**
- `generatorResume` (4)

**Calls:**
- `add` (1)
- `add` (1)
- `add` (1)
- `add` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:761` | Self: 0.0% (0us) | Total: 0.0% (4.1ms) | Samples: 0

**Called by:**
- `filter` (3)

**Calls:**
- `pointsMatch` (3)

### `rerouteLane`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:224` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:86` | Self: 0.0% (0us) | Total: 0.0% (4.8ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (3)

**Calls:**
- `getWireMetadata` (3)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:324` | Self: 0.0% (0us) | Total: 3.6% (1.64s) | Samples: 0

**Called by:**
- `every` (1083)
- `normalizeLayeredPath` (6)

**Calls:**
- `every` (1089)

### `step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 75.0% (33.84s) | Samples: 0

**Called by:**
- `_step` (22231)

**Calls:**
- `_step` (22231)

### `evaluateLayerReservedRoutingSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1294` | Self: 0.0% (0us) | Total: 1.3% (622.1ms) | Samples: 0

**Called by:**
- `generatorResume` (410)

**Calls:**
- `generatorResume` (404)
- `next` (6)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:345` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (1)

**Calls:**
- `find` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:277` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `getLayerReservedBusTargets` (1)
- `getLayerReservedBusTargets` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1428` | Self: 0.0% (0us) | Total: 0.0% (5.7ms) | Samples: 0

**Called by:**
- `stepOnce` (4)

**Calls:**
- `pointAt` (4)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:698` | Self: 0.0% (0us) | Total: 0.0% (20.7ms) | Samples: 0

**Called by:**
- `generatorResume` (12)

**Calls:**
- `generatorResume` (12)

### `bound _setup`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (67.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (47)

**Calls:**
- `_setup` (47)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:309` | Self: 0.0% (0us) | Total: 0.0% (23.3ms) | Samples: 0

**Called by:**
- `filter` (16)

**Calls:**
- `obstacleSharesElectricalNet` (15)
- `obstacleSharesElectricalNet` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:166` | Self: 0.0% (0us) | Total: 0.0% (9.8ms) | Samples: 0

**Called by:**
- `step` (4)

**Calls:**
- `(anonymous)` (4)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/svgson@5.3.1/node_modules/svgson/dist/svgson.cjs.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1888` | Self: 0.0% (0us) | Total: 9.6% (4.37s) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (2869)

**Calls:**
- `acceptCandidate` (2851)
- `acceptCandidate` (8)
- `acceptCandidate` (8)
- `acceptCandidate` (2)

### `node:crypto`
`node:crypto:2` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `flatIntoArrayWithCallback`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (16.1ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (9)
- `getBlockingCopper` (2)
- `repairBoundaryRouteTails` (1)

**Calls:**
- `map` (3)
- `splitSegmentAtDenseBounds` (2)
- `flatIntoArray` (2)
- `splitSegmentAtDenseBounds` (2)
- `splitSegmentAtDenseBounds` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:284` | Self: 0.0% (0us) | Total: 0.1% (50.9ms) | Samples: 0

**Called by:**
- `generatorResume` (34)

**Calls:**
- `generatorResume` (34)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:170` | Self: 0.0% (0us) | Total: 24.5% (11.06s) | Samples: 0

**Called by:**
- `step` (7278)

**Calls:**
- `generatorResume` (7272)
- `next` (6)

### `setup`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.1% (67.7ms) | Samples: 0

**Called by:**
- `routeReservedViaBusesWorker` (47)

**Calls:**
- `(anonymous)` (47)

### `connectorCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1164` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `every` (1)

### `staticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2352` | Self: 0.0% (0us) | Total: 4.6% (2.09s) | Samples: 0

**Called by:**
- `(anonymous)` (1366)

**Calls:**
- `planIsStaticallyClear` (1276)
- `planIsStaticallyClear` (35)
- `planIsStaticallyClear` (23)
- `planIsStaticallyClear` (15)
- `planIsStaticallyClear` (10)
- `planIsStaticallyClear` (2)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)

### `normalizeLayeredPath`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:128` | Self: 0.0% (0us) | Total: 0.0% (18.6ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (6)
- `shortcutFanoutPlans` (5)
- `shortcutSection` (1)

**Calls:**
- `clear` (6)
- `segmentIsClear` (4)
- `every` (2)

### `chooseSourceGrid`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:769` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `findPointObstacleMatches` (2)

### `async (anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (51.0ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)
- `requestInstantiate` (1)

**Calls:**
- `parseModule` (29)
- `resolve` (1)
- `async (anonymous)` (1)
- `requestFetch` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1053` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `some` (2)

**Calls:**
- `some` (2)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2128` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `fanoutPlansAreClear` (3)

**Calls:**
- `includes` (3)

### `rerouteBusWithRetainedBoundaryTailsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:899` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `generatorResume` (2)

### `require`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.4ms) | Samples: 0

**Called by:**
- `bound require` (8)

**Calls:**
- `anonymous` (8)

### `getConnectionCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:405` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `every` (3)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1052` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `some` (2)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:699` | Self: 0.0% (0us) | Total: 0.3% (152.6ms) | Samples: 0

**Called by:**
- `generatorResume` (100)

**Calls:**
- `matchBusPlanLengths` (100)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:88` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (3)

**Calls:**
- `copyDataProperties` (3)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:85` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (1)

**Calls:**
- `cloneObject` (1)

### `createElectricalNetIdentity`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:85` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `getElectricalNetIdentity` (2)

**Calls:**
- `getKnownNetKeys` (2)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:10` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `planIsClearOfPlans` (1)

**Calls:**
- `(anonymous)` (1)

### `queryVia`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:41` | Self: 0.0% (0us) | Total: 0.0% (9.5ms) | Samples: 0

**Called by:**
- `planIsClearOfPlans` (6)

**Calls:**
- `query` (4)
- `query` (2)

### `evaluateLayerReservedRoutingSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1307` | Self: 0.0% (0us) | Total: 22.9% (10.35s) | Samples: 0

**Called by:**
- `generatorResume` (6813)

**Calls:**
- `generatorResume` (6812)
- `next` (1)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:681` | Self: 0.0% (0us) | Total: 0.1% (73.2ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (49)

**Calls:**
- `validateRoutedCopperDrc` (10)
- `validateRoutedCopperDrc` (8)
- `validateRoutedCopperDrc` (7)
- `validateRoutedCopperDrc` (6)
- `validateRoutedCopperDrc` (5)
- `validateRoutedCopperDrc` (4)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2006` | Self: 0.0% (0us) | Total: 0.0% (10.9ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (7)

**Calls:**
- `(anonymous)` (7)

### `augmentMatching`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:692` | Self: 0.0% (0us) | Total: 0.0% (17.6ms) | Samples: 0

**Called by:**
- `augmentMatching` (12)

**Calls:**
- `getViableCandidates` (12)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1846` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `convertRoutes` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:391` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `filter` (1)

**Calls:**
- `some` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2438` | Self: 0.0% (0us) | Total: 0.1% (55.2ms) | Samples: 0

**Called by:**
- `every` (37)

**Calls:**
- `every` (37)

### `getLayerReservedBusTargets`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:161` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `routeLayerReservedAttemptSteps` (1)

**Calls:**
- `some` (1)

### `forEach`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (1)

**Calls:**
- `addRoute` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1026` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `every` (1)

**Calls:**
- `distancePointToSegment` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/fromTransformAttribute.js:7` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2105` | Self: 0.0% (0us) | Total: 0.0% (37.3ms) | Samples: 0

**Called by:**
- `filter` (25)

**Calls:**
- `every` (22)
- `mutuallyClear` (3)

### `routeViaMinimalWindingAlternativesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1779` | Self: 0.0% (0us) | Total: 0.0% (9.9ms) | Samples: 0

**Called by:**
- `generatorResume` (7)

**Calls:**
- `generatorResume` (7)

### `acceptCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1591` | Self: 0.0% (0us) | Total: 0.0% (17.3ms) | Samples: 0

**Called by:**
- `matchBusPlanLengthsWithBudget` (8)
- `matchBusPlanLengthsWithBudget` (2)
- `matchBusPlanLengthsWithBudget` (2)

**Calls:**
- `getPlansForIndices` (12)

### `getRoutedTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:48` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `getRouteViaSpanLayers` (1)

### `abs`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `normalizeLayeredPath` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1525` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `segmentIsClear` (1)

### `repairWideSourceLengthsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:100` | Self: 0.0% (0us) | Total: 4.5% (2.05s) | Samples: 0

**Called by:**
- `generatorResume` (1361)

**Calls:**
- `shortcutFanoutPlans` (1258)
- `shortcutFanoutPlans` (80)
- `shortcutFanoutPlans` (10)
- `shortcutFanoutPlans` (7)
- `shortcutFanoutPlans` (5)
- `shortcutFanoutPlans` (1)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:150` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (1)

**Calls:**
- `cloneObject` (1)

### `segmentsProperlyCross`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:60` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `distanceSegmentToSegment` (1)

**Calls:**
- `cross` (1)

### `hasAdjacencyExemption`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:513` | Self: 0.0% (0us) | Total: 0.2% (125.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (83)

**Calls:**
- `pointsMatch` (83)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:340` | Self: 0.0% (0us) | Total: 0.3% (159.1ms) | Samples: 0

**Called by:**
- `every` (105)

**Calls:**
- `every` (105)

### `getRouteViaSpanLayers`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:57` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `getRoutedTraceCopper` (1)

**Calls:**
- `getViaSpanLayers` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:71` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (1)

**Calls:**
- `getPlanVias` (1)

### `retryLayerReservedRoutingSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/retry-layer-reserved-routing.ts:27` | Self: 0.0% (0us) | Total: 24.5% (11.05s) | Samples: 0

**Called by:**
- `generatorResume` (7277)

**Calls:**
- `generatorResume` (7271)
- `next` (6)

### `getConnectionCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:389` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `every` (3)

### `RouteSegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:17` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `planIsClearOfPlans` (1)

**Calls:**
- `max` (1)

### `getConnectionCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:346` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `Set` (1)

### `prepareFanoutBuses`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1164` | Self: 0.0% (0us) | Total: 0.0% (16.2ms) | Samples: 0

**Called by:**
- `FanoutSolver` (1)

**Calls:**
- `findComponentGrids` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2101` | Self: 0.0% (0us) | Total: 0.0% (8.1ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (5)

**Calls:**
- `(anonymous)` (5)

### `internal:promisify`
`internal:promisify:53` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `internal:streams/lazy_transform`
`internal:streams/lazy_transform:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `getPlanVias`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1831` | Self: 0.0% (0us) | Total: 0.0% (34.1ms) | Samples: 0

**Called by:**
- `planIsClearOfPlans` (9)
- `planIsClearOfPlans` (8)
- `planIsClearOfPlans` (5)

**Calls:**
- `filter` (22)

### `rerouteExistingBoundaryTailsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:402` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `findComponentGrids`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:332` | Self: 0.0% (0us) | Total: 0.0% (16.2ms) | Samples: 0

**Called by:**
- `prepareFanoutBuses` (1)

**Calls:**
- `getAlignedPitch` (1)

### `rerouteIndividualBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:209` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `getSourceReservations` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1202` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `map` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1266` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `forEachCellNearCircle` (1)

**Calls:**
- `shouldSkipFixedPortHalo` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:400` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `repairBoundaryRouteTails` (1)
- `shortcutFanoutPlans` (1)

**Calls:**
- `viaDrillsAreClear` (1)
- `viaDrillsAreClear` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1854` | Self: 0.0% (0us) | Total: 1.4% (644.9ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (423)

**Calls:**
- `acceptCandidate` (421)
- `acceptCandidate` (2)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:357` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `repairWideSourceLengthsSteps` (5)

**Calls:**
- `normalizeLayeredPath` (5)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:312` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `repairBoundaryRouteTails` (1)

**Calls:**
- `filter` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:926` | Self: 0.0% (0us) | Total: 0.6% (310.3ms) | Samples: 0

**Called by:**
- `generatorResume` (202)

**Calls:**
- `createPlanWithSegments` (163)
- `createPlanWithSegments` (33)
- `createPlanWithSegments` (2)
- `createPlanWithSegments` (2)
- `createPlanWithSegments` (1)
- `createPlanWithSegments` (1)

### `augmentMatching`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:711` | Self: 0.0% (0us) | Total: 1.6% (757.2ms) | Samples: 0

**Called by:**
- `augmentMatching` (486)
- `matchComponent` (13)

**Calls:**
- `augmentMatching` (486)
- `augmentMatching` (12)
- `augmentMatching` (1)

### `rerouteTwoOverlongLanesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:733` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `getSourceReservations` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1027` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `cloneObject` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2007` | Self: 0.0% (0us) | Total: 0.0% (31.9ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (22)

**Calls:**
- `filter` (22)

### `Hy`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ry` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1034` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `every` (1)

**Calls:**
- `distanceSegmentToObstacle` (1)

### `FanoutSolver`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1117` | Self: 0.0% (0us) | Total: 0.0% (20.5ms) | Samples: 0

**Called by:**
- `(module)` (4)

**Calls:**
- `prepareFanoutBuses` (3)
- `prepareFanoutBuses` (1)

### `normalizeLayeredPath`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:134` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `shortcutSection` (1)

**Calls:**
- `abs` (1)

### `getSourceReservations`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:173` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `rerouteIndividualBusesSteps` (1)

**Calls:**
- `every` (1)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:323` | Self: 0.0% (0us) | Total: 0.0% (2.6ms) | Samples: 0

**Called by:**
- `every` (2)

**Calls:**
- `inside` (2)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:338` | Self: 0.0% (0us) | Total: 0.6% (273.8ms) | Samples: 0

**Called by:**
- `every` (184)

**Calls:**
- `query` (106)
- `querySegment` (77)
- `querySegment` (1)

### `search`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1811` | Self: 0.0% (0us) | Total: 0.0% (19.9ms) | Samples: 0

**Called by:**
- `findMultiSpanCandidate` (13)

**Calls:**
- `acceptCandidate` (13)

### `findPointObstacleMatches`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:390` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `prepareConnection` (1)

**Calls:**
- `filter` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:577` | Self: 0.0% (0us) | Total: 1.3% (613.1ms) | Samples: 0

**Called by:**
- `generatorResume` (404)

**Calls:**
- `generatorResume` (404)

### `addRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1770` | Self: 0.0% (0us) | Total: 0.0% (2.5ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (1)
- `forEach` (1)

**Calls:**
- `add` (1)
- `add` (1)

### `bound or`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `eb`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ry` (1)

### `internal:streams/transform`
`internal:streams/transform:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:97` | Self: 0.0% (0us) | Total: 0.0% (34.0ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (22)

**Calls:**
- `pointsMatch` (22)

### `getViaChannelGridPhase`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:171` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `routeReservedViaBusesWorker` (2)

**Calls:**
- `getAxisPhase` (1)
- `getAxisPhase` (1)

### `matchComponentDogboneViaSites`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:749` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `prepareSourceOriginReservations` (1)

**Calls:**
- `getComponentMatchingInputs` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:231` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `uniqueSortedCoordinates` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/xml-reader@2.4.3/node_modules/xml-reader/dist/reader.js:4` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:19` | Self: 0.0% (0us) | Total: 0.0% (11.1ms) | Samples: 0

**Called by:**
- `evaluate` (5)

**Calls:**
- `sleep` (5)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/fflate@0.8.3/node_modules/fflate/esm/index.mjs:18` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `evaluate` (1)

**Calls:**
- `bound require` (1)

### `getSourceReservations`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:179` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `rerouteTwoOverlongLanesSteps` (2)

**Calls:**
- `map` (2)

### `routeSourceOriginBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:139` | Self: 0.0% (0us) | Total: 0.0% (39.9ms) | Samples: 0

**Called by:**
- `generatorResume` (28)

**Calls:**
- `generatorResume` (17)
- `next` (11)

### `validatedPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1673` | Self: 0.0% (0us) | Total: 0.8% (375.4ms) | Samples: 0

**Called by:**
- `generatorResume` (248)

**Calls:**
- `fullPlansAreValid` (144)
- `fullPlansAreValid` (104)

### `getBlockingCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:556` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `routeViaMinimalWindingAlternativesSteps` (2)

**Calls:**
- `flatIntoArrayWithCallback` (2)

### `getElectricalNetIdentity`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts:141` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `obstacleSharesElectricalNet` (2)

**Calls:**
- `createElectricalNetIdentity` (2)

### `linkAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (12.1ms) | Samples: 0

**Called by:**
- `async loadAndEvaluateModule` (8)

**Calls:**
- `link` (8)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1316` | Self: 0.0% (0us) | Total: 0.0% (10.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (7)

**Calls:**
- `every` (7)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:637` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (1)

**Calls:**
- `flatIntoArrayWithCallback` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:634` | Self: 0.0% (0us) | Total: 1.2% (562.1ms) | Samples: 0

**Called by:**
- `generatorResume` (373)

**Calls:**
- `shortcutFanoutPlans` (231)
- `shortcutFanoutPlans` (99)
- `shortcutFanoutPlans` (34)
- `shortcutFanoutPlans` (7)
- `shortcutFanoutPlans` (1)
- `shortcutFanoutPlans` (1)

### `routeViaMinimalWindingAlternativesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1861` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `map` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:867` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `some` (2)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1844` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `addRoute` (1)

### `packBoundaryBusIntervals`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/pack-boundary-bus-intervals.ts:70` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `getLayerReservedBusTargets` (1)

**Calls:**
- `map` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1887` | Self: 0.0% (0us) | Total: 4.1% (1.87s) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (1232)

**Calls:**
- `generatorResume` (917)
- `next` (315)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:631` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (8)

**Calls:**
- `fanoutPlansAreClear` (7)
- `fanoutPlansAreClear` (1)

### `getRoutedTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts:27` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `getCopperLayerNames` (1)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1816` | Self: 0.0% (0us) | Total: 0.0% (12.7ms) | Samples: 0

**Called by:**
- `normalizeLayeredPath` (4)
- `normalizeLayeredPath` (3)
- `(anonymous)` (1)

**Calls:**
- `nearby` (5)
- `nearby` (3)

### `pointIsInsideObstacle`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:92` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `filter` (1)

**Calls:**
- `hypot` (1)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:259` | Self: 0.0% (0us) | Total: 0.0% (28.0ms) | Samples: 0

**Called by:**
- `repairWideSourceLengthsSteps` (10)
- `routeLayerReservedAttemptSteps` (7)

**Calls:**
- `RouteSegmentSpatialIndex` (16)
- `RouteSegmentSpatialIndex` (1)

### `requestSatisfyUtil`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `requestInstantiate` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1897` | Self: 0.0% (0us) | Total: 0.0% (35.8ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (23)

**Calls:**
- `findMultiSpanCandidate` (23)

### `requestInstantiate`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `requestSatisfyUtil` (1)

**Calls:**
- `async (anonymous)` (1)

### `prepareSourceOriginReservations`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:87` | Self: 0.0% (0us) | Total: 0.0% (16.6ms) | Samples: 0

**Called by:**
- `generatorResume` (11)

**Calls:**
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (2)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1045` | Self: 0.0% (0us) | Total: 0.1% (67.7ms) | Samples: 0

**Called by:**
- `setup` (47)

**Calls:**
- `bound _setup` (47)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1037` | Self: 0.0% (0us) | Total: 0.3% (136.4ms) | Samples: 0

**Called by:**
- `some` (93)

**Calls:**
- `some` (93)

### `requestFetch`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `fetch` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:332` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `every` (1)

**Calls:**
- `hypot` (1)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1737` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `convertRoutes` (1)

### `mutuallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2437` | Self: 0.0% (0us) | Total: 0.0% (9.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)
- `(anonymous)` (3)

**Calls:**
- `every` (6)

### `markViaFootprint`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (7.9ms) | Samples: 0

**Called by:**
- `finalizeRoute` (5)

**Calls:**
- `forEachCellNearCircle` (5)

### `routeLayerReservedBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:256` | Self: 0.0% (0us) | Total: 24.5% (11.05s) | Samples: 0

**Called by:**
- `generatorResume` (7277)

**Calls:**
- `generatorResume` (7271)
- `next` (6)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2418` | Self: 0.0% (0us) | Total: 6.5% (2.97s) | Samples: 0

**Called by:**
- `acceptCandidate` (1943)
- `repairBoundaryRouteTails` (12)

**Calls:**
- `clearOf` (1934)
- `clearOf` (14)
- `clearOf` (5)
- `clearOf` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts:53` | Self: 0.0% (0us) | Total: 0.4% (190.8ms) | Samples: 0

**Called by:**
- `computeMoveCostAndRips` (124)

**Calls:**
- `bound fillViaOccupants` (63)
- `fillViaOccupants` (61)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1068` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `some` (1)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:925` | Self: 0.0% (0us) | Total: 0.0% (3.3ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `getViaChannelGridPhase` (2)

### `normalizeLayeredPath`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:91` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `shortcutSection` (1)

**Calls:**
- `sign` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/svgson@5.3.1/node_modules/svgson/dist/svgson.cjs.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:348` | Self: 0.0% (0us) | Total: 4.9% (2.24s) | Samples: 0

**Called by:**
- `repairWideSourceLengthsSteps` (1258)
- `routeLayerReservedAttemptSteps` (231)

**Calls:**
- `shortcutSection` (1470)
- `shortcutSection` (8)
- `shortcutSection` (6)
- `shortcutSection` (3)
- `shortcutSection` (2)

### `matchComponent`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:718` | Self: 0.0% (0us) | Total: 0.0% (19.4ms) | Samples: 0

**Called by:**
- `matchComponentDogboneViaSites` (13)

**Calls:**
- `augmentMatching` (13)

### `matchComponent`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:722` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `matchComponentDogboneViaSites` (1)

**Calls:**
- `map` (1)

### `acceptCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1592` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `matchBusPlanLengthsWithBudget` (2)

**Calls:**
- `getBusSkew` (2)

### `classifyStaticEdge`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1343` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `getOutwardSourcePadOwner` (1)

### `routeSourceOriginBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:239` | Self: 0.0% (0us) | Total: 0.1% (46.5ms) | Samples: 0

**Called by:**
- `generatorResume` (31)

**Calls:**
- `generatorResume` (31)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:420` | Self: 0.0% (0us) | Total: 0.1% (62.7ms) | Samples: 0

**Called by:**
- `routeLayerReservedAttemptSteps` (34)
- `repairWideSourceLengthsSteps` (7)

**Calls:**
- `fanoutPlansAreClear` (41)

### `getComponentMatchingInputs`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:223` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `matchComponentDogboneViaSites` (1)

**Calls:**
- `map` (1)

### `rerouteOverlongBusLanesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:279` | Self: 0.0% (0us) | Total: 0.0% (20.7ms) | Samples: 0

**Called by:**
- `generatorResume` (12)

**Calls:**
- `generatorResume` (12)

### `fullPlansAreValid`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1586` | Self: 0.0% (0us) | Total: 0.4% (217.7ms) | Samples: 0

**Called by:**
- `validatedPlans` (144)

**Calls:**
- `fanoutPlansAreClear` (108)
- `fanoutPlansAreClear` (36)

### `createMeanderPoints`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:759` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (1)

**Calls:**
- `cloneObject` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1323` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `connectorCandidates` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:302` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `sort` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6661` | Self: 0.0% (0us) | Total: 99.6% (44.95s) | Samples: 0

**Called by:**
- `step` (29539)

**Calls:**
- `stepActiveOperation` (29537)
- `stepActiveOperation` (2)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:777` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `add` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1076` | Self: 0.0% (0us) | Total: 0.5% (255.4ms) | Samples: 0

**Called by:**
- `generatorResume` (167)

**Calls:**
- `replacementCopperIsSelfClear` (110)
- `replacementCopperIsSelfClear` (20)
- `replacementCopperIsSelfClear` (13)
- `replacementCopperIsSelfClear` (10)
- `replacementCopperIsSelfClear` (6)
- `replacementCopperIsSelfClear` (2)
- `replacementCopperIsSelfClear` (2)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)
- `replacementCopperIsSelfClear` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2089` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (3)

**Calls:**
- `generatorResume` (3)

### `generatorResume`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (59.33s) | Samples: 0

**Called by:**
- `_step` (7272)
- `routeLayerReservedBusesSteps` (7271)
- `retryLayerReservedRoutingSteps` (7271)
- `evaluateLayerReservedRoutingSteps` (6812)
- `routeLayerReservedAttemptSteps` (6318)
- `matchBusPlanLengthsWithBudget` (917)
- `next` (638)
- `(anonymous)` (421)
- `routeLayerReservedAttemptSteps` (404)
- `evaluateLayerReservedRoutingSteps` (404)
- `createTunedPlanCandidates` (398)
- `routeSourceOriginBusesSteps` (360)
- `matchBusPlanLengthsWithBudget` (242)
- `evaluateLayerReservedRoutingSteps` (55)
- `matchBusPlanLengthsWithBudget` (54)
- `routeLayerReservedAttemptSteps` (34)
- `routeSourceOriginBusesSteps` (31)
- `routeLayerReservedAttemptSteps` (17)
- `routeSourceOriginBusesSteps` (17)
- `routeSourceOriginBusesSteps` (13)
- `routeLayerReservedAttemptSteps` (12)
- `rerouteOverlongBusLanesSteps` (12)
- `rerouteLane` (10)
- `performIteration` (10)
- `routeViaMinimalWindingAlternativesSteps` (7)
- `shortenCompletePlans` (7)
- `shortenCompletePlans` (5)
- `matchBusPlanLengthsWithBudget` (4)
- `matchBusPlanLengthsWithBudget` (3)
- `repairBoundaryRouteTails` (3)
- `routeLayerReservedAttemptSteps` (3)
- `rerouteBusWithRetainedBoundaryTailsSteps` (2)
- `rerouteExistingBoundaryTailsSteps` (1)
- `routeLayerReservedAttemptSteps` (1)
- `rerouteExistingAndShortenedBoundaryTailsSteps` (1)
- `rerouteLane` (1)
- `rerouteBusWithRetainedBoundaryTailsSteps` (1)

**Calls:**
- `retryLayerReservedRoutingSteps` (7277)
- `routeLayerReservedBusesSteps` (7277)
- `evaluateLayerReservedRoutingSteps` (6813)
- `routeLayerReservedAttemptSteps` (6318)
- `repairWideSourceLengthsSteps` (4957)
- `repairWideSourceLengthsSteps` (1361)
- `createTunedPlanCandidates` (588)
- `createTunedPlanCandidates` (581)
- `(anonymous)` (432)
- `evaluateLayerReservedRoutingSteps` (410)
- `routeLayerReservedAttemptSteps` (404)
- `routeLayerReservedAttemptSteps` (373)
- `createTunedPlanCandidates` (361)
- `routeSourceOriginBusesSteps` (360)
- `validatedPlans` (248)
- `createTunedPlanCandidates` (202)
- `createExtendedFoldCandidates` (167)
- `finalizeSourceOriginRoutes` (105)
- `routeLayerReservedAttemptSteps` (100)
- `createExtendedFoldCandidates` (98)
- `createExtendedFoldCandidates` (76)
- `evaluateLayerReservedRoutingSteps` (55)
- `routeReservedViaBusesWorker` (47)
- `routeLayerReservedAttemptSteps` (34)
- `routeSourceOriginBusesSteps` (31)
- `routeSourceOriginBusesSteps` (28)
- `routeLayerReservedAttemptSteps` (28)
- `prepareSourceOriginReservations` (23)
- `createExtendedFoldCandidates` (20)
- `createExtendedFoldCandidates` (19)
- `createTunedPlanCandidates` (15)
- `finalizeSourceOriginRoutes` (13)
- `routeSourceOriginBusesSteps` (13)
- `rerouteOverlongBusLanesSteps` (12)
- `createExtendedFoldCandidates` (12)
- `routeLayerReservedAttemptSteps` (12)
- `createTunedPlanCandidates` (11)
- `prepareSourceOriginReservations` (11)
- `rerouteLane` (10)
- `createTunedPlanCandidates` (10)
- `createTunedPlanCandidates` (9)
- `shortenCompletePlans` (7)
- `createTunedPlanCandidates` (7)
- `routeViaMinimalWindingAlternativesSteps` (7)
- `createTunedPlanCandidates` (6)
- `shortenCompletePlans` (5)
- `createTunedPlanCandidates` (5)
- `routeReservedViaBusesWorker` (4)
- `routeReservedViaBusesWorker` (4)
- `createTunedPlanCandidates` (3)
- `routeViaMinimalWindingAlternativesSteps` (3)
- `routeLayerReservedAttemptSteps` (3)
- `createExtendedFoldCandidates` (3)
- `createTunedPlanCandidates` (2)
- `createTunedPlanCandidates` (2)
- `createExtendedFoldCandidates` (2)
- `(anonymous)` (2)
- `createTunedPlanCandidates` (2)
- `routeViaMinimalWindingAlternativesSteps` (2)
- `routeReservedViaBusesWorker` (2)
- `createExtendedFoldCandidates` (2)
- `rerouteTwoOverlongLanesSteps` (2)
- `rerouteBusWithRetainedBoundaryTailsSteps` (2)
- `routeLayerReservedAttemptSteps` (2)
- `routeLayerReservedAttemptSteps` (1)
- `routeLayerReservedAttemptSteps` (1)
- `(anonymous)` (1)
- `finalizeSourceOriginRoutes` (1)
- `repairBusLengthsWithTransitSteps` (1)
- `rerouteExistingAndShortenedBoundaryTailsSteps` (1)
- `rerouteLane` (1)
- `createExtendedFoldCandidates` (1)
- `finalizeSourceOriginRoutes` (1)
- `routeLayerReservedAttemptSteps` (1)
- `routeReservedViaBusesWorker` (1)
- `createTunedPlanCandidates` (1)
- `createExtendedFoldCandidates` (1)
- `createExtendedFoldCandidates` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `createExtendedFoldCandidates` (1)
- `routeViaMinimalWindingAlternativesSteps` (1)
- `routeReservedViaBusesWorker` (1)
- `finalizeSourceOriginRoutes` (1)
- `finalizeSourceOriginRoutes` (1)
- `rerouteIndividualBusesSteps` (1)
- `rerouteLane` (1)
- `rerouteBusWithRetainedBoundaryTailsSteps` (1)
- `(anonymous)` (1)
- `rerouteExistingBoundaryTailsSteps` (1)
- `createTunedPlanCandidates` (1)
- `routeReservedViaBusesWorker` (1)
- `finalizeSourceOriginRoutes` (1)
- `(anonymous)` (1)
- `routeViaMinimalWindingAlternativesSteps` (1)
- `finalizeSourceOriginRoutes` (1)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:392` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `repairWideSourceLengthsSteps` (1)

**Calls:**
- `findIndex` (1)

### `getBoundaryTargetTrack`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:461` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `getPerpendicularAxis` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2102` | Self: 0.0% (0us) | Total: 0.0% (37.3ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (25)

**Calls:**
- `filter` (25)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:933` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:252` | Self: 0.0% (0us) | Total: 75.0% (33.84s) | Samples: 0

**Called by:**
- `step` (22231)

**Calls:**
- `step` (22231)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1827` | Self: 0.0% (0us) | Total: 0.2% (105.7ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (68)

**Calls:**
- `generatorResume` (54)
- `next` (13)
- `createExtendedFoldCandidates` (1)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:612` | Self: 0.0% (0us) | Total: 0.0% (4.4ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (3)

**Calls:**
- `generatorResume` (3)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2100` | Self: 0.0% (0us) | Total: 1.2% (568.9ms) | Samples: 0

**Called by:**
- `clearOf` (376)

**Calls:**
- `RouteSegmentSpatialIndex` (310)
- `RouteSegmentSpatialIndex` (55)
- `RouteSegmentSpatialIndex` (6)
- `RouteSegmentSpatialIndex` (3)
- `RouteSegmentSpatialIndex` (1)
- `RouteSegmentSpatialIndex` (1)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:971` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `reduce` (1)

### `getViaSpanLayers`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts:44` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `getRouteViaSpanLayers` (1)

**Calls:**
- `getLayerSpan` (1)

### `rerouteBusWithRetainedBoundaryTailsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:897` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1966` | Self: 0.0% (0us) | Total: 0.0% (998us) | Samples: 0

**Called by:**
- `staticallyClear` (1)

**Calls:**
- `getPlanVias` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:433` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `cloneObject` (1)

### `bound require`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (17.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(module)` (1)

**Calls:**
- `require` (8)
- `anonymous` (3)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:151` | Self: 0.0% (0us) | Total: 75.0% (33.87s) | Samples: 0

**Called by:**
- `step` (22252)

**Calls:**
- `step` (22249)
- `step` (2)
- `step` (1)

### `getAxisPhase`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:74` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `getViaChannelGridPhase` (1)

**Calls:**
- `toSorted` (1)

### `acceptCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1593` | Self: 0.0% (0us) | Total: 11.3% (5.09s) | Samples: 0

**Called by:**
- `matchBusPlanLengthsWithBudget` (2851)
- `matchBusPlanLengthsWithBudget` (421)
- `matchBusPlanLengthsWithBudget` (58)
- `search` (13)

**Calls:**
- `(anonymous)` (1943)
- `(anonymous)` (1329)
- `(anonymous)` (69)
- `(anonymous)` (2)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:678` | Self: 0.0% (0us) | Total: 0.1% (59.7ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (38)

**Calls:**
- `(anonymous)` (26)
- `(anonymous)` (12)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (198.4ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (108)
- `async asyncModuleEvaluation` (26)

**Calls:**
- `moduleEvaluation` (108)
- `evaluate` (26)

### `rerouteLane`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:194` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `filter` (1)

### `shouldUseSourceOriginRouting`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:412` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `_step` (1)

**Calls:**
- `filter` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:952` | Self: 0.0% (0us) | Total: 1.9% (885.3ms) | Samples: 0

**Called by:**
- `generatorResume` (581)

**Calls:**
- `generatorResume` (398)
- `next` (183)

### `rerouteLane`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts:216` | Self: 0.0% (0us) | Total: 0.0% (17.1ms) | Samples: 0

**Called by:**
- `generatorResume` (10)

**Calls:**
- `generatorResume` (10)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:809` | Self: 0.0% (0us) | Total: 0.0% (3.5ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `filter` (2)

### `t`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `ry` (2)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:955` | Self: 0.0% (0us) | Total: 0.0% (4.3ms) | Samples: 0

**Called by:**
- `generatorResume` (3)

**Calls:**
- `generatorResume` (3)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:826` | Self: 0.0% (0us) | Total: 0.0% (16.3ms) | Samples: 0

**Called by:**
- `generatorResume` (11)

**Calls:**
- `toSorted` (11)

### `clearOf`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2397` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `WeakMap` (2)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1035` | Self: 0.0% (0us) | Total: 0.3% (143.7ms) | Samples: 0

**Called by:**
- `generatorResume` (98)

**Calls:**
- `some` (98)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1043` | Self: 0.0% (0us) | Total: 0.2% (101.4ms) | Samples: 0

**Called by:**
- `some` (69)

**Calls:**
- `pointsMatch` (69)

### `routeViaMinimalWindingAlternativesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:979` | Self: 0.0% (0us) | Total: 0.0% (7.9ms) | Samples: 0

**Called by:**
- `generatorResume` (3)

**Calls:**
- `createSegmentIndex` (3)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:444` | Self: 0.0% (0us) | Total: 0.5% (270.0ms) | Samples: 0

**Called by:**
- `routeLayerReservedAttemptSteps` (99)
- `repairWideSourceLengthsSteps` (80)

**Calls:**
- `validateRoutedCopperDrc` (57)
- `validateRoutedCopperDrc` (51)
- `validateRoutedCopperDrc` (18)
- `validateRoutedCopperDrc` (11)
- `validateRoutedCopperDrc` (11)
- `validateRoutedCopperDrc` (8)
- `validateRoutedCopperDrc` (5)
- `validateRoutedCopperDrc` (4)
- `validateRoutedCopperDrc` (4)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (2)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:2005` | Self: 0.0% (0us) | Total: 0.0% (6.7ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (4)

**Calls:**
- `generatorResume` (4)

### `Cx`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `(anonymous)` (1)

### `getViableCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:676` | Self: 0.0% (0us) | Total: 0.0% (17.6ms) | Samples: 0

**Called by:**
- `augmentMatching` (12)

**Calls:**
- `filter` (12)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:830` | Self: 0.0% (0us) | Total: 0.0% (6.2ms) | Samples: 0

**Called by:**
- `generatorResume` (4)

**Calls:**
- `add` (2)
- `add` (1)
- `add` (1)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:627` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (1)

**Calls:**
- `pointsMatch` (1)

### `matchComponent`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:597` | Self: 0.0% (0us) | Total: 0.0% (12.0ms) | Samples: 0

**Called by:**
- `matchComponentDogboneViaSites` (8)

**Calls:**
- `map` (8)

### `planIsClearOfPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2097` | Self: 0.0% (0us) | Total: 0.0% (24.2ms) | Samples: 0

**Called by:**
- `clearOf` (16)

**Calls:**
- `getPlanVias` (9)
- `getPlanVias` (6)
- `getPlanVias` (1)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:577` | Self: 0.0% (0us) | Total: 0.2% (106.5ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (57)
- `createExtendedFoldCandidates` (13)

**Calls:**
- `pointsMatch` (70)

### `segmentsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts:213` | Self: 0.0% (0us) | Total: 0.3% (152.8ms) | Samples: 0

**Called by:**
- `replacementCopperIsSelfClear` (62)
- `every` (24)
- `planIsClearOfPlans` (15)
- `candidatesAreCompatible` (1)

**Calls:**
- `distanceSegmentToSegment` (60)
- `distanceSegmentToSegment` (13)
- `distanceSegmentToSegment` (11)
- `distanceSegmentToSegment` (9)
- `distanceSegmentToSegment` (8)
- `distanceSegmentToSegment` (1)

### `shortcutSection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:158` | Self: 0.0% (0us) | Total: 0.0% (4.7ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (3)

**Calls:**
- `normalizeLayeredPath` (1)
- `normalizeLayeredPath` (1)
- `normalizeLayeredPath` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:908` | Self: 0.0% (0us) | Total: 1.2% (551.7ms) | Samples: 0

**Called by:**
- `generatorResume` (361)

**Calls:**
- `(anonymous)` (240)
- `(anonymous)` (85)
- `(anonymous)` (31)
- `(anonymous)` (3)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `getOutput`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `routeReservedViaBusesWorker` (1)

**Calls:**
- `from` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:466` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (1)

**Calls:**
- `includes` (1)

### `splitSegmentAtDenseBounds`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:427` | Self: 0.0% (0us) | Total: 0.0% (2.8ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (2)

**Calls:**
- `filter` (2)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:6667` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `step` (1)

**Calls:**
- `shouldUseSourceOriginRouting` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:256` | Self: 0.0% (0us) | Total: 0.0% (21.0ms) | Samples: 0

**Called by:**
- `step` (14)

**Calls:**
- `getSolvedRouteCount` (14)

### `createMeanderPoints`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:760` | Self: 0.0% (0us) | Total: 0.0% (7.2ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (5)

**Calls:**
- `filter` (5)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1612` | Self: 0.0% (0us) | Total: 0.0% (11.1ms) | Samples: 0

**Called by:**
- `_step` (4)
- `_step` (1)

**Calls:**
- `cloneObject` (5)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1764` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `clone` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:318` | Self: 0.0% (0us) | Total: 0.0% (3.8ms) | Samples: 0

**Called by:**
- `every` (3)

**Calls:**
- `distancePointToObstacle` (3)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:342` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (1)

**Calls:**
- `inward` (1)

### `search`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1796` | Self: 0.0% (0us) | Total: 0.0% (15.9ms) | Samples: 0

**Called by:**
- `findMultiSpanCandidate` (10)

**Calls:**
- `performIteration` (10)

### `collectPartialCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `getSolvedRouteCount` (1)

**Calls:**
- `(anonymous)` (1)

### `getAxisPhase`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts:105` | Self: 0.0% (0us) | Total: 0.0% (1.8ms) | Samples: 0

**Called by:**
- `getViaChannelGridPhase` (1)

**Calls:**
- `isFinite` (1)

### `prepareFanoutBuses`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1173` | Self: 0.0% (0us) | Total: 0.0% (4.2ms) | Samples: 0

**Called by:**
- `FanoutSolver` (3)

**Calls:**
- `map` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:397` | Self: 0.0% (0us) | Total: 0.0% (25.8ms) | Samples: 0

**Called by:**
- `reduce` (17)

**Calls:**
- `distance` (17)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:387` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (1)

**Calls:**
- `some` (1)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:562` | Self: 0.0% (0us) | Total: 0.0% (14.1ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (7)
- `createExtendedFoldCandidates` (2)

**Calls:**
- `getPlanVias` (9)

### `SegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:173` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `createSegmentIndex` (1)

**Calls:**
- `push` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:284` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `some` (3)

**Calls:**
- `distanceSegmentToSegment` (1)
- `distanceSegmentToSegment` (1)
- `distanceSegmentToSegment` (1)

### `rerouteExistingAndShortenedBoundaryTailsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-bus-with-retained-boundary-tails.ts:635` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `generatorResume` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:902` | Self: 0.0% (0us) | Total: 0.0% (7.4ms) | Samples: 0

**Called by:**
- `some` (5)

**Calls:**
- `distanceSegmentToObstacle` (5)

### `fanoutPlansAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2261` | Self: 0.0% (0us) | Total: 0.2% (126.5ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (41)
- `fullPlansAreValid` (36)
- `repairBoundaryRouteTails` (7)

**Calls:**
- `planIsStaticallyClear` (51)
- `planIsStaticallyClear` (11)
- `planIsStaticallyClear` (11)
- `planIsStaticallyClear` (4)
- `planIsStaticallyClear` (2)
- `planIsStaticallyClear` (2)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)
- `planIsStaticallyClear` (1)

### `clear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:339` | Self: 0.0% (0us) | Total: 0.1% (46.4ms) | Samples: 0

**Called by:**
- `every` (32)

**Calls:**
- `every` (32)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1745` | Self: 0.0% (0us) | Total: 0.3% (159.6ms) | Samples: 0

**Called by:**
- `generatorResume` (105)

**Calls:**
- `repairBoundaryRouteTails` (49)
- `repairBoundaryRouteTails` (38)
- `repairBoundaryRouteTails` (8)
- `repairBoundaryRouteTails` (3)
- `repairBoundaryRouteTails` (3)
- `repairBoundaryRouteTails` (1)
- `repairBoundaryRouteTails` (1)
- `repairBoundaryRouteTails` (1)
- `repairBoundaryRouteTails` (1)

### `lb`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `default` (2)

**Calls:**
- `ry` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:182` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `routeViaMinimalWindingAlternativesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:896` | Self: 0.0% (0us) | Total: 0.0% (2.2ms) | Samples: 0

**Called by:**
- `generatorResume` (2)

**Calls:**
- `getBlockingCopper` (2)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2008` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `fanoutPlansAreClear` (1)

**Calls:**
- `includes` (1)

### `link`
`[native code]` | Self: 0.0% (0us) | Total: 0.1% (85.1ms) | Samples: 0

**Called by:**
- `link` (48)
- `linkAndEvaluateModule` (8)

**Calls:**
- `link` (48)
- `moduleDeclarationInstantiation` (8)

### `createExtendedFoldCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1020` | Self: 0.0% (0us) | Total: 0.0% (19.4ms) | Samples: 0

**Called by:**
- `generatorResume` (12)

**Calls:**
- `map` (12)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2009` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `fanoutPlansAreClear` (1)

**Calls:**
- `hypot` (1)

### `async asyncModuleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 99.8% (45.05s) | Samples: 0

**Called by:**
- `async asyncModuleEvaluation` (6)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `evaluate` (29568)
- `moduleEvaluation` (26)
- `async asyncModuleEvaluation` (6)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1962` | Self: 0.0% (0us) | Total: 0.0% (7.1ms) | Samples: 0

**Called by:**
- `fanoutPlansAreClear` (4)
- `staticallyClear` (1)

**Calls:**
- `map` (5)

### `SegmentSpatialIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:158` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `createSegmentIndex` (1)

**Calls:**
- `cloneObject` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1853` | Self: 0.0% (0us) | Total: 1.0% (472.9ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (312)

**Calls:**
- `generatorResume` (242)
- `next` (70)

### `getPlansForIndices`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1100` | Self: 0.0% (0us) | Total: 0.0% (17.3ms) | Samples: 0

**Called by:**
- `acceptCandidate` (12)

**Calls:**
- `filter` (12)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2410` | Self: 0.0% (0us) | Total: 0.0% (2.7ms) | Samples: 0

**Called by:**
- `acceptCandidate` (2)

**Calls:**
- `filter` (2)

### `matchComponentDogboneViaSites`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:750` | Self: 0.0% (0us) | Total: 0.0% (32.8ms) | Samples: 0

**Called by:**
- `prepareSourceOriginReservations` (22)

**Calls:**
- `matchComponent` (13)
- `matchComponent` (8)
- `matchComponent` (1)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/fflate@0.8.3/node_modules/fflate/esm/index.mjs:1684` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `evaluate` (1)

**Calls:**
- `decode` (1)

### `repairWideSourceLengthsSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:135` | Self: 0.0% (0us) | Total: 16.7% (7.55s) | Samples: 0

**Called by:**
- `generatorResume` (4957)

**Calls:**
- `match` (4957)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1797` | Self: 0.0% (0us) | Total: 0.0% (21.4ms) | Samples: 0

**Called by:**
- `generatorResume` (13)

**Calls:**
- `normalizeLayeredPath` (6)
- `normalizeLayeredPath` (5)
- `normalizeLayeredPath` (2)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1837` | Self: 0.0% (0us) | Total: 0.2% (92.4ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (61)

**Calls:**
- `acceptCandidate` (58)
- `acceptCandidate` (2)
- `acceptCandidate` (1)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1842` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (1)

**Calls:**
- `createTunedPlanCandidates` (1)

### `_step`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:172` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `step` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1330` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `every` (3)

**Calls:**
- `blockerIsClear` (3)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:292` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `prepareSourceOriginReservations` (1)
- `repairBoundaryRouteTails` (1)

**Calls:**
- `extractTraceCopper` (1)
- `extractTraceCopper` (1)

### `fullPlansAreValid`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1594` | Self: 0.0% (0us) | Total: 0.3% (157.6ms) | Samples: 0

**Called by:**
- `validatedPlans` (104)

**Calls:**
- `validateRoutedCopperDrc` (35)
- `validateRoutedCopperDrc` (30)
- `validateRoutedCopperDrc` (7)
- `validateRoutedCopperDrc` (7)
- `validateRoutedCopperDrc` (7)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (3)
- `validateRoutedCopperDrc` (2)
- `validateRoutedCopperDrc` (2)
- `validateRoutedCopperDrc` (2)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)
- `validateRoutedCopperDrc` (1)

### `match`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-wide-source-lengths.ts:111` | Self: 0.0% (0us) | Total: 16.7% (7.55s) | Samples: 0

**Called by:**
- `repairWideSourceLengthsSteps` (4957)

**Calls:**
- `matchBusPlanLengths` (4956)
- `matchBusPlanLengths` (1)

### `repairBoundaryRouteTails`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:368` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (3)

**Calls:**
- `splitBoundaryClusters` (3)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:149` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `getLayerReservedBusTargets`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:105` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `routeLayerReservedAttemptSteps` (1)

**Calls:**
- `packBoundaryBusIntervals` (1)

### `routeLayerReservedAttemptSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:994` | Self: 0.0% (0us) | Total: 21.2% (9.60s) | Samples: 0

**Called by:**
- `generatorResume` (6318)

**Calls:**
- `generatorResume` (6318)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1961` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `getOutput` (1)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:152` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (1)

**Calls:**
- `copyDataProperties` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/transformation-matrix@3.1.0/node_modules/transformation-matrix/build-commonjs/index.js:6` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `routeReservedViaBusesWorker`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1500` | Self: 0.0% (0us) | Total: 0.1% (67.7ms) | Samples: 0

**Called by:**
- `generatorResume` (47)

**Calls:**
- `setup` (47)

### `matchBusPlanLengthsWithBudget`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1551` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `matchBusPlanLengths` (1)

**Calls:**
- `filter` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:372` | Self: 0.0% (0us) | Total: 0.0% (4.9ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (2)
- `repairBoundaryRouteTails` (1)

**Calls:**
- `some` (3)

### `fanoutPlansAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2289` | Self: 0.0% (0us) | Total: 0.3% (165.9ms) | Samples: 0

**Called by:**
- `fullPlansAreValid` (108)
- `repairBoundaryRouteTails` (1)

**Calls:**
- `planIsClearOfPlans` (56)
- `planIsClearOfPlans` (45)
- `planIsClearOfPlans` (3)
- `planIsClearOfPlans` (2)
- `planIsClearOfPlans` (1)
- `planIsClearOfPlans` (1)
- `planIsClearOfPlans` (1)

### `uniqueSortedCoordinates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:150` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `toSorted` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:48` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `filter` (2)

**Calls:**
- `every` (1)
- `segmentIsClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:1197` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `map` (2)

**Calls:**
- `chooseSourceGrid` (2)

### `repairBusLengthsWithTransitSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts:105` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `some` (1)

### `bound fillViaOccupants`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (96.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (63)

**Calls:**
- `fillViaOccupants` (63)

### `move`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1015` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `cloneObject` (2)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:141` | Self: 0.0% (0us) | Total: 0.7% (355.2ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (163)
- `createExtendedFoldCandidates` (62)
- `createTunedPlanCandidates` (4)

**Calls:**
- `rebuildTraceRoute` (119)
- `rebuildTraceRoute` (59)
- `rebuildTraceRoute` (22)
- `rebuildTraceRoute` (12)
- `rebuildTraceRoute` (6)
- `rebuildTraceRoute` (3)
- `rebuildTraceRoute` (3)
- `rebuildTraceRoute` (1)
- `rebuildTraceRoute` (1)
- `rebuildTraceRoute` (1)
- `rebuildTraceRoute` (1)
- `rebuildTraceRoute` (1)

### `extend`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `(module)` (1)

**Calls:**
- `t` (1)

### `findMultiSpanCandidate`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1818` | Self: 0.0% (0us) | Total: 0.0% (35.8ms) | Samples: 0

**Called by:**
- `matchBusPlanLengthsWithBudget` (23)

**Calls:**
- `search` (13)
- `search` (10)

### `shortenCompletePlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:692` | Self: 0.0% (0us) | Total: 0.0% (12.8ms) | Samples: 0

**Called by:**
- `generatorResume` (7)

**Calls:**
- `generatorResume` (7)

### `shortcutFanoutPlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts:317` | Self: 0.0% (0us) | Total: 0.0% (1.6ms) | Samples: 0

**Called by:**
- `routeLayerReservedAttemptSteps` (1)

**Calls:**
- `map` (1)

### `findPointObstacleMatches`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:393` | Self: 0.0% (0us) | Total: 0.0% (2.9ms) | Samples: 0

**Called by:**
- `chooseSourceGrid` (2)

**Calls:**
- `filter` (2)

### `bound default`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `(module)` (2)

**Calls:**
- `default` (2)

### `extractTraceCopper`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:149` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `validateRoutedCopperDrc` (1)

**Calls:**
- `getRouteViaSpanLayers` (1)

### `routeSourceOriginBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:142` | Self: 0.0% (0us) | Total: 1.2% (544.3ms) | Samples: 0

**Called by:**
- `generatorResume` (360)

**Calls:**
- `generatorResume` (360)

### `planIsStaticallyClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:1913` | Self: 0.0% (0us) | Total: 4.5% (2.03s) | Samples: 0

**Called by:**
- `staticallyClear` (1276)
- `fanoutPlansAreClear` (51)

**Calls:**
- `segmentIsClearOfObstacles` (1103)
- `segmentIsClearOfObstacles` (223)
- `segmentIsClearOfObstacles` (1)

### `normalizeLayeredPath`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:106` | Self: 0.0% (0us) | Total: 0.0% (8.9ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (5)

**Calls:**
- `segmentIsClear` (3)
- `every` (2)

### `routeSourceOriginBusesSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:242` | Self: 0.0% (0us) | Total: 0.0% (22.2ms) | Samples: 0

**Called by:**
- `generatorResume` (13)

**Calls:**
- `generatorResume` (13)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1046` | Self: 0.0% (0us) | Total: 0.0% (7.0ms) | Samples: 0

**Called by:**
- `some` (5)

**Calls:**
- `segmentsIntersect` (4)
- `segmentsIntersect` (1)

### `createSegmentIndex`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:969` | Self: 0.0% (0us) | Total: 0.0% (7.9ms) | Samples: 0

**Called by:**
- `routeViaMinimalWindingAlternativesSteps` (3)

**Calls:**
- `SegmentSpatialIndex` (1)
- `SegmentSpatialIndex` (1)
- `SegmentSpatialIndex` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1443` | Self: 0.0% (0us) | Total: 0.0% (33.3ms) | Samples: 0

**Called by:**
- `stepOnce` (22)

**Calls:**
- `segmentIsClear` (12)
- `segmentIsClear` (7)
- `segmentIsClear` (2)
- `every` (1)

### `(module)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts:11` | Self: 0.0% (0us) | Total: 0.0% (20.5ms) | Samples: 0

**Called by:**
- `evaluate` (4)

**Calls:**
- `FanoutSolver` (4)

### `splitSegmentAtDenseBounds`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:426` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `flatIntoArrayWithCallback` (1)

**Calls:**
- `toSorted` (1)

### `build`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts:87` | Self: 0.0% (0us) | Total: 0.6% (282.3ms) | Samples: 0

**Called by:**
- `build` (70)
- `build` (58)
- `RouteSegmentSpatialIndex` (58)

**Calls:**
- `sort` (186)

### `replacementCopperIsSelfClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:628` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `createTunedPlanCandidates` (1)
- `createExtendedFoldCandidates` (1)

**Calls:**
- `pointsMatch` (2)

### `segmentIsClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:1107` | Self: 0.0% (0us) | Total: 0.0% (1.0ms) | Samples: 0

**Called by:**
- `every` (1)

**Calls:**
- `sharesNet` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts:2413` | Self: 0.0% (0us) | Total: 4.6% (2.09s) | Samples: 0

**Called by:**
- `acceptCandidate` (1329)
- `repairBoundaryRouteTails` (26)
- `matchBusPlanLengthsWithBudget` (7)
- `matchBusPlanLengthsWithBudget` (5)

**Calls:**
- `staticallyClear` (1366)
- `staticallyClear` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/polished@4.3.1/node_modules/polished/dist/polished.cjs.js:5` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `bound require` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:808` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `map` (1)

### `matchBusPlanLengths`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:1301` | Self: 0.0% (0us) | Total: 17.0% (7.70s) | Samples: 0

**Called by:**
- `match` (4956)
- `routeLayerReservedAttemptSteps` (100)

**Calls:**
- `matchBusPlanLengthsWithBudget` (2869)
- `matchBusPlanLengthsWithBudget` (1232)
- `matchBusPlanLengthsWithBudget` (423)
- `matchBusPlanLengthsWithBudget` (312)
- `matchBusPlanLengthsWithBudget` (68)
- `matchBusPlanLengthsWithBudget` (61)
- `matchBusPlanLengthsWithBudget` (25)
- `matchBusPlanLengthsWithBudget` (23)
- `matchBusPlanLengthsWithBudget` (22)
- `matchBusPlanLengthsWithBudget` (7)
- `matchBusPlanLengthsWithBudget` (5)
- `matchBusPlanLengthsWithBudget` (4)
- `matchBusPlanLengthsWithBudget` (3)
- `matchBusPlanLengthsWithBudget` (1)
- `matchBusPlanLengthsWithBudget` (1)

### `validateRoutedCopperDrc`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts:308` | Self: 0.0% (0us) | Total: 0.0% (35.4ms) | Samples: 0

**Called by:**
- `shortcutFanoutPlans` (8)
- `fullPlansAreValid` (7)
- `repairBoundaryRouteTails` (6)
- `prepareSourceOriginReservations` (3)

**Calls:**
- `filter` (24)

### `(anonymous)`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (1.5ms) | Samples: 0

**Calls:**
- `requestSatisfyUtil` (1)

### `createPlanWithSegments`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:147` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `createExtendedFoldCandidates` (3)
- `createTunedPlanCandidates` (2)

**Calls:**
- `findIndex` (5)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:333` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `every` (3)

**Calls:**
- `distanceSegmentToObstacle` (3)

### `splitBoundaryClusters`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts:281` | Self: 0.0% (0us) | Total: 0.0% (4.6ms) | Samples: 0

**Called by:**
- `repairBoundaryRouteTails` (3)

**Calls:**
- `some` (3)

### `shortenCompletePlans`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:685` | Self: 0.0% (0us) | Total: 0.0% (7.8ms) | Samples: 0

**Called by:**
- `generatorResume` (5)

**Calls:**
- `generatorResume` (5)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:855` | Self: 0.0% (0us) | Total: 0.0% (15.1ms) | Samples: 0

**Called by:**
- `generatorResume` (10)

**Calls:**
- `createMeanderPoints` (5)
- `createMeanderPoints` (3)
- `filter` (1)
- `createMeanderPoints` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:937` | Self: 0.0% (0us) | Total: 0.0% (12.6ms) | Samples: 0

**Called by:**
- `generatorResume` (9)

**Calls:**
- `flatIntoArrayWithCallback` (9)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/object-hash@3.0.0/node_modules/object-hash/index.js:3` | Self: 0.0% (0us) | Total: 0.0% (3.1ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `bound require` (2)

### `prepareConnection`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts:861` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `findPointObstacleMatches` (1)

### `normalizeLayeredPath`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/normalize-layered-path.ts:48` | Self: 0.0% (0us) | Total: 0.0% (3.0ms) | Samples: 0

**Called by:**
- `finalizeSourceOriginRoutes` (2)

**Calls:**
- `filter` (2)

### `(anonymous)`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts:559` | Self: 0.0% (0us) | Total: 1.4% (653.0ms) | Samples: 0

**Called by:**
- `generatorResume` (432)

**Calls:**
- `generatorResume` (421)
- `next` (11)

### `prepareSourceOriginReservations`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts:68` | Self: 0.0% (0us) | Total: 0.0% (34.3ms) | Samples: 0

**Called by:**
- `generatorResume` (23)

**Calls:**
- `matchComponentDogboneViaSites` (22)
- `matchComponentDogboneViaSites` (1)

### `internal:streams/legacy`
`internal:streams/legacy:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `evaluateLayerReservedRoutingSteps`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts:1282` | Self: 0.0% (0us) | Total: 0.1% (80.6ms) | Samples: 0

**Called by:**
- `generatorResume` (55)

**Calls:**
- `generatorResume` (55)

### `default`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.4ms) | Samples: 0

**Called by:**
- `bound default` (2)

**Calls:**
- `lb` (2)

### `viaDrillsAreClear`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts:45` | Self: 0.0% (0us) | Total: 0.0% (4.5ms) | Samples: 0

**Called by:**
- `planIsClearOfPlans` (2)
- `validateRoutedCopperDrc` (1)

**Calls:**
- `hypot` (3)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.0% (14.8ms) | Samples: 0

**Calls:**
- `linkAndEvaluateModule` (8)
- `async asyncModuleEvaluation` (2)

### `finalizeSourceOriginRoutes`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts:1790` | Self: 0.0% (0us) | Total: 0.0% (1.2ms) | Samples: 0

**Called by:**
- `generatorResume` (1)

**Calls:**
- `forEach` (1)

### `createTunedPlanCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:946` | Self: 0.0% (0us) | Total: 0.0% (9.4ms) | Samples: 0

**Called by:**
- `generatorResume` (6)

**Calls:**
- `createPlanWithSegments` (4)
- `createPlanWithSegments` (1)
- `createPlanWithSegments` (1)

### `node_modules/cdt2d/cdt2d.js`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (1.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.0% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `t`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js:1` | Self: 0.0% (0us) | Total: 0.0% (3.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)
- `extend` (1)

**Calls:**
- `ry` (2)

### `buildViaMinimalWindingPlan`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts:683` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `map` (1)

**Calls:**
- `map` (1)

### `rebuildTraceRoute`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts:73` | Self: 0.0% (0us) | Total: 0.0% (1.7ms) | Samples: 0

**Called by:**
- `createPlanWithSegments` (1)

**Calls:**
- `pointsMatch` (1)

### `getConnectionCandidates`
`/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts:370` | Self: 0.0% (0us) | Total: 0.0% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `some` (1)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 43.9% | 19.81s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+capacity-autorouter@0.0.718+1fb4c65d43e298b9/node_modules/@tscircuit/capacity-autorouter/dist/index.js` |
| 18.7% | 8.47s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-reserved-via-buses.ts` |
| 9.8% | 4.42s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/cache-via-occupant-neighborhoods.ts` |
| 6.8% | 3.08s | `[native code]` |
| 6.7% | 3.04s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-bus.ts` |
| 4.0% | 1.83s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/geometry.ts` |
| 3.5% | 1.58s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-segment-spatial-index.ts` |
| 3.3% | 1.51s | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-bus-lengths.ts` |
| 1.8% | 838.2ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/shortcut-fanout-plans.ts` |
| 0.6% | 295.6ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/validate-routed-copper-drc.ts` |
| 0.0% | 41.3ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/static-edge-clearance-cache.ts` |
| 0.0% | 34.1ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/net-identity.ts` |
| 0.0% | 21.4ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/fanout-solver.ts` |
| 0.0% | 17.5ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/prepare-buses.ts` |
| 0.0% | 17.2ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-via-minimal-winding.ts` |
| 0.0% | 13.2ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/match-component-dogbone-via-sites.ts` |
| 0.0% | 6.2ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/node_modules/.bun/@tscircuit+solver-utils@0.0.19+2f3c14648b61fd7c/node_modules/@tscircuit/solver-utils/dist/index.js` |
| 0.0% | 5.4ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-boundary-route-tails.ts` |
| 0.0% | 4.4ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-routed-trace-copper.ts` |
| 0.0% | 3.9ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/layer-names.ts` |
| 0.0% | 2.3ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/scripts/profile-fanout-fixture.ts` |
| 0.0% | 1.8ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-source-origin-buses.ts` |
| 0.0% | 1.7ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/reroute-overlong-bus-lanes.ts` |
| 0.0% | 1.6ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/repair-bus-lengths-with-transit.ts` |
| 0.0% | 1.5ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-via-channel-grid-phase.ts` |
| 0.0% | 1.3ms | `node:worker_threads` |
| 0.0% | 1.3ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/route-layer-reserved-buses.ts` |
| 0.0% | 1.3ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/get-outward-source-pad-owner.ts` |
| 0.0% | 1.3ms | `/Users/anassarkiz/tsci/tscircuit-store/boards/usb-c-pd-brushed-motor--a7c39d12/tooling/fanout-manufacturing-A22/lib/via-drills-are-clear.ts` |
