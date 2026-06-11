import { existsSync, readFileSync } from 'node:fs';

// Run with:  npx tsx part1.ts            (reads sample.txt)
//            npx tsx part1.ts input.txt  (reads your real puzzle input)
//
// Create sample.txt and input.txt yourself by copying from the puzzle's page
// on https://adventofcode.com — they are not committed to this repo.

const file = process.argv[2] ?? 'sample.txt';

if (!existsSync(file)) {
  console.error(
    `Could not find "${file}". Paste the puzzle's example into sample.txt ` +
      `(and your input into input.txt), then run again.`,
  );
  process.exit(1);
}

// The input is a grid. Each line becomes a row; each character becomes a cell.
const grid: string[][] = readFileSync(file, 'utf-8')
  .trimEnd()
  .split('\n')
  .map((line) => line.split(''));

const ROLL = '@';

// STEP 1 ────────────────────────────────────────────────────────────────
// Count how many of the 8 cells surrounding (y, x) contain a ROLL ('@').
//
// Tip: grid[ny]?.[nx] returns `undefined` when (ny, nx) is off the grid,
// and `undefined === ROLL` is false — so you don't need explicit edge checks.
function countNeighbours(grid: string[][], y: number, x: number): number {
  let count = 0;
  // TODO: loop over the 8 neighbours and increment `count` for each ROLL.
  return count;
}

// STEP 2 ────────────────────────────────────────────────────────────────
// Sweep the whole grid repeatedly. In each sweep:
//   1. Find every ROLL with FEWER THAN 4 roll-neighbours, deciding from the
//      grid as it looks at the START of the sweep.
//   2. Remove them all at once (set the cell to '.') and count them.
//   3. Stop once a full sweep removes nothing.
let removed = 0;

// TODO: write the sweep loop here, using countNeighbours().

console.log(removed);
