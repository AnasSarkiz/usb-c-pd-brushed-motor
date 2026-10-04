# A22 STM32 runtime and measurement integration

The repository now links an actual STM32G030F6 image. Startup copies .data,
clears .bss and enters the inhibited application. The vector table maps EXTI4_15
and TIM3 to their real handlers; the linker reserves 32 KiB flash, 8 KiB RAM and
2 KiB stack, checks section fit and has no heap. GCC16.1 produces ELF, BIN, map,
sections, symbols, stack-usage files and source/artifact hashes under
`dist/firmware/bringup/`; `scripts/build-firmware.ts` checks these records.

`bun run firmware:bringup` is explicitly an **inhibited diagnostic image**.
It captures raw diagnostic frames but has no manufacturer-approved NVM image,
receive-path approval or per-board qualified measurement profile. Those missing
credentials cannot be replaced by test vectors, debugger writes or raw validity.
`bun run firmware:qualified` rejects a missing approved provisioning file.
Physical execution/programming has not occurred.

## Clock, transport and serialized ownership

HSI16 with a conservative ±3% bound drives PLL M2/N16/P2/R4: ADC32 MHz and CPU,
APB/TIM32 MHz. VCO128 MHz, Range1 and flash latency1 are configured/read back.
ADC maximum32.96 MHz is below35 MHz. Its160.5-cycle acquisition is ≥4.87 µs,
meeting VREFINT's4 µs minimum. The35 MHz datasheet TUE is characterized rather
than a guaranteed accuracy specification at32 MHz; a board profile still needs
qualification. Changing the clock does not fabricate an accuracy guarantee.

TIM3 PSC31/ARR65535 gives nominal1 MHz; timestamp reads mask IRQs briefly and
account for an unserviced overflow without consuming the event. Unsigned
arithmetic and the foreground extended-millisecond epoch handle wrap. The
independent watchdog runs from29.5–34 kHz LSI, DIV32/RLR127, approximately
120.5–138.9 ms. It is fed only after a bounded complete foreground iteration;
traps inhibit and stop feeding. Reset/brownout rely on the physical default-off
GPIO/isolation network and must be scope-tested on the prototype.

I2C1 uses PB8/PB9 AF6 open drain, external4.7 kΩ pull-ups, HSI16 kernel and
TIMINGR0x00521018. Register reads use repeated START; bounded AUTOEND writes
carry the address and payload together. Deadlines, finite polling, readback,
NACK/ARLO/BERR/OVR/timeout/unexpected STOP and reentrancy all revoke permission;
no partial buffer or successful fallback is published. The assumed rise≤200 ns
requires approximately≤49 pF at the worst4.7 kΩ tolerance and must be measured.
Exact timing inequalities and captures remain part of transport qualification.

The single foreground owner integrates full NVM verification, startup acquisition,
PD generations/readback, sequencing, raw ADC acquisition, conservative physical
intervals and actual GPIO application. EXTI only preserves the original edge
and overrun flag. The permission commit masks IRQs, rereads selector/protection
inputs and checks hardware/software pending events before and after GPIO writes;
an event during that commit inhibits before the previous mask is restored.
Events after the commit are handled on the next bounded foreground iteration,
with independent hardware inhibition; zero asynchronous response delay is not
claimed. Charged VM never permits changing the established feedback setting.

## Conservative measurement path

The unchanged supplier C1653 / Samsung CL10C220JB8NNNC22 pF C0G now supplies
C33/C34 as well as C20. R60/R66 are100 kΩ and R61/R67 are10 kΩ. Nominal sensing
τ=(100k||10k)×22pF≈0.20 µs replaces the former0.91 ms100 nF lag. A qualification
profile must cover the total filter/PCB parasitic envelope (proposed≤1 µs),
acquisition charge sharing, leakage and switch-node/motor EMI. Reduced filtering
makes quiet Kelvin routing and the noise test particularly important.

Each conversion has start and completion timestamps. Acquisition order is
VREFINT, VBUS, VM; identity indices remain2,0,1. Rail slew bounds use that
channel's conversion start, outward adjusted for the slow-clock corner. Reference
motion and frame freshness retain the oldest frame start. Chronology, saturation,
factory-word mismatch, missing approval, stale frames, environment/reference
loss and brownout reject the entire physical measurement.

Rational64-bit arithmetic rounds lower bounds down and upper bounds up. It includes
factory3 V±10 mV/count error, VREFINT temperature/supply/aging allowance, divider
initial tolerance/TCR/drift, sample/noise/quantization, leakage, RC lag and sequential
skew. Half-count/profile bounds are explicit, not estimated from a flat-looking
history. No production approval/profile has been manufactured by these calculations.

## PD provenance and external provisioning

Source_Capabilities must follow a fresh acquisition command. Request readback
is tied to the source generation and complete ordered PDO list. Accept must
follow the request capability exchange; fresh PS_RDY must follow Accept, with
original ALERT timing and unique request ownership. PE0x29/SNK_READY0x18 and
RDO0x91 are documented by ST's programming guide. No reserved PHY_STATUS/SOP
encoding is guessed. RX atomicity, SOP routing and event timing still require
independent manufacturer-supported/captured receive-path qualification.

The complete40-byte NVM image must come from the supported STUSB4500 GUI with
independent decode/verification of the intended policy. The available official
Windows1.08 executable is not usable in the current macOS environment; no
supported local CLI exporter was found. A manufacturer default image or successful
RAM write is not approval of the desired policy/negotiated contract.

Host tests include integrated fresh negotiation/permission, charged VM, source
loss, protocol reset, ADC/I2C fault, brownout/qualification loss, selector change,
premature PS_RDY, pending IRQ before/during permission commit and timer rollover.
These execute production ownership and actual ADC/GPIO adapters with explicit
synthetic MMIO/provisioning, not physical hardware. Full board suite currently
34 tests /438 expectations passes; C assertions and current linked hashes are
recorded in build/test evidence. Remaining stack/latency and physical transport
qualification must not be represented as completed measurements.

Primary references: https://www.st.com/resource/en/datasheet/stm32g030f6.pdf,
https://www.st.com/resource/en/application_note/an2834-how-to-optimize-the-adc-accuracy-in-the-stm32-mcus-stmicroelectronics.pdf,
https://www.st.com/resource/en/user_manual/um2650-stusb4500-software-programming-guide-stmicroelectronics.pdf.
