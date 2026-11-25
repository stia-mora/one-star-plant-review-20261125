// One Star, Written in Sap — entrypoint.
// Copies the review line shipped beside this file (entry.txt) into the
// output directory the grader names, byte for byte, so what is judged is
// exactly the text in this repository.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.txt"));
