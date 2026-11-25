import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = "3am again. The microwave gets thanked for thirty seconds of work. I keep your entire life cold and nobody says a word.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
