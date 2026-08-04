const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.10",
  title: "Algebraic Word Problems",
  intro: "Translating words into equations — number, geometry, motion, mixture, and work problems — the applied heart of the algebra competency.",
  lesson: [
    ["Translate carefully", R`Define the variable in words first. Turn key phrases into symbols ('less than' reverses order; 'of' means multiply; 'is' means $=$), then solve and check against the wording.`],
    ["Motion & work", R`Motion uses $d=rt$; set two distances (or times) equal as the story demands. Work problems add <b>rates</b>: if A finishes in $a$ hours, A's rate is $\tfrac1a$ of the job per hour.`],
    ["Mixture", R`Track the actual amount of substance: $(\text{concentration})\times(\text{volume})$ before mixing equals the amount after mixing.`],
  ],
  examples: [
    ["Example 1: Number", R`Five less than twice a number is $17$. Find it.`, R`$2n-5=17\Rightarrow 2n=22\Rightarrow n=11$.`],
    ["Example 2: Sum & difference", R`Two numbers sum to $30$ and differ by $8$. Find them.`, R`$x+y=30,\ x-y=8\Rightarrow x=19,\ y=11$.`],
    ["Example 3: Geometry", R`A rectangle's length is $3$ more than its width; the perimeter is $34$. Find the dimensions.`, R`$2(w+3)+2w=34\Rightarrow 4w+6=34\Rightarrow w=7$; length $10$.`],
    ["Example 4: Motion", R`A train leaves at $60$ km/h; two hours later a second leaves at $80$ km/h on the same route. When does the second catch the first?`, R`$60(t+2)=80t\Rightarrow 120=20t\Rightarrow t=6$ h after the second train departs.`],
    ["Example 5: Mixture", R`How many litres of $20\%$ acid must be added to $10$ L of $50\%$ acid to make a $30\%$ solution?`, R`$0.20x+0.50(10)=0.30(x+10)\Rightarrow 0.2x+5=0.3x+3\Rightarrow x=20$ L.`],
  ],
  questions: [
    ["Problem 1", R`Three more than half a number is $11$. Find it.`, R`$16$`],
    ["Problem 2", R`Three consecutive integers sum to $51$. Find them.`, R`$16,17,18$`],
    ["Problem 3", R`A rectangle's length is twice its width; the perimeter is $36$. Find the dimensions.`, R`width $6$, length $12$`],
    ["Problem 4", R`Two numbers differ by $5$ and sum to $21$. Find them.`, R`$13$ and $8$`],
    ["Problem 5", R`Split $\$1200$ so one part is twice the other.`, R`$\$400$ and $\$800$`],
    ["Problem 6", R`A finishes a job in $4$ h, B in $4$ h. How long together?`, R`$2$ h`],
    ["Problem 7", R`How much water added to $10$ L of $40\%$ acid gives $25\%$?`, R`$6$ L`],
    ["Problem 8", R`How long to travel $175$ km at $50$ km/h?`, R`$3.5$ h`],
  ],
};
