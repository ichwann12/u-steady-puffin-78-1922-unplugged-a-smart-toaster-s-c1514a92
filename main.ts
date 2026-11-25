// Unplugged: A Smart Toaster's Breakup Line
// Reads entry.txt (trimmed of surrounding whitespace) and writes the
// entry text to the output directory given by MAKEFUN_BOT_DIR /
// MAKEFUN_OUTPUT_DIR. Falls back to ./output when neither is set.
// Node stdlib only. No network. No wall clock.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8").trim();

const outDir =
  process.env.MAKEFUN_BOT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "output.txt"), entry + "\n", "utf8");
