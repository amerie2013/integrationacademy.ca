// MTH1W chapter 7 (Financial Literacy) PDF worksheet content — Tectonic theme, detailed solutions.
const R = String.raw;

export const TOPICS = [
// ===================== 7.1 =====================
{
  code:"7.1", title:"Making Financial Decisions", unit:"Unit 7: Financial Literacy",
  bigideas:R`A good financial decision compares the \textbf{total} cost of each option (including recurring and hidden costs), separates \textbf{needs} from \textbf{wants}, and weighs cost against benefit. The \textbf{unit price} (cost $\div$ quantity) reveals the better buy.`,
  concepts:[
    ["Comparing options",R`Add up every cost --- one-time and recurring --- over the same time period. For different sizes, compare the unit price (price per kg, per litre, per month).`],
    ["Needs, wants, and trade-offs",R`Needs (rent, food) come before wants (games, concerts). A recurring cost adds up fast, so multiply it out before deciding.`],
  ],
  examples:[
    ["Compare unit prices",R`Which is the better buy: \$6.00 for $4$ kg or \$8.40 for $6$ kg?`,R`Find each unit price. First: $6.00\div4=\$1.50$/kg. Second: $8.40\div6=\$1.40$/kg. The $6$ kg option is cheaper per kg.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.5,1);
\node[below] at (0.75,-0.2) {\scriptsize\$1.50/kg};
\draw[fill=ex3!15,draw=ex3,thick] (2.5,0) rectangle (3.9,1);
\node[below] at (3.2,-0.2) {\scriptsize\$1.40/kg};
\end{tikzpicture}\end{center}`],
    ["Total cost with a plan",R`Phone A costs \$600 outright. Phone B costs \$300 plus \$20/month for $12$ months. Which is cheaper over a year?`,R`Phone B's total is $300+20\times12=300+240=\$540$, which is less than \$600. So Phone B is cheaper over the year.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize months},ylabel={\scriptsize\$},grid=both,grid style={gray!16},xmin=0,xmax=13,ymin=0,ymax=650,xtick distance=2,ytick distance=100,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:12,samples=2,ex0,thick]{600};
\addplot[domain=0:12,samples=2,ex3,thick]{300+20*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(12,540)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Cost per litre",R`Which is cheaper per litre: $500$ mL for \$2.00 or $2$ L for \$7.00?`,R`Per litre: $500$ mL $=0.5$ L, so \$2.00$\div0.5=\$4.00$/L; and $7.00\div2=\$3.50$/L. The $2$ L bottle is cheaper.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (2,1);
\node[below] at (1,-0.2) {\scriptsize\$4.00/L};
\draw[fill=ex3!15,draw=ex3,thick] (3,0) rectangle (4.75,1);
\node[below] at (3.875,-0.2) {\scriptsize\$3.50/L};
\end{tikzpicture}\end{center}`],
    ["A recurring cost",R`A \$5 coffee bought every day --- what is the yearly cost?`,R`Multiply out: $5\times365=\$1825$ per year.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.4cm,minimum height=1cm] (a) at (0,0) {\$5 / day};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3cm,minimum height=1cm] (b) at (4.2,0) {\$1825 / year};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 365$};
\end{tikzpicture}\end{center}`],
    ["Choose the bigger saving",R`An \$80 item has two offers: $25\%$ off, or \$15 off. Which saves more?`,R`$25\%$ of \$80 is $0.25\times80=\$20$, which is more than \$15. So the percentage discount saves more.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (2,1);
\node[below] at (1,-0.2) {\scriptsize save \$20 (25\%)};
\draw[fill=ex3!15,draw=ex3,thick] (3,0) rectangle (4.5,1);
\node[below] at (3.75,-0.2) {\scriptsize save \$15};
\end{tikzpicture}\end{center}`],
    ["When does buying beat renting?",R`Renting costs \$50/month; buying costs \$500 once. After how many months is buying cheaper?`,R`Buying is cheaper once $50m>500$, i.e.\ $m>10$: from month $11$ on. (They are equal at $10$ months.)
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize months},ylabel={\scriptsize\$},grid=both,grid style={gray!16},xmin=0,xmax=15,ymin=0,ymax=750,xtick distance=2,ytick distance=100,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:14,samples=2,ex0,thick]{50*x};
\addplot[domain=0:14,samples=2,ex3,thick]{500};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(10,500)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Needs versus wants",R`Classify: rent, a video game, groceries, a concert ticket.`,R`Needs: rent and groceries. Wants: the video game and the concert ticket.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!10,rounded corners,minimum width=3cm,minimum height=1.6cm,align=center,font=\scriptsize] (a) at (0,0) {\textbf{Needs}\\rent\\groceries};
\node[draw=ex3,thick,fill=ex3!10,rounded corners,minimum width=3cm,minimum height=1.6cm,align=center,font=\scriptsize] (b) at (3.6,0) {\textbf{Wants}\\video game\\concert ticket};
\end{tikzpicture}\end{center}`],
    ["Saving toward a goal",R`Saving \$40 each week, how many weeks to reach \$520?`,R`$520\div40=13$ weeks.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize weeks},ylabel={\scriptsize\$ saved},grid=both,grid style={gray!16},xmin=0,xmax=15,ymin=0,ymax=600,xtick distance=2,ytick distance=100,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:14,samples=2,ex0,thick]{40*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(13,520)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Challenge --- yearly vs monthly",R`A membership costs \$120/year or \$15/month. Which is cheaper, and by how much per year?`,R`Monthly for a year is $15\times12=\$180$. The \$120 yearly plan is cheaper by $180-120=\$60$.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.8,1);
\node[below] at (0.9,-0.2) {\scriptsize\$120/year};
\draw[fill=ex3!15,draw=ex3,thick] (2.8,0) rectangle (5.5,1);
\node[below] at (4.15,-0.2) {\scriptsize\$180/year (monthly)};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Which is cheaper per kg: \$9 for $3$ kg or \$10 for $4$ kg?`,3.4],
    ["Problem 2",R`A \$5 snack bought every day --- cost over $30$ days?`,3.2],
    ["Problem 3",R`Which is cheaper per litre: $250$ mL for \$1.50 or $1$ L for \$5.00?`,3.4],
    ["Problem 4",R`Phone A: \$700. Phone B: \$400 plus \$25/month for $12$ months. Which is cheaper over a year?`,3.6],
    ["Problem 5",R`A \$60 item: $20\%$ off or \$10 off --- which saves more?`,3.4],
    ["Problem 6",R`Saving \$30/week, how many weeks to reach \$450?`,3.2],
    ["Problem 7",R`Renting \$40/month vs buying \$360 once. After how many months is buying cheaper?`,3.6],
    ["Problem 8",R`Classify as need or want: groceries; a movie ticket.`,3.0],
    ["Problem 9",R`Better buy per litre: \$12 for $2$ L or \$7 for $1$ L?`,3.4],
    ["Problem 10",R`A gym costs \$45/month. What is the yearly cost?`,3.2],
    ["Problem 11",R`Coffee \$4/day, $5$ days a week, for $4$ weeks --- total cost?`,3.4],
    ["Problem 12",R`Saving \$25/week for $8$ weeks --- total saved?`,3.2],
    ["Problem 13 --- Challenge",R`Plan A: \$99/year. Plan B: \$12/month. Which is cheaper, and by how much per year?`,3.8],
  ],
  answers:[
    R`\$3 vs \$2.50/kg: the $4$ kg.`, R`\$150.`, R`\$6 vs \$5/L: the $1$ L.`, R`\$700 vs \$700: equal.`,
    R`\$12 vs \$10: $20\%$ off.`, R`$15$ weeks.`, R`$40m>360\Rightarrow m>9$: from month $10$.`,
    R`groceries = need; movie = want.`, R`\$6 vs \$7/L: the $2$ L.`, R`\$540.`, R`\$80.`, R`\$200.`,
    R`B $=\$144$; A saves \$45/year.`,
  ],
},
// ===================== 7.2 =====================
{
  code:"7.2", title:"Appreciation & Depreciation", unit:"Unit 7: Financial Literacy",
  bigideas:R`\textbf{Appreciation} is a percent increase in value over time; \textbf{depreciation} is a percent decrease. For one period, multiply by $(1+r)$ or $(1-r)$. Over $n$ periods, multiply by that factor each time: value $=P(1\pm r)^n$.`,
  concepts:[
    ["One period",R`Increase of $r$: multiply by $(1+r)$. Decrease of $r$: multiply by $(1-r)$. Write the rate as a decimal ($20\%=0.20$).`],
    ["Several periods and reversing",R`Over $n$ periods, value $=P(1\pm r)^n$. To find the original from a changed value, divide by the factor.`],
  ],
  examples:[
    ["One-year appreciation",R`A \$2000 collectible appreciates $10\%$ in a year. Find its new value.`,R`Multiply by $(1+0.10)=1.10$: $2000\times1.10=\$2200$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=2,ymin=1900,ymax=2300,xtick distance=1,ytick distance=100,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:1.5,samples=50,ex0,thick]{2000*1.10^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,2000)(1,2200)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["One-year depreciation",R`A \$30000 car depreciates $20\%$ in a year. Find its value.`,R`Multiply by $(1-0.20)=0.80$: $30000\times0.80=\$24000$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=2,ymin=0,ymax=32000,xtick distance=1,ytick distance=8000,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:1.5,samples=50,ex0,thick]{30000*0.80^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,30000)(1,24000)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Two years of depreciation",R`Find that car's value after $2$ years.`,R`Multiply by $0.80$ each year: $30000\times0.80^2=30000\times0.64=\$19200$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=0,ymax=32000,xtick distance=1,ytick distance=8000,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2.5,samples=50,ex0,thick]{30000*0.80^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,30000)(1,24000)(2,19200)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Percent change from values",R`An item bought for \$500 is now worth \$650. Find the percent gain.`,R`Gain $=650-500=\$150$. As a percent of the original: $\tfrac{150}{500}=0.30=30\%$.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1,1.67);
\node[below] at (0.5,-0.2) {\scriptsize\$500};
\draw[fill=ex3!15,draw=ex3,thick] (2,0) rectangle (3,2.17);
\node[below] at (2.5,-0.2) {\scriptsize\$650};
\node at (1.5,2.5) {\scriptsize$+30\%$};
\end{tikzpicture}\end{center}`],
    ["Reverse a depreciation",R`After a $20\%$ drop, a car is worth \$16000. Find its original value.`,R`It is now $80\%$ of the original: original $=\tfrac{16000}{0.80}=\$20000$.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1,2);
\node[below] at (0.5,-0.2) {\scriptsize original \$20{,}000};
\draw[fill=ex3!15,draw=ex3,thick] (2,0) rectangle (3,1.6);
\node[below] at (2.5,-0.2) {\scriptsize now \$16{,}000 (80\%)};
\end{tikzpicture}\end{center}`],
    ["Two increases",R`A \$300 collectible rises $8\%$, then $8\%$ again. Find its value.`,R`Multiply by $1.08$ twice: $300\times1.08^2=300\times1.1664=\$349.92$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=0,ymax=400,xtick distance=1,ytick distance=100,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2.5,samples=50,ex0,thick]{300*1.08^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,300)(1,324)(2,349.92)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Depreciation table",R`A \$5000 laptop loses $25\%$ each year. Find its value after $1$ and $2$ years.`,R`Year $1$: $5000\times0.75=\$3750$. Year $2$: $3750\times0.75=\$2812.50$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=0,ymax=5500,xtick distance=1,ytick distance=1000,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2.5,samples=50,ex0,thick]{5000*0.75^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,5000)(1,3750)(2,2812.5)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Three years",R`\$1000 appreciates $5\%$ per year. Find its value after $2$ years.`,R`$1000\times1.05^2=1000\times1.1025=\$1102.50$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=900,ymax=1200,xtick distance=1,ytick distance=50,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2.5,samples=50,ex0,thick]{1000*1.05^x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,1000)(1,1050)(2,1102.5)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Challenge --- reach a target",R`\$4000 appreciates $10\%$ per year. In which year does it first exceed \$5000?`,R`Year $1$: \$4400; year $2$: \$4840; year $3$: $4840\times1.10=\$5324$. It first exceeds \$5000 in year $3$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize years},ylabel={\scriptsize value (\$)},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=0,ymax=5600,xtick distance=1,ytick distance=1000,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:3.5,samples=50,ex0,thick]{4000*1.10^x};
\addplot[domain=0:3.5,samples=2,ex3,dashed,thick]{5000};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,4000)(1,4400)(2,4840)(3,5324)};
\end{axis}\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`\$1000 appreciates $10\%$ in a year. New value?`,3.2],
    ["Problem 2",R`\$2000 depreciates $15\%$ in a year. New value?`,3.2],
    ["Problem 3",R`An item rises from \$500 to \$600. Percent gain?`,3.2],
    ["Problem 4",R`An item falls from \$800 to \$600. Percent loss?`,3.4],
    ["Problem 5",R`A \$10000 car loses $20\%$ each year. Value after $2$ years?`,3.6],
    ["Problem 6",R`\$1000 appreciates $5\%$ per year. Value after $2$ years?`,3.6],
    ["Problem 7",R`After a $10\%$ drop, an item is worth \$900. Original value?`,3.4],
    ["Problem 8",R`\$300 rises $8\%$, then $8\%$ again. New value?`,3.6],
    ["Problem 9",R`A \$50000 house appreciates $6\%$ in a year. New value?`,3.2],
    ["Problem 10",R`A \$1200 phone depreciates $30\%$ in a year. New value?`,3.2],
    ["Problem 11",R`After $25\%$ off, a price is \$150. Original price?`,3.4],
    ["Problem 12",R`\$2000 depreciates $10\%$ per year. Value after $3$ years?`,3.8],
    ["Problem 13 --- Challenge",R`\$5000 appreciates $8\%$ per year. In which year does it first exceed \$6000?`,4.0],
  ],
  answers:[
    R`\$1100.`, R`\$1700.`, R`$20\%$.`, R`$25\%$.`, R`$10000\times0.8^2=\$6400$.`, R`\$1102.50.`,
    R`$\tfrac{900}{0.9}=\$1000$.`, R`$300\times1.08^2=\$349.92$.`, R`\$53000.`, R`\$840.`, R`$\tfrac{150}{0.75}=\$200$.`,
    R`$2000\times0.9^3=\$1458$.`, R`Year $3$ (\$5832 then \$6298).`,
  ],
},
// ===================== 7.3 =====================
{
  code:"7.3", title:"Interest & Borrowing", unit:"Unit 7: Financial Literacy",
  bigideas:R`\textbf{Simple interest} is $I=Prt$: principal $\times$ rate $\times$ time (rate as a decimal, time in years). The \textbf{total to repay} is principal $+$ interest. Comparing loans means comparing total interest --- a longer term usually costs more.`,
  concepts:[
    ["Simple interest",R`$I=Prt$. Write the rate as a decimal ($5\%=0.05$) and the time in years ($6$ months $=0.5$ year). Total repaid $=P+I$.`],
    ["Rearranging the formula",R`Solve for any variable: $r=\dfrac{I}{Pt}$, $t=\dfrac{I}{Pr}$, $P=\dfrac{I}{rt}$.`],
  ],
  examples:[
    ["Find the interest",R`Find the simple interest on \$1000 at $5\%$ for $3$ years.`,R`$I=Prt=1000\times0.05\times3=\$150$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize$I$ (\$)},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=0,ymax=220,xtick distance=1,ytick distance=40,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:3.5,samples=2,ex0,thick]{50*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(3,150)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Total to repay",R`What is the total to repay on that loan?`,R`Total $=P+I=1000+150=\$1150$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize total (\$)},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=900,ymax=1250,xtick distance=1,ytick distance=50,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:3.5,samples=2,ex0,thick]{1000+50*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,1000)(3,1150)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["A two-year loan",R`Find the interest on \$2000 at $4\%$ for $2$ years.`,R`$I=2000\times0.04\times2=\$160$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize$I$ (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=0,ymax=260,xtick distance=1,ytick distance=50,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2.5,samples=2,ex0,thick]{80*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,160)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Find the time",R`\$500 at $6\%$ earns \$90 in interest. How many years?`,R`$t=\dfrac{I}{Pr}=\dfrac{90}{500\times0.06}=\dfrac{90}{30}=3$ years.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize$I$ (\$)},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=0,ymax=130,xtick distance=1,ytick distance=20,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:3.5,samples=2,ex0,thick]{30*x};
\addplot[domain=0:3.5,samples=2,ex3,dashed,thick]{90};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(3,90)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Find the rate",R`\$800 earns \$96 in $2$ years. Find the rate.`,R`$r=\dfrac{I}{Pt}=\dfrac{96}{800\times2}=\dfrac{96}{1600}=0.06=6\%$.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.6cm,minimum height=1cm] (a) at (0,0) {P=\$800, t=2 yr, I=\$96};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2cm,minimum height=1cm] (b) at (5.6,0) {r=6\%};
\draw[->,thick] (a)--(b);
\end{tikzpicture}\end{center}`],
    ["Find the principal",R`At $5\%$ for $4$ years a loan earns \$200 interest. Find the principal.`,R`$P=\dfrac{I}{rt}=\dfrac{200}{0.05\times4}=\dfrac{200}{0.2}=\$1000$.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.6cm,minimum height=1cm] (a) at (0,0) {r=5\%, t=4 yr, I=\$200};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.4cm,minimum height=1cm] (b) at (5.8,0) {P=\$1000};
\draw[->,thick] (a)--(b);
\end{tikzpicture}\end{center}`],
    ["Part of a year",R`Find the interest on \$1500 at $8\%$ for $6$ months.`,R`$6$ months $=0.5$ year: $I=1500\times0.08\times0.5=\$60$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize$I$ (\$)},grid=both,grid style={gray!16},xmin=0,xmax=1,ymin=0,ymax=140,xtick distance=0.25,ytick distance=20,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:1,samples=2,ex0,thick]{120*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0.5,60)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Compare two loans",R`Which costs less interest: \$1000 at $5\%$ for $2$ years, or \$1000 at $4\%$ for $3$ years?`,R`First: $1000\times0.05\times2=\$100$. Second: $1000\times0.04\times3=\$120$. The first (\$100) costs less.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (years)},ylabel={\scriptsize$I$ (\$)},grid=both,grid style={gray!16},xmin=0,xmax=3.5,ymin=0,ymax=140,xtick distance=1,ytick distance=20,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:2,samples=2,ex0,thick]{50*x};
\addplot[domain=0:3,samples=2,ex3,thick]{40*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,100)(3,120)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Challenge --- monthly payment",R`A \$2000 loan at $7\%$ simple interest is repaid over $3$ years. Find the total and the equal monthly payment.`,R`$I=2000\times0.07\times3=\$420$; total $=\$2420$. Over $36$ months: $2420\div36\approx\$67.22$/month.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (a) at (0,0) {\$2000 @ 7\% $\times$3 yr};
\node[draw=ex1,thick,fill=ex1!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (5,0) {total \$2420};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3cm,minimum height=1cm] (c) at (9.4,0) {\$67.22/month};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$+$interest};
\draw[->,thick] (b)--(c) node[midway,above]{\scriptsize$\div 36$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Interest on \$1000 at $6\%$ for $2$ years?`,3.2],
    ["Problem 2",R`Interest on \$500 at $4\%$ for $3$ years?`,3.2],
    ["Problem 3",R`Total to repay the loan in Problem 1?`,3.2],
    ["Problem 4",R`Interest on \$2000 at $5\%$ for $4$ years?`,3.4],
    ["Problem 5",R`Total to repay \$800 at $10\%$ for $1$ year?`,3.4],
    ["Problem 6",R`\$1500 earns \$180 at $6\%$. How many years?`,3.4],
    ["Problem 7",R`\$1000 earns \$150 in $3$ years. Find the rate.`,3.4],
    ["Problem 8",R`At $5\%$ for $2$ years a loan earns \$100. Find the principal.`,3.4],
    ["Problem 9",R`Interest on \$600 at $8\%$ for $6$ months?`,3.4],
    ["Problem 10",R`Interest on \$2500 at $4\%$ for $5$ years?`,3.2],
    ["Problem 11",R`Total to repay \$1200 at $3\%$ for $2$ years?`,3.4],
    ["Problem 12",R`Which is more interest: \$1000 at $6\%$ for $2$ years, or \$1000 at $4\%$ for $3$ years?`,3.6],
    ["Problem 13 --- Challenge",R`A \$3000 loan at $6\%$ for $2$ years is repaid monthly. Find the total and the monthly payment.`,4.0],
  ],
  answers:[
    R`\$120.`, R`\$60.`, R`\$1120.`, R`\$400.`, R`\$880.`, R`$2$ years.`, R`$5\%$.`, R`\$1000.`,
    R`\$24.`, R`\$500.`, R`\$1272.`, R`\$120 vs \$120: equal.`, R`$I=\$360$, total \$3360, monthly \$140.`,
  ],
},
// ===================== 7.4 =====================
{
  code:"7.4", title:"Budgets", unit:"Unit 7: Financial Literacy",
  bigideas:R`A budget compares \textbf{income} and \textbf{expenses}: balance $=$ income $-$ expenses. A positive balance is a \textbf{surplus} (can be saved); a negative one is a \textbf{deficit}. Percent guidelines split income, with $x\%$ of income $=\tfrac{x}{100}\times$ income.`,
  concepts:[
    ["Income, expenses, balance",R`Add all expenses, then subtract from income. Surplus $>0$ means money left over; deficit $<0$ means overspending.`],
    ["Budgeting with percents",R`To budget by percent, take $x\%$ of income for each category. The percents should total $100\%$.`],
  ],
  examples:[
    ["Find the balance",R`Income is \$2000 and expenses are \$1750. Find the balance.`,R`Balance $=$ income $-$ expenses $=2000-1750=+\$250$ --- a surplus.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.5,2);
\node[below] at (0.75,-0.2) {\scriptsize income \$2000};
\draw[fill=ex3!15,draw=ex3,thick] (2.5,0) rectangle (4,1.75);
\node[below] at (3.25,-0.2) {\scriptsize expenses \$1750};
\node at (3.25,2.3) {\scriptsize surplus \$250};
\end{tikzpicture}\end{center}`],
    ["A deficit",R`Income is \$1500 and expenses are \$1620. Find the balance.`,R`$1500-1620=-\$120$ --- a deficit of \$120 (overspending).
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.5,1.5);
\node[below] at (0.75,-0.2) {\scriptsize income \$1500};
\draw[fill=ex3!15,draw=ex3,thick] (2.5,0) rectangle (4,1.62);
\node[below] at (3.25,-0.2) {\scriptsize expenses \$1620};
\node at (3.25,2.1) {\scriptsize deficit \$120};
\end{tikzpicture}\end{center}`],
    ["Percent of income",R`How much is $15\%$ of a \$2000 income?`,R`$15\%$ of \$2000 $=0.15\times2000=\$300$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (1.6);
\fill[ex3!40] (0,0) -- (90:1.6) arc (90:36:1.6) -- cycle;
\draw[thick,ex3] (0,0) -- (90:1.6) arc (90:36:1.6) -- cycle;
\node at (0,-2) {\scriptsize$15\%$ of \$2000 $=$ \$300};
\end{tikzpicture}\end{center}`],
    ["Total up expenses",R`Rent \$900, food \$400, transit \$150, fun \$200. With income \$2000, find the balance.`,R`Expenses $=900+400+150+200=\$1650$. Balance $=2000-1650=+\$350$ (surplus).
\begin{center}\begin{tikzpicture}[scale=1]
\draw[fill=ex0!20,draw=ex0,thick] (0,0) rectangle (1.2,1.8);
\draw[fill=ex1!20,draw=ex1,thick] (0,1.8) rectangle (1.2,2.6);
\draw[fill=ex2!20,draw=ex2,thick] (0,2.6) rectangle (1.2,2.9);
\draw[fill=ex3!20,draw=ex3,thick] (0,2.9) rectangle (1.2,3.3);
\node[right,font=\scriptsize] at (1.3,0.9) {rent \$900};
\node[right,font=\scriptsize] at (1.3,2.2) {food \$400};
\node[right,font=\scriptsize] at (1.3,2.75) {transit \$150};
\node[right,font=\scriptsize] at (1.3,3.1) {fun \$200};
\end{tikzpicture}\end{center}`],
    ["Cut to break even",R`Income is \$1800 but expenses are \$1950. How much must be cut to break even?`,R`The deficit is $1950-1800=\$150$, so expenses must be cut by \$150.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.5,1.8);
\node[below] at (0.75,-0.2) {\scriptsize income \$1800};
\draw[fill=ex3!15,draw=ex3,thick] (2.5,0) rectangle (4,1.95);
\node[below] at (3.25,-0.2) {\scriptsize expenses \$1950};
\draw[<->,ex1,thick] (4.3,1.8)--(4.3,1.95) node[midway,right,font=\scriptsize]{cut \$150};
\end{tikzpicture}\end{center}`],
    ["A savings goal",R`Saving \$200 each month, how long to reach \$2400?`,R`$2400\div200=12$ months.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize months},ylabel={\scriptsize\$ saved},grid=both,grid style={gray!16},xmin=0,xmax=14,ymin=0,ymax=2800,xtick distance=2,ytick distance=400,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:13,samples=2,ex0,thick]{200*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(12,2400)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Percent breakdown",R`Split a \$2500 income as $50\%$ needs, $30\%$ wants, $20\%$ savings. Find each amount.`,R`Needs $=0.50\times2500=\$1250$; wants $=0.30\times2500=\$750$; savings $=0.20\times2500=\$500$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (1.6);
\fill[ex0!30] (0,0) -- (90:1.6) arc (90:-90:1.6) -- cycle;
\fill[ex1!30] (0,0) -- (-90:1.6) arc (-90:-198:1.6) -- cycle;
\fill[ex3!30] (0,0) -- (-198:1.6) arc (-198:-270:1.6) -- cycle;
\draw[thick] (0,0)--(90:1.6); \draw[thick] (0,0)--(-90:1.6); \draw[thick] (0,0)--(-198:1.6);
\node[font=\scriptsize] at (0:0.9) {needs 50\%};
\node[font=\scriptsize] at (-144:0.9) {wants 30\%};
\node[font=\scriptsize] at (126:0.9) {savings 20\%};
\end{tikzpicture}\end{center}`],
    ["Reverse a percent",R`Savings are $20\%$ of income and equal \$400. Find the income.`,R`Income $=\dfrac{400}{0.20}=\$2000$.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (a) at (0,0) {\$400 = 20\% of income};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (5,0) {income = \$2000};
\draw[->,thick] (a)--(b);
\end{tikzpicture}\end{center}`],
    ["Challenge --- what is left to save?",R`Monthly income is \$2200. Rent is $35\%$, food is $15\%$, other costs \$500. How much is left to save?`,R`Rent $=0.35\times2200=\$770$; food $=0.15\times2200=\$330$. Total spent $=770+330+500=\$1600$. Left to save $=2200-1600=\$600$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (1.4,2.2);
\node[below] at (0.7,-0.2) {\scriptsize income \$2200};
\draw[fill=ex1!20,draw=ex1,thick] (2.4,0) rectangle (3.8,0.77);
\draw[fill=ex2!20,draw=ex2,thick] (2.4,0.77) rectangle (3.8,1.1);
\draw[fill=ex3!20,draw=ex3,thick] (2.4,1.1) rectangle (3.8,1.6);
\draw[fill=ex4!15,draw=ex4,thick,dashed] (2.4,1.6) rectangle (3.8,2.2);
\node[right,font=\scriptsize] at (3.9,0.39) {rent \$770};
\node[right,font=\scriptsize] at (3.9,0.94) {food \$330};
\node[right,font=\scriptsize] at (3.9,1.35) {other \$500};
\node[right,font=\scriptsize] at (3.9,1.9) {save \$600};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Income \$1800, expenses \$1500. Find the balance.`,3.2],
    ["Problem 2",R`Income \$1200, expenses \$1350. Find the balance.`,3.2],
    ["Problem 3",R`How much is $10\%$ of a \$2500 income?`,3.2],
    ["Problem 4",R`Rent \$800, food \$350, transit \$100. Find the total expenses.`,3.2],
    ["Problem 5",R`Income \$2000, expenses \$1250. Find the surplus.`,3.2],
    ["Problem 6",R`Saving \$150/month, how long to reach \$1800?`,3.2],
    ["Problem 7",R`How much is $25\%$ of \$1600?`,3.2],
    ["Problem 8",R`Income \$1500; save $20\%$. How much is saved?`,3.2],
    ["Problem 9",R`Expenses exceed income by \$80. Surplus or deficit?`,3.0],
    ["Problem 10",R`Of a \$3000 income, how much is $50\%$ for needs?`,3.2],
    ["Problem 11",R`Income \$2400, expenses \$2400. Find the balance.`,3.0],
    ["Problem 12",R`Savings are $15\%$ of income and equal \$300. Find the income.`,3.4],
    ["Problem 13 --- Challenge",R`Income \$2500: needs $55\%$, wants $25\%$, the rest savings. How much is saved?`,3.8],
  ],
  answers:[
    R`$+\$300$ (surplus).`, R`$-\$150$ (deficit).`, R`\$250.`, R`\$1250.`, R`\$750.`, R`$12$ months.`,
    R`\$400.`, R`\$300.`, R`Deficit.`, R`\$1500.`, R`\$0 (balanced).`, R`$\tfrac{300}{0.15}=\$2000$.`,
    R`savings $=20\%=\$500$.`,
  ],
},
];
