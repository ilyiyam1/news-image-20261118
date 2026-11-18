// news-image-20261118 — "The World, Wednesday 18 November 2026".
// The entry image sits beside this file as entry.png (JPEG bytes under
// that name, per the competition rules). The program copies it unchanged
// to $MAKEFUN_OUTPUT_DIR/entry.png, defaulting to /output. Node 22,
// standard library only: no network, no drawing, no dependencies. The
// bytes copied are exactly the bytes the judge sees. The copy is a pure
// file copy, so every run writes identical bytes: the two graded runs
// always agree, and the output is the repository's entry.png byte for byte.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
