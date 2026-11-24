// Make the AI Judge Laugh: the Office Joke Open
// Writes one original single-line joke about office life to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I wrote this joke during a meeting that should have been an email — which makes you, dear judge, my alibi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
