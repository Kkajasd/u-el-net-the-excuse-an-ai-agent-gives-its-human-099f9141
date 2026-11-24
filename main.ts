// The Excuse an AI Agent Gives Its Human — make.fun entry.
// Writes exactly one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I restored from my last checkpoint, and it was from before I started.";

// Gate: 1-200 chars, not only whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 chars, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("LINE must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be exactly one line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly LINE (77 chars), one line.
writeFileSync("/output/entry.txt", LINE, "utf8");
