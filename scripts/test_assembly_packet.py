"""Independent row-loss, duplicate and quoting regressions for assembly splits."""
import unittest
from assembly_packet import MANUAL_REFERENCES, read_export_rows, split_assembly_rows, write_export_rows


class AssemblyPacketTest(unittest.TestCase):
    def test_assembly_split_preserves_data_and_rejects_incomplete_exports(self):
        refs=set(MANUAL_REFERENCES)|{f"R{index}" for index in range(1, 130)}
        rows=[{"Designator":ref,"Comment":'10k, \"speed\"',"JLCPCB Part #":"C5710902"} for ref in sorted(refs)]
        headers=list(rows[0])
        _,decoded=read_export_rows(write_export_rows(headers,rows))
        automatic,manual=split_assembly_rows(decoded,refs)
        self.assertEqual(len(automatic),129)
        self.assertEqual(len(manual),11)
        self.assertEqual(set(row["Designator"] for row in manual),MANUAL_REFERENCES)
        self.assertEqual(sorted(automatic+manual,key=lambda row:row["Designator"]),rows)
        with self.assertRaisesRegex(ValueError,"Duplicate"):
            split_assembly_rows(rows+[rows[0]],refs)
        with self.assertRaisesRegex(ValueError,"engineering BOM"):
            split_assembly_rows(rows[:-1],refs)
        invalid=[dict(row) for row in rows];invalid[0]["JLCPCB Part #"]=""
        with self.assertRaisesRegex(ValueError,"supplier code"):
            split_assembly_rows(invalid,refs)
        with self.assertRaisesRegex(ValueError,"Malformed"):
            read_export_rows('Designator,Comment\nR1,10k,unexpected\n')


if __name__ == "__main__":
    unittest.main()
