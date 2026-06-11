import { existsSync, readFileSync } from 'node:fs';

// Part 2 unlocks on the Advent of Code page after you solve Part 1.
// It uses the SAME input — copy your working code over from part1.ts and
// extend it for the new question.
//
// Run with:  npx tsx part2.ts            (reads sample.txt)
//            npx tsx part2.ts input.txt  (reads your real puzzle input)

const file = process.argv[2] ?? 'sample.txt';

if (!existsSync(file)) {
  console.error(
    `Could not find "${file}". Paste the puzzle's example into sample.txt ` +
      `(and your input into input.txt), then run again.`,
  );
  process.exit(1);
}

const grid: string[][] = readFileSync(file, 'utf-8')
  .trimEnd()
  .split('\n')
  .map((line) => line.split(''));

const ROLL = '@';

let answer = 0;

// TODO: read Part 2 on the AoC page and solve it here.

console.log(answer);
