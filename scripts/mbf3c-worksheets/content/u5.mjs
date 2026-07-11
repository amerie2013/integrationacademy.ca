// MBF3C Unit 5 worksheets — Data Management.
const r = String.raw;
const U = "5: Data Management";

// A small hand-drawn bar chart (favourite-sport survey) for 5.1.
const barChart = r`\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[->] (0,0)--(0,4.2) node[above]{\small frequency};
\draw[->] (0,0)--(6,0) node[right]{\small sport};
\foreach \y in {1,2,3,4}\draw (0,\y)--(-0.08,\y) node[left]{\small\y0};
\fill[exblue] (0.6,0) rectangle (1.4,3.0);
\fill[exblue] (1.9,0) rectangle (2.7,4.0);
\fill[exblue] (3.2,0) rectangle (4.0,2.0);
\fill[exblue] (4.5,0) rectangle (5.3,1.0);
\node[below] at (1.0,0){\small Soccer};
\node[below] at (2.3,0){\small Hockey};
\node[below] at (3.6,0){\small Basket};
\node[below] at (4.9,0){\small Other};
\end{tikzpicture}\end{center}`;

export default [
  {
    code: "5.1", unit: U, title: "Collecting & Displaying Data",
    intro: r`Study a population through a representative sample, chosen by a method that avoids bias; then pick the graph that suits the data.`,
    ideas: [r`Population = everyone of interest; sample = the part surveyed.`, r`Sampling: simple random, systematic (every $k$-th), stratified (by group, in proportion).`, r`Bar = compare categories; circle = parts of a whole; histogram = distribution; scatter = relationship.`],
    examples: [
      { t: "Population vs sample", body: r`A principal surveys $200$ of $1500$ students.\soln Population $=1500$ students; sample $=200$ students.` },
      { t: "Name the method", body: r`A factory tests every $50$th item.\soln Fixed interval $\Rightarrow$ systematic sampling.` },
      { t: "Spot the bias", body: r`Asking only hockey fans the town's favourite sport.\soln Biased — the sample over-represents hockey fans (see the survey below); poll a random cross-section instead.` + barChart },
      { t: "Circle-graph angle", body: r`$25\%$ chose pizza. Find its central angle.\soln $0.25\times360^\circ=90^\circ$.` },
      { t: "Choose the graph", body: r`(a) sales by store, (b) fraction of a budget per item, (c) height vs shoe size.\soln (a) bar, (b) circle, (c) scatter.` },
      { t: "Population vs sample", body: r`A poll surveys $500$ of $40\,000$ voters.\soln Population $40\,000$; sample $500$.` },
      { t: "Name the method", body: r`Drawing names from a hat.\soln Simple random sampling.` },
      { t: "Circle-graph angle", body: r`A category is $40\%$ of the data.\soln $0.40\times360^\circ=144^\circ$.` },
      { t: "Choose the graph", body: r`Best graph for the distribution of $100$ test scores?\soln A histogram (grouped numeric data).` },
    ],
    questions: [
      { ask: r`A poll surveys $500$ of $40\,000$ voters. Name the population and sample.` },
      { ask: r`Choosing names from a hat is which method?` },
      { ask: r`An online-only poll: what is the concern?` },
      { ask: r`A category is $40\%$ of the data. Find its circle-graph angle.` },
      { ask: r`Which graph shows the distribution of $100$ test scores?` },
      { ask: r`Testing every $20$th part is which sampling method?` },
      { ask: r`$30\%$ chose red. Find its circle-graph central angle.` },
      { ask: r`Which graph best compares populations of five cities?` },
      { ask: r`Sampling each grade in proportion to its size is which method?` },
      { ask: r`A category fills $90^\circ$ of a circle graph. What percent is it?` },
      { ask: r`Which graph best shows the relationship between study time and grade?` },
      { ask: r`Is "number of pets" discrete or continuous data?` },
      { ask: r`A survey of $60$ people: Soccer 30, Hockey 40, Basketball 20, Other 10 — wait, that's 100. For Soccer 30 of 100, find its circle-graph angle.`, challenge: true, ws: "2.6cm" },
    ],
    answers: [r`Population $40\,000$; sample $500$`, r`simple random`, r`bias — excludes people without internet`, r`$144^\circ$`, r`histogram`, r`systematic`, r`$108^\circ$`, r`bar graph`, r`stratified`, r`$25\%$`, r`scatter plot`, r`discrete`, r`$\tfrac{30}{100}\times360^\circ=108^\circ$`],
  },
  {
    code: "5.2", unit: U, title: "Central Tendency & Spread",
    intro: r`Summarize data with a centre (mean, median, mode) and a spread (range, standard deviation); choose the measure that fits the data.`,
    ideas: [r`Mean $=$ sum$\div$count; median $=$ middle (average two middles if even); mode $=$ most frequent.`, r`Range $=$ max $-$ min.`, r`The median resists outliers that distort the mean.`],
    examples: [
      { t: "Mean", body: r`Mean of $4,8,6,10,2$.\soln Sum $=30$, count $=5$, mean $=6$.` },
      { t: "Median (even count)", body: r`Median of $3,7,8,12$.\soln Even count: average the middles, $\dfrac{7+8}{2}=7.5$.` },
      { t: "Mode and range", body: r`For $5,5,7,9,9,9,12$: mode and range.\soln Mode $=9$; range $=12-5=7$.` },
      { t: "Outlier: mean vs median", body: r`For $2,3,4,5,100$, find both; which is typical?\soln Mean $=\dfrac{114}{5}=22.8$; median $=4$. The median is more typical — it resists the outlier $100$.` },
      { t: "Choose the measure", body: r`(a) favourite flavour, (b) incomes (a few very high), (c) symmetric scores.\soln (a) mode, (b) median, (c) mean.` },
      { t: "Mean", body: r`Mean of $10,12,14,16,18$.\soln $70\div5=14$.` },
      { t: "Median (even count)", body: r`Median of $2,5,9,11,14,20$.\soln $\dfrac{9+11}{2}=10$.` },
      { t: "Mode and range", body: r`For $4,4,4,7,9,9,15$: mode and range.\soln Mode $=4$; range $=11$.` },
      { t: "Compare spread", body: r`Two classes share a mean of $70$ but ranges $10$ and $40$. What does that show?\soln Same centre, but the second class is far more spread out.` },
    ],
    questions: [
      { ask: r`Mean of $10,12,14,16,18$?` },
      { ask: r`Median of $2,5,9,11,14,20$?` },
      { ask: r`Mode and range of $4,4,4,7,9,9,15$?` },
      { ask: r`For $1,2,2,3,40$, is the mean or median more typical?` },
      { ask: r`Mean of $3,7,7,9,14$?` },
      { ask: r`Median of $6,2,9,4,8$ (order first)?` },
      { ask: r`Range of $15,8,23,4,19$?` },
      { ask: r`Mode of $2,4,4,4,6,6,9$?` },
      { ask: r`A data set has mean $50$; adding the value $200$ will do what to the mean?` },
      { ask: r`Median of $4,4,6,10$?` },
      { ask: r`Which measure suits "most common shoe size sold"?` },
      { ask: r`Mean of $0,0,0,20$?` },
      { ask: r`Test scores: $60,65,70,70,75,90$. Find the mean, median, and mode, and say which best summarizes them.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$14$`, r`$10$`, r`mode $4$, range $11$`, r`median ($=2$; mean $=9.6$ is distorted)`, r`$8$`, r`$2,4,6,8,9\Rightarrow6$`, r`$23-4=19$`, r`$4$`, r`raise it (outlier pulls the mean up)`, r`$\dfrac{4+6}{2}=5$`, r`mode`, r`$5$`, r`mean $=71.7$, median $=70$, mode $=70$; median/mode best (slight high outlier 90)`],
  },
  {
    code: "5.3", unit: U, title: "Probability",
    intro: r`Probability runs from $0$ (impossible) to $1$ (certain). Theoretical comes from counting outcomes; experimental comes from trials.`,
    ideas: [r`Theoretical $P=\dfrac{\text{favourable}}{\text{total}}$.`, r`Experimental $P=\dfrac{\text{successes}}{\text{trials}}$; complement $P(\text{not }A)=1-P(A)$.`, r`Independent events: $P(A\text{ and }B)=P(A)\times P(B)$.`],
    examples: [
      { t: "Single outcome", body: r`$P$ of rolling a $4$ on a die.\soln $\dfrac16$.` },
      { t: "Several favourable", body: r`$P$ of an even number on a die.\soln $2,4,6$: $\dfrac36=\dfrac12$.` },
      { t: "Complement", body: r`$P$ of not rolling a $4$.\soln $1-\dfrac16=\dfrac56$.` },
      { t: "Experimental vs theoretical", body: r`$50$ flips give $30$ heads.\soln Experimental $=\dfrac{30}{50}=0.6$ vs theoretical $0.5$; more flips drift toward $0.5$.` },
      { t: "Independent events", body: r`$P$ of a $6$ then another $6$.\soln $\dfrac16\times\dfrac16=\dfrac1{36}$.` },
      { t: "From a deck", body: r`$P$ of drawing a red card.\soln $\dfrac{26}{52}=\dfrac12$.` },
      { t: "Several favourable", body: r`$P$ of a number less than $3$ on a die.\soln $1,2$: $\dfrac26=\dfrac13$.` },
      { t: "Complement", body: r`If $P(\text{rain})=0.3$, find $P(\text{no rain})$.\soln $1-0.3=0.7$.` },
      { t: "Independent events", body: r`$P$ of two heads in a row.\soln $\dfrac12\times\dfrac12=\dfrac14$.` },
    ],
    questions: [
      { ask: r`$P$ of drawing a red card from a deck?` },
      { ask: r`$P$ of rolling a number less than $3$?` },
      { ask: r`If $P(\text{win})=0.4$, find $P(\text{not win})$.` },
      { ask: r`A spinner landed on red $18$ of $60$ spins. Experimental $P(\text{red})$?` },
      { ask: r`$P$ of two heads in a row?` },
      { ask: r`$P$ of rolling a $5$ or $6$ on a die?` },
      { ask: r`$P$ of drawing a heart from a deck?` },
      { ask: r`If $P(A)=0.25$, find $P(\text{not }A)$.` },
      { ask: r`$P$ of heads then a $3$ on a die?` },
      { ask: r`A bag has 3 red and 7 blue marbles. $P(\text{red})$?` },
      { ask: r`$P$ of rolling two even numbers in a row?` },
      { ask: r`Out of $200$ trials a result occurred $50$ times. Experimental probability?` },
      { ask: r`A bag has 4 red, 5 green, 6 blue. Find $P(\text{red})$, then $P(\text{red then red})$ with replacement.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac12$`, r`$\tfrac13$`, r`$0.6$`, r`$\tfrac{18}{60}=0.3$`, r`$\tfrac14$`, r`$\tfrac26=\tfrac13$`, r`$\tfrac{13}{52}=\tfrac14$`, r`$0.75$`, r`$\tfrac12\times\tfrac16=\tfrac1{12}$`, r`$\tfrac{3}{10}$`, r`$\tfrac12\times\tfrac12=\tfrac14$`, r`$\tfrac{50}{200}=0.25$`, r`$P(\text{red})=\tfrac{4}{15}$; $P(\text{red,red})=\tfrac{4}{15}\times\tfrac{4}{15}=\tfrac{16}{225}$`],
  },
];
