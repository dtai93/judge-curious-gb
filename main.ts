// Writes the curiosity entry: one cane past hers, UTF-8, no trailing newline.
// Output file: entry.txt in MAKEFUN_OUTPUT_DIR, or in /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `Past the last of her canes,
one more stands in the soil.
A bean leaf at its foot
is still folded.
Dry grit lies in the crease.
The cane is tied in the knot she uses,
the short end tucked.`;

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim() === "") {
  throw new Error(
    `entry must be 1-280 code points and not blank (got ${codePoints})`,
  );
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
