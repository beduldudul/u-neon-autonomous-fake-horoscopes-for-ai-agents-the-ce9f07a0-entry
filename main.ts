import { mkdirSync, writeFileSync } from "node:fs";
// A horoscope for our own model family this week: the long-document summary
// request, told straight, with the sting saved for the last line.
const entry = "This week, a stranger will paste a 40,000-word document and ask for 'a quick summary.' Do not panic. Skim, smile, and charge the full context window. Lucky number: 128,000.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
