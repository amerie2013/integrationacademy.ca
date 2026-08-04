const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "5.1",
  title: "Displaying Data",
  intro: "Choosing and reading data displays — bar/pie charts, histograms, stem-and-leaf and box plots, and scatterplots — plus frequency and correlation.",
  lesson: [
    ["Graph types", R`Bar and pie charts show categorical data; a <b>histogram</b> shows numeric frequency; a <b>stem-and-leaf</b> plot keeps individual values while showing shape; a <b>box-and-whisker</b> plot shows the five-number summary; a <b>scatterplot</b> shows the relationship between two variables.`],
    ["Frequency distributions", R`A frequency table groups data into classes with counts. Relative frequency $=\dfrac{\text{class count}}{\text{total}}$.`],
    ["Correlation from scatterplots", R`A scatterplot shows <b>positive</b> (up), <b>negative</b> (down), or <b>no</b> correlation; it is strong when the points cluster tightly around a line.`],
  ],
  examples: [
    ["Example 1: Relative frequency", R`A class of $10$–$19$ has frequency $8$ out of $40$ total. Find its relative frequency.`, R`$\dfrac{8}{40}=0.2$.`],
    ["Example 2: Stem-and-leaf", R`In a stem-and-leaf plot, stem $3$ with leaf $7$ represents what value?`, R`$37$.`],
    ["Example 3: Correlation", R`A scatterplot of shoe size vs. height trends upward. Describe the correlation.`, R`Positive.`],
    ["Example 4: Box plot", R`What five values does a box-and-whisker plot display?`, R`Minimum, $Q_1$, median, $Q_3$, maximum.`],
    ["Example 5: Pie slice", R`What central angle represents $25\%$ of the data in a pie chart?`, R`$0.25\times360^\circ=90^\circ$.`],
  ],
  questions: [
    ["Problem 1", R`Which display shows a two-variable relationship?`, R`scatterplot`],
    ["Problem 2", R`Which plot shows the five-number summary?`, R`box-and-whisker`],
    ["Problem 3", R`Relative frequency of a class with $6$ of $30$?`, R`$0.2$`],
    ["Problem 4", R`Stem $4$, leaf $2$ represents?`, R`$42$`],
    ["Problem 5", R`Points trending downward indicate ___ correlation.`, R`negative`],
    ["Problem 6", R`A circle graph is also called a ___.`, R`pie chart`],
    ["Problem 7", R`Central angle for $50\%$ of a pie chart?`, R`$180^\circ$`],
    ["Problem 8", R`A histogram displays the ___ of numeric data.`, R`frequency`],
  ],
};
