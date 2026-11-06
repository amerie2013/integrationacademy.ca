// Value tables for MCR3U worked examples: rows = [["\\(x\\)", ...], ["\\(y\\)", ...]], first cell is the row label.
// tv = HTML for lessons (cells may hold \( \) math); tvT = LaTeX tabular for the worksheets (cells may hold $ $ math).
const CELL = "border:1px solid #cbd5e1;padding:4px 10px;text-align:center;";
export const tv = (...rows) => `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;background:#fff;">${rows.map((r, i) => `<tr>${r.map((c, j) => `<${i === 0 || j === 0 ? "th" : "td"} style="${CELL}${i === 0 || j === 0 ? "background:#eff6ff;" : ""}">${c}</${i === 0 || j === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}</table></div>`;
export const tvT = (...rows) => `\\par\\smallskip{\\small\\setlength{\\tabcolsep}{4pt}\\renewcommand{\\arraystretch}{1.6}\\begin{tabular}{|${"c|".repeat(rows[0].length)}}\\hline ${rows.map((r) => r.join(" & ") + " \\\\ \\hline").join(" ")}\\end{tabular}}\\par\\smallskip `;
