"""Split untouched native export rows for the documented prototype assembly process.

This utility does not approve routing, manufacture, or alter engineering/Circuit
JSON data. It preserves every native row field, rejects duplicate/missing rows,
and produces an explicit manual-install list for the eleven reviewed references.
"""
import csv
import io
import re

MANUAL_REFERENCES = frozenset(["C18", "RV1", "SW1", "J2", *[f"TP{index}" for index in range(1, 8)]])


def read_export_rows(serialized_csv):
    reader = csv.DictReader(io.StringIO(serialized_csv))
    if reader.fieldnames is None or "Designator" not in reader.fieldnames:
        raise ValueError("Native export lacks its Designator column")
    rows = list(reader)
    if any(None in row or any(field is None for field in row.values()) for row in rows):
        raise ValueError("Malformed native export CSV row")
    return reader.fieldnames, rows


def split_assembly_rows(rows, expected_references):
    actual_references = [row["Designator"] for row in rows]
    if len(set(actual_references)) != len(actual_references):
        raise ValueError("Duplicate native export designator")
    if set(actual_references) != expected_references:
        raise ValueError("Native export references differ from the engineering BOM")
    if not MANUAL_REFERENCES.issubset(expected_references):
        raise ValueError("Documented manual-install references are absent")
    automatic_rows = [row for row in rows if row["Designator"] not in MANUAL_REFERENCES]
    manual_rows = [row for row in rows if row["Designator"] in MANUAL_REFERENCES]
    if "JLCPCB Part #" in rows[0]:
        if any(re.fullmatch(r"C[1-9][0-9]*", row["JLCPCB Part #"]) is None for row in rows):
            raise ValueError("Native BOM has a missing or invalid supplier code")
    return automatic_rows, manual_rows


def write_export_rows(fieldnames, rows):
    stream = io.StringIO(newline="")
    writer = csv.DictWriter(stream, fieldnames=fieldnames, lineterminator="\r\n", quoting=csv.QUOTE_ALL)
    writer.writeheader()
    writer.writerows(rows)
    return stream.getvalue()
