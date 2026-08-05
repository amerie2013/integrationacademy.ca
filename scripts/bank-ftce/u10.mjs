// FTCE Unit 10 — Mathematics as Communication. ~22 conceptual questions.
import { mc, tf, fill } from "./helpers.mjs";
const R = String.raw;

const g101 = () => [
  fill("easy", R`"At least one" means ___ or more.`, ["one", "1"]),
  fill("easy", R`"At least two" means ___ or more.`, ["two", "2"]),
  mc("medium", R`A good definition must give ___ conditions.`, [R`necessary and sufficient`, R`necessary only`, R`sufficient only`, R`approximate`], 0),
  mc("easy", R`"If and only if" indicates a`, [R`biconditional`, R`converse`, R`conjunction`, R`negation`], 0),
  mc("easy", R`An equation is a ___ representation.`, [R`symbolic`, R`concrete`, R`pictorial`, R`verbal`], 0),
  mc("easy", R`Manipulatives are a ___ representation.`, [R`concrete`, R`symbolic`, R`verbal`, R`abstract`], 0),
  mc("easy", R`A labeled diagram is a ___ representation.`, [R`pictorial`, R`symbolic`, R`concrete`, R`numeric`], 0),
  fill("medium", R`A rhombus needs ___ angles to be a square.`, ["right", "90 degree", "90°"]),
  mc("medium", R`"Mutually exclusive" events`, [R`cannot both occur`, R`always both occur`, R`are independent`, R`are equally likely`], 0),
  mc("medium", R`Calling a square "a shape with four sides" is a`, [R`description`, R`definition`, R`theorem`, R`postulate`], 0),
  mc("medium", R`Precise mathematical language avoids`, [R`ambiguity`, R`symbols`, R`diagrams`, R`definitions`], 0),
  mc("hard", R`A square is a quadrilateral with four equal sides and`, [R`four right angles`, R`two right angles`, R`parallel diagonals`, R`equal diagonals only`], 0),
  mc("medium", R`The three representation modes are concrete, pictorial, and`, [R`symbolic`, R`verbal`, R`numeric`, R`graphical`], 0),
  mc("hard", R`"For all" is a ___ quantifier.`, [R`universal`, R`existential`, R`conditional`, R`negation`], 0),
  mc("hard", R`"There exists" is an ___ quantifier.`, [R`existential`, R`universal`, R`conditional`, R`biconditional`], 0),
  mc("medium", R`In "if $p$ then $q$", $q$ is the`, [R`conclusion`, R`hypothesis`, R`converse`, R`negation`], 0),
  mc("medium", R`In "if $p$ then $q$", $p$ is the`, [R`hypothesis`, R`conclusion`, R`contrapositive`, R`inverse`], 0),
  tf("medium", R`A description uniquely determines an object.`, false),
  tf("easy", R`An equation is a symbolic representation.`, true),
  tf("medium", R`Necessary and sufficient conditions uniquely determine the object being defined.`, true),
  mc("easy", R`Base-ten blocks are a ___ representation.`, [R`concrete`, R`symbolic`, R`verbal`, R`abstract`], 0),
  mc("medium", R`Effective mathematical communication requires`, [R`precise terminology`, R`slang`, R`only symbols`, R`only pictures`], 0),
];

export default [{ code: "10.1", gen: g101 }];
