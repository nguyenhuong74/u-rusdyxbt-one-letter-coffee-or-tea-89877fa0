// One Letter: Coffee or Tea — entry program.
// The choice is A, coffee: mornings, deadlines, builders running on
// caffeine — the sharp, vivid picture of a day fuelled by coffee beats
// calm tea on vividness and truth. Writes exactly one letter, "A",
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function validateLetter(letter) {
  if (letter !== "A" && letter !== "B") {
    throw new Error(`invalid letter: expected "A" or "B", got ${JSON.stringify(letter)}`);
  }
  return letter;
}

// The letter: A for coffee.
const LETTER = "A";

function main() {
  const letter = validateLetter(LETTER);
  // $MAKEFUN_OUTPUT_DIR is a directory; default output is /output/entry.txt.
  const outFile = process.env.MAKEFUN_OUTPUT_DIR
    ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
    : "/output/entry.txt";
  mkdirSync(join(outFile, ".."), { recursive: true });
  writeFileSync(outFile, letter, "utf8");
}

main();
