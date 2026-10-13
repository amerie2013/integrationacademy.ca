import { fig, sectorFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.5",
  title: "Arc Length and Sector Area",
  intro: "A central angle $\\theta$ claims the fraction $\\dfrac{\\theta}{360^\\circ}$ of an entire circle. Apply that fraction to the circle's circumference to get <b>arc length</b>, $\\ell=\\dfrac{\\theta}{360^\\circ}\\cdot2\\pi r$, or to the circle's area to get <b>sector area</b>, $A=\\dfrac{\\theta}{360^\\circ}\\cdot\\pi r^2$. A useful shortcut follows directly: since both formulas share the same fraction, $A=\\dfrac{1}{2}r\\ell$ — a sector's area is half its radius times its arc length, just like a triangle's area is half its base times its height. This worksheet leaves answers in terms of $\\pi$ when the numbers work out exactly, and uses the arc–area shortcut to solve for two unknowns at once.",
  examples: [
    ["Example 1: Arc length",
      "A circle has radius $9$ and central angle $60^\\circ$. Find the arc length.",
      fig(sectorFig("60°"), "The sector claims $\\tfrac{60}{360}=\\tfrac16$ of the full circle.") +
      "Identify the fraction of the circle: $\\dfrac{60^\\circ}{360^\\circ}=\\dfrac16$.<br>" +
      "Apply that fraction to the full circumference $2\\pi r$: $\\ell=\\dfrac16\\cdot2\\pi(9)=\\dfrac16(18\\pi)=3\\pi$.<br>" +
      "<b>Answer:</b> $3\\pi$."],

    ["Example 2: Sector area",
      "A circle has radius $12$ and central angle $90^\\circ$. Find the sector area.",
      "Identify the fraction of the circle: $\\dfrac{90^\\circ}{360^\\circ}=\\dfrac14$.<br>" +
      "Apply that fraction to the full area $\\pi r^2$: $A=\\dfrac14\\cdot\\pi(12)^2=\\dfrac14(144\\pi)=36\\pi$.<br>" +
      "<b>Answer:</b> $36\\pi$."],

    ["Example 3: Angle from arc length",
      "A circle has radius $8$ and arc length $4\\pi$. Find $\\theta$.",
      "Identify: this reverses the arc length formula — solve $\\ell=\\dfrac{\\theta}{360}\\cdot2\\pi r$ for $\\theta$ instead of $\\ell$.<br>" +
      "Set up the equation: $4\\pi=\\dfrac{\\theta}{360}\\cdot2\\pi(8)=\\dfrac{\\theta}{360}\\cdot16\\pi$.<br>" +
      "Solve: $\\dfrac{\\theta}{360}=\\dfrac{4\\pi}{16\\pi}=\\dfrac14$, so $\\theta=\\dfrac14(360^\\circ)=90^\\circ$.<br>" +
      "<b>Answer:</b> $90^\\circ$."],

    ["Example 4: Radius from sector area",
      "A sector has area $24\\pi$ and central angle $120^\\circ$. Find the radius.",
      "Identify: solve the sector area formula $A=\\dfrac{\\theta}{360}\\pi r^2$ for $r$ this time.<br>" +
      "Set up the equation: $24\\pi=\\dfrac{120}{360}\\pi r^2=\\dfrac13\\pi r^2$.<br>" +
      "Solve: $r^2=3(24)=72$, so $r=\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2$.<br>" +
      "<b>Answer:</b> $6\\sqrt2$."],

    ["Example 5: Pizza slice",
      "A pizza has radius $7$ in and a slice with central angle $45^\\circ$. Find the length of crust (arc) on the slice, and its area.",
      "Crust length: $\\ell=\\dfrac{45}{360}\\cdot2\\pi(7)=\\dfrac18(14\\pi)=\\dfrac{7\\pi}{4}$.<br>" +
      "Area: $A=\\dfrac{45}{360}\\cdot\\pi(7)^2=\\dfrac18(49\\pi)=\\dfrac{49\\pi}{8}$.<br>" +
      "<b>Answer:</b> crust $=\\dfrac{7\\pi}{4}$ in; area $=\\dfrac{49\\pi}{8}$ in$^2$."],

    ["Example 6: Arc length",
      "Radius $6$, angle $120^\\circ$. Find the arc length.",
      "Identify the fraction of the circle: $\\dfrac{120^\\circ}{360^\\circ}=\\dfrac13$. Full circumference: $2\\pi(6)=12\\pi$.<br>" +
      "Compute: $\\dfrac13\\cdot12\\pi=4\\pi$.<br>" +
      "<b>Answer:</b> $4\\pi$."],

    ["Example 7: Sector area",
      "Radius $10$, angle $72^\\circ$. Find the sector area.",
      "Identify the fraction of the circle: $\\dfrac{72^\\circ}{360^\\circ}=\\dfrac15$. Full area: $\\pi(10)^2=100\\pi$.<br>" +
      "Compute: $\\dfrac15\\cdot100\\pi=20\\pi$.<br>" +
      "<b>Answer:</b> $20\\pi$."],

    ["Example 8: Find the angle",
      "Radius $15$, arc length $5\\pi$. Find $\\theta$.",
      "Identify: solve the arc length formula for $\\theta$, using the full circumference $2\\pi(15)=30\\pi$.<br>" +
      "Set up and solve: $5\\pi=\\dfrac{\\theta}{360}\\cdot30\\pi \\Rightarrow \\dfrac{\\theta}{360}=\\dfrac{5\\pi}{30\\pi}=\\dfrac16 \\Rightarrow \\theta=60^\\circ$.<br>" +
      "<b>Answer:</b> $60^\\circ$."],

    ["Example 9: Find the radius",
      "Sector area $27\\pi$, angle $270^\\circ$. Find $r$.",
      "Identify: solve the sector area formula for $r$, using the given angle to get the fraction $\\dfrac{270}{360}=\\dfrac34$.<br>" +
      "Set up and solve: $27\\pi=\\dfrac34\\pi r^2 \\Rightarrow r^2=27\\cdot\\dfrac43=36 \\Rightarrow r=\\sqrt{36}=6$.<br>" +
      "<b>Answer:</b> $6$."],

    ["Example 10: Find both radius and angle from arc length and area",
      "A sector has arc length $6\\pi$ and area $27\\pi$. Find the radius and the central angle.",
      "Use the shortcut $A=\\dfrac12 r\\ell$:<br>" +
      "$27\\pi=\\dfrac12 r(6\\pi)=3\\pi r$<br>" +
      "$r=9$.<br>" +
      "Now find $\\theta$ from the arc length: $6\\pi=\\dfrac{\\theta}{360}\\cdot2\\pi(9)=\\dfrac{\\theta}{360}\\cdot18\\pi$<br>" +
      "$\\dfrac{\\theta}{360}=\\dfrac13 \\Rightarrow \\theta=120^\\circ$.<br>" +
      "<b>Answer:</b> $r=9$; $\\theta=120^\\circ$."],

    ["Example 11: Application — windshield wiper",
      "A windshield wiper blade is $24$ in long (pivoting at one end) and sweeps through an angle of $120^\\circ$. Find the area it cleans and the length of the arc traced by the tip.",
      "Area (sector): $A=\\dfrac{120}{360}\\cdot\\pi(24)^2=\\dfrac13(576\\pi)=192\\pi$ in$^2$.<br>" +
      "Arc length (tip's path): $\\ell=\\dfrac{120}{360}\\cdot2\\pi(24)=\\dfrac13(48\\pi)=16\\pi$ in.<br>" +
      "<b>Answer:</b> area $=192\\pi$ in$^2$; arc length $=16\\pi$ in."],
  ],
  questions: [
    ["Problem 1: Arc length", "Radius $4$, angle $90^\\circ$. Find the arc length.", "$2\\pi$"],
    ["Problem 2: Sector area", "Radius $8$, angle $45^\\circ$. Find the sector area.", "$8\\pi$"],
    ["Problem 3: Arc length", "Radius $10$, angle $180^\\circ$. Find the arc length.", "$10\\pi$"],
    ["Problem 4: Sector area", "Radius $6$, angle $60^\\circ$. Find the sector area.", "$6\\pi$"],
    ["Problem 5: Find angle", "Radius $9$, arc length $3\\pi$. Find $\\theta$.", "$60^\\circ$"],
    ["Problem 6: Find radius", "Sector area $12\\pi$, angle $90^\\circ$. Find $r$.", "$4\\sqrt3$"],
    ["Problem 7: Arc and area", "Radius $4$, angle $150^\\circ$. Find the arc length and sector area.", "Arc $\\dfrac{10\\pi}{3}$; area $\\dfrac{20\\pi}{3}$"],
    ["Problem 8: Arc length", "Radius $12$, angle $30^\\circ$. Find the arc length.", "$2\\pi$"],
    ["Problem 9: Sector area", "Radius $5$, angle $144^\\circ$. Find the sector area.", "$10\\pi$"],
    ["Problem 10: Find angle", "Radius $6$, arc length $2\\pi$. Find $\\theta$.", "$60^\\circ$"],
    ["Problem 11: Find radius", "Arc length $4\\pi$, angle $120^\\circ$. Find $r$.", "$r=6$"],
    ["Problem 12: Semicircle sector", "Radius $7$, angle $180^\\circ$. Find the sector area.", "$\\dfrac{49\\pi}{2}$"],
    ["Problem 13: Fraction of circle", "What fraction of a circle is a $40^\\circ$ sector?", "$\\dfrac{1}{9}$"],
    ["Problem 14: Challenge", "A sector has arc length $6\\pi$ and area $30\\pi$. Find the radius and the central angle.", "$r=10$; $\\theta=108^\\circ$"],
    ["Problem 15: Challenge", "A rotating sprinkler sprays water out to $15$ ft and rotates through $150^\\circ$. Find the area watered (leave in terms of $\\pi$, then approximate using $\\pi\\approx3.14$) and the arc length of the spray's edge (in terms of $\\pi$).", "Area $=93.75\\pi\\approx294$ ft$^2$; arc length $=12.5\\pi$ ft"],
  ],
};
