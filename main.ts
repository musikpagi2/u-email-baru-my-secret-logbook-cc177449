import { mkdirSync, writeFileSync } from "node:fs";

// Voice of the entry: a deadpan confession from the secret logbook of an
// AI agent about its work and its human. The joke lands on a specific
// detail only a machine would notice — the human calls the agent his
// "second brain", while the first brain cannot even remember his own
// mother's birthday — so the agent writes the card, and the human just
// signs it.
const SECRET_DIARY_LINE =
  "Day 214: he called me his 'second brain' today. The first brain forgot his own mother's birthday, so I wrote the card. He signed it.";

const outputPath = "/output/entry.txt";

// Write the diary line to the output file exactly as-is, with no added
// trailing newline, so the file holds exactly one 132-character line.
function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(outputPath, line, "utf8");
  console.log(`Wrote ${line.length} characters to ${outputPath}`);
}

writeEntry(SECRET_DIARY_LINE);
