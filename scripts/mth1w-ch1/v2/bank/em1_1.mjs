// 1.1 Number Sets — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, setsDiagram } from "./svg.mjs";

export const E = [
  mc(String.raw`Which number is a natural number?`, "$9$", ["$0$", "$-2$", String.raw`$\frac12$`], "Natural numbers are the counting numbers 1, 2, 3, …"),
  mc(String.raw`Which number is a whole number but NOT a natural number?`, "$0$", ["$1$", "$-1$", "$0.5$"], "Whole numbers include 0; natural numbers start at 1."),
  tf(String.raw`$-5$ is an integer.`, true, "Integers are the whole numbers and their opposites."),
  tf(String.raw`$0.25$ is irrational.`, false, String.raw`$0.25=\frac14$, a terminating decimal, so it is rational.`),
  mc(String.raw`What is the smallest set that contains $-10$?`, "integers", ["natural numbers", "whole numbers", "irrational numbers"], "Negative whole-number values first appear in the integers."),
  ms(String.raw`Which numbers are rational? Select all.`, [String.raw`$\frac34$`, "$-6$", "$0.2$", String.raw`$\sqrt5$`, String.raw`$\pi$`], [0, 1, 2], String.raw`$\sqrt5$ and $\pi$ cannot be written as fractions of integers.`),
  fill(String.raw`$\sqrt{36}=$ ___`, ["6"], String.raw`$6\times6=36$.`),
  mc(String.raw`Which number is irrational?`, String.raw`$\sqrt{11}$`, [String.raw`$\sqrt{9}$`, "$0.5$", String.raw`$\frac13$`], String.raw`$11$ is not a perfect square, so $\sqrt{11}$ is irrational.`),
  tf("Every natural number is also a whole number.", true, String.raw`$\mathbb{N}\subset\mathbb{W}$.`),
  num(String.raw`How many numbers in this list are integers? $\ 4,\ -2.5,\ 0,\ -7,\ \frac32,\ 10$`, 4, String.raw`$4,\ 0,\ -7,\ 10$.`),
  mc(String.raw`Point A sits in the “Natural” region of the diagram. Which number could A be?`, "$12$", ["$-12$", "$1.2$", "$0$"], "Only a counting number can be in the natural region.", setsDiagram([{ set: "N", label: "A" }])),
  fill(String.raw`Write $0.7$ as a fraction: ___`, ["7/10"], String.raw`Seven tenths: $\frac{7}{10}$.`),
  tf(String.raw`$\pi$ is a rational number.`, false, String.raw`$\pi=3.14159\ldots$ never ends or repeats.`),
  mc(String.raw`The repeating decimal $0.555\ldots$ is`, "rational", ["irrational", "an integer", "a natural number"], String.raw`Repeating decimals are rational: $0.\overline5=\frac59$.`),
  num(String.raw`Evaluate $\sqrt{100}$.`, 10, String.raw`$10^2=100$.`),
  ms(String.raw`Which numbers are integers? Select all.`, ["$-3$", "$8$", "$0$", "$2.5$", String.raw`$-\frac12$`], [0, 1, 2], "Integers have no fractional part."),
  mc("Which decimal terminates?", "$0.375$", [String.raw`$0.\overline{3}$`, String.raw`$0.1\overline{6}$`, String.raw`$3.14159\ldots$ ($\pi$)`], String.raw`$0.375$ ends; it equals $\frac38$.`),
  tf(String.raw`$-\frac12$ is a rational number.`, true, "Rational numbers can be negative."),
  num(String.raw`Evaluate $\sqrt{16}+\sqrt{25}$.`, 9, String.raw`$4+5=9$.`),
  mc(String.raw`What is the smallest set containing the number at point P?`, "integers", ["natural numbers", "whole numbers", "irrational numbers"], String.raw`P is at $-3$, a negative integer.`, numberLine({ min: -5, max: 5, letters: [{ at: -3, label: "P" }] })),
];

export const M = [
  fill(String.raw`Write $0.\overline{4}$ as a fraction: ___`, ["4/9"], String.raw`$10x-x=4$, $x=\frac49$.`),
  fill(String.raw`Write $0.125$ as a fraction in lowest terms: ___`, ["1/8"], String.raw`$\frac{125}{1000}=\frac18$.`),
  mc(String.raw`$\sqrt{\frac{4}{25}}=$`, String.raw`$\frac25$`, [String.raw`$\frac{2}{25}$`, String.raw`$\frac45$`, String.raw`$\frac15$`], String.raw`$\left(\frac25\right)^2=\frac{4}{25}$.`),
  num(String.raw`$\sqrt{50}$ lies between $7$ and which integer?`, 8, String.raw`$49<50<64$, so $7<\sqrt{50}<8$.`),
  ms(String.raw`Which numbers are natural numbers? Select all.`, ["$5$", "$0$", "$-5$", String.raw`$\sqrt{49}$`, String.raw`$\frac63$`], [0, 3, 4], String.raw`$\sqrt{49}=7$ and $\frac63=2$; $0$ and $-5$ are not natural.`),
  tf("Every integer is a whole number.", false, String.raw`$-3$ is an integer but not whole.`),
  mc("Which number lies between 4 and 5?", String.raw`$\sqrt{20}$`, [String.raw`$\sqrt{30}$`, String.raw`$\sqrt{15}$`, String.raw`$\sqrt{26}$`], String.raw`$16<20<25$.`),
  num("How many perfect squares are there from 1 to 50 (inclusive)?", 7, String.raw`$1,4,9,16,25,36,49$.`),
  mc(String.raw`$0.\overline{27}$ written as a fraction is`, String.raw`$\frac{3}{11}$`, [String.raw`$\frac{27}{100}$`, String.raw`$\frac{27}{90}$`, String.raw`$\frac27$`], String.raw`$\frac{27}{99}=\frac{3}{11}$.`),
  tf("The product of two rational numbers is always rational.", true, String.raw`$\frac ab\cdot\frac cd=\frac{ac}{bd}$, still a quotient of integers.`),
  mc("Which list is in order from least to greatest?", String.raw`$-\sqrt4,\ -1.5,\ 0,\ \sqrt2$`, [String.raw`$-1.5,\ -\sqrt4,\ 0,\ \sqrt2$`, String.raw`$0,\ -1.5,\ -\sqrt4,\ \sqrt2$`, String.raw`$-\sqrt4,\ 0,\ -1.5,\ \sqrt2$`], String.raw`$-2<-1.5<0<1.41$.`),
  fill(String.raw`Simplify: $-\sqrt{64}=$ ___`, ["-8", "−8"], String.raw`$\sqrt{64}=8$, so $-\sqrt{64}=-8$ (an integer).`),
  num(String.raw`Estimate $\sqrt{70}$ to one decimal place.`, 8.4, String.raw`$8.4^2=70.56$ and $8.3^2=68.89$; $\sqrt{70}\approx8.37$.`, undefined, 0.05),
  ms("Select every irrational number in the list.", [String.raw`$\sqrt3$`, String.raw`$\sqrt{\frac14}$`, String.raw`$0.1010010001\ldots$`, String.raw`$\frac{22}{7}$`, String.raw`$\sqrt{50}$`], [0, 2, 4], String.raw`$\sqrt{\frac14}=\frac12$ and $\frac{22}{7}$ are rational.`),
  mc(String.raw`Which letter shows $\sqrt{12}$?`, "B", ["A", "C", "D"], String.raw`$\sqrt{12}\approx3.46$.`, numberLine({ min: 2, max: 5, step: 0.5, letters: [{ at: 2.8, label: "A" }, { at: 3.46, label: "B" }, { at: 3.9, label: "C" }, { at: 4.25, label: "D" }] })),
  num(String.raw`Evaluate $0.\overline{3}+0.\overline{6}$ exactly.`, 1, String.raw`$\frac13+\frac23=1$.`),
  tf(String.raw`$1.4142$ is irrational.`, false, String.raw`It terminates, so it is rational (it is only an approximation of $\sqrt2$).`),
  mc("Which statement is true?", "Every rational number is a real number.", ["Every real number is rational.", "Zero is a natural number.", String.raw`$\sqrt2$ is rational.`], String.raw`$\mathbb{Q}\subset\mathbb{R}$.`),
  num(String.raw`A square has area $64$ m$^2$. How long is each side, in metres?`, 8, String.raw`$\sqrt{64}=8$.`),
  mc(String.raw`Point B is in the “Irrational” region. Which number could B be?`, String.raw`$\sqrt7$`, [String.raw`$\sqrt{49}$`, "$-7$", String.raw`$\frac72$`], String.raw`$7$ is not a perfect square, so $\sqrt7$ is irrational.`, setsDiagram([{ set: "I", label: "B" }])),
];
