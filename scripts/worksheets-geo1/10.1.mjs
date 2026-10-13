import { fig, cylinder3d, cone3d, sphereFig, box3d } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.1",
  title: "Surface Area",
  intro: "Surface area (SA) is the total area of every face of a 3D solid — the amount of material needed to wrap it completely. Prisms and cylinders use $SA=2B+Ph$ (or the equivalent $2(lw+lh+wh)$ for a box), pyramids and cones use a base plus <i>lateral</i> area built from the <b>slant height</b> $\\ell$ (not the vertical height), and $SA=4\\pi r^{2}$ for a sphere. Many real problems hide a Pythagorean-theorem step: the slant height of a cone or pyramid is rarely given outright — you often build it from the height and a base measurement first. This worksheet also covers composite solids (two shapes fused, with the shared seam excluded) and reverse problems where SA is known and a dimension is missing.",
  examples: [
    ["Example 1: Rectangular prism — full steps",
      "Find the surface area of a rectangular prism with length $8$, width $5$, and height $6$.",
      fig(box3d(), "A box has 3 pairs of congruent faces: top/bottom, front/back, left/right.") +
      "A box has three pairs of congruent rectangular faces, so $SA=2(lw+lh+wh)$.<br>" +
      "$lw=8(5)=40$, &nbsp; $lh=8(6)=48$, &nbsp; $wh=5(6)=30$.<br>" +
      "$SA=2(40+48+30)=2(118)=236$.<br>" +
      "<b>Answer:</b> $236$ square units."],

    ["Example 2: Cube",
      "Find the surface area of a cube with edge length $7$.",
      "A cube has $6$ congruent square faces, so $SA=6s^{2}$.<br>" +
      "$SA=6(7^{2})=6(49)=294$.<br>" +
      "<b>Answer:</b> $294$ square units."],

    ["Example 3: Cylinder — full steps",
      "Find the total surface area of a cylinder with radius $4$ and height $9$.",
      fig(cylinder3d("4", "9"), "Total SA = two circular bases + the lateral (curved) surface.") +
      "Two circles plus the curved lateral surface: $SA=2\\pi r^{2}+2\\pi rh=2\\pi r(r+h)$.<br>" +
      "$SA=2\\pi(4)(4+9)=2\\pi(4)(13)$<br>" +
      "$SA=104\\pi$.<br>" +
      "<b>Answer:</b> $104\\pi$ square units (exact form — leave $\\pi$ in the answer)."],

    ["Example 4: Square pyramid — slant height given",
      "A square pyramid has base edge $10$ and slant height $13$. Find its total surface area.",
      "Base area: $B=s^{2}=10^{2}=100$.<br>" +
      "Perimeter: $P=4s=40$.<br>" +
      "Lateral area (4 congruent triangles) $=\\dfrac12 P\\ell=\\dfrac12(40)(13)=260$.<br>" +
      "$SA=B+\\dfrac12P\\ell=100+260=360$.<br>" +
      "<b>Answer:</b> $360$ square units."],

    ["Example 5: Square pyramid — find the slant height first",
      "A square pyramid has base edge $10$ and (vertical) height $12$. Find its total surface area.",
      "The slant height $\\ell$ is <i>not</i> the height $h$ — it runs from the apex down the middle of a triangular face to the midpoint of a base edge. It is the hypotenuse of a right triangle with legs $h$ and half the base edge:<br>" +
      "$\\ell=\\sqrt{h^{2}+\\left(\\dfrac{s}{2}\\right)^{2}}=\\sqrt{12^{2}+5^{2}}=\\sqrt{144+25}=\\sqrt{169}=13$.<br>" +
      "Now use $\\ell=13$ exactly as in Example 4: $B=100$, $P=40$.<br>" +
      "$SA=100+\\dfrac12(40)(13)=100+260=360$.<br>" +
      "<b>Answer:</b> $360$ square units. (Same numbers as Example 4 — this shows how $h=12$ and $\\ell=13$ are connected.)"],

    ["Example 6: Cone — find the slant height first",
      "A cone has radius $5$ and height $12$. Find its total surface area.",
      fig(cone3d("5", "12"), "The slant height $\\ell$ is the hypotenuse of the right triangle formed by $r$ and $h$.") +
      "Find $\\ell$ using the Pythagorean Theorem: $\\ell=\\sqrt{r^{2}+h^{2}}=\\sqrt{25+144}=\\sqrt{169}=13$.<br>" +
      "$SA=\\pi r^{2}+\\pi r\\ell=\\pi(25)+\\pi(5)(13)=25\\pi+65\\pi$<br>" +
      "$SA=90\\pi$.<br>" +
      "<b>Answer:</b> $90\\pi$ square units."],

    ["Example 7: Sphere",
      "A sphere has diameter $18$. Find its surface area.",
      fig(sphereFig("9"), "Remember: the sphere formula uses the radius, not the diameter.") +
      "Radius: $r=\\dfrac{18}{2}=9$.<br>" +
      "$SA=4\\pi r^{2}=4\\pi(81)=324\\pi$.<br>" +
      "<b>Answer:</b> $324\\pi$ square units."],

    ["Example 8: Composite solid — silo (cylinder + hemisphere)",
      "A grain silo is a cylinder of radius $6$ and height $10$ topped by a hemispherical dome of the same radius. Find the total <i>outer</i> surface area (the silo sits on the ground, so ignore the bottom, and ignore the seam where the dome meets the cylinder).",
      fig(`<div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">${cylinder3d("6", "10")}<span style="font-size:22px;color:#334155;font-weight:700">+</span>${sphereFig("6")}</div>`,
        "Composite outer surface = cylinder's lateral area + hemisphere's curved area. No bottom circle, no flat seam circle (it's internal).") +
      "<b>Step 1 — cylinder's lateral (curved) surface only</b> (no top, no bottom, since the dome covers the top and the silo sits on the ground):<br>" +
      "$SA_{\\text{cyl, lateral}}=2\\pi rh=2\\pi(6)(10)=120\\pi$.<br>" +
      "<b>Step 2 — hemisphere's curved surface only</b> (half of a full sphere's SA, no flat circle since it's fused to the cylinder):<br>" +
      "$SA_{\\text{hemi}}=\\dfrac12(4\\pi r^{2})=2\\pi r^{2}=2\\pi(36)=72\\pi$.<br>" +
      "<b>Step 3 — add the pieces:</b> $SA_{\\text{total}}=120\\pi+72\\pi=192\\pi$.<br>" +
      "<b>Answer:</b> $192\\pi$ square units."],

    ["Example 9: Lateral SA vs. total SA",
      "A cylinder has radius $5$ and height $8$. (a) Find its lateral surface area. (b) Find its total surface area.",
      "<b>(a) Lateral SA</b> is just the curved side — no circles: $SA_{\\text{lat}}=2\\pi rh=2\\pi(5)(8)=80\\pi$.<br>" +
      "<b>(b) Total SA</b> adds both circular bases: $SA_{\\text{total}}=2\\pi rh+2\\pi r^{2}=80\\pi+2\\pi(25)=80\\pi+50\\pi=130\\pi$.<br>" +
      "<b>Answers:</b> lateral $=80\\pi$; total $=130\\pi$. <i>The difference, $50\\pi$, is exactly the area of the two circles.</i>"],

    ["Example 10: Reverse problem — solve for a missing dimension",
      "A rectangular prism has length $10$, width $6$, and total surface area $280$. Find its height.",
      "Set up the SA formula with $h$ unknown:<br>" +
      "$SA=2(lw+lh+wh)=2\\big(10(6)+10h+6h\\big)=2(60+16h)=120+32h$.<br>" +
      "Set equal to the given SA: $120+32h=280$<br>" +
      "$32h=160$<br>" +
      "$h=5$.<br>" +
      "<b>Check:</b> $2(60+50+30)=2(140)=280$. ✓<br>" +
      "<b>Answer:</b> $h=5$."],

    ["Example 11: Open-top tank (no lid)",
      "A cylindrical water tank with no lid has radius $3$ and height $10$. Find the surface area of material needed to build it (walls + bottom only).",
      "Only one circular base is needed (the bottom); the top is open:<br>" +
      "$SA=\\pi r^{2}+2\\pi rh=\\pi(9)+2\\pi(3)(10)=9\\pi+60\\pi$<br>" +
      "$SA=69\\pi$.<br>" +
      "<b>Answer:</b> $69\\pi$ square units. <i>Compare to a closed tank, which would need an extra $9\\pi$ for the lid.</i>"],
  ],
  questions: [
    ["Problem 1: Rectangular prism", "Find the SA of a rectangular prism with length $6$, width $4$, height $5$.", "$148$"],
    ["Problem 2: Cube", "Find the SA of a cube with edge $9$.", "$486$"],
    ["Problem 3: Cylinder", "Find the total SA of a cylinder with radius $5$, height $11$.", "$160\\pi$"],
    ["Problem 4: Pyramid (slant given)", "Square pyramid, base edge $8$, slant height $9$. Find total SA.", "$208$"],
    ["Problem 5: Cone (slant given)", "Cone with radius $9$, slant height $15$. Find total SA.", "$216\\pi$"],
    ["Problem 6: Sphere from radius", "Find the SA of a sphere with radius $7$.", "$196\\pi$"],
    ["Problem 7: Sphere from diameter", "Find the SA of a sphere with diameter $20$.", "$400\\pi$"],
    ["Problem 8: Cone — find $\\ell$ first", "Cone with radius $8$, height $6$. Find the slant height, then the total SA.", "$\\ell=10$; $SA=144\\pi$"],
    ["Problem 9: Pyramid — find $\\ell$ first", "Square pyramid, base edge $14$, height $24$. Find the slant height, then the total SA.", "$\\ell=25$; $SA=896$"],
    ["Problem 10: Composite silo", "A silo is a cylinder (radius $4$, height $9$) topped with a hemisphere of the same radius. Find the total outer SA (no bottom, no seam).", "$104\\pi$"],
    ["Problem 11: Reverse problem", "A rectangular prism has length $8$, width $5$, and SA $262$. Find its height.", "$h=7$"],
    ["Problem 12: Open-top cylinder", "An open-top cylindrical tank has radius $6$, height $12$. Find the SA of material needed (no lid).", "$180\\pi$"],
    ["Problem 13: Concept", "Explain why a square pyramid's total SA formula adds only <i>one</i> base area, while a prism's formula effectively adds two.", "A pyramid has a single base; a prism has two congruent parallel bases"],
    ["Problem 14: Word problem", "A silo (cylinder radius $5$, height $14$, topped by a hemisphere of the same radius) needs to be painted on the outside, excluding the bottom (in the ground). Find the area to be painted.", "$190\\pi$"],
    ["Problem 15: Challenge", "A cone and a cylinder share the same base radius $r$. The cylinder has height $h$ and the cone has slant height $\\ell$. If their total surface areas are equal, show that $\\ell=r+2h$.", "$2\\pi r(r+h)=\\pi r(r+\\ell)\\Rightarrow 2(r+h)=r+\\ell\\Rightarrow \\ell=r+2h$"],
  ],
};
