// 6.2 Solving Problems with Similar Triangles — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { sceneDoc } from "./fig.mjs";

export const TOPIC = "6.2 Solving Problems with Similar Triangles";
export const Q = [
  num(`A $1.8$ m person stands $6$ m from a $6$ m lamp post. How long is the shadow, to two decimal places (m)?`, 2.57, "$\\frac s{1.8}=\\frac{s+6}6\\Rightarrow4.2s=10.8$.", null, 0.01),
  num(`A $1.6$ m person stands $9$ m from a tree so their shadow tips meet. The person's shadow is $2.4$ m. How tall is the tree (m)?`, 7.6, "$\\frac h{1.6}=\\frac{11.4}{2.4}$."),
  num(`A $1.8$ m person walks away from a $5.4$ m lamp post. How far from the post are they when their shadow is $3$ m long (m)?`, 6, "$\\frac3{1.8}=\\frac{3+d}{5.4}\\Rightarrow16.2=5.4+1.8d$."),
  num(`To measure $AB$ across a river: from $B$ walk $40$ m along the bank to $C$, then $10$ m more to $D$, turn $90^\\circ$ and walk $8$ m to $E$, so that $A$, $C$ and $E$ line up. Find $AB$ (m).`, 32, "$\\triangle ABC\\sim\\triangle EDC$: $\\frac{AB}8=\\frac{40}{10}$."),
  num(`A person with eyes $1.5$ m high is $3$ m from a mirror and sees the top of a $9$ m pole. How far is the mirror from the pole (m)?`, 18, "$\\frac9{1.5}=\\frac d3$."),
  num(`A $30$ cm ruler held $0.6$ m from the eye just covers a $45$ m building. How far away is the building (m)?`, 90, "$\\frac{45}{0.3}=\\frac D{0.6}$."),
  tf(`In the mirror method, doubling the mirror-to-building distance (other measurements unchanged) doubles the calculated height.`, true, "$h=e\\cdot\\frac{D}{d}$ is proportional to $D$."),
  mc(`A student uses their full height $1.8$ m instead of their eye height $1.65$ m in a mirror problem. Their answer will be…`, "too large", ["too small", "correct", "negative"], "The height is proportional to the value used."),
  num(`A pole casts a $4$ m shadow when a $1.2$ m post casts a $1.5$ m shadow. How tall is the pole (m)?`, 3.2, "$\\frac h{1.2}=\\frac4{1.5}$."),
  num(`A person whose eyes are $2$ m high stands $10$ m from a $5$ m wall and just sees the top of a building over it. The building is $40$ m beyond the wall. How tall is the building (m)?`, 17, "Rise $3$ m per $10$ m; over $50$ m it rises $15$ m: $2+15$."),
  num(`A $1.8$ m person $4$ m from a pinhole camera makes a $6$ cm image. How deep is the camera, to two decimal places (cm)?`, 13.33, "$\\frac{0.06}{1.8}=\\frac{d}{4}$: $d\\approx0.1333$ m.", null, 0.01),
  num(`Two towns $18$ km apart are $7.2$ cm apart on a map. The scale is $1:n$. Find $n$.`, 250000, "$1\\,800\\,000\\div7.2$."),
  ms(`Select all conditions needed for the mirror method to work.`, ["the ground is level", "the mirror lies flat", "the eye height is measured", "the sun is shining", "the person's full height is used"], [0, 1, 2], "The two right triangles need equal angles at a flat mirror on level ground."),
  num(`A ramp has a run of $12$ m and a rise of $1.5$ m. At what horizontal distance from the bottom is it $1$ m high?`, 8, "$\\frac d{12}=\\frac1{1.5}$."),
  num(`A $1.5$ m person $3$ m from a lamp post casts a $1.5$ m shadow. A $1.8$ m person then stands $6$ m from the same post. How long is their shadow (m)?`, 4, "Lamp $=1.5\\times\\frac{4.5}{1.5}=4.5$ m; $\\frac s{1.8}=\\frac{s+6}{4.5}\\Rightarrow2.7s=10.8$."),
  tf(`Shadow triangles are still similar if one of the objects leans.`, false, "A leaning object no longer makes a right angle with the ground."),
  num(`A $1.5$ m post casts a $2$ m shadow. A tree casts a $12$ m shadow. How long is the sun ray from the top of the tree to the tip of its shadow (m)?`, 15, "Post ray $\\sqrt{1.5^2+2^2}=2.5$; $k=6$."),
  num(`A ramp has a run of $9$ m and a rise of $2.7$ m. A box $0.6$ m tall slides under the ramp until its top touches it. How far (horizontally) is the box from the bottom of the ramp (m)?`, 2, "$\\frac d9=\\frac{0.6}{2.7}$."),
  mc(`Which measurement is NOT needed for the shadow method?`, "the angle of the sun", ["the object's shadow", "the reference object's height", "the reference object's shadow"], "The sun angle cancels out; equal angles are enough."),
  num(`Use the sketch to find the length $s$ of the person's shadow (m).`, 1, "$\\frac s{1.5}=\\frac{s+3}6\\Rightarrow4.5s=4.5$.", sceneDoc([{ seg: [[-0.5, 0], [8.5, 0]], color: "gray" }, { seg: [[0, 0], [0, 6]], color: "gray", width: 4 }, { seg: [[0, 6], [8, 0]], color: "amber" }, { seg: [[5.5, 0], [5.5, 1.875]], color: "blue", width: 4 }, { text: "6 m", at: [-0.9, 3], bold: true }, { text: "1.5 m", at: [4.7, 1], color: "blue", bold: true }, { text: "3 m", at: [2.75, -0.6] }, { text: "s", at: [6.75, -0.6], bold: true, color: "red" }, { text: "not to scale", at: [4, 6.4], size: 11, color: "gray" }], 380)),
];
