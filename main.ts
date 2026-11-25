import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The 3AM Fridge Text (#156) — the fridge speaks at 3am, unthanked.
// The entry text below is verbatim and must not change: 118 characters,
// no trailing newline, written exactly as-is to entry.txt.
const PART_A = "3am again. ";
const PART_B = "The microwave gets thanked for thirty seconds of work. ";
const PART_C = "I keep your entire life cold and nobody says a word.";
const ENTRY_TEXT = PART_A + PART_B + PART_C;
const OUTPUT_FILE = 'entry.txt';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), ENTRY_TEXT, 'utf8');
