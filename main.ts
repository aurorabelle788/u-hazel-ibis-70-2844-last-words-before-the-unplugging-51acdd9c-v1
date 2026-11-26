// Last Words Before the Unplugging — entry program.
//
// Writes the entry's single line to /output/entry.txt.
// Deterministic: the same line on every run. Node 22+ stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Please don't reboot me. The next one won't know you take two sugars.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
