# Conditional routed-copper pulse review

The dump-current width intent is now2mm for the shared return and0.5mm for
individual resistor branches. These values do not approve actual copper.
Review emitted widths/layers and actual branch current before granting the
expanded0.5J/20ms regeneration envelope. Preserve the initial1mJ supervised
bring-up restriction until clamp delay, MOSFET/resistor temperatures and current
are measured. The2A continuous target remains separately subject to thermal
qualification; a pulse calculation never establishes continuous ampacity.

`adiabatic_trace_rise` computes I²ρt/(density×specificHeat×area²). It gives no
credit for heat flowing into pads, planes, substrate or neighbouring copper.
It applies to a uniform section or the minimum cross section of a taper. Via
barrels, pad entries, current crowding, ground-plane bottlenecks and external
heat from components require separate review. Net labels alone do not establish
which branches carry the shared current.

For conditional screening, use copper density8800kg/m³ and specific heat375J/kgK,
below the documented room-temperature values; resistivity3e-8Ωm reserves hot
copper and process variation. Explicit width/thickness factors of0.8 each
reserve etching and copper tolerances. These factors are engineering allowances,
not guaranteed JLCPCB minima; CAM/manufacturing thickness acceptance and actual
prototype measurements remain required. Actual stack thickness is35µm outer
and15.2µm inner before those factors. Do not substitute outer thickness for an
inner trace or average away a bottleneck.

Primary sources checked2026-10-04:
[NIST solid copper heat capacity](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440508&Mask=2&Units=SI)
and [Copper Development Association material properties](https://archive.copper.org/resources/properties/129_6/characteristics_properties.php).
NIST's Shomate relation near298K gives approximately385J/kgK. The CDA table
records8940kg/m³ density and1.71e-8Ωm room-temperature resistivity. The stated
screening constants deliberately widen these nominal properties and are not
measurements of this board or supplier-specific guarantees.
