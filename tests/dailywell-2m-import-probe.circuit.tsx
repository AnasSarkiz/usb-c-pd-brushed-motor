import { A_2MS3T1B1M1QES_5 } from "../imports/A_2MS3T1B1M1QES_5"

// Isolated import inspection, not product-board component placement.
export default function Dailywell2mImportProbe() {
  return (
    <board width="40mm" height="40mm" routingDisabled>
      <schematicsheet name="probe" sheetSize="A4" sheetIndex={1}>
        <schematictext
          schY={1.6}
          text="SPDT ON-OFF-ON | physical common = pin 2"
          fontSize={0.15}
        />
        <schematictext
          schY={1.2}
          text="pin 1 = IN1, pin 2 = PWM, pin 3 = IN2 | contacts: 2-3 / OPEN / 2-1"
          fontSize={0.12}
        />
        <A_2MS3T1B1M1QES_5
          name="SW1"
          connections={{
            pin1: "net.IN1",
            pin2: "net.PWM",
            pin3: "net.IN2",
          }}
        />
      </schematicsheet>
    </board>
  )
}
