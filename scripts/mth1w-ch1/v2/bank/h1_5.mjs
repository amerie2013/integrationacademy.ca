// 1.5 Fractions: Multiplying, Dividing & Reciprocals — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { areaModel, tape } from "./svg.mjs";

export const TOPIC = "1.5 Fractions: Multiplying, Dividing & Reciprocals";
export const Q = [
  mc(String.raw`Which calculation does the area model show? (Blue columns and yellow rows; the green overlap is the answer.)`, String.raw`$\frac35\times\frac23=\frac25$`, [String.raw`$\frac35\times\frac23=\frac58$`, String.raw`$\frac35+\frac23=\frac{19}{15}$`, String.raw`$\frac23\div\frac35=\frac{10}{9}$`],
    String.raw`$3$ of $5$ columns and $2$ of $3$ rows; the overlap is $6$ of $15$ rectangles $=\frac25$.`, areaModel(3, 5, 2, 3)),
  fill(String.raw`Evaluate $-\frac56\div2\frac12\times\frac34$ in lowest terms: ___`, ["-1/4", "−1/4"], String.raw`$-\frac56\times\frac25\times\frac34=-\frac{30}{120}=-\frac14$.`),
  num(String.raw`How many $\frac38$-litre bottles can be filled from $5\frac14$ L of juice?`, 14, String.raw`$\frac{21}{4}\div\frac38=\frac{21}{4}\times\frac83=14$.`),
  ms(String.raw`Which pairs are reciprocals of each other? Select all.`, [String.raw`$-\frac23$ and $-\frac32$`, "$0.25$ and $4$", String.raw`$1\frac13$ and $\frac34$`, String.raw`$-5$ and $\frac15$`, String.raw`$0.6$ and $1\frac23$`], [0, 1, 2, 4], String.raw`Reciprocals multiply to $+1$. $-5\times\frac15=-1$, so that pair fails (the reciprocal of $-5$ is $-\frac15$).`),
  num(String.raw`Find $\frac23$ of $\frac34$ of $96$.`, 48, String.raw`$\frac34\times96=72$; $\frac23\times72=48$.`),
  mc(String.raw`Which expression has the greatest value?`, String.raw`$4\div\frac12$`, [String.raw`$4\times\frac12$`, String.raw`$\frac12\div4$`, String.raw`$4\div\frac23$`], String.raw`$8$, $2$, $\frac18$, $6$.`),
  fill(String.raw`Evaluate $\left(\frac12-\frac23\right)\div\left(-\frac59\right)$ in lowest terms: ___`, ["3/10"], String.raw`$-\frac16\times\left(-\frac95\right)=\frac{9}{30}=\frac{3}{10}$.`),
  fill(String.raw`A recipe for $24$ cookies uses $1\frac34$ cups of sugar. How many cups are needed for $40$ cookies? ___`, ["35/12", "2 11/12"], String.raw`$\frac74\times\frac{40}{24}=\frac74\times\frac53=\frac{35}{12}=2\frac{11}{12}$.`),
  tf(String.raw`Dividing by $\frac34$ gives the same result as multiplying by $\frac43$.`, true, String.raw`Dividing by a number is multiplying by its reciprocal.`),
  tf(String.raw`For every positive number $x$, $x\div\frac12<x$.`, false, String.raw`$x\div\frac12=2x>x$.`),
  num(String.raw`A $6$ m board is cut into pieces $\frac23$ m long, and $\frac13$ of the pieces are painted (shaded). How many pieces are painted?`, 3,
    String.raw`$6\div\frac23=9$ pieces; $\frac13\times9=3$.`, tape([{ n: 3, label: "painted", color: "amber" }, { n: 6, label: "not painted", color: "blue" }], { unit: 48, total: "6 m in 2/3 m pieces" })),
  mc(String.raw`A rectangle is $3\frac12$ m by $2\frac27$ m. What is its area?`, "$8$ m$^2$", [String.raw`$6\frac17$ m$^2$`, String.raw`$5\frac{11}{14}$ m$^2$`, String.raw`$6\frac27$ m$^2$`], String.raw`$\frac72\times\frac{16}{7}=8$. ($6\frac17$ multiplies wholes and parts separately; $5\frac{11}{14}$ is the sum.)`),
  num(String.raw`Jake reads $\frac14$ of a book on Monday and $\frac13$ of the remaining pages on Tuesday. $120$ pages are left. How many pages are in the book?`, 240, String.raw`After Monday $\frac34$ is left; Tuesday reads $\frac13\times\frac34=\frac14$; left $\frac12$ of the book $=120$, so $240$ pages.`),
  fill(String.raw`Write the reciprocal of $-2\frac37$: ___`, ["-7/17", "−7/17"], String.raw`$-2\frac37=-\frac{17}{7}$, reciprocal $-\frac{7}{17}$.`),
  ms(String.raw`Which expressions equal $-1$? Select all.`, [String.raw`$-\frac34\times\frac43$`, String.raw`$-\frac34\div\frac34$`, String.raw`$-\frac34\div\left(-\frac34\right)$`, String.raw`$\frac12\div\left(-\frac12\right)$`, String.raw`$-\frac25\times\left(-\frac52\right)$`], [0, 1, 3], String.raw`The third and fifth have same signs, so they equal $+1$.`),
  num(String.raw`Mia walks $2\frac14$ km in $\frac34$ of an hour. What is her speed in km/h?`, 3, String.raw`$\frac94\div\frac34=3$.`),
  mc(String.raw`Evaluate $\dfrac{\ \frac23\ }{\ \frac49\ }+1$.`, String.raw`$\frac52$`, [String.raw`$\frac{35}{27}$`, String.raw`$\frac23$`, String.raw`$\frac{13}{9}$`], String.raw`$\frac23\div\frac49=\frac23\times\frac94=\frac32$; $\frac32+1=\frac52$.`),
  num(String.raw`$\frac35$ of a class are girls and $\frac23$ of the girls play soccer. If $12$ girls play soccer, how many students are in the class?`, 30, String.raw`Soccer girls are $\frac23\times\frac35=\frac25$ of the class: $\frac25c=12$, $c=30$.`),
  tf(String.raw`The product of two fractions between $0$ and $1$ is less than each of them.`, true, String.raw`Multiplying by a number less than $1$ makes a positive number smaller, e.g.\ $\frac12\times\frac13=\frac16$.`),
  num(String.raw`What fraction of the square is green? Give a decimal.`, 0.5, String.raw`$\frac23\times\frac34=\frac{6}{12}=0.5$.`, areaModel(2, 3, 3, 4), 0.001),
];
