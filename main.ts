// Writes the curiosity-judge entry: one short scene, UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `She writes "one pint" in the book by the door.
Under it, smaller letters: "the heel, if still warm."
She sets the warm heel on the step.
By morning the plate is back on the rack.
The milk bottle is full of water.
A sprig of thyme is tucked under the cap,
the cut end still damp.`;

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim() === "") {
  throw new Error(
    `entry must be 1-280 code points and not blank (got ${codePoints})`,
  );
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
