// MCF3M Worksheet 3.5 — Quadratic Models from Data (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const D = (arr) => arr.map(([x, y]) => ({ x, y, label: "", color: "blue" }));
const M = (f, view, data, a, b, step, extra = []) => F({ view, curves: [{ f, a, b, color: "violet" }], points: [...D(data), ...extra], step });

const EXAMPLES = [
  { title: "Model from zeros", q: S`A ball's heights: $(0,0)$, $(1,15)$, $(2,24)$, $(3,27)$, $(4,24)$, $(5,15)$, $(6,0)$. Write a model.`,
    fig: M((t) => -3 * t * (t - 6), { xmin: -0.5, xmax: 7, ymin: -2, ymax: 30 }, [[0, 0], [1, 15], [2, 24], [3, 27], [4, 24], [5, 15], [6, 0]], 0, 6, { x: 1, y: 5 }),
    steps: [S`\textbf{Zeros} $0$ and $6$: $h=at(t-6)$.`, S`\textbf{Use $(3,27)$:} $27=a(3)(-3)\Rightarrow a=-3$.`, S`$h=-3t(t-6)$. \textbf{Test $(1,15)$:} $-3(1)(-5)=15$ \checkmark`],
    ans: S`$h=-3t(t-6)$` },
  { title: "Model from a vertex", q: S`Data peak near $(4,\,10)$ and pass through $(0,\,2)$. Write a vertex-form model.`,
    fig: M((x) => -0.5 * (x - 4) ** 2 + 10, { xmin: -1, xmax: 9, ymin: -1, ymax: 12 }, [[0, 2], [2, 8.1], [4, 9.9], [6, 8], [8, 2.2]], -0.5, 8.5),
    steps: [S`$y=a(x-4)^2+10$.`, S`$2=16a+10\Rightarrow a=-0.5$.`, S`$y=-0.5(x-4)^2+10$. \textbf{Test $(6,8)$:} $-2+10=8$ \checkmark`],
    ans: S`$y=-0.5(x-4)^2+10$` },
  { title: "Residuals", q: S`For the model $y=-0.5(x-4)^2+10$, find the residuals at $(2,\,8.1)$ and $(8,\,2.2)$.`,
    fig: M((x) => -0.5 * (x - 4) ** 2 + 10, { xmin: -1, xmax: 9, ymin: -1, ymax: 12 }, [[2, 8.1], [8, 2.2]], -0.5, 8.5),
    steps: [S`\textbf{Predictions:} $y(2)=-2+10=8$; $y(8)=-8+10=2$.`, S`\textbf{Residuals} (actual $-$ predicted): $8.1-8=0.1$; $2.2-2=0.2$.`, S`Small and both positive: the model slightly under-predicts there.`],
    ans: S`$0.1$ and $0.2$` },
  { title: "Choosing the point for $a$", q: S`Why can't the vertex $(4,10)$ itself be used to find $a$ in $y=a(x-4)^2+10$?`,
    fig: M((x) => -0.5 * (x - 4) ** 2 + 10, { xmin: -1, xmax: 9, ymin: -1, ymax: 12 }, [[4, 10]], -0.5, 8.5),
    steps: [S`Substituting $(4,10)$: $10=a(0)^2+10$, i.e. $10=10$ for every $a$.`, S`So another point is needed to fix the width.`],
    ans: S`it gives $10=10$ (no information about $a$)` },
  { title: "Is a parabola sensible?", q: S`Population (thousands) of a town at $t=0,5,10,15$ years: $10,\,13,\,17,\,22$. A student fits a parabola opening up. Comment on predicting $t=-20$.`,
    fig: M((t) => 0.02 * t * t + 0.5 * t + 10, { xmin: -30, xmax: 20, ymin: 0, ymax: 30 }, [[0, 10], [5, 13], [10, 17], [15, 22]], -30, 20, { x: 5, y: 5 }),
    steps: [S`A parabola opening up has a minimum, so going back in time it would rise again.`, S`At $t=-20$: $0.02(400)-10+10=8$, and earlier the model would predict growth into the past.`, S`Extrapolation far outside $0\le t\le15$ is unreliable.`],
    ans: S`unreliable extrapolation` },
  { title: "Interpolate vs extrapolate", q: S`A model $d=0.5v^2+v$ was built for $2\le v\le10$. Predict $d$ at $v=6$ and $v=30$ and judge each.`,
    fig: M((v) => 0.5 * v * v + v, { xmin: 0, xmax: 32, ymin: 0, ymax: 500 }, [[6, 24]], 2, 10, { x: 5, y: 50 }, [pt(30, 480, null, "red")]),
    steps: [S`$d(6)=18+6=24$: interpolation, reliable.`, S`$d(30)=450+30=480$: extrapolation, unreliable.`],
    ans: S`$24$ (reliable), $480$ (unreliable)` },
  { title: "Compare two models", q: S`Data point $(5,\,37)$. Model A: $y=-2(x-1)(x-9)+5$ gives? Model B: $y=-1.9x^2+19x-8$ gives? Which is closer?`,
    fig: M((x) => -2 * (x - 1) * (x - 9) + 5, { xmin: 0, xmax: 10, ymin: -5, ymax: 45 }, [[5, 37]], 0, 10, { x: 1, y: 5 }),
    steps: [S`A: $-2(4)(-4)+5=37$: residual $0$.`, S`B: $-47.5+95-8=39.5$: residual $-2.5$.`, S`Model A fits this point better.`],
    ans: S`A ($37$) is closer than B ($39.5$)` },
  { title: "A bridge", q: S`A parabolic arch spans $60$ m and rises $18$ m. Model it with the left foot at the origin and find the height $15$ m from a foot.`,
    fig: M((x) => -0.02 * x * (x - 60), { xmin: -2, xmax: 62, ymin: -1, ymax: 20 }, [], 0, 60, { x: 10, y: 2 }, [pt(30, 18, null, "amber"), pt(15, 13.5)]),
    steps: [S`$h=ax(x-60)$; at $x=30$: $18=a(30)(-30)\Rightarrow a=-0.02$.`, S`$h(15)=-0.02(15)(-45)=13.5$ m.`],
    ans: S`$h=-0.02x(x-60)$; $13.5$ m` },
  { title: "Collect your own", q: S`Describe how to collect data for a quadratic model with a ball rolled up a ramp and a phone video.`,
    fig: M((t) => -0.4 * (t - 2.5) ** 2 + 2.5, { xmin: -0.2, xmax: 5.2, ymin: -0.2, ymax: 3 }, [[0, 0], [1, 1.6], [2, 2.4], [3, 2.4], [4, 1.6], [5, 0]], 0, 5, { x: 1, y: 0.5 }),
    steps: [S`Record the ball's distance up the ramp every second from the video frames.`, S`Plot distance vs time; expect a parabola (it slows, stops, returns).`, S`Find the vertex (highest point) and use a starting point to find $a$.`],
    ans: S`plot, find the vertex, fit $y=a(t-h)^2+k$` },
];

const PROBLEMS = [
  { level: 1, q: S`Data have zeros $0$ and $8$ and pass through $(4,\,32)$. Find $a$ in $y=ax(x-8)$.`, ans: S`$a=-2$` },
  { level: 1, q: S`Data peak at $(2,\,9)$ and pass through $(0,\,1)$. Find $a$ in $y=a(x-2)^2+9$.`, ans: S`$a=-2$` },
  { level: 1, q: S`A model predicts $14.6$ where the actual value is $15.0$. Find the residual.`, ans: S`$0.4$` },
  { level: 2, q: S`Data: $(0,1)$, $(1,4)$, $(2,5)$, $(3,4)$, $(4,1)$. Write a vertex-form model and check one point.`, ans: S`$y=-(x-2)^2+5$` },
  { level: 2, q: S`Data have zeros $-1$ and $5$ and pass through $(2,\,18)$. Write the model.`, ans: S`$y=-2(x+1)(x-5)$` },
  { level: 2, q: S`Plot the data $(0,10)$, $(1,6)$, $(2,4)$, $(3,4)$, $(4,6)$, $(5,10)$ and write a model.`, fig: F({ view: { xmin: -1, xmax: 6, ymin: 0, ymax: 12 } }), ans: S`$y=(x-2.5)^2+3.75$` },
  { level: 2, q: S`Explain why extrapolating a ball's height model to $t=20$ s is unreasonable.`, ans: S`the ball has landed; negative heights` },
  { level: 2, q: S`An arch $40$ m wide rises $10$ m. Find a model with feet at $0$ and $40$.`, ans: S`$h=-\tfrac1{40}x(x-40)$` },
  { level: 3, space: 5, q: S`Data: $(1,12)$, $(2,20)$, $(3,24)$, $(4,24)$, $(5,20)$, $(6,12)$. Find a factored-form model and use it to predict where the data cross zero.`, ans: S`$y=-2(x)(x-7)$; zeros $0$ and $7$` },
  { level: 3, space: 5, q: S`Two models for the same data predict $50$ and $46$ at $x=3$; the actual value is $47$. Which model fits better there, and why might it still not be the better model overall?`, ans: S`the second (residual $1$ vs $-3$); one point is not enough` },
  { level: 3, space: 5, q: S`A cable between towers $100$ m apart is $4$ m above the road in the middle and $54$ m high at the towers. Model it and find the height $20$ m from a tower.`, ans: S`$y=0.02(x-50)^2+4$; $22$ m` },
  { level: 3, space: 5, q: S`Explain how the second differences of a data table can suggest whether a quadratic model is reasonable.`, ans: S`roughly constant second differences suggest quadratic` },
  { level: 3, space: 5, q: S`A cooling cup's temperatures are $80,\,64,\,52,\,44,\,40$ at $t=0,5,10,15,20$. Explain why a quadratic model will fail for large $t$.`, ans: S`a parabola would turn upward; real temperatures level off` },
];

export const WS = {
  code: "3.5",
  title: "Quadratic Models from Data",
  bigideas: S`Many data sets follow a parabola approximately. Plot them, decide whether a quadratic fits, then use visible features: zeros give $y=a(x-r)(x-s)$ and a vertex gives $y=a(x-h)^2+k$; another point finds $a$. Residuals measure the fit, technology gives a curve of best fit, and predictions far outside the data are unreliable.`,
  goals: ["Decide whether a quadratic model fits.", "Build models from zeros or a vertex.", "Use residuals to judge fit.", "Predict and judge reasonableness."],
  curriculum: "A3.1, A3.2",
  vocab: [["Scatter plot", "graph of data points"], ["Residual", "actual $-$ predicted"], ["Curve of best fit", "technology's model"], ["Extrapolation", "predicting outside the data"]],
  hook: S`Throw a ball and film it. What shape will the height-time graph be? What features could you measure?`,
  concepts: [
    ["1. Building a model", S`Zeros $\to$ factored form; vertex $\to$ vertex form; then one more point for $a$.
${M((t) => -5 * t * (t - 4), { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 22 }, [[0, 0.3], [1, 15.4], [2, 19.8], [3, 14.7], [4, 0.2]], 0, 4, { x: 1, y: 5 })}`],
    ["2. Judging a model", S`Residuals should be small and on both sides. Compare with technology's curve of best fit. Check that the shape makes sense physically.`],
  ],
  tips: ["Have students build two models from different points and compare residuals.", "Discuss when a quadratic is the wrong model (cooling, population).", "Encourage collecting real data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
