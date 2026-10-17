// MTH1W 4.1 — Relations (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.1 Relations";

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Relations",
    overview: String.raw`A <strong>relation</strong> describes how one quantity depends on another: the cost of a taxi ride depends on the distance, the height of a plant depends on the number of days. In this lesson you will identify the <strong>independent</strong> and <strong>dependent</strong> variables, move between four representations (words, table of values, graph, equation), decide whether data are <strong>discrete</strong> or <strong>continuous</strong>, and read stories from <strong>distance–time graphs</strong>. Every later lesson in this chapter builds on these ideas.`,
    goals: [
      "identify the independent and dependent variables in a situation;",
      "represent a relation with words, a table of values, a graph and an equation, and move between them;",
      "decide whether a relation is discrete (separate points) or continuous (a joined line or curve);",
      "interpret a distance–time graph: steepness is speed, a flat part means no motion, falling means coming back;",
      "use a graph to interpolate (estimate between data) and extrapolate (predict beyond the data).",
    ],
    curriculum: "C3.1 (relations from real situations; tables and graphs), C4.1 (characteristics of graphs)",
    prior: [
      [String.raw`Evaluate \(12+3t\) for \(t=0,1,2\).`, String.raw`\(12, 15, 18\).`],
      [String.raw`Plot the point \((3,-2)\): which way do you move first?`, String.raw`Right \(3\), then down \(2\).`],
      [String.raw`A car travels \(150\) km in \(2\) h. What is its average speed?`, String.raw`\(75\) km/h.`],
    ],
    words: [
      ["Relation", "a connection between two variables", "cost and number of tickets"],
      ["Independent variable", "the variable you choose or control; plotted on the horizontal axis", "time, number of items"],
      ["Dependent variable", "the variable that responds; plotted on the vertical axis", "cost, distance, height"],
      ["Discrete", "only separate values make sense (counts); graph as points", "number of tickets"],
      ["Continuous", "every value in an interval makes sense (measurements); graph as a line or curve", "time, volume"],
      ["Interpolate / extrapolate", "estimate between / beyond the known data", ""],
    ],
  }),

  section("📌 Variables and representations", String.raw`
  <p>Concert tickets cost \(15\) dollars each plus a \(5\)-dollar service fee. The <strong>number of tickets</strong> \(n\) is the independent variable (you choose it); the <strong>cost</strong> \(C\) depends on it.</p>
  ${table(["Representation", "For the ticket relation"], [
    ["Words", "the cost is 5 dollars plus 15 dollars for each ticket"],
    ["Equation", "\\(C=15n+5\\)"],
    ["Table", table(["\\(n\\)", "1", "2", "3", "4"], [["\\(C\\)", "20", "35", "50", "65"]])],
  ])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 100 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 15 * n + 5, color: "blue" })), xlabel: "tickets n", ylabel: "cost C", step: { x: 1, y: 10 } }, "Tickets are counted, so the graph is separate points (discrete).")}
  ${keyIdea(String.raw`The independent variable goes on the <strong>horizontal</strong> axis, the dependent variable on the <strong>vertical</strong> axis. Ask: “Which quantity depends on which?”`)}`),

  section("📌 Discrete or continuous?", String.raw`
  <p>If only whole-number values make sense (people, tickets, figures in a pattern), the relation is <strong>discrete</strong>: plot points and do not join them. If every value in between makes sense (time, distance, mass, volume), it is <strong>continuous</strong>: join the points with a line or a smooth curve.</p>
  ${plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 500 }, lines: [{ m: 45, b: 50, color: "green", label: "V = 50 + 45t" }], xlabel: "time t (min)", ylabel: "volume (L)", step: { x: 1, y: 50 } }, "A tub with 50 L fills at 45 L/min: time is continuous, so the graph is a solid line.")}
  ${watchOut([
    "Joining points for a discrete relation suggests values like 2.5 tickets that do not exist.",
    "Put the independent variable on the horizontal axis even if the question lists the other variable first.",
    "Label both axes with the quantity and its unit.",
  ])}`),

  section("📌 Graphs that tell a story", String.raw`
  <p>On a <strong>distance–time graph</strong>, the steepness of a segment is the speed. A flat segment means the person is not moving; a segment that goes down means the distance from the starting point is decreasing (coming back).</p>
  <p>Move the time slider and read the story: Maya walks to a store, shops, then runs home.</p>`),

  widget("motionStory", {}),

  examples([
    ["Independent and dependent", String.raw`A phone's battery charge is measured every \(10\) minutes while a video plays. Name the independent and dependent variables, and say whether the relation is discrete or continuous.`,
      ["Time is chosen/controlled; the charge responds to it.", "Time and charge can take any value in between: continuous."],
      String.raw`independent: time; dependent: battery charge; continuous`],
    ["From words to table, graph and equation", String.raw`A gym charges a \(40\)-dollar joining fee plus \(25\) dollars per month. Make a table for \(0\) to \(4\) months, write an equation and describe the graph.`,
      [String.raw`\(C=40+25m\): \(m=0,1,2,3,4\) gives \(C=40, 65, 90, 115, 140\).`, String.raw`Months are counted (you pay per whole month): plot separate points.`, String.raw`The points rise by \(25\) for each month and start at \(40\) on the vertical axis.`],
      String.raw`\(C=40+25m\); points \((0,40), (1,65),\dots,(4,140)\)`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 160 }, points: [0, 1, 2, 3, 4].map((m) => ({ x: m, y: 40 + 25 * m, color: "blue" })), xlabel: "months m", ylabel: "cost C", step: { x: 1, y: 20 } })],
    ["Reading a story", String.raw`The graph shows Jon's distance from home on a bike ride. Describe each part of the trip, with speeds.`,
      [String.raw`\(0\) to \(20\) min: \(0\) to \(6\) km, speed \(6\div20=0.3\) km/min (\(18\) km/h).`, String.raw`\(20\) to \(30\) min: flat at \(6\) km — stopped for \(10\) min.`, String.raw`\(30\) to \(40\) min: \(6\) to \(0\) km — back home at \(0.6\) km/min (\(36\) km/h), twice as fast.`],
      "out at 18 km/h, a 10-min stop, home at 36 km/h",
      plane({ view: { xmin: 0, xmax: 45, ymin: 0, ymax: 8 }, segs: [{ pts: [[0, 0], [20, 6], [30, 6], [40, 0]] }], xlabel: "time (min)", ylabel: "distance (km)", step: { x: 5, y: 1 } })],
    ["Interpolate and extrapolate", String.raw`A sunflower is \(12\) cm tall on day \(5\), \(24\) cm on day \(10\) and \(36\) cm on day \(15\). Estimate its height on day \(8\) and predict day \(25\). Which estimate is less reliable?`,
      [String.raw`It grows \(12\) cm per \(5\) days, \(2.4\) cm/day; height \(=2.4d\).`, String.raw`Day \(8\) (interpolate): \(2.4(8)=19.2\) cm.`, String.raw`Day \(25\) (extrapolate): \(60\) cm — less reliable: the growth may slow.`],
      String.raw`\(19.2\) cm; \(60\) cm (extrapolation, less reliable)`],
    ["Choosing the right graph", String.raw`Which graph matches: “Sara walks slowly to the bus stop, waits, then rides the bus quickly to school”? (distance from home vs time)`,
      [String.raw`Slow walk: a gentle rise. Waiting: flat. Bus: a steep rise (fast, still moving away from home).`, "So the graph rises gently, is flat, then rises steeply."],
      "gentle rise → flat → steep rise"],
  ]),

  practice([
    q("variables", "Pizza cost depends on the number of toppings. Which is the independent variable?", choice(["the number of toppings", "the cost", "both", "neither"], 0),
      "Which one do you choose?", ["You choose the toppings; the cost responds."], "the number of toppings"),
    q("discrete/continuous", "Which relation is continuous?", choice(["the temperature of a cup of tea over time", "the cost of n movie tickets", "the number of students in each class", "tiles in figure n of a pattern"], 0),
      "Can every value in between happen?", ["Time and temperature can take any value in between; the others are counts."], "temperature over time"),
    q("table", String.raw`A taxi charges \(C=4+2.5d\) dollars for \(d\) km. What is the cost of a \(6\)-km ride?`, num(19),
      String.raw`Substitute \(d=6\).`, [String.raw`\(4+2.5(6)=4+15=19\).`], String.raw`\(19\) dollars`),
    q("speed", String.raw`On a distance–time graph, a runner goes from \(400\) m to \(1000\) m between \(t=2\) min and \(t=5\) min. What is the speed in m/min?`, num(200),
      "Change in distance ÷ change in time.", [String.raw`\(\dfrac{1000-400}{5-2}=\dfrac{600}{3}=200\).`], String.raw`\(200\) m/min`),
    q("story", "A distance–time graph has a segment that goes DOWN. What does it mean?", choice(["the person is moving back toward the starting point", "the person is slowing down while moving away", "the person has stopped", "time is going backward"], 0),
      "The vertical axis is distance from the start.", ["Distance from the start is decreasing, so they are returning."], "moving back toward the start"),
  ]),

  wrapUp({
    qas: [
      ["How do I tell which variable is independent?", "Ask “which quantity do I choose or control, and which one responds?” The one you control (time, number of items, distance driven) is independent and goes on the horizontal axis."],
      ["Why not join the points for tickets?", "Because 2.5 tickets cannot be bought. Joining the points would claim values exist between them. Measurements like time can take any value, so their points are joined."],
      ["What does a steeper segment mean on a distance–time graph?", "A faster speed: more distance in the same time. A flat segment means speed 0."],
      ["Is extrapolation always wrong?", "No, but it assumes the pattern continues beyond the data, which is often not true (growth slows, prices change). Interpolation between known data is usually more reliable."],
      ["Which representation is best?", "Each has a job: the equation gives exact values, the table organizes data, the graph shows the trend at a glance, and words connect to the real situation. Strong answers move between them."],
    ],
    summary: [
      "A relation connects an independent variable (horizontal axis) and a dependent variable (vertical axis).",
      "Represent relations in words, tables, graphs and equations.",
      "Discrete data: points; continuous data: a joined line or curve.",
      "Distance–time graphs: steepness = speed; flat = stopped; down = returning.",
    ],
    next: "4.2 sorts relations into linear and non-linear using first and second differences.",
  }),
];
