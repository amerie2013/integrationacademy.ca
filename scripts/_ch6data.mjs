// MTH1W chapter 6 (Data & Statistics) PDF worksheet content — distinct from & above the HTML, detailed solutions.
const R = String.raw;

export const TOPICS = [
// ===================== 6.1 =====================
{
  code:"6.1", title:"Big Data & Its Implications", unit:"Unit 6: Data Management",
  bigideas:R`Digital storage grows by factors of $1000$: KB, MB, GB, TB. A \textbf{data rate} times a length of time gives the total data collected. Big data is described by the three V's --- \textbf{Volume}, \textbf{Velocity}, \textbf{Variety} --- and a sample is \textbf{biased} if it does not represent the whole population.`,
  concepts:[
    ["Sizes and rates",R`$1$ MB $=1000$ KB, $1$ GB $=1000$ MB, $1$ TB $=1000$ GB. Multiply going to smaller units, divide going to larger. Total data $=$ rate $\times$ time.`],
    ["The three V's and bias",R`Volume $=$ how much data, Velocity $=$ how fast it arrives, Variety $=$ how many types. A sample that leaves out part of the population (e.g.\ only online users) is biased.`],
  ],
  examples:[
    ["Gigabytes to megabytes",R`Convert $3$ GB to MB.`,R`$1$ GB $=1000$ MB, so multiply: $3\times1000=3000$ MB.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.2cm,minimum height=1cm] (a) at (0,0) {3 GB};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (4,0) {3000 MB};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 1000$};
\end{tikzpicture}\end{center}`],
    ["Terabytes to gigabytes",R`Convert $2.5$ TB to GB.`,R`$1$ TB $=1000$ GB, so $2.5\times1000=2500$ GB.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.4cm,minimum height=1cm] (a) at (0,0) {2.5 TB};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (4.2,0) {2500 GB};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 1000$};
\end{tikzpicture}\end{center}`],
    ["A data rate",R`A sensor logs $8$ readings per second. How many in one minute?`,R`One minute is $60$ seconds, so $8\times60=480$ readings.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3cm,minimum height=1cm] (a) at (0,0) {8 readings/s};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (b) at (4.8,0) {480 readings/min};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 60$};
\end{tikzpicture}\end{center}`],
    ["Rate over a longer time",R`At $480$ readings per minute, how many are logged in one hour?`,R`One hour is $60$ minutes: $480\times60=28\,800$ readings.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.4cm,minimum height=1cm] (a) at (0,0) {480 readings/min};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3.6cm,minimum height=1cm] (b) at (5.4,0) {28{,}800 / hour};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 60$};
\end{tikzpicture}\end{center}`],
    ["The three V's",R`Name the three V's of big data and what each measures.`,R`Volume (the amount of data), Velocity (the speed it arrives at), and Variety (the different types of data).
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!10,rounded corners,minimum width=2.6cm,minimum height=1.3cm,align=center] (a) at (0,0) {\scriptsize\textbf{Volume}\\how much};
\node[draw=ex1,thick,fill=ex1!10,rounded corners,minimum width=2.6cm,minimum height=1.3cm,align=center] (b) at (3,0) {\scriptsize\textbf{Velocity}\\how fast};
\node[draw=ex3,thick,fill=ex3!10,rounded corners,minimum width=2.6cm,minimum height=1.3cm,align=center] (c) at (6,0) {\scriptsize\textbf{Variety}\\how many types};
\end{tikzpicture}\end{center}`],
    ["Spot the bias",R`Why is an online-only survey about internet habits biased?`,R`It can only reach people who are already online, so it leaves out non-users and overstates internet use.
\begin{center}\begin{tikzpicture}
\draw[thick,ex0,fill=ex0!8] (0,0) circle (1.8);
\draw[thick,ex3,fill=ex3!20] (0.5,0.3) circle (0.9);
\node at (-0.7,-0.9) {\scriptsize whole town};
\node[align=center] at (0.5,0.3) {\scriptsize\textbf{online}\\\textbf{users}};
\end{tikzpicture}\end{center}`],
    ["Storage capacity",R`A camera stores $5$ MB per photo. How many photos fit in $2$ GB?`,R`$2$ GB $=2000$ MB, so $2000\div5=400$ photos.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {2000 MB};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (4.2,0) {400 photos};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\div 5$};
\end{tikzpicture}\end{center}`],
    ["Data per day",R`A device sends $2$ MB every hour. How much is that per day?`,R`A day is $24$ hours: $2\times24=48$ MB.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (a) at (0,0) {2 MB / hour};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (4.4,0) {48 MB / day};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 24$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- stream to GB",R`A video stream uses $15$ MB per minute. How much data in $2$ hours, in GB?`,R`$2$ hours $=120$ minutes, so $15\times120=1800$ MB $=1.8$ GB.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (a) at (0,0) {15 MB/min};
\node[draw=ex1,thick,fill=ex1!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (5,0) {1800 MB};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.4cm,minimum height=1cm] (c) at (9.4,0) {1.8 GB};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 120$};
\draw[->,thick] (b)--(c) node[midway,above]{\scriptsize$\div 1000$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Convert $4$ GB to MB.`,3.0],
    ["Problem 2",R`Convert $3$ TB to GB.`,3.0],
    ["Problem 3",R`A sensor logs $10$ readings per second. How many per minute?`,3.2],
    ["Problem 4",R`Name the three V's of big data.`,3.0],
    ["Problem 5",R`Convert $6000$ MB to GB.`,3.0],
    ["Problem 6",R`A survey of only teenagers is used to describe a whole town. Is it biased? Explain.`,3.4],
    ["Problem 7",R`Photos are $8$ MB each. How many fit in $4$ GB?`,3.2],
    ["Problem 8",R`A device sends $3$ MB per hour. How much per day?`,3.2],
    ["Problem 9",R`Why survey a random sample rather than volunteers?`,3.2],
    ["Problem 10",R`Convert $2.5$ GB to MB.`,3.0],
    ["Problem 11",R`A sensor logs $5$ readings per second. How many in one hour?`,3.4],
    ["Problem 12",R`Convert $1.5$ TB to MB.`,3.2],
    ["Problem 13 --- Challenge",R`A stream uses $20$ MB per minute for $3$ hours. Find the total in GB.`,3.8],
  ],
  answers:[
    R`$4000$ MB.`, R`$3000$ GB.`, R`$600$.`, R`Volume, Velocity, Variety.`, R`$6$ GB.`,
    R`Yes --- teenagers do not represent everyone.`, R`$500$.`, R`$72$ MB.`,
    R`Volunteers may not represent the population.`, R`$2500$ MB.`, R`$18\,000$.`, R`$1\,500\,000$ MB.`,
    R`$20\times180=3600$ MB $=3.6$ GB.`,
  ],
},
// ===================== 6.2 =====================
{
  code:"6.2", title:"One-Variable Data & Statistics", unit:"Unit 6: Data Management",
  bigideas:R`The \textbf{mean} is the sum divided by the count; the \textbf{median} is the middle value when the data is ordered; the \textbf{mode} is the most frequent value; the \textbf{range} is max $-$ min. An \textbf{outlier} (a far-off value) pulls the mean but barely moves the median.`,
  concepts:[
    ["Measures of centre",R`Mean $=\dfrac{\text{sum}}{\text{count}}$. Median: order the data and take the middle (average the two middle values if the count is even). Mode: the value that appears most.`],
    ["Spread and outliers",R`Range $=$ largest $-$ smallest. Because the mean uses every value, a single outlier can shift it a lot, while the median stays near the centre.`],
  ],
  examples:[
    ["Mean",R`Find the mean of $5,8,6,11,10$.`,R`Add them: $5+8+6+11+10=40$. Divide by the count $5$: mean $=40\div5=8$.
\begin{center}\begin{tikzpicture}[scale=0.55]
\draw[thick,->] (0,0)--(13,0);
\foreach \x in {0,2,...,12} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\foreach \v in {5,8,6,11,10} { \fill[ex0] (\v,0) circle (2.5pt); }
\draw[ex3,thick,dashed] (8,0.6)--(8,-0.6);
\node[above,ex3,font=\scriptsize] at (8,0.7) {mean $=8$};
\end{tikzpicture}\end{center}`],
    ["Median (odd count)",R`Find the median of $3,7,9,2,5$.`,R`Order them: $2,3,5,7,9$. The middle of five values is the third: median $=5$.
\begin{center}\begin{tikzpicture}[scale=0.55]
\draw[thick,->] (0,0)--(10,0);
\foreach \x in {0,2,...,9} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\foreach \v in {3,7,9,2} { \fill[ex0] (\v,0) circle (2.5pt); }
\fill[ex3] (5,0) circle (3pt);
\node[above,ex3,font=\scriptsize] at (5,0.5) {median $=5$};
\end{tikzpicture}\end{center}`],
    ["Median (even count)",R`Find the median of $4,8,6,10$.`,R`Order them: $4,6,8,10$. With an even count, average the two middle values: $\tfrac{6+8}{2}=7$.
\begin{center}\begin{tikzpicture}[scale=0.55]
\draw[thick,->] (0,0)--(11,0);
\foreach \x in {0,2,...,10} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\foreach \v in {4,8,6,10} { \fill[ex0] (\v,0) circle (2.5pt); }
\draw[ex3,thick,dashed] (7,0.6)--(7,-0.6);
\node[above,ex3,font=\scriptsize] at (7,0.7) {median $=7$};
\end{tikzpicture}\end{center}`],
    ["Mode",R`Find the mode of $2,4,4,6,9,4$.`,R`The value $4$ appears three times, more than any other, so the mode is $4$.
\begin{center}\begin{tikzpicture}[scale=0.55]
\draw[thick,->] (0,0)--(10,0);
\foreach \x in {0,2,...,9} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\fill[ex0] (2,0.3) circle (2.5pt);
\fill[ex3] (4,0.3) circle (2.5pt); \fill[ex3] (4,0.9) circle (2.5pt); \fill[ex3] (4,1.5) circle (2.5pt);
\fill[ex0] (6,0.3) circle (2.5pt);
\fill[ex0] (9,0.3) circle (2.5pt);
\node[above,ex3,font=\scriptsize] at (4,1.9) {mode $=4$};
\end{tikzpicture}\end{center}`],
    ["Range",R`Find the range of $12,15,11,20,17$.`,R`Range $=$ max $-$ min $=20-11=9$.
\begin{center}\begin{tikzpicture}[scale=0.5]
\draw[thick,->] (9,0)--(22,0);
\foreach \x in {10,12,...,20} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\foreach \v in {12,15,17} { \fill[ex0] (\v,0) circle (2.5pt); }
\fill[ex3] (11,0) circle (3pt); \fill[ex3] (20,0) circle (3pt);
\draw[<->,ex3,thick] (11,0.8)--(20,0.8) node[midway,above,font=\scriptsize]{range $=9$};
\end{tikzpicture}\end{center}`],
    ["Find a missing value",R`Four numbers have a mean of $7$; three of them are $5,8,6$. Find the fourth.`,R`The total must be $4\times7=28$. The three known values sum to $19$, so the fourth is $28-19=9$.
\begin{center}\begin{tikzpicture}[scale=0.55]
\draw[thick,->] (0,0)--(11,0);
\foreach \x in {0,2,...,10} { \draw (\x,0.1)--(\x,-0.1); \node[below,font=\scriptsize] at (\x,-0.3) {\x}; }
\foreach \v in {5,8,6} { \fill[ex0] (\v,0) circle (2.5pt); }
\fill[ex3] (9,0) circle (3pt);
\node[above,ex3,font=\scriptsize] at (9,0.5) {$?=9$};
\draw[ex1,thick,dashed] (7,0.9)--(7,-0.9);
\node[above,ex1,font=\scriptsize] at (7,1) {mean $=7$};
\end{tikzpicture}\end{center}`],
    ["Effect of an outlier",R`For $3,4,5,6,40$, find the mean and median. Which does the outlier affect more?`,R`Mean $=\tfrac{58}{5}=11.6$; ordered, the median is $5$. The outlier $40$ pulls the mean up but leaves the median unchanged.
\begin{center}\begin{tikzpicture}[scale=0.35]
\draw[thick,->] (0,0)--(42,0);
\foreach \x in {0,10,20,30,40} { \draw (\x,0.3)--(\x,-0.3); \node[below,font=\scriptsize] at (\x,-1) {\x}; }
\foreach \v in {3,4,5,6} { \fill[ex0] (\v,0) circle (6pt); }
\fill[ex1] (40,0) circle (6pt);
\draw[ex3,thick,dashed] (5,2)--(5,-2); \node[above,ex3,font=\scriptsize] at (5,2.2) {median $=5$};
\draw[ex1,thick,dashed] (11.6,4)--(11.6,-4); \node[above,ex1,font=\scriptsize] at (11.6,4.2) {mean $\approx11.6$};
\end{tikzpicture}\end{center}`],
    ["Shift every value",R`A set of five numbers has mean $8$. Add $10$ to every value. What is the new mean?`,R`Adding $10$ to each value adds $10$ to the mean: $8+10=18$.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (a) at (0,0) {mean $=8$};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (b) at (4.6,0) {mean $=18$};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$+10$ to every value};
\end{tikzpicture}\end{center}`],
    ["Challenge --- add a value",R`Six numbers have a mean of $10$. A seventh number, $24$, is added. Find the new mean.`,R`Original sum $=6\times10=60$; adding $24$ gives $84$; new mean $=84\div7=12$.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (a) at (0,0) {6 numbers, mean $10$};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3.4cm,minimum height=1cm] (b) at (5.6,0) {7 numbers, mean $12$};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$+24$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Find the mean of $4,8,6,10,2$.`,3.2],
    ["Problem 2",R`Find the median of $3,7,9,2,5$.`,3.2],
    ["Problem 3",R`Find the mode of $2,4,4,6,9,4$.`,3.0],
    ["Problem 4",R`Find the range of $12,15,11,20,17$.`,3.0],
    ["Problem 5",R`Find the median of $4,8,6,10$.`,3.2],
    ["Problem 6",R`Find the mean of $10,20,30$.`,3.0],
    ["Problem 7",R`Three numbers have mean $6$; two are $4$ and $5$. Find the third.`,3.4],
    ["Problem 8",R`Find the range of $-3,2,7,-5$.`,3.2],
    ["Problem 9",R`Find the mode of $5,5,7,9,9,9$.`,3.0],
    ["Problem 10",R`A set has mean $12$. Add $5$ to every value. New mean?`,3.2],
    ["Problem 11",R`Find the mean of $2,4,6,8,10$.`,3.0],
    ["Problem 12",R`Find the median of $1,2,3,4,100$.`,3.2],
    ["Problem 13 --- Challenge",R`Five numbers have mean $9$. A sixth is added and the mean becomes $10$. Find the sixth number.`,3.8],
  ],
  answers:[
    R`$6$.`, R`$5$.`, R`$4$.`, R`$9$.`, R`$7$.`, R`$20$.`, R`$18-9=9$.`, R`$7-(-5)=12$.`,
    R`$9$.`, R`$17$.`, R`$6$.`, R`$3$.`, R`old sum $45$, new sum $60$: sixth $=15$.`,
  ],
},
// ===================== 6.3 =====================
{
  code:"6.3", title:"Scatter Plots & Correlation", unit:"Unit 6: Data Management",
  bigideas:R`A scatter plot shows \textbf{correlation}: points rising left-to-right are \textbf{positive}, falling are \textbf{negative}, and shapeless clouds show \textbf{none}. A \textbf{line of best fit} $y=mx+b$ models the trend and lets you predict values.`,
  concepts:[
    ["Correlation",R`Direction: up $\Rightarrow$ positive, down $\Rightarrow$ negative, no pattern $\Rightarrow$ none. Strength: tightly clustered points $\Rightarrow$ strong; widely spread $\Rightarrow$ weak.`],
    ["Line of best fit",R`Model the trend with $y=mx+b$ (slope from two representative points). Predict by substituting --- interpolating within the data is safer than extrapolating beyond it.`],
  ],
  examples:[
    ["Positive correlation",R`Hours studied and test score both rise together. What kind of correlation is this?`,R`As one variable increases the other increases, so it is a \textbf{positive} correlation.
\begin{center}\begin{tikzpicture}\begin{axis}[width=7cm,height=5.2cm,axis lines=middle,xlabel={\scriptsize hours studied},ylabel={\scriptsize test score},xmin=0,xmax=8,ymin=0,ymax=9,xtick=\empty,ytick=\empty]
\addplot[only marks,mark=*,ex0,mark size=2pt] coordinates {(1,2)(2,3)(3,3.5)(4,5)(5,6)(6,6.5)(7,8)};
\addplot[domain=0.5:7.5,samples=2,ex3,dashed,thick] {0.9*x+1};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Negative correlation",R`As outside temperature rises, heating cost falls. What correlation is this?`,R`One goes up while the other goes down, so it is a \textbf{negative} correlation.
\begin{center}\begin{tikzpicture}\begin{axis}[width=7cm,height=5.2cm,axis lines=middle,xlabel={\scriptsize temperature},ylabel={\scriptsize heating cost},xmin=0,xmax=8,ymin=0,ymax=9,xtick=\empty,ytick=\empty]
\addplot[only marks,mark=*,ex0,mark size=2pt] coordinates {(1,8)(2,7)(3,6.5)(4,5)(5,4)(6,3)(7,2)};
\addplot[domain=0.5:7.5,samples=2,ex3,dashed,thick] {-0.95*x+8.8};
\end{axis}\end{tikzpicture}\end{center}`],
    ["No correlation",R`Shoe size versus test score shows a shapeless cloud. What correlation is this?`,R`There is no pattern, so there is \textbf{no} correlation.
\begin{center}\begin{tikzpicture}\begin{axis}[width=7cm,height=5.2cm,axis lines=middle,xlabel={\scriptsize shoe size},ylabel={\scriptsize test score},xmin=0,xmax=8,ymin=0,ymax=9,xtick=\empty,ytick=\empty]
\addplot[only marks,mark=*,ex0,mark size=2pt] coordinates {(1,5)(2,2)(3,7)(4,3)(5,6)(6,1)(7,4)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Slope of the best-fit line",R`A best-fit line passes through $(0,3)$ and $(5,13)$. Find its slope.`,R`$m=\dfrac{13-3}{5-0}=\dfrac{10}{5}=2$.
\plot{-1}{6}{-1}{15}{\addplot[domain=-1:6,samples=2,ex0,thick]{2*x+3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,3)(5,13)};}`],
    ["Equation of the best-fit line",R`Using the points above, write the best-fit equation.`,R`The slope is $2$ and $(0,3)$ is the $y$-intercept, so $y=2x+3$.
\plot{-2}{6}{-2}{15}{\addplot[domain=-2:6,samples=2,ex0,thick]{2*x+3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,3)};}`],
    ["Predict a value",R`A best-fit line is $y=3x+5$. Predict the score for $4$ study hours.`,R`Substitute $x=4$: $y=3(4)+5=17$.
\plot{-1}{5}{-2}{20}{\addplot[domain=-1:5,samples=2,ex0,thick]{3*x+5};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(4,17)};}`],
    ["Interpolate",R`Using $y=2x+3$, predict $y$ when $x=2$.`,R`$y=2(2)+3=7$ --- an interpolation, since $x=2$ is within the data range.
\plot{-2}{4}{-2}{10}{\addplot[domain=-2:4,samples=2,ex0,thick]{2*x+3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,7)};}`],
    ["Compare strength",R`Two scatter plots show the same trend, one tightly clustered and one widely spread. Which correlation is stronger?`,R`The tightly clustered plot shows the \textbf{stronger} correlation.
\begin{center}
\begin{tikzpicture}\begin{axis}[width=5.6cm,height=4.6cm,axis lines=middle,xlabel={\scriptsize strong},xmin=0,xmax=8,ymin=0,ymax=8,xtick=\empty,ytick=\empty]
\addplot[only marks,mark=*,ex0,mark size=2pt] coordinates {(1,1.2)(2,2)(3,3.1)(4,4)(5,4.9)(6,6)(7,6.9)};
\end{axis}\end{tikzpicture}
\hspace{4pt}
\begin{tikzpicture}\begin{axis}[width=5.6cm,height=4.6cm,axis lines=middle,xlabel={\scriptsize weak},xmin=0,xmax=8,ymin=0,ymax=8,xtick=\empty,ytick=\empty]
\addplot[only marks,mark=*,ex3,mark size=2pt] coordinates {(1,2.5)(2,1)(3,4.5)(4,3)(5,6)(6,4)(7,7)};
\end{axis}\end{tikzpicture}
\end{center}`],
    ["Challenge --- predict both ways",R`A best-fit line for cost vs temperature is $y=-1.5x+40$. Predict the cost at $10^\circ$, and the temperature when the cost is $25$.`,R`At $x=10$: $y=-1.5(10)+40=25$. For $y=25$: $25=-1.5x+40$, so $1.5x=15$ and $x=10^\circ$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$x$},ylabel={\scriptsize$y$},grid=both,grid style={gray!16},xmin=0,xmax=30,ymin=0,ymax=45,xtick distance=5,ytick distance=10,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:26,samples=2,ex0,thick]{-1.5*x+40};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(10,25)};\end{axis}\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Ice-cream sales and temperature both rise. What correlation?`,3.0],
    ["Problem 2",R`As a car ages, its value drops. What correlation?`,3.0],
    ["Problem 3",R`Height versus favourite colour shows no pattern. What correlation?`,3.0],
    ["Problem 4",R`A best-fit line passes through $(0,4)$ and $(4,12)$. Find its slope.`,3.4],
    ["Problem 5",R`Using those points, write the best-fit equation.`,3.4],
    ["Problem 6",R`A best-fit line is $y=4x+2$. Predict $y$ at $x=5$.`,3.2],
    ["Problem 7",R`Which shows a stronger correlation: a tight cluster or a wide spread?`,3.0],
    ["Problem 8",R`A best-fit line is $y=-2x+30$. Predict $y$ at $x=6$.`,3.2],
    ["Problem 9",R`A best-fit line is $y=3x+1$. What is $y$ at $x=0$?`,3.0],
    ["Problem 10",R`A best-fit line passes through $(2,5)$ and $(6,13)$. Find its slope.`,3.4],
    ["Problem 11",R`Study time versus grade: positive, negative, or none?`,3.0],
    ["Problem 12",R`A best-fit line is $y=5x$. Predict $y$ at $x=8$.`,3.0],
    ["Problem 13 --- Challenge",R`A best-fit line is $y=2.5x+10$. Predict $y$ at $x=8$, and find $x$ when $y=60$.`,3.8],
  ],
  answers:[
    R`Positive.`, R`Negative.`, R`None.`, R`$2$.`, R`$y=2x+4$.`, R`$22$.`, R`Tight cluster.`,
    R`$18$.`, R`$1$.`, R`$2$.`, R`Positive.`, R`$40$.`, R`$y=30$; and $x=20$.`,
  ],
},
// ===================== 6.4 =====================
{
  code:"6.4", title:"The Mathematical Modelling Process", unit:"Unit 6: Data Management",
  bigideas:R`A \textbf{model} such as $C=mn+b$ captures a situation: $b$ is the fixed (start-up) cost and $m$ is the cost per item. The \textbf{modelling cycle} is: understand the problem $\to$ choose a model $\to$ do the math $\to$ interpret and check $\to$ refine.`,
  concepts:[
    ["Reading and building a model",R`In $C=mn+b$, read $b$ as the fixed amount and $m$ as the rate per unit. Build a model by identifying the fixed part and the per-unit part; solve it to find an input.`],
    ["The modelling cycle",R`Understand $\to$ model (with assumptions) $\to$ compute $\to$ interpret and check for reasonableness $\to$ refine if the answer does not make sense.`],
  ],
  examples:[
    ["Read a model",R`In $C=15n+40$, state the fixed cost and the cost per item.`,R`Comparing with $C=mn+b$: the fixed cost is $b=\$40$ and the cost per item is $m=\$15$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$n$},ylabel={\scriptsize$C$},grid=both,grid style={gray!16},xmin=0,xmax=10,ymin=0,ymax=200,xtick distance=2,ytick distance=25,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:9,samples=2,ex0,thick]{15*x+40};\end{axis}\end{tikzpicture}\end{center}`],
    ["Evaluate a model",R`Using $C=15n+40$, find the cost of $12$ items.`,R`Substitute $n=12$: $C=15(12)+40=180+40=\$220$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$n$},ylabel={\scriptsize$C$},grid=both,grid style={gray!16},xmin=0,xmax=14,ymin=0,ymax=240,xtick distance=2,ytick distance=30,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:13,samples=2,ex0,thick]{15*x+40};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(12,220)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Build a model",R`A taxi charges \$3.50 plus \$1.75/km. Write a model for cost $C$ versus distance $d$.`,R`The \$3.50 is fixed (the intercept) and \$1.75 is the rate per km (the slope): $C=1.75d+3.50$.
\plot{0}{10}{0}{22}{\addplot[domain=0:9,samples=2,ex0,thick]{1.75*x+3.5};}`],
    ["Solve a model",R`Using $C=15n+40$, how many items cost \$190?`,R`Set $C=190$: $190=15n+40$, so $15n=150$ and $n=10$ items.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$n$},ylabel={\scriptsize$C$},grid=both,grid style={gray!16},xmin=0,xmax=12,ymin=0,ymax=200,xtick distance=2,ytick distance=25,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:11,samples=2,ex0,thick]{15*x+40};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(10,190)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Model from two points",R`At $2$ items the cost is \$70; at $5$ items it is \$130. Build the model.`,R`Slope $=\dfrac{130-70}{5-2}=\dfrac{60}{3}=20$. Then $70=20(2)+b$, so $b=30$: $C=20n+30$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$n$},ylabel={\scriptsize$C$},grid=both,grid style={gray!16},xmin=0,xmax=7,ymin=0,ymax=160,xtick distance=1,ytick distance=20,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:6.5,samples=2,ex0,thick]{20*x+30};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,70)(5,130)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Interpret a model",R`For $V=-10t+300$ (a draining tank), explain the two numbers.`,R`The $300$ is the starting volume (at $t=0$), and $-10$ is the rate: it drains $10$ units per minute.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize$V$},grid=both,grid style={gray!16},xmin=0,xmax=30,ymin=0,ymax=320,xtick distance=5,ytick distance=50,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:30,samples=2,ex0,thick]{-10*x+300};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,300)};\end{axis}\end{tikzpicture}\end{center}`],
    ["The modelling cycle",R`List the stages of the modelling cycle in order.`,R`Understand the problem; choose a model (with assumptions); do the math; interpret and check; refine if needed.
\begin{center}\begin{tikzpicture}[scale=0.85]
\node[draw=ex0,thick,fill=ex0!10,rounded corners,minimum width=2.1cm,minimum height=1cm,align=center,font=\scriptsize] (a) at (0,1.5) {Understand};
\node[draw=ex1,thick,fill=ex1!10,rounded corners,minimum width=2.1cm,minimum height=1cm,align=center,font=\scriptsize] (b) at (2.6,1.5) {Model};
\node[draw=ex2,thick,fill=ex2!10,rounded corners,minimum width=2.1cm,minimum height=1cm,align=center,font=\scriptsize] (c) at (5.2,1.5) {Compute};
\node[draw=ex3,thick,fill=ex3!10,rounded corners,minimum width=2.1cm,minimum height=1cm,align=center,font=\scriptsize] (d) at (5.2,-0.5) {Interpret \& check};
\node[draw=ex4,thick,fill=ex4!10,rounded corners,minimum width=2.1cm,minimum height=1cm,align=center,font=\scriptsize] (e) at (2.6,-0.5) {Refine};
\draw[->,thick] (a)--(b); \draw[->,thick] (b)--(c); \draw[->,thick] (c)--(d); \draw[->,thick] (d)--(e); \draw[->,thick] (e)--(a);
\end{tikzpicture}\end{center}`],
    ["Check reasonableness",R`The model $V=-10t+300$ gives $V=-100$ at $t=40$. Is that valid?`,R`No --- volume cannot be negative. The model is only valid until the tank empties at $t=30$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize$V$},grid=both,grid style={gray!16},xmin=0,xmax=42,ymin=-120,ymax=320,xtick distance=10,ytick distance=50,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:30,samples=2,ex0,thick]{-10*x+300};
\addplot[domain=30:40,samples=2,ex3,dashed,thick]{-10*x+300};
\addplot[only marks,mark=x,ex3,mark size=3pt,thick]coordinates{(40,-100)};
\end{axis}\end{tikzpicture}\end{center}`],
    ["Challenge --- compare two models",R`Plan A costs \$25 plus \$8 per visit; Plan B costs \$12 per visit. After how many visits is Plan A cheaper?`,R`Set $25+8v<12v$: $25<4v$, so $v>6.25$. Plan A is cheaper from $7$ visits on.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$v$},ylabel={\scriptsize cost},grid=both,grid style={gray!16},xmin=0,xmax=12,ymin=0,ymax=140,xtick distance=2,ytick distance=20,tick label style={font=\tiny},axis line style={-}]
\addplot[domain=0:11,samples=2,ex0,thick]{25+8*x};
\addplot[domain=0:11,samples=2,ex3,thick]{12*x};
\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(6.25,75)};
\end{axis}\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`In $C=20n+50$, what is the fixed cost?`,3.0],
    ["Problem 2",R`In $C=20n+50$, what is the cost per item?`,3.0],
    ["Problem 3",R`Using $C=20n+50$, find the cost of $6$ items.`,3.2],
    ["Problem 4",R`A taxi charges \$4 plus \$2/km. Write a model for cost $C$ versus distance $d$.`,3.2],
    ["Problem 5",R`Using $C=20n+50$, how many items cost \$250?`,3.4],
    ["Problem 6",R`For $V=-5t+60$, what is the starting value?`,3.0],
    ["Problem 7",R`For $V=-5t+60$, what is the rate of change?`,3.0],
    ["Problem 8",R`At $3$ items the cost is \$80; at $7$ items it is \$120. Find the slope.`,3.4],
    ["Problem 9",R`Using $C=10n+30$, find the cost of $8$ items.`,3.2],
    ["Problem 10",R`What is the first stage of the modelling cycle?`,3.0],
    ["Problem 11",R`A phone costs \$500 plus \$40/month. Write the model for cost $C$ vs months $m$.`,3.2],
    ["Problem 12",R`Using $C=40m+500$, find the cost after $6$ months.`,3.2],
    ["Problem 13 --- Challenge",R`Plan A costs \$30 plus \$5 per class; Plan B costs \$8 per class. After how many classes is Plan A cheaper?`,3.8],
  ],
  answers:[
    R`\$50.`, R`\$20.`, R`\$170.`, R`$C=2d+4$.`, R`$250=20n+50\Rightarrow20n=200\Rightarrow n=10$.`,
    R`$60$.`, R`$-5$ per unit.`, R`$\dfrac{120-80}{7-3}=10$.`, R`\$110.`, R`Understand the problem.`,
    R`$C=40m+500$.`, R`\$740.`, R`$30+5c<8c\Rightarrow c>10$: from $11$ classes.`,
  ],
},
];
