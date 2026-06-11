# Advent of Code — TypeScript Workshop

Welcome! In this workshop you'll solve an [Advent of Code](https://adventofcode.com)
puzzle in TypeScript. This repo is just **scaffolding** — you'll get the puzzle
text, the example, and your puzzle input from the AoC page during the session.

## Setup (do this before the workshop)

You only need **Node.js 18+**. Check with:

```bash
node --version
```

Then, in this folder:

```bash
npm install
```

That installs `tsx` (runs a TypeScript file directly — no build step) and the
Node type definitions. That's the whole setup.

## How you'll work

1. **Get the puzzle data.** On the puzzle's AoC page:
   - Copy the small **example** grid into a file called `sample.txt`.
   - Copy your personal **puzzle input** into a file called `input.txt`.
   - (These are git-ignored on purpose — AoC asks people not to share inputs,
     and everyone's input is different.)
2. **Write your solution** in `part1.ts`. Run it against the example first:
   ```bash
   npm run part1
   ```
   This **stays running and re-runs automatically every time you save** —
   leave it open in a terminal and watch the output update as you work. Press
   `Ctrl+C` to stop. When the output matches the example answer shown on the
   AoC page, run it on your real input:
   ```bash
   npm run part1 -- input.txt
   ```
   Paste that answer into AoC to earn your star ⭐. (Need a single run instead
   of watch mode? Use `npm run part1:once`.)
3. **Part 2** unlocks after Part 1. Move your code into `part2.ts`, extend it
   for the new question, and repeat:
   ```bash
   npm run part2            # against sample.txt
   npm run part2 -- input.txt
   ```

## Files

| File            | What it's for                                          |
| --------------- | ------------------------------------------------------ |
| `part1.ts`      | Your Part 1 solution (starts with guiding `TODO`s).    |
| `part2.ts`      | Your Part 2 solution.                                  |
| `package.json`  | The `npm run part1` / `part2` shortcuts.               |
| `tsconfig.json` | Strict TypeScript settings for clean editor checks.    |
| `sample.txt`    | You create this — the example from AoC.                |
| `input.txt`     | You create this — your personal puzzle input.          |
