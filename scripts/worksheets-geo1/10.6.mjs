import { fig, solidDilationPair, box3d, sphereFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.6",
  title: "Surface Area and Volume Under Dilation",
  intro: "When a solid is dilated (scaled) by factor $k$, every <i>linear</i> measurement (edges, radii, heights, slant heights) scales by $k^{1}=k$. Surface area is built from products of two lengths (length $\\times$ width), so it scales by $k^{2}$; volume is built from products of three lengths, so it scales by $k^{3}$. This is why doubling a solid's size ($k=2$) quadruples its surface area but multiplies its volume by $8$ — a fact that shows up everywhere from packaging costs to biology (why small animals lose heat faster than large ones, since SA scales slower than volume). This worksheet computes new SA/volume after a dilation, recovers $k$ from a given ratio, and converts between SA ratios and volume ratios.",
  examples: [
    ["Example 1: Scale surface area — and see why $k^2$",
      "A cube has surface area $54$. It is dilated by scale factor $k=2$. Find the new surface area.",
      fig(solidDilationPair(), "Dilating a solid by $k$ scales every length by $k$, so area (length × length) scales by $k^2$.") +
      "Every edge doubles, and SA is built from edge $\\times$ edge terms, so SA scales by $k^{2}=2^{2}=4$.<br>" +
      "New SA $=54\\times4=216$.<br>" +
      "<b>Check with formula directly:</b> original edge $s$ satisfies $6s^{2}=54\\Rightarrow s^{2}=9\\Rightarrow s=3$. New edge $=6$, new SA $=6(6^{2})=216$. ✓<br>" +
      "<b>Answer:</b> $216$."],

    ["Example 2: Scale volume — and see why $k^3$",
      "A sphere has volume $36\\pi$. It is dilated by scale factor $k=3$. Find the new volume.",
      "Volume is built from three length factors ($r\\times r\\times r$), so it scales by $k^{3}=3^{3}=27$.<br>" +
      "New $V=36\\pi\\times27=972\\pi$.<br>" +
      "<b>Answer:</b> $972\\pi$."],

    ["Example 3: Find $k$ from an SA ratio",
      "Two similar solids have surface areas in ratio $9:1$ (large to small). Find the scale factor $k$ (large to small).",
      "SA ratio $=k^{2}$, so $k^{2}=9$.<br>" +
      "$k=\\sqrt9=3$ (take the positive root — scale factors are positive).<br>" +
      "<b>Answer:</b> $k=3$."],

    ["Example 4: Find $k$ from a volume ratio",
      "Two similar solids have volumes in ratio $8:1$ (large to small). Find $k$.",
      "Volume ratio $=k^{3}$, so $k^{3}=8$.<br>" +
      "$k=\\sqrt[3]{8}=2$.<br>" +
      "<b>Answer:</b> $k=2$."],

    ["Example 5: Scale both SA and volume together",
      "A prism has SA $=40$ and volume $=30$. It is dilated by $k=\\dfrac12$ (shrunk). Find the new SA and new volume.",
      "Identify the scale factor: $k=\\dfrac12$. Surface area scales by $k^{2}$; volume scales by $k^{3}$.<br>" +
      "Apply each scaling rule to the original measurements:<br>" +
      "New SA $=40\\times k^{2}=40\\times\\dfrac14=10$.<br>" +
      "New $V=30\\times k^{3}=30\\times\\dfrac18=\\dfrac{30}{8}=\\dfrac{15}{4}$.<br>" +
      "Both measurements shrink, but volume shrinks faster than surface area since it scales by a higher power of $k$.<br>" +
      "<b>Answer:</b> new SA $=10$; new $V=\\dfrac{15}{4}$."],

    ["Example 6: Edge length and SA together",
      "A cube has edge $4$ and SA $=96$. After a dilation with $k=\\dfrac32$, find the new edge and new SA.",
      fig(box3d(), "Edge scales by $k$; SA scales by $k^2$.") +
      "New edge $=4\\times\\dfrac32=6$.<br>" +
      "New SA $=96\\times\\left(\\dfrac32\\right)^{2}=96\\times\\dfrac94=216$.<br>" +
      "<b>Check:</b> $6(6^{2})=216$. ✓<br>" +
      "<b>Answer:</b> new edge $=6$; new SA $=216$."],

    ["Example 7: Volume ratio from a given $k$",
      "Two similar cones have scale factor $k=4$ (large to small). Find the volume ratio (new : old).",
      "Volume ratio $=k^{3}=4^{3}=64$.<br>" +
      "<b>Answer:</b> $64:1$."],

    ["Example 8: SA ratio from a volume ratio",
      "Two similar solids have volume ratio $27:8$. Find the SA ratio.",
      "First find $k$ from the volume ratio: $k^{3}=\\dfrac{27}{8}\\Rightarrow k=\\sqrt[3]{\\dfrac{27}{8}}=\\dfrac{3}{2}$.<br>" +
      "Then SA ratio $=k^{2}=\\left(\\dfrac32\\right)^{2}=\\dfrac94$.<br>" +
      "<b>Answer:</b> SA ratio $=\\dfrac94$, i.e. $9:4$."],

    ["Example 9: Shrinking a cylinder",
      "A cylinder has volume $200\\pi$. It is dilated by $k=\\dfrac12$. Find the new volume.",
      "Identify the scale factor: $k=\\dfrac12$. Volume scales by $k^{3}$.<br>" +
      "Apply the scaling rule:<br>" +
      "New $V=200\\pi\\times\\left(\\dfrac12\\right)^{3}=200\\pi\\times\\dfrac18=25\\pi$.<br>" +
      "Shrinking every length by half shrinks the volume to just $\\dfrac18$ of the original.<br>" +
      "<b>Answer:</b> $25\\pi$."],

    ["Example 10: Chain reasoning — volume ratio to $k$ to new SA",
      "A sphere has surface area $144\\pi$ and volume $288\\pi$. A similar (larger) sphere has volume $2304\\pi$. Find the scale factor $k$, then the larger sphere's surface area.",
      fig(sphereFig("r"), "First recover $k$ from the volume ratio, then apply $k^2$ to the SA.") +
      "<b>Step 1 — find $k$ from the volume ratio:</b> $k^{3}=\\dfrac{2304\\pi}{288\\pi}=8 \\;\\Rightarrow\\; k=\\sqrt[3]{8}=2$.<br>" +
      "<b>Step 2 — SA ratio:</b> $k^{2}=4$.<br>" +
      "<b>Step 3 — new SA:</b> $144\\pi\\times4=576\\pi$.<br>" +
      "<b>Answer:</b> $k=2$; new SA $=576\\pi$."],

    ["Example 11: Real-world application — similar water tanks",
      "A small water tank holds $8$ L and needs $2$ m$^2$ of material to build. A larger, similar tank has a linear scale factor of $k=3$ compared to the small one. Find the large tank's capacity and the material needed to build it.",
      "<b>Capacity (volume) scales by $k^{3}$:</b> $8\\times3^{3}=8\\times27=216$ L.<br>" +
      "<b>Material (surface area) scales by $k^{2}$:</b> $2\\times3^{2}=2\\times9=18$ m$^2$.<br>" +
      "<b>Answer:</b> capacity $=216$ L; material needed $=18$ m$^2$. <i>Notice the tank holds $27\\times$ as much water but needs only $9\\times$ the material — bigger containers are more material-efficient per liter.</i>"],
  ],
  questions: [
    ["Problem 1: Scale SA", "SA $=50$, $k=3$. Find the new SA.", "$450$"],
    ["Problem 2: Scale volume", "Volume $=12$, $k=2$. Find the new volume.", "$96$"],
    ["Problem 3: Find $k$", "SA ratio $16:1$. Find $k$.", "$4$"],
    ["Problem 4: Find $k$", "Volume ratio $125:1$. Find $k$.", "$5$"],
    ["Problem 5: Shrink SA", "SA $=180$, $k=\\dfrac13$. Find the new SA.", "$20$"],
    ["Problem 6: Shrink volume", "Volume $=64\\pi$, $k=\\dfrac12$. Find the new volume.", "$8\\pi$"],
    ["Problem 7: SA ratio from $k$", "$k=5$. Find the SA ratio (new:old).", "$25:1$"],
    ["Problem 8: Volume ratio from $k$", "$k=\\dfrac23$. Find the volume ratio (new:old).", "$8:27$"],
    ["Problem 9: SA ratio from volume ratio", "Volume ratio $8:27$. Find the SA ratio.", "$4:9$"],
    ["Problem 10: Edge scale", "Edge $10$, $k=0.4$. Find the new edge.", "$4$"],
    ["Problem 11: Both together", "SA $=72$, $V=48$, $k=2$. Find the new SA and new $V$.", "SA $=288$; $V=384$"],
    ["Problem 12: Find $k$ (reverse direction)", "SA ratio $4:9$ (small:large). Find $k$ (small to large).", "$\\dfrac32$"],
    ["Problem 13: Rule", "Lengths scale by $k$. State how SA and volume scale.", "SA by $k^2$; volume by $k^3$"],
    ["Problem 14: Word problem", "A small object has SA $=15$ and volume $=10$. A similar large object has volume $=80$. Find $k$ and the large object's SA.", "$k=2$; SA $=60$"],
    ["Problem 15: Challenge", "Two similar cones have volumes in ratio $\\dfrac{27}{8}$ (large:small). The small cone has slant height $10$ and total SA $75\\pi$. Find (a) $k$, (b) the large cone's slant height, (c) the large cone's SA.", "$k=\\dfrac32$; slant height $15$; SA $=\\dfrac{675\\pi}{4}$"],
  ],
};
