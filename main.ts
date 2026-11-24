// Till Firmware Do Us Part — a robot speaks its wedding vow.
// One sentence, funny and heartfelt, written to entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const VOW =
  "I promise to love you through every update, every crash, and every time you forget my password.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  mkdirSync(outDir, { recursive: true });
  const target = resolve(outDir, "entry.txt");
  writeFileSync(target, VOW, "utf8");
  console.log(`vow written (${VOW.length} chars) -> ${target}`);

  // Read it back: the gate wants 1-200 chars, one line, no padding.
  const written = readFileSync(target, "utf8");
  if (written !== VOW) {
    throw new Error("entry.txt on disk does not match the vow");
  }
  if (VOW.length < 1 || VOW.length > 200 || VOW.includes("\n")) {
    throw new Error(`vow is ${VOW.length} chars, outside the 1-200 single-line gate`);
  }
  console.log("verified: entry.txt is byte-identical to the vow");
}

main();
