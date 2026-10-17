// 3.2 Common Factoring & Factoring by Grouping — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "./fig.mjs";

export const E = [
  mc(`What is the GCF of $12x$ and $18$?`, "$6$", ["$6x$", "$3$", "$36$"], "18 has no $x$."),
  mc(`What is the GCF of $8x^2$ and $20x$?`, "$4x$", ["$4x^2$", "$2x$", "$40x^2$"], "GCF(8, 20) = 4; lowest power $x$."),
  mc(`Factor fully: $6x+9$.`, "$3(2x+3)$", ["$3(2x+9)$", "$6(x+9)$", "$2(3x+9)$"], "GCF 3."),
  mc(`Factor fully: $10x^2-5x$.`, "$5x(2x-1)$", ["$5x(2x-5)$", "$5(2x^2-x)$", "$10x(x-5)$"], "GCF $5x$; the second term leaves 1."),
  fill(`$7x+14=7(x+$ ___$)$`, ["2"], "$14\\div7$."),
  fill(`$4x^2+12x=4x(x+$ ___$)$`, ["3"], "$12x\\div4x$."),
  tf(`$3x^2+6x=3(x^2+6x)$.`, false, "Dividing $6x$ by 3 gives $2x$: $3(x^2+2x)$."),
  num(`What is the GCF of $15$, $25$ and $35$?`, 5, "All are multiples of 5."),
  mc(`What is the GCF of $a^3b$ and $a^2b^2$?`, "$a^2b$", ["$a^3b^2$", "$ab$", "$a^5b^3$"], "Lowest powers."),
  tf(`Factoring is the reverse of expanding.`, true, "It writes a sum as a product."),
  mc(`Factor fully: $9a^2-3a$.`, "$3a(3a-1)$", ["$3a(3a)$", "$3(3a^2-a)$", "$9a(a-3)$"], "GCF $3a$."),
  fill(`$x(x+2)+5(x+2)=(x+2)(x+$ ___$)$`, ["5"], "The bracket is the common factor."),
  mc(`Factor fully: $-2x-8$ with a negative common factor.`, "$-2(x+4)$", ["$-2(x-4)$", "$2(-x+4)$", "$-2(x+8)$"], "$-8\\div(-2)=4$."),
  tf(`$5x+10=5(x+2)$.`, true, "Expand to check."),
  num(`$16x^3+24x^2=8x^2(2x+k)$. Find $k$.`, 3, "$24x^2\\div8x^2$."),
  mc(`Factor fully: $2xy+6y$.`, "$2y(x+3)$", ["$2(xy+3)$", "$y(2x+3)$", "$2x(y+3)$"], "GCF $2y$."),
  fill(`$11x-22=11(x-$ ___$)$`, ["2"], "$22\\div11$."),
  mc(`Which is fully factored?`, "$6(x+2)$", ["$2(3x+6)$", "$3(2x+4)$", "$1(6x+12)$"], "The bracket must have no common factor left."),
  tf(`$x^2+x=x(x+1)$.`, true, "$x\\cdot x+x\\cdot1$."),
  mc(`The area model has width $4x$. What is the missing length?`, "$2x+3$", ["$2x+12$", "$8x+3$", "$4x+3$"], "$8x^2\\div4x=2x$ and $12x\\div4x=3$.", areaDoc(["4x"], ["?", "?"], [["8x^2", "12x"]])),
];

export const M = [
  mc(`Factor fully: $24x^3-16x^2$.`, "$8x^2(3x-2)$", ["$8x(3x^2-2x)$", "$4x^2(6x-4)$", "$8x^2(3x-16)$"], "GCF $8x^2$."),
  mc(`Factor fully: $9x^2y+15xy^2$.`, "$3xy(3x+5y)$", ["$3x(3xy+5y^2)$", "$xy(9x+15y)$", "$3xy(3x+15y)$"], "GCF $3xy$."),
  mc(`Factor fully: $4x^3-8x^2+12x$.`, "$4x(x^2-2x+3)$", ["$4x(x^2-8x+12)$", "$4(x^3-2x^2+3x)$", "$2x(2x^2-4x+6)$"], "GCF $4x$."),
  mc(`Factor fully: $-3x^2+12x$ with a positive first term in the bracket.`, "$-3x(x-4)$", ["$-3x(x+4)$", "$3x(-x+4)$", "$-3(x^2-4x)$"], "$12x\\div(-3x)=-4$."),
  mc(`Factor fully: $a(b-2)+3(b-2)$.`, "$(b-2)(a+3)$", ["$(b+3)(a-2)$", "$ab-2a+3b-6$", "$(a+b)(3-2)$"], "Common bracket."),
  mc(`Factor fully: $x^2+4x+3x+12$.`, "$(x+4)(x+3)$", ["$(x+3)(x+12)$", "$(x+7)(x+12)$", "$x(x+4)(3)$"], "$x(x+4)+3(x+4)$."),
  mc(`Factor fully: $2x^2+10x-3x-15$.`, "$(x+5)(2x-3)$", ["$(x-5)(2x+3)$", "$(2x+5)(x-3)$", "$(x+5)(2x+3)$"], "$2x(x+5)-3(x+5)$."),
  fill(`$5x(x-1)-(x-1)=(x-1)(5x-$ ___$)$`, ["1"], "The second term is $-1(x-1)$."),
  num(`After factoring $6x^3+9x^2-3x$ fully, how many terms are inside the bracket?`, 3, "$3x(2x^2+3x-1)$."),
  tf(`$6(2x^2+3x)$ is the fully factored form of $12x^2+18x$.`, false, "$x$ is still common: $6x(2x+3)$."),
  ms(`Select all polynomials whose GCF is $2x$.`, ["$4x^2+6x$", "$2x+4$", "$10x^3-8x^2$", "$6x^2+3x$", "$2x^2-2x$"], [0, 4], "$2x+4$ has GCF 2; $10x^3-8x^2$ has GCF $2x^2$; $6x^2+3x$ has GCF $3x$."),
  mc(`Factor fully: $mx+my+nx+ny$.`, "$(x+y)(m+n)$", ["$(m+x)(n+y)$", "$mn(x+y)$", "$(mx+ny)^2$"], "$m(x+y)+n(x+y)$."),
  mc(`Factor fully: $3x-3y-ax+ay$.`, "$(x-y)(3-a)$", ["$(x-y)(3+a)$", "$(x+y)(3-a)$", "$(3-x)(y-a)$"], "$3(x-y)-a(x-y)$."),
  num(`A rectangle has area $6x^2+9x$ and width $3x$. What is its length when $x=2$?`, 7, "Length $2x+3$."),
  fill(`$20a^2b^3-30ab^2=10ab^2(2ab-$ ___$)$`, ["3"], "$30ab^2\\div10ab^2$."),
  mc(`What is the GCF of $14x^2y$, $21xy^2$ and $35xy$?`, "$7xy$", ["$7x^2y^2$", "$xy$", "$7$"], "GCF(14, 21, 35) = 7; lowest powers $x$, $y$."),
  tf(`$(x+1)(x+2)-3(x+2)=(x+2)(x-2)$.`, true, "Common bracket $(x+2)$; left over $(x+1)-3$."),
  num(`What is the GCF of $48$ and $64$?`, 16, "$48=16\\times3$, $64=16\\times4$."),
  mc(`Factor fully: $x^3+2x^2+3x+6$.`, "$(x+2)(x^2+3)$", ["$(x+3)(x^2+2)$", "$x(x^2+2x+3)+6$", "$(x+2)(x+3)$"], "$x^2(x+2)+3(x+2)$."),
  mc(`Which factorization does the area model show?`, "$(x+5)(x+2)$", ["$(x+10)(x+1)$", "$(x+7)(x+10)$", "$x(x+5)$"], "Rows $x$, $+2$; columns $x$, $+5$.", areaDoc(["x", "+2"], ["x", "+5"], [["x^2", "5x"], ["2x", "10"]])),
];
