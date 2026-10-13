import { fig, cylinder3d, cone3d, sphereFig, box3d } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.2",
  title: "Volume",
  intro: "Volume measures the space enclosed by a solid, in cubic units. Prisms and cylinders use $V=Bh$ (base area times height); pyramids and cones use exactly $\\dfrac13$ of that, $V=\\dfrac13Bh$, because a pyramid/cone fills only a third of the prism/cylinder that encloses it; a sphere uses $V=\\dfrac43\\pi r^{3}$. As with surface area, the height needed in the formula is the solid's <i>true vertical height</i>, which sometimes must be recovered from a slant height using the Pythagorean Theorem. This worksheet also covers composite solids, cone-vs-cylinder comparisons, reverse problems, and real-world capacity/unit-conversion problems.",
  examples: [
    ["Example 1: Rectangular prism",
      "Find the volume of a rectangular prism with length $8$, width $5$, height $6$.",
      fig(box3d(), "Volume of a box = length × width × height.") +
      "Identify the dimensions: $l=8$, $w=5$, $h=6$.<br>" +
      "Apply the box volume formula:<br>" +
      "$V=lwh=8(5)(6)=240$.<br>" +
      "<b>Answer:</b> $240$ cubic units."],

    ["Example 2: Cube",
      "Find the volume of a cube with edge length $7$.",
      "Identify the edge length: $s=7$.<br>" +
      "A cube's volume is its edge length cubed:<br>" +
      "$V=s^{3}=7^{3}=343$.<br>" +
      "<b>Answer:</b> $343$ cubic units."],

    ["Example 3: Cylinder",
      "Find the volume of a cylinder with radius $4$, height $9$.",
      fig(cylinder3d("4", "9"), "Base area $\\pi r^2$ times height.") +
      "Identify the radius and height: $r=4$, $h=9$.<br>" +
      "Apply the cylinder volume formula:<br>" +
      "$V=\\pi r^{2}h=\\pi(16)(9)=144\\pi$.<br>" +
      "<b>Answer:</b> $144\\pi$ cubic units."],

    ["Example 4: Square pyramid — height given",
      "A square pyramid has base edge $6$ and height $10$. Find its volume.",
      "Base area: $B=6^{2}=36$.<br>" +
      "$V=\\dfrac13Bh=\\dfrac13(36)(10)=\\dfrac{360}{3}=120$.<br>" +
      "<b>Answer:</b> $120$ cubic units."],

    ["Example 5: Square pyramid — find the height first",
      "A square pyramid has base edge $16$ and slant height $17$. Find its volume.",
      "The formula needs the vertical height $h$, not the slant height $\\ell=17$. Since $\\ell$ is the hypotenuse of a right triangle with legs $h$ and half the base edge:<br>" +
      "$h=\\sqrt{\\ell^{2}-\\left(\\dfrac{s}{2}\\right)^{2}}=\\sqrt{17^{2}-8^{2}}=\\sqrt{289-64}=\\sqrt{225}=15$.<br>" +
      "Now find the base area: $B=16^{2}=256$.<br>" +
      "$V=\\dfrac13Bh=\\dfrac13(256)(15)=\\dfrac{3840}{3}=1280$.<br>" +
      "<b>Answer:</b> $1280$ cubic units."],

    ["Example 6: Cone",
      "Find the volume of a cone with radius $3$, height $8$.",
      fig(cone3d("3", "8"), "A cone fills exactly $\\tfrac13$ of the cylinder with the same base and height.") +
      "Identify the radius and height: $r=3$, $h=8$.<br>" +
      "Apply the cone volume formula (one-third of the matching cylinder):<br>" +
      "$V=\\dfrac13\\pi r^{2}h=\\dfrac13\\pi(9)(8)=\\dfrac{72\\pi}{3}=24\\pi$.<br>" +
      "<b>Answer:</b> $24\\pi$ cubic units."],

    ["Example 7: Sphere",
      "Find the volume of a sphere with radius $6$.",
      fig(sphereFig("6"), "$V=\\tfrac43\\pi r^3$ uses the radius cubed.") +
      "Identify the radius: $r=6$.<br>" +
      "Apply the sphere volume formula:<br>" +
      "$V=\\dfrac43\\pi r^{3}=\\dfrac43\\pi(216)=\\dfrac{864\\pi}{3}=288\\pi$.<br>" +
      "<b>Answer:</b> $288\\pi$ cubic units."],

    ["Example 8: Composite solid — silo volume",
      "A grain silo is a cylinder of radius $6$ and height $10$ topped by a hemisphere of the same radius. Find its total volume.",
      fig(`<div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">${cylinder3d("6", "10")}<span style="font-size:22px;color:#334155;font-weight:700">+</span>${sphereFig("6")}</div>`,
        "Total volume = cylinder volume + hemisphere volume (half a sphere).") +
      "<b>Cylinder:</b> $V_{\\text{cyl}}=\\pi r^{2}h=\\pi(36)(10)=360\\pi$.<br>" +
      "<b>Hemisphere</b> (half a sphere of the same radius): $V_{\\text{hemi}}=\\dfrac12\\left(\\dfrac43\\pi r^{3}\\right)=\\dfrac23\\pi(216)=144\\pi$.<br>" +
      "<b>Total:</b> $V=360\\pi+144\\pi=504\\pi$.<br>" +
      "<b>Answer:</b> $504\\pi$ cubic units."],

    ["Example 9: Cone vs. cylinder — same base and height",
      "A cone and a cylinder both have radius $5$ and height $12$. Find each volume and compare.",
      "<b>Cylinder:</b> $V=\\pi r^{2}h=\\pi(25)(12)=300\\pi$.<br>" +
      "<b>Cone:</b> $V=\\dfrac13\\pi r^{2}h=\\dfrac13(300\\pi)=100\\pi$.<br>" +
      "<b>Comparison:</b> the cone's volume is exactly $\\dfrac13$ of the cylinder's — this is true for <i>any</i> cone/cylinder pair sharing a base and height, not just this one.<br>" +
      "<b>Answers:</b> cylinder $=300\\pi$; cone $=100\\pi$."],

    ["Example 10: Reverse problem — solve for a missing dimension",
      "A cylinder has radius $5$ and volume $250\\pi$. Find its height.",
      "$V=\\pi r^{2}h \\;\\Rightarrow\\; 250\\pi=\\pi(25)h$<br>" +
      "Divide both sides by $25\\pi$: $h=\\dfrac{250\\pi}{25\\pi}=10$.<br>" +
      "<b>Check:</b> $\\pi(25)(10)=250\\pi$. ✓<br>" +
      "<b>Answer:</b> $h=10$."],

    ["Example 11: Word problem — capacity in liters",
      "A cylindrical water tank has diameter $2$ m and height $3$ m. Find its volume in cubic meters, then convert to liters ($1\\text{ m}^3=1000$ L).",
      "Radius: $r=\\dfrac{2}{2}=1$ m.<br>" +
      "$V=\\pi r^{2}h=\\pi(1)^{2}(3)=3\\pi$ m$^3$ (exact form).<br>" +
      "Using $\\pi\\approx3.14159$: $V\\approx9.42$ m$^3$.<br>" +
      "Convert: $9.42\\text{ m}^3\\times1000\\dfrac{\\text{L}}{\\text{m}^3}\\approx9420$ L.<br>" +
      "<b>Answer:</b> $3\\pi$ m$^3\\approx9420$ L."],
  ],
  questions: [
    ["Problem 1: Rectangular prism", "Find the volume of a rectangular prism $7\\times4\\times3$.", "$84$"],
    ["Problem 2: Cylinder", "Find the volume of a cylinder with radius $6$, height $5$.", "$180\\pi$"],
    ["Problem 3: Pyramid (height given)", "Square pyramid, base edge $9$, height $4$. Find volume.", "$108$"],
    ["Problem 4: Cone", "Cone with radius $4$, height $9$. Find volume.", "$48\\pi$"],
    ["Problem 5: Sphere from radius", "Find the volume of a sphere with radius $9$.", "$972\\pi$"],
    ["Problem 6: Sphere from diameter", "Find the volume of a sphere with diameter $8$.", "$\\dfrac{256\\pi}{3}$"],
    ["Problem 7: Cube", "Find the volume of a cube with edge $8$.", "$512$"],
    ["Problem 8: Cylinder", "Cylinder with radius $2$, height $10$. Find volume.", "$40\\pi$"],
    ["Problem 9: Cone", "Cone with radius $5$, height $12$. Find volume.", "$100\\pi$"],
    ["Problem 10: Pyramid — find $h$ first", "Square pyramid, base edge $10$, slant height $13$. Find the height, then the volume.", "$h=12$; $V=400$"],
    ["Problem 11: Composite solid", "A silo is a cylinder (radius $3$, height $8$) topped by a hemisphere of the same radius. Find the total volume.", "$90\\pi$"],
    ["Problem 12: Reverse problem", "A cone has radius $6$ and volume $96\\pi$. Find its height.", "$h=8$"],
    ["Problem 13: Concept", "A cone and a cylinder share the same base and height. What fraction of the cylinder's volume does the cone hold?", "$\\dfrac13$"],
    ["Problem 14: Word problem", "A cylindrical tank has diameter $6$ m and height $4$ m. Find its volume in m$^3$ (exact form), then estimate its capacity in liters.", "$36\\pi\\text{ m}^3\\approx113{,}100$ L"],
    ["Problem 15: Challenge", "A sphere is inscribed in a cube of edge length $10$ so that it touches the center of all six faces (the sphere's radius equals half the cube's edge). Find the exact volume <i>inside the cube but outside the sphere</i>.", "$1000-\\dfrac{500\\pi}{3}$"],
  ],
};
