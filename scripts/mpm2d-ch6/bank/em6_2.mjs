// 6.2 Solving Problems with Similar Triangles — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sceneDoc, polygon } from "./fig.mjs";

const g = (a, b) => ({ seg: [[a, 0], [b, 0]], color: "gray" });
const ns = (x, y) => ({ text: "not to scale", at: [x, y], size: 11, color: "gray" });

export const E = [
  num(`A $1.5$ m stick casts a $2$ m shadow when a pole casts a $10$ m shadow. How tall is the pole (m)?`, 7.5, "$\\frac h{1.5}=\\frac{10}2$."),
  num(`A $2$ m post casts a $1.6$ m shadow when a tree casts a $12$ m shadow. How tall is the tree (m)?`, 15, "$\\frac h2=\\frac{12}{1.6}$."),
  mc(`Why are the two shadow triangles similar?`, "both have a right angle and the same sun angle (AA)", ["their sides are equal", "they have the same area", "the shadows are equal"], "Parallel sun rays make equal angles."),
  num(`Eyes $1.5$ m high, $2$ m from a mirror on the ground; a building is $16$ m beyond the mirror. How tall is the building (m)?`, 12, "$\\frac h{1.5}=\\frac{16}2$."),
  num(`A model is built at $1:25$. A model wall is $8$ cm tall. How tall is the real wall, in metres?`, 2, "$8\\times25=200$ cm."),
  tf(`In a mirror problem, you use the person's full height.`, false, "Use the eye height — the line of sight starts at the eye."),
  num(`On a $1:50\\,000$ map, two points are $3$ cm apart. How far apart are they in km?`, 1.5, "$150\\,000$ cm."),
  num(`Similar right triangles across a river: legs $x$ and $24$ m match $5$ m and $8$ m. Find $x$ (m).`, 15, "$\\frac x5=\\frac{24}8$."),
  mc(`A $1.8$ m person casts a $2$ m shadow and a tree casts a $9$ m shadow. Which proportion gives the tree's height $h$?`, "$\\frac{h}{1.8}=\\frac92$", ["$\\frac{h}{9}=\\frac{2}{1.8}$", "$\\frac{h}{2}=\\frac{9}{1.8}$", "$h=1.8+9-2$"], "Height with height, shadow with shadow."),
  num(`A $1.6$ m person casts a $2.4$ m shadow when a tree casts a $21$ m shadow. How tall is the tree (m)?`, 14, "$\\frac h{1.6}=\\frac{21}{2.4}$."),
  num(`A ramp rises $1$ m over a horizontal run of $5$ m. How high is it $3$ m (horizontally) from the bottom?`, 0.6, "$\\frac x1=\\frac35$."),
  tf(`Parallel lines make equal corresponding angles, which can be used to show triangles are similar.`, true, "That gives AA."),
  num(`A $3$ m object is $6$ m in front of a pinhole camera $0.1$ m deep. How tall is the image, in cm?`, 5, "$\\frac i3=\\frac{0.1}6$: $0.05$ m."),
  num(`A $15$ cm ruler held $50$ cm from the eye just covers a building $100$ m away. How tall is the building (m)?`, 30, "$\\frac h{0.15}=\\frac{100}{0.5}$."),
  fill(`Finding a length without measuring it directly is called ___ measurement.`, ["indirect"], "Similar triangles allow indirect measurement."),
  num(`A $1$ m stick casts a $0.8$ m shadow when a flagpole casts a $6$ m shadow. How tall is the flagpole (m)?`, 7.5, "$\\frac h1=\\frac6{0.8}$."),
  mc(`A person stands some distance from a lamp post. In the large similar triangle, the base is…`, "the person's shadow plus their distance to the post", ["only the person's shadow", "the post's height", "the distance to the post only"], "The lamp's light ray reaches the tip of the shadow."),
  num(`A scale drawing uses $1$ cm for $4$ m. A wall is $3.5$ cm on the drawing. How long is it (m)?`, 14, "$3.5\\times4$."),
  tf(`For the shadow method, both shadows should be measured at about the same time.`, true, "The sun angle changes during the day."),
  num(`Using the sketch, find the height of the tree (m).`, 13.5, "$\\frac h{1.5}=\\frac{18}2$.", sceneDoc([g(-0.5, 16), ...polygon([[0, 0], [10, 0], [0, 8]], { fill: "green", color: "green", rightAt: [0], sides: ["18 m", "", "h"] }), ...polygon([[11.5, 0], [15.5, 0], [11.5, 3.2]], { fill: "blue", rightAt: [0], sides: ["2 m", "", "1.5 m"] }), ns(5, 8.7)], 400)),
];

export const M = [
  num(`A $1.8$ m person stands $4$ m from a $4.8$ m lamp post. How long is the person's shadow (m)?`, 2.4, "$\\frac s{1.8}=\\frac{s+4}{4.8}\\Rightarrow3s=7.2$."),
  num(`A $1.6$ m person stands $5$ m from a pole so their shadow tips meet. The person's shadow is $2$ m. How tall is the pole (m)?`, 5.6, "$\\frac h{1.6}=\\frac{7}{2}$."),
  num(`A person with eyes $1.7$ m high stands $2.5$ m from a mirror on the ground and sees the top of a $13.6$ m tree in it. How far is the mirror from the tree (m)?`, 20, "$\\frac{13.6}{1.7}=\\frac d{2.5}=8$."),
  num(`Similar right triangles across a river: legs $x$ and $50$ m match $12$ m and $20$ m. Find $x$ (m).`, 30, "$\\frac x{12}=\\frac{50}{20}$."),
  num(`A building casts a $42$ m shadow when a $2$ m pole casts a $2.8$ m shadow. How tall is the building (m)?`, 30, "$\\frac h2=\\frac{42}{2.8}$."),
  mc(`A $12$ m tree casts a $9$ m shadow. At the same time, how long is a $2$ m person's shadow?`, "$1.5$ m", ["$2.25$ m", "$1.2$ m", "$6$ m"], "$\\frac s2=\\frac9{12}$."),
  num(`A $25$ cm ruler held $60$ cm from the eye just covers a tower $360$ m away. How tall is the tower (m)?`, 150, "$\\frac h{0.25}=\\frac{360}{0.6}$."),
  num(`A $6$ m tree makes a $3$ cm image in a pinhole camera $15$ cm deep. How far is the tree from the pinhole (m)?`, 30, "$\\frac{0.03}6=\\frac{0.15}D$."),
  tf(`If a person moves closer to a lamp post, their shadow gets shorter.`, true, "Try it with $\\frac s{h}=\\frac{s+d}{H}$: smaller $d$ gives smaller $s$."),
  num(`A $2$ m fence is $3$ m in front of a person whose eyes are $1.6$ m high. Over the fence they just see the top of a $4$ m pole. How far beyond the fence is the pole (m)?`, 15, "The sight line rises $0.4$ m per $3$ m; it must rise $2.4$ m, so $18$ m from the eye."),
  num(`A ramp has a run of $8$ m and a rise of $1.2$ m. How tall is a support post $6$ m along the run (m)?`, 0.9, "$\\frac x{1.2}=\\frac68$."),
  mc(`A $1.8$ m person stands $4$ m from a $4.8$ m lamp. Which proportion gives the shadow $s$?`, "$\\frac{s}{1.8}=\\frac{s+4}{4.8}$", ["$\\frac{s}{4.8}=\\frac{4}{1.8}$", "$\\frac{s}{1.8}=\\frac{4}{4.8}$", "$\\frac{s+4}{1.8}=\\frac{s}{4.8}$"], "Each base matches its height."),
  num(`A $150$ m tower is modelled at $1:500$. How tall is the model, in cm?`, 30, "$15\\,000\\div500$."),
  num(`Across a canyon, similar right triangles have legs $x$ and $60$ m matching $9$ m and $12$ m. Find $x$ (m).`, 45, "$\\frac x9=\\frac{60}{12}$."),
  ms(`Select all facts that give AA similarity in measurement problems.`, ["right angles and the same sun angle", "vertical angles and parallel lines", "equal mirror angles and right angles", "two pairs of equal sides", "one right angle only"], [0, 1, 2], "Two pairs of equal angles are needed."),
  num(`A $1.5$ m person casts a $2$ m shadow. A tree's shadow is $8$ m longer than the person's. How tall is the tree (m)?`, 7.5, "Tree shadow $10$ m: $\\frac h{1.5}=\\frac{10}2$."),
  tf(`A mirror problem needs the person's eye height, not their total height.`, true, "The line of sight begins at the eye."),
  num(`On a $1:20\\,000$ map, how many cm represent $2.4$ km?`, 12, "$240\\,000\\div20\\,000$."),
  num(`A $1.5$ m child $2$ m from a lamp post has a $1$ m shadow. How tall is the lamp post (m)?`, 4.5, "$\\frac H{1.5}=\\frac{3}{1}$."),
  num(`Use the sketch to find the height of the pole (m).`, 12, "$\\frac h{1.6}=\\frac{15}2$.", sceneDoc([g(-0.5, 14.5), ...polygon([[0, 0], [10, 0], [0, 8]], { fill: "green", color: "green", rightAt: [0], sides: ["15 m", "", "h"] }), ...polygon([[10, 0], [13.75, 0], [13.75, 3]], { fill: "blue", rightAt: [1], sides: ["2 m", "1.6 m", ""] }), { dot: [10, 0], color: "red", r: 5 }, { text: "mirror", at: [10, -1.1], color: "red", size: 12 }, ns(5, 8.7)], 400)),
];
