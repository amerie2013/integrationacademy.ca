const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "6.4",
  title: "Two-Way Frequency Tables & Categorical Data",
  intro: "Two-way tables organize data by two categories at once. This worksheet practises reading counts, totals, and relative frequencies from one shared table.",
  lesson: [
    ["Two-way tables", "Rows and columns classify data by two categories; each inside cell is a joint count."],
    ["Marginal totals", "The row and column totals (the margins) give each category's overall count."],
    ["Our reference table", R`<table style="border-collapse:collapse;margin:8px 0"><tr><th style="border:1px solid #94a3b8;padding:4px 10px"></th><th style="border:1px solid #94a3b8;padding:4px 10px">Likes tea</th><th style="border:1px solid #94a3b8;padding:4px 10px">No tea</th><th style="border:1px solid #94a3b8;padding:4px 10px">Total</th></tr><tr><td style="border:1px solid #94a3b8;padding:4px 10px"><b>Adults</b></td><td style="border:1px solid #94a3b8;padding:4px 10px">30</td><td style="border:1px solid #94a3b8;padding:4px 10px">20</td><td style="border:1px solid #94a3b8;padding:4px 10px">50</td></tr><tr><td style="border:1px solid #94a3b8;padding:4px 10px"><b>Kids</b></td><td style="border:1px solid #94a3b8;padding:4px 10px">10</td><td style="border:1px solid #94a3b8;padding:4px 10px">40</td><td style="border:1px solid #94a3b8;padding:4px 10px">50</td></tr><tr><td style="border:1px solid #94a3b8;padding:4px 10px"><b>Total</b></td><td style="border:1px solid #94a3b8;padding:4px 10px">40</td><td style="border:1px solid #94a3b8;padding:4px 10px">60</td><td style="border:1px solid #94a3b8;padding:4px 10px">100</td></tr></table>Every example and question below refers to this table.`],
  ],
  examples: [
    ["Example 1: Read a cell", R`How many adults like tea?`, R`$30$.`],
    ["Example 2: Marginal total", R`How many kids are there in total?`, R`$50$.`],
    ["Example 3: Grand total", R`How many people are in the survey?`, R`$100$.`],
    ["Example 4: Joint relative frequency", R`What fraction of all people like tea?`, R`$\dfrac{40}{100} = 0.4$.`],
    ["Example 5: Conditional relative frequency", R`Of the adults, what fraction like tea?`, R`$\dfrac{30}{50} = 0.6$.`],
    ["Example 6: Column margin", R`How many people do not like tea?`, R`$60$.`],
  ],
  questions: [
    ["Problem 1", R`How many kids do not like tea?`, R`$40$`],
    ["Problem 2", R`How many adults in total?`, R`$50$`],
    ["Problem 3", R`How many people like tea?`, R`$40$`],
    ["Problem 4", R`What fraction of all people are kids?`, R`$0.5$`],
    ["Problem 5", R`Of the kids, what fraction like tea?`, R`$0.2$`],
    ["Problem 6", R`Marginal total of the "No tea" column?`, R`$60$`],
    ["Problem 7", R`Joint frequency of adults who like tea?`, R`$30$`],
    ["Problem 8", R`How many people in total?`, R`$100$`],
    ["Problem 9", R`Of the tea-likers, what fraction are adults?`, R`$0.75$`],
    ["Problem 10", R`A row or column total is called a ___ frequency.`, R`Marginal`],
    ["Problem 11", R`Of the adults, what fraction do not like tea?`, R`$0.4$`],
    ["Problem 12", R`Relative frequency is a count divided by a ___.`, R`Total`],
  ],
};
