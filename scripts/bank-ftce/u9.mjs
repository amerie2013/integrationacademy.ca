// FTCE Unit 9 — Number Sense & Mathematical Structure. ~24 curated Q per topic.
import { mc, tf, num, fill } from "./helpers.mjs";
const R = String.raw;

// ── 9.1 Real Numbers & Their Subsets ─────────────────────────
const g91 = () => [
  mc("easy", R`Classify $\sqrt2$.`, [R`irrational`, R`rational`, R`integer`, R`natural`], 0),
  mc("easy", R`Classify $-3$.`, [R`integer`, R`natural`, R`whole`, R`irrational`], 0),
  mc("easy", R`Classify $0.75$.`, [R`rational`, R`irrational`, R`integer`, R`natural`], 0),
  mc("easy", R`Classify $5$ (smallest set).`, [R`natural`, R`irrational`, R`integer only`, R`whole only`], 0),
  mc("medium", R`Classify $\sqrt9$.`, [R`rational`, R`irrational`, R`imaginary`, R`undefined`], 0),
  mc("medium", R`Classify $\sqrt3$.`, [R`irrational`, R`rational`, R`integer`, R`whole`], 0),
  mc("easy", R`Is $0$ a natural number?`, [R`no (it is whole)`, R`yes`, R`only sometimes`, R`it is irrational`], 0),
  mc("easy", R`Classify $-7$.`, [R`integer`, R`natural`, R`whole`, R`irrational`], 0),
  mc("easy", R`Classify $\tfrac23$.`, [R`rational`, R`irrational`, R`integer`, R`natural`], 0),
  mc("medium", R`Terminating decimals are ___ numbers.`, [R`rational`, R`irrational`, R`natural`, R`imaginary`], 0),
  mc("easy", R`Is $\pi$ rational?`, [R`no`, R`yes`, R`only to 2 dp`, R`sometimes`], 0),
  mc("medium", R`The smallest set containing $-4$ is the`, [R`integers`, R`naturals`, R`wholes`, R`irrationals`], 0),
  mc("medium", R`Classify $0.\overline{3}$.`, [R`rational`, R`irrational`, R`integer`, R`undefined`], 0),
  mc("medium", R`Classify $\sqrt{16}$.`, [R`rational`, R`irrational`, R`imaginary`, R`whole only`], 0),
  mc("hard", R`Classify $e$.`, [R`irrational`, R`rational`, R`integer`, R`imaginary`], 0),
  tf("easy", R`Every integer is a rational number.`, true),
  tf("easy", R`Every rational number is real.`, true),
  tf("medium", R`The whole numbers include $0$.`, true),
  tf("medium", R`The natural numbers include negative numbers.`, false),
  mc("medium", R`Is $\tfrac{22}{7}$ rational?`, [R`yes`, R`no`, R`only approximately`, R`it equals $\pi$`], 0),
  fill("easy", R`Each real number corresponds to exactly one ___ on the number line.`, ["point"]),
  mc("hard", R`Is $\sqrt{-1}$ a real number?`, [R`no`, R`yes`, R`only if squared`, R`it is rational`], 0),
  mc("easy", R`Classify $100$ (smallest set).`, [R`natural`, R`integer only`, R`irrational`, R`rational only`], 0),
  mc("medium", R`$\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset$`, [R`$\mathbb{R}$`, R`$\mathbb{N}$`, R`$\mathbb{Z}$`, R`nothing`], 0),
];

// ── 9.2 Properties of Equality & Operations ──────────────────
const g92 = () => [
  mc("easy", R`Name the property: $a+b=b+a$.`, [R`commutative`, R`associative`, R`distributive`, R`identity`], 0),
  mc("easy", R`Name the property: $a=a$.`, [R`reflexive`, R`symmetric`, R`transitive`, R`commutative`], 0),
  mc("easy", R`Name the property: $a=b\Rightarrow b=a$.`, [R`symmetric`, R`reflexive`, R`transitive`, R`distributive`], 0),
  mc("easy", R`Name the property: $a(b+c)=ab+ac$.`, [R`distributive`, R`associative`, R`commutative`, R`identity`], 0),
  mc("easy", R`Name the property: $a+0=a$.`, [R`additive identity`, R`additive inverse`, R`commutative`, R`distributive`], 0),
  mc("medium", R`Name the property: $a\cdot1=a$.`, [R`multiplicative identity`, R`multiplicative inverse`, R`distributive`, R`associative`], 0),
  mc("medium", R`Name the property: $a+(-a)=0$.`, [R`additive inverse`, R`additive identity`, R`commutative`, R`distributive`], 0),
  mc("medium", R`Name the property: $a\cdot\tfrac1a=1$.`, [R`multiplicative inverse`, R`multiplicative identity`, R`distributive`, R`reflexive`], 0),
  mc("medium", R`Name the property: $(a+b)+c=a+(b+c)$.`, [R`associative`, R`commutative`, R`distributive`, R`identity`], 0),
  mc("medium", R`Name the property: $a=b,\ b=c\Rightarrow a=c$.`, [R`transitive`, R`reflexive`, R`symmetric`, R`commutative`], 0),
  mc("easy", R`Name the property: $ab=ba$.`, [R`commutative`, R`associative`, R`distributive`, R`identity`], 0),
  fill("easy", R`Division by ___ is undefined.`, ["zero", "0"]),
  mc("medium", R`Name the property: $(2\cdot3)\cdot4=2\cdot(3\cdot4)$.`, [R`associative`, R`commutative`, R`distributive`, R`identity`], 0),
  tf("easy", R`Subtraction is commutative.`, false),
  tf("medium", R`The real numbers are closed under addition.`, true),
  tf("medium", R`The natural numbers are closed under subtraction.`, false),
  mc("easy", R`Name the property: $3(x+4)=3x+12$.`, [R`distributive`, R`associative`, R`commutative`, R`identity`], 0),
  mc("medium", R`Name the property: $7+0=7$.`, [R`additive identity`, R`multiplicative identity`, R`inverse`, R`reflexive`], 0),
  fill("medium", R`The multiplicative identity is the number ___.`, ["1"]),
  fill("medium", R`The additive identity is the number ___.`, ["0"]),
  tf("easy", R`Division is commutative.`, false),
  mc("hard", R`Which shows the distributive property?`, [R`$2(3+4)=2\cdot3+2\cdot4$`, R`$2+3=3+2$`, R`$2\cdot1=2$`, R`$2+0=2$`], 0),
  mc("hard", R`$5\cdot0=0$ illustrates the`, [R`zero (multiplication) property`, R`identity property`, R`inverse property`, R`reflexive property`], 0),
  tf("medium", R`If $x=5$ and $5=y$, then $x=y$ by the transitive property.`, true),
];

// ── 9.3 Complex Numbers ──────────────────────────────────────
const g93 = () => [
  mc("easy", R`Simplify $i^2$.`, [R`$-1$`, R`$1$`, R`$i$`, R`$-i$`], 0),
  mc("easy", R`$(2+3i)+(4-i)=$`, [R`$6+2i$`, R`$6+4i$`, R`$6-2i$`, R`$2+2i$`], 0),
  mc("medium", R`$(1+i)(1-i)=$`, [R`$2$`, R`$0$`, R`$2i$`, R`$1+i^2$`], 0),
  mc("easy", R`Conjugate of $3-2i$?`, [R`$3+2i$`, R`$-3+2i$`, R`$3-2i$`, R`$-3-2i$`], 0),
  mc("medium", R`Solve $x^2+9=0$.`, [R`$x=\pm3i$`, R`$x=\pm3$`, R`$x=3i$`, R`$x=\pm9i$`], 0),
  mc("easy", R`Simplify $i^4$.`, [R`$1$`, R`$-1$`, R`$i$`, R`$-i$`], 0),
  mc("medium", R`Simplify $i^3$.`, [R`$-i$`, R`$i$`, R`$-1$`, R`$1$`], 0),
  mc("medium", R`$(2+i)^2=$`, [R`$3+4i$`, R`$4+i$`, R`$5+4i$`, R`$4+4i$`], 0),
  mc("easy", R`Real part of $5-7i$?`, [R`$5$`, R`$-7$`, R`$7$`, R`$-5$`], 0),
  mc("easy", R`Imaginary part of $4+3i$?`, [R`$3$`, R`$4$`, R`$3i$`, R`$7$`], 0),
  mc("medium", R`$(3+2i)+(1+4i)=$`, [R`$4+6i$`, R`$4+2i$`, R`$3+8i$`, R`$4-6i$`], 0),
  mc("hard", R`$(3+i)(2+i)=$`, [R`$5+5i$`, R`$6+i$`, R`$5+i$`, R`$7+5i$`], 0),
  mc("medium", R`Solve $x^2+16=0$.`, [R`$x=\pm4i$`, R`$x=\pm4$`, R`$x=4i$`, R`$x=\pm16i$`], 0),
  mc("hard", R`$(2+i)(2-i)=$`, [R`$5$`, R`$4$`, R`$3$`, R`$4+i$`], 0),
  mc("medium", R`Conjugate of $a+bi$?`, [R`$a-bi$`, R`$-a+bi$`, R`$-a-bi$`, R`$b+ai$`], 0),
  mc("hard", R`$(a+bi)(a-bi)=$`, [R`$a^2+b^2$`, R`$a^2-b^2$`, R`$a^2+b^2 i$`, R`$a^2-b^2 i$`], 0),
  mc("hard", R`$(5-4i)^2=$`, [R`$9-40i$`, R`$9+40i$`, R`$41-40i$`, R`$25-16i$`], 0),
  tf("easy", R`$7$ is a complex number (with imaginary part $0$).`, true),
  mc("medium", R`$(2-i)+(3+4i)=$`, [R`$5+3i$`, R`$5-3i$`, R`$5+5i$`, R`$1+3i$`], 0),
  mc("medium", R`Simplify $\sqrt{-9}$.`, [R`$3i$`, R`$-3$`, R`$9i$`, R`$\pm3i$`], 0),
  mc("hard", R`$(1+2i)(3-i)=$`, [R`$5+5i$`, R`$3+5i$`, R`$5+i$`, R`$1+5i$`], 0),
  mc("medium", R`Solve $x^2=-4$.`, [R`$x=\pm2i$`, R`$x=\pm2$`, R`$x=2i$`, R`$x=\pm4i$`], 0),
  mc("hard", R`Conjugate of $6i$ (i.e. $0+6i$)?`, [R`$-6i$`, R`$6i$`, R`$6$`, R`$-6$`], 0),
  tf("medium", R`Complex roots of a real quadratic occur in conjugate pairs.`, true),
];

export default [
  { code: "9.1", gen: g91 }, { code: "9.2", gen: g92 }, { code: "9.3", gen: g93 },
];
