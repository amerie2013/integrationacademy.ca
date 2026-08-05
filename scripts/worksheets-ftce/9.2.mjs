const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "9.2",
  title: "Properties of Equality & Operations",
  intro: "The properties of equality and the field properties of real-number operations — the axioms that justify algebraic manipulation.",
  lesson: [
    ["Properties of equality", R`<b>Reflexive</b> ($a=a$), <b>symmetric</b> ($a=b\Rightarrow b=a$), and <b>transitive</b> ($a=b,\ b=c\Rightarrow a=c$), plus the addition and multiplication properties of equality.`],
    ["Operation properties", R`<b>Commutative</b> ($a+b=b+a$, $ab=ba$), <b>associative</b> ($(a+b)+c=a+(b+c)$), <b>identity</b> ($a+0=a$, $a\cdot1=a$), <b>inverse</b> ($a+(-a)=0$, $a\cdot\tfrac1a=1$), and <b>distributive</b> ($a(b+c)=ab+ac$).`],
    ["Closure & division by zero", R`The reals are closed under $+,-,\times,\div$ (except $\div 0$). Division by zero is <b>undefined</b> — no number times $0$ can give a nonzero result.`],
  ],
  examples: [
    ["Example 1", R`Name the property: $a+b=b+a$.`, R`Commutative property of addition.`],
    ["Example 2", R`Name the property: $(2\cdot3)\cdot4=2\cdot(3\cdot4)$.`, R`Associative property of multiplication.`],
    ["Example 3", R`Name the property: $5\cdot1=5$.`, R`Multiplicative identity.`],
    ["Example 4", R`Name the property: $3(x+4)=3x+12$.`, R`Distributive property.`],
    ["Example 5", R`Name the property: $7+(-7)=0$.`, R`Additive inverse.`],
  ],
  questions: [
    ["Problem 1", R`$a=a$ is the ___ property.`, R`reflexive`],
    ["Problem 2", R`If $a=b$ then $b=a$ is the ___ property.`, R`symmetric`],
    ["Problem 3", R`$a(b+c)=ab+ac$ is the ___ property.`, R`distributive`],
    ["Problem 4", R`$a+0=a$ uses the ___.`, R`additive identity`],
    ["Problem 5", R`$ab=ba$ is the ___ property.`, R`commutative`],
    ["Problem 6", R`Why is division by zero undefined?`, R`no number times $0$ gives a nonzero result`],
    ["Problem 7", R`$a\cdot\tfrac1a=1$ is the ___.`, R`multiplicative inverse`],
    ["Problem 8", R`$(a+b)+c=a+(b+c)$ is the ___ property.`, R`associative`],
  ],
};
