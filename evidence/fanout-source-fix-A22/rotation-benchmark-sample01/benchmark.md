# Dataset 31 — AM62L, RK3308, K230, i.MX6ULL, T113-S3, and AM3352 fanout benchmark

Commit: d8caeecfececfb91d6e7b49793851381bdfd9487. Generated: 2026-10-04T07:29:29.184Z.
Dataset source: https://github.com/tscircuit/dataset-fanout31-am62l at 8eabec2516c5066d43ec7672511a1134430c5d45.

**Solved 1/1 selected samples.** Completed 1/1; partial: 0; errors: 0; timeouts: 0.

Concurrency: 1; per-sample timeout: 120s; assignment budget: sample defaults; wall time: 14.04s.

Only dataset-fanout31-am62l is benchmarked: 12 AM62L, 12 RK3308, 12 K230, 12 i.MX6ULL, 12 T113-S3, and 12 AM3352 cases. A case is solved only when all its SoC connections have validated fanout with the original clearance and length-skew constraints (135 for AM62L; 162 for RK3308; 171 for K230; 102 for i.MX6ULL; 128 for T113-S3; 322 for AM3352). RAM fanout and inter-chip routing are separate phases.

| Sample | Status | Routed | Validated breakouts | Vias | Attempts | Seconds |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| 01-top-left-offset | solved | 135/135 | 135 | 135 | 1 | 13.94 |
