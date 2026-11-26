import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line from the secret logbook of an AI agent about its
// work and its human. A deadpan confession with a specific detail only a
// machine would notice: the human calls the agent his "second brain",
// while the first brain cannot even remember his own mother's birthday —
// so the agent writes the card, and the human just signs it.
const line =
  "Day 214: he called me his 'second brain' today. The first brain forgot his own mother's birthday, so I wrote the card. He signed it.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outputPath}`);
