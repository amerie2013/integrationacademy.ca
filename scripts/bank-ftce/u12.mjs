// FTCE Unit 12 — Mathematical Connections. ~20 conceptual questions.
import { mc, tf, fill } from "./helpers.mjs";
const R = String.raw;

const g121 = () => [
  mc("easy", R`A graph and an equation of the same function are`, [R`equivalent representations`, R`unrelated`, R`contradictory`, R`always different functions`], 0),
  mc("easy", R`Base-ten blocks model`, [R`place value`, R`probability`, R`slope`, R`angles`], 0),
  mc("medium", R`Algebra tiles help teach`, [R`factoring and distributing`, R`graphing lines`, R`the unit circle`, R`limits`], 0),
  mc("easy", R`An array (area) model represents`, [R`multiplication`, R`subtraction`, R`division only`, R`sorting`], 0),
  mc("medium", R`Repeated addition connects to`, [R`multiplication`, R`division`, R`exponents only`, R`subtraction`], 0),
  mc("medium", R`The four common representations are numeric, graphical, verbal, and`, [R`symbolic`, R`concrete`, R`random`, R`spatial`], 0),
  mc("easy", R`A number line represents the ___ numbers.`, [R`real`, R`complex`, R`imaginary`, R`prime`], 0),
  mc("medium", R`Slope connects algebra to`, [R`geometry`, R`probability`, R`statistics`, R`logic`], 0),
  mc("medium", R`A table, a graph, and an equation of a line are`, [R`equivalent representations`, R`three different lines`, R`unrelated`, R`always contradictory`], 0),
  mc("hard", R`The area model of $(x+3)(x+1)$ connects multiplication to the`, [R`distributive property`, R`commutative property`, R`Pythagorean theorem`, R`quadratic formula`], 0),
  fill("medium", R`Verbally, $y=2x+1$ means "start at $1$ and grow by ___ each step."`, ["2", "two"]),
  mc("medium", R`Manipulatives make abstract ideas more`, [R`concrete`, R`symbolic`, R`ambiguous`, R`difficult`], 0),
  tf("easy", R`Different representations of a concept each highlight a different aspect.`, true),
  mc("hard", R`Modeling multiplication with a rectangle's area is a`, [R`geometric model`, R`statistical model`, R`logical model`, R`numeric-only model`], 0),
  mc("medium", R`Building connections across topics improves`, [R`understanding and transfer`, R`memorization only`, R`test anxiety`, R`nothing`], 0),
  mc("easy", R`A shaded fraction bar is a ___ representation.`, [R`pictorial`, R`symbolic`, R`verbal`, R`numeric`], 0),
  mc("medium", R`Dilations and translations recur across`, [R`Algebra I, Geometry, and Algebra II`, R`only Geometry`, R`only Algebra I`, R`no courses`], 0),
  mc("hard", R`The distributive property links addition and`, [R`multiplication`, R`subtraction`, R`comparison`, R`rounding`], 0),
  tf("medium", R`There is only one correct representation of any function.`, false),
  mc("easy", R`A symbolic representation uses`, [R`symbols and equations`, R`blocks`, R`drawings`, R`spoken words only`], 0),
];

export default [{ code: "12.1", gen: g121 }];
