// MTH1W chapter 3 (coding) PDF worksheet content (Tectonic theme) — distinct from & above the HTML, detailed traces.
const R = String.raw;
// A monospace pseudocode block: pass lines joined with \n.
const code = (...lines) => R`\begin{center}\ttfamily ` + lines.join(R`\\ `) + R`\end{center}`;

export const TOPICS = [
// ===================== 3.1 =====================
{
  code:"3.1", title:"Coding Algebraic Concepts", unit:"Unit 3: Coding",
  bigideas:R`Code stores values in \textbf{variables}. \texttt{set x to 5} puts $5$ in $x$; \texttt{set y to x+3} evaluates the right side using the \emph{current} value of $x$ and stores the result in $y$; \texttt{output} prints a value. Statements run top to bottom, so \textbf{order matters}.`,
  concepts:[
    ["Assignment and expressions",R`\texttt{set variable to expression} computes the expression with the current values, then stores it. Reading a variable does not change it; only \texttt{set} changes it.`],
    ["Reassignment and functions",R`\texttt{set x to x-4} uses the old $x$ to make the new $x$, replacing it. A named process like \texttt{double(n)} returns $2n$ for whatever input $n$ you give it.`],
  ],
  examples:[
    ["Predict the output",R`Predict the output.` + code(`set a to 6`,`set b to a*2`,`output b`),R`Read line by line. Line~1 stores $6$ in $a$. Line~2 evaluates $a\times2=6\times2=12$ and stores it in $b$. Line~3 prints $b$, so the output is $12$.`],
    ["Reassignment",R`Predict the output.` + code(`set x to 10`,`set x to x+5`,`set x to x*2`,`output x`),R`Track $x$ as it changes: start $x=10$; then $x=10+5=15$; then $x=15\times2=30$. The output is $30$.`],
    ["Two variables",R`Predict the output.` + code(`set p to 4`,`set q to p+3`,`set r to p*q`,`output r`),R`$p=4$; then $q=p+3=7$; then $r=p\times q=4\times7=28$. The output is $28$.`],
    ["A process with a parameter",R`A process $\texttt{triple}(n)$ returns $3n$. Find $\texttt{triple}(5)$ and $\texttt{triple}(-2)$.`,R`Substitute the input for $n$. $\texttt{triple}(5)=3\times5=15$; $\texttt{triple}(-2)=3\times(-2)=-6$.`],
    ["Order matters",R`Predict the output.` + code(`set x to 2`,`set x to x+3`,`set x to x*4`,`output x`),R`Follow the order: $x=2$; then $x=2+3=5$; then $x=5\times4=20$. The output is $20$. (Multiplying \emph{before} adding would give a different answer, which is why order matters.)`],
    ["Trace with a table",R`Predict the output.` + code(`set x to 3`,`set y to x*x`,`set z to y-x`,`output z`),R`Keep a table of the values as each line runs:
\begin{center}
\begin{tabular}{c|c|c}
$x$ & $y$ & $z$\\ \hline
3 & --- & ---\\
3 & 9 & ---\\
3 & 9 & 6\\
\end{tabular}
\end{center}
The output is $z=6$.`],
    ["A coded formula",R`A process $\texttt{area}(l,w)$ returns $l\times w$. Find $\texttt{area}(6,4)$.`,R`Substitute $l=6$ and $w=4$: $\texttt{area}(6,4)=6\times4=24$.`],
    ["Careful with negatives",R`Predict the output.` + code(`set t to -3`,`set s to t*t + 1`,`output s`),R`$t=-3$; then $s=(-3)\times(-3)+1=9+1=10$. The output is $10$.`],
    ["Challenge --- a copied value",R`Predict both outputs.` + code(`set a to 5`,`set b to a`,`set a to a+2`,`output a`,`output b`),R`$a=5$; then $b$ copies the current $a$, so $b=5$; then $a=5+2=7$. Changing $a$ afterward does \emph{not} change $b$. Outputs: $a=7$, then $b=5$.`],
  ],
  problems:[
    ["Problem 1",R`Output of:` + code(`set a to 7`,`set b to a+5`,`output b`),3.2],
    ["Problem 2",R`Output of:` + code(`set x to 3`,`set x to x*4`,`output x`),3.2],
    ["Problem 3",R`Output of:` + code(`set p to 10`,`set p to p-6`,`set p to p+1`,`output p`),3.4],
    ["Problem 4",R`A process $\texttt{half}(n)$ returns $n/2$. Find $\texttt{half}(18)$.`,3.0],
    ["Problem 5",R`Output of:` + code(`set m to 5`,`set n to m*m`,`output n`),3.2],
    ["Problem 6",R`Output of:` + code(`set a to 2`,`set b to 3`,`set c to a+b`,`set d to c*2`,`output d`),3.6],
    ["Problem 7",R`For $\texttt{triple}(n)=3n$, find $\texttt{triple}(-4)$.`,3.0],
    ["Problem 8",R`Output of:` + code(`set t to -2`,`set s to t+10`,`output s`),3.2],
    ["Problem 9",R`Output of:` + code(`set x to 4`,`set y to x`,`set x to 9`,`output y`),3.4],
    ["Problem 10",R`A process $\texttt{area}(l,w)=l\times w$. Find $\texttt{area}(7,3)$.`,3.0],
    ["Problem 11",R`Output of:` + code(`set k to 6`,`set k to k/2`,`set k to k+4`,`output k`),3.4],
    ["Problem 12",R`Output of:` + code(`set a to 5`,`set b to a-8`,`output b`),3.2],
    ["Problem 13 --- Challenge",R`Output of:` + code(`set x to 3`,`set y to x*x`,`set z to y+x`,`output z`),3.6],
  ],
  answers:[
    R`$12$.`, R`$12$.`, R`$5$.`, R`$9$.`, R`$25$.`, R`$c=5$, then $d=10$.`, R`$-12$.`, R`$8$.`,
    R`$4$ ($y$ kept the old value of $x$).`, R`$21$.`, R`$k=3$, then $7$.`, R`$-3$.`, R`$y=9$, $z=12$.`,
  ],
},
// ===================== 3.2 =====================
{
  code:"3.2", title:"Building Code from Steps", unit:"Unit 3: Coding",
  bigideas:R`A \textbf{loop} repeats statements: \texttt{repeat 3 times} runs the body $3$ times; \texttt{for i from 1 to 4} runs it with $i=1,2,3,4$. A \textbf{conditional} \texttt{if}\dots\texttt{else} chooses a branch. Steps must be ordered so no value is used before it is set.`,
  concepts:[
    ["Loops",R`In \texttt{for i from 1 to n} the counter $i$ takes each value $1,2,\dots,n$ in turn, and the body runs once for each --- $n$ times total. \texttt{repeat k times} runs the body $k$ times.`],
    ["Conditionals and sequence",R`\texttt{if condition ... else ...} runs the first branch when the condition is true, otherwise the second. Put steps in a workable order: compute a value before you use it.`],
  ],
  examples:[
    ["A sum loop",R`Predict the output.` + code(`set s to 0`,`for i from 1 to 5: set s to s+i`,`output s`),R`Start $s=0$, then add each $i$ in turn:
\begin{center}
\begin{tabular}{c|c}
$i$ & $s$ after\\ \hline
1 & 1\\
2 & 3\\
3 & 6\\
4 & 10\\
5 & 15\\
\end{tabular}
\end{center}
The output is $15$.`],
    ["A doubling loop",R`Predict the output.` + code(`set x to 1`,`repeat 4 times: set x to x*2`,`output x`),R`Start $x=1$ and double it four times: $1\to2\to4\to8\to16$. The output is $16$.`],
    ["A conditional",R`Predict the output.` + code(`set m to 68`,`if m >= 50 output Pass, else output Fail`),R`Check the condition: is $68\ge50$? Yes, so the first branch runs and the output is $\texttt{Pass}$.`],
    ["Counting",R`How many numbers does this print?` + code(`for i from 1 to n: output i`),R`The counter $i$ takes the values $1,2,\dots,n$, printing once for each, so it prints $n$ numbers.`],
    ["A product loop (factorial)",R`Predict the output.` + code(`set p to 1`,`for i from 1 to 4: set p to p*i`,`output p`),R`Start $p=1$ and multiply by each $i$: $1\times1\times2\times3\times4=24$. The output is $24$.`],
    ["Order the steps",R`Put these steps in order to find a rectangle's area and its cost at \$2 per unit area.`,R`You must compute a value before using it, so: (1) get the length and width; (2) $\texttt{area}=l\times w$; (3) $\texttt{cost}=2\times\texttt{area}$; (4) output the cost.`],
    ["A conditional with a computation",R`Predict the output.` + code(`set x to 7`,`if x > 5: set y to x*2, else: set y to x+2`,`output y`),R`Is $7>5$? Yes, so the first branch runs: $y=x\times2=14$. The output is $14$.`],
    ["Sum of squares",R`Predict the output.` + code(`set s to 0`,`for i from 1 to 3: set s to s + i*i`,`output s`),R`Add $i^2$ each pass: $1^2+2^2+3^2=1+4+9=14$. The output is $14$.`],
    ["Challenge --- find a formula",R`Write a formula (in terms of $n$) for the output.` + code(`set x to 2`,`repeat n times: set x to x*2`,`output x`),R`Start at $2$ and double $n$ times, multiplying by $2$ each pass: $x=2\times2^{n}=2^{\,n+1}$.`],
  ],
  problems:[
    ["Problem 1",R`Output of:` + code(`set s to 0`,`for i from 1 to 4: set s to s+i`,`output s`),3.6],
    ["Problem 2",R`Output of:` + code(`set x to 1`,`repeat 3 times: set x to x*3`,`output x`),3.4],
    ["Problem 3",R`Output of:` + code(`set m to 40`,`if m >= 50 output Pass, else output Fail`),3.2],
    ["Problem 4",R`How many numbers print?` + code(`for i from 1 to 7: output i`),3.0],
    ["Problem 5",R`Output of:` + code(`set p to 1`,`for i from 1 to 3: set p to p*i`,`output p`),3.4],
    ["Problem 6",R`Output of:` + code(`set x to 5`,`if x > 3: set y to x*10, else: set y to x`,`output y`),3.4],
    ["Problem 7",R`Output of:` + code(`set s to 0`,`for i from 1 to 4: set s to s + 2*i`,`output s`),3.6],
    ["Problem 8",R`How many lines print?` + code(`repeat 5 times: output Hello`),3.0],
    ["Problem 9",R`Output of:` + code(`set c to 100`,`repeat 2 times: set c to c-30`,`output c`),3.4],
    ["Problem 10",R`To make tea (boil water, add teabag, pour water, wait), which step must be first? Explain.`,3.2],
    ["Problem 11",R`Output of:` + code(`set n to 8`,`set half to n/2`,`output half`),3.0],
    ["Problem 12",R`Output of:` + code(`set s to 0`,`for i from 1 to 5: set s to s + i*2`,`output s`),3.6],
    ["Problem 13 --- Challenge",R`Write a formula for the output in terms of $n$:` + code(`set x to 1`,`repeat n times: set x to x*2`,`output x`),3.8],
  ],
  answers:[
    R`$10$.`, R`$27$.`, R`Fail ($40<50$).`, R`$7$ numbers.`, R`$6$.`, R`$50$.`, R`$2+4+6+8=20$.`,
    R`$5$ lines.`, R`$40$.`, R`Boil water first --- the later steps need it.`, R`$4$.`, R`$2+4+6+8+10=30$.`,
    R`$x=2^{\,n}$.`,
  ],
},
// ===================== 3.3 =====================
{
  code:"3.3", title:"Reading, Predicting & Altering Code", unit:"Unit 3: Coding",
  bigideas:R`\textbf{Trace} code by reading line by line and keeping a table of each variable's current value. To \textbf{alter} code, change a starting value, a loop count, or an operation, then re-trace --- small changes have predictable effects on the output.`,
  concepts:[
    ["Tracing",R`Write each variable in a table and update it as every line runs. In a loop, the body runs once per pass, so add a row per pass.`],
    ["Altering",R`Changing the initial value shifts the result; changing the loop count adds or removes passes; changing an operation changes how the value grows. Re-trace to get the new output.`],
  ],
  examples:[
    ["Trace",R`Predict the output.` + code(`set a to 3`,`set b to 4`,`set c to a*b`,`output c`),R`$a=3$, $b=4$, then $c=a\times b=3\times4=12$. The output is $12$.`],
    ["Doubling loop with a table",R`Predict the output.` + code(`set x to 2`,`repeat 4 times: set x to x*2`,`output x`),R`Double $x$ four times:
\begin{center}
\begin{tabular}{c|c}
Pass & $x$ after\\ \hline
1 & 4\\
2 & 8\\
3 & 16\\
4 & 32\\
\end{tabular}
\end{center}
The output is $32$.`],
    ["Alter the loop count",R`In the previous example, change \texttt{repeat 4 times} to \texttt{repeat 5 times}. What is the new output?`,R`One more doubling pass runs, so $x$ goes $32\to64$. The new output is $64$.`],
    ["Sum loop",R`Predict the output.` + code(`set s to 0`,`for i from 1 to 6: set s to s+i`,`output s`),R`Add $1$ through $6$: $1+2+3+4+5+6=21$. The output is $21$.`],
    ["Alter a starting value",R`Predict, then change $\texttt{p}$ to $8$.` + code(`set p to 5`,`set total to p*3`,`output total`),R`Originally $\texttt{total}=5\times3=15$. Changing $p$ to $8$ gives $\texttt{total}=8\times3=24$.`],
    ["Alter an operation",R`Predict, then change the $-3$ to $-7$.` + code(`set x to 10`,`set x to x-3`,`output x`),R`Originally $x=10-3=7$. Changing $-3$ to $-7$ gives $x=10-7=3$.`],
    ["Off-by-one counting",R`How many numbers print, and which?` + code(`for i from 2 to 5: output i`),R`The counter runs $i=2,3,4,5$, so it prints $4$ numbers: $2,3,4,5$.`],
    ["Trace a conditional",R`Predict the output.` + code(`set n to 4`,`if n is even output n*10, else output n`),R`Is $4$ even? Yes, so the first branch runs and the output is $4\times10=40$.`],
    ["Challenge --- predict then alter",R`Predict, then change $2\times i$ to $i\times i$.` + code(`set s to 0`,`for i from 1 to 4: set s to s + 2*i`,`output s`),R`Original: $2+4+6+8=20$. After the change it sums $i^2$: $1+4+9+16=30$.`],
  ],
  problems:[
    ["Problem 1",R`Output of:` + code(`set a to 6`,`set b to 2`,`set c to a-b`,`output c`),3.2],
    ["Problem 2",R`Output of:` + code(`set x to 3`,`repeat 3 times: set x to x*2`,`output x`),3.4],
    ["Problem 3",R`In Problem 2, change \texttt{repeat 3 times} to \texttt{repeat 4 times}. New output?`,3.2],
    ["Problem 4",R`Output of:` + code(`set s to 0`,`for i from 1 to 4: set s to s+i`,`output s`),3.6],
    ["Problem 5",R`For` + code(`set p to 4`,`set total to p*5`,`output total`) + R`change $\texttt{p}$ to $6$. New output?`,3.2],
    ["Problem 6",R`For` + code(`set x to 20`,`set x to x-8`,`output x`) + R`change the $8$ to $12$. New output?`,3.2],
    ["Problem 7",R`How many numbers print, and which?` + code(`for i from 3 to 6: output i`),3.2],
    ["Problem 8",R`Output of:` + code(`set n to 7`,`if n is odd output n*2, else output n`),3.4],
    ["Problem 9",R`Output of:` + code(`set s to 1`,`repeat 3 times: set s to s*2`,`output s`),3.4],
    ["Problem 10",R`Output of:` + code(`set a to 5`,`set b to a*a`,`set c to b-a`,`output c`),3.6],
    ["Problem 11",R`For` + code(`set x to 10`,`set x to x+3`,`output x`) + R`change $+3$ to $-3$. New output?`,3.2],
    ["Problem 12",R`For` + code(`set s to 0`,`for i from 1 to 5: set s to s+i`,`output s`) + R`change \texttt{to 5} to \texttt{to 3}. New output?`,3.6],
    ["Problem 13 --- Challenge",R`Predict, then change $i\times i$ to $2\times i$:` + code(`set s to 0`,`for i from 1 to 4: set s to s + i*i`,`output s`),3.8],
  ],
  answers:[
    R`$4$.`, R`$24$.`, R`$48$.`, R`$10$.`, R`$30$.`, R`$8$.`, R`$4$ numbers: $3,4,5,6$.`,
    R`$14$ ($7$ is odd).`, R`$8$.`, R`$b=25$, $c=20$.`, R`$7$.`, R`$1+2+3=6$.`, R`Original $30$; after the change $2+4+6+8=20$.`,
  ],
},
];
