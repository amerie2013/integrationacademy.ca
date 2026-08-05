const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "9.1",
  title: "Real Numbers & Their Subsets",
  intro: "The nested number systems from naturals to reals, the rational/irrational distinction, and the number line.",
  lesson: [
    ["The number sets", R`Natural $\mathbb{N}=\{1,2,3,\ldots\}$; Whole $\mathbb{W}=\{0,1,2,\ldots\}$; Integers $\mathbb{Z}=\{\ldots,-1,0,1,\ldots\}$; Rational $\mathbb{Q}$; Irrational; together the Reals $\mathbb{R}$. They nest: $\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.`],
    ["Rational vs irrational", R`A <b>rational</b> number can be written $\dfrac{a}{b}$ ($b\ne0$); its decimal terminates or repeats. An <b>irrational</b> number (e.g. $\sqrt2,\pi,e$) has a non-terminating, non-repeating decimal.`],
    ["The number line", R`Every real number corresponds to exactly one point on the number line — a one-to-one correspondence.`],
  ],
  examples: [
    ["Example 1: Irrational", R`Classify $\sqrt2$.`, R`Irrational (also real).`],
    ["Example 2: Integer", R`Classify $-3$.`, R`Integer (also rational and real).`],
    ["Example 3: Terminating", R`Classify $0.75$.`, R`Rational (it terminates; $=\tfrac34$).`],
    ["Example 4: Repeating", R`Classify $0.\overline{3}$.`, R`Rational (repeating $=\tfrac13$).`],
    ["Example 5: Pi", R`Is $\pi$ rational?`, R`No — it is irrational.`],
  ],
  questions: [
    ["Problem 1", R`To which sets does $5$ belong (smallest first)?`, R`natural (also whole, integer, rational, real)`],
    ["Problem 2", R`Classify $\sqrt9$.`, R`$3$ — rational`],
    ["Problem 3", R`Classify $\sqrt3$.`, R`irrational`],
    ["Problem 4", R`Is $0$ a natural number?`, R`no (it is a whole number)`],
    ["Problem 5", R`Classify $-7$.`, R`integer`],
    ["Problem 6", R`Classify $\tfrac23$.`, R`rational`],
    ["Problem 7", R`Terminating decimals are ___ numbers.`, R`rational`],
    ["Problem 8", R`The smallest set containing $-4$ is the ___.`, R`integers`],
  ],
};
