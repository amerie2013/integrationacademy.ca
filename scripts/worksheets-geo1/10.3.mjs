import { fig, cylinder3d, sphereFig, cone3d } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.3",
  title: "Density Problems",
  intro: "Density links geometry to real-world materials: $\\rho=\\dfrac{m}{V}$ (mass per unit volume), so $m=\\rho V$ and $V=\\dfrac{m}{\\rho}$ — the same three-way relationship as distance/rate/time. A separate but related idea, <b>population density</b>, is people per unit area: $D=\\dfrac{P}{A}$. Most density problems here are two-step: first use a volume formula from this unit to find $V$ (or $B\\cdot h$), <i>then</i> apply the density relationship. This worksheet also covers comparing densities (which object is denser, or would float in water, since water $\\approx1\\text{ g/cm}^3$), weighted-average density of composite objects, and unit conversions.",
  examples: [
    ["Example 1: Density from mass and volume",
      "A solid has mass $240$ g and volume $30$ cm$^3$. Find its density.",
      "Identify the formula: density is mass per unit volume, $\\rho=\\dfrac{m}{V}$.<br>" +
      "Compute: $\\rho=\\dfrac{240}{30}=8$.<br>" +
      "<b>Answer:</b> $8$ g/cm$^3$."],

    ["Example 2: Mass from density (cube)",
      "A cube of edge $4$ cm has density $2.5$ g/cm$^3$. Find its mass.",
      "First find the volume: $V=s^{3}=4^{3}=64$ cm$^3$.<br>" +
      "Then $m=\\rho V=2.5\\times64=160$ g.<br>" +
      "<b>Answer:</b> $160$ g."],

    ["Example 3: Volume from mass and density",
      "An object has mass $90$ g and density $3$ g/cm$^3$. Find its volume.",
      "Identify: rearrange $\\rho=\\dfrac{m}{V}$ to solve for volume instead of density: $V=\\dfrac{m}{\\rho}$.<br>" +
      "Compute: $V=\\dfrac{90}{3}=30$.<br>" +
      "<b>Answer:</b> $30$ cm$^3$."],

    ["Example 4: Cylinder — find volume, then density",
      "A metal cylinder has radius $3$ cm, height $5$ cm, and mass $450\\pi$ g. Find its density.",
      fig(cylinder3d("3", "5"), "Find the cylinder's volume first, then divide mass by volume.") +
      "<b>Step 1 — volume:</b> $V=\\pi r^{2}h=\\pi(9)(5)=45\\pi$ cm$^3$.<br>" +
      "<b>Step 2 — density:</b> $\\rho=\\dfrac{m}{V}=\\dfrac{450\\pi}{45\\pi}$. The $\\pi$ cancels: $\\rho=10$ g/cm$^3$.<br>" +
      "<b>Answer:</b> $10$ g/cm$^3$."],

    ["Example 5: Sphere — find volume, then density",
      "A metal ball bearing (sphere) has radius $3$ cm and mass $288\\pi$ g. Find its density.",
      fig(sphereFig("3"), "Sphere volume first, then $\\rho=m/V$.") +
      "<b>Step 1 — volume:</b> $V=\\dfrac43\\pi r^{3}=\\dfrac43\\pi(27)=36\\pi$ cm$^3$.<br>" +
      "<b>Step 2 — density:</b> $\\rho=\\dfrac{m}{V}=\\dfrac{288\\pi}{36\\pi}=8$ g/cm$^3$.<br>" +
      "<b>Answer:</b> $8$ g/cm$^3$."],

    ["Example 6: Does it float? (compare to water)",
      "A block has mass $540$ g and volume $600$ cm$^3$. Find its density and determine whether it floats in water (water has density $1$ g/cm$^3$).",
      "Compute the density: $\\rho=\\dfrac{540}{600}=0.9$ g/cm$^3$.<br>" +
      "Compare to water: since $0.9<1$, the block is less dense than water, so it <b>floats</b>.<br>" +
      "<b>Answer:</b> $\\rho=0.9$ g/cm$^3$; it floats."],

    ["Example 7: Population density",
      "A town of $48{,}000$ people covers $16$ km$^2$. Find the population density.",
      "Identify the formula: population density is people per unit area, $D=\\dfrac{P}{A}$.<br>" +
      "Compute: $D=\\dfrac{48{,}000}{16}=3000$.<br>" +
      "<b>Answer:</b> $3000$ people per km$^2$."],

    ["Example 8: Population from area and density",
      "A region has area $25$ mi$^2$ and population density $200$ people/mi$^2$. Find the population.",
      "Identify: rearrange $D=\\dfrac{P}{A}$ to solve for population instead of density: $P=D\\times A$.<br>" +
      "Compute: $P=200\\times25=5000$.<br>" +
      "<b>Answer:</b> $5000$ people."],

    ["Example 9: Area from population and density",
      "A city has population $9000$ and population density $300$ people/km$^2$. Find its area.",
      "Identify: rearrange $D=\\dfrac{P}{A}$ to solve for area instead: $A=\\dfrac{P}{D}$.<br>" +
      "Compute: $A=\\dfrac{9000}{300}=30$.<br>" +
      "<b>Answer:</b> $30$ km$^2$."],

    ["Example 10: Composite object — weighted-average density",
      "An object is cast from two materials fused together: Part 1 has volume $20$ cm$^3$ and density $8$ g/cm$^3$; Part 2 has volume $30$ cm$^3$ and density $3$ g/cm$^3$. Find the object's overall (average) density.",
      "<b>Step 1 — mass of each part:</b> $m_1=\\rho_1V_1=8(20)=160$ g; &nbsp; $m_2=\\rho_2V_2=3(30)=90$ g.<br>" +
      "<b>Step 2 — totals:</b> total mass $=160+90=250$ g; total volume $=20+30=50$ cm$^3$.<br>" +
      "<b>Step 3 — overall density:</b> $\\rho_{\\text{avg}}=\\dfrac{250}{50}=5$ g/cm$^3$.<br>" +
      "<i>Note:</i> the average density is <b>not</b> simply $\\dfrac{8+3}{2}=5.5$ — it must be weighted by volume, since the two parts don't have equal volume in general (here it happened close, but always compute total mass over total volume).<br>" +
      "<b>Answer:</b> $5$ g/cm$^3$."],

    ["Example 11: Unit conversion",
      "Aluminum has density $2.7$ g/cm$^3$. Convert this to kg/m$^3$.",
      "Convert the units piece by piece: $1$ g $=0.001$ kg, and $1$ m$^3=(100\\text{ cm})^{3}=1{,}000{,}000$ cm$^3$.<br>" +
      "$2.7\\ \\dfrac{\\text{g}}{\\text{cm}^{3}} \\times \\dfrac{0.001\\text{ kg}}{1\\text{ g}} \\times \\dfrac{1{,}000{,}000\\text{ cm}^3}{1\\text{ m}^3} = 2.7\\times1000 = 2700$ kg/m$^3$.<br>" +
      "<i>Shortcut:</i> $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$ always, so just multiply by $1000$.<br>" +
      "<b>Answer:</b> $2700$ kg/m$^3$."],
  ],
  questions: [
    ["Problem 1: Density", "Mass $150$ g, volume $25$ cm$^3$. Find density.", "$6$ g/cm$^3$"],
    ["Problem 2: Mass (cube)", "Cube edge $3$ cm, density $5$ g/cm$^3$. Find mass.", "$135$ g"],
    ["Problem 3: Volume", "Mass $72$ g, density $8$ g/cm$^3$. Find volume.", "$9$ cm$^3$"],
    ["Problem 4: Cylinder mass", "Cylinder radius $2$, height $7$, density $3$ g/cm$^3$. Find the volume, then the mass (leave $\\pi$).", "$V=28\\pi$; $m=84\\pi$ g"],
    ["Problem 5: Population density", "$12{,}000$ people on $8$ km$^2$. Find the population density.", "$1500$ people/km$^2$"],
    ["Problem 6: Population", "Density $400$ people/mi$^2$, area $15$ mi$^2$. Find the population.", "$6000$"],
    ["Problem 7: Sphere mass", "Sphere radius $2$ cm, density $6$ g/cm$^3$. Find the volume, then the mass (leave $\\pi$).", "$V=\\dfrac{32\\pi}{3}$; $m=64\\pi$ g"],
    ["Problem 8: Compare", "Object A: $40$ g in $8$ cm$^3$. Object B: $45$ g in $9$ cm$^3$. Which is denser?", "Neither — both are $5$ g/cm$^3$"],
    ["Problem 9: Cone mass", "Cone radius $3$, height $4$, density $2$ g/cm$^3$. Find the volume, then the mass (leave $\\pi$).", "$V=12\\pi$; $m=24\\pi$ g"],
    ["Problem 10: Area", "Population $9000$, density $300$ people/km$^2$. Find the area.", "$30$ km$^2$"],
    ["Problem 11: Density", "Mass $200$ g, volume $50$ cm$^3$. Find density.", "$4$ g/cm$^3$"],
    ["Problem 12: Prism density", "Rectangular prism $4\\times5\\times6$ cm, mass $360$ g. Find its density.", "$3$ g/cm$^3$"],
    ["Problem 13: Formula", "Rearrange $\\rho=\\dfrac{m}{V}$ to solve for $m$.", "$m=\\rho V$"],
    ["Problem 14: Float or sink?", "A wood block has mass $350$ g, volume $500$ cm$^3$. A metal block has mass $800$ g, volume $100$ cm$^3$. Find both densities and state which float(s) in water ($1$ g/cm$^3$).", "Wood: $0.7$ g/cm$^3$, floats; metal: $8$ g/cm$^3$, sinks"],
    ["Problem 15: Challenge", "A statue is cast from bronze (volume $500$ cm$^3$, density $8.9$ g/cm$^3$) fused to a gold-plated cap (volume $20$ cm$^3$, density $19.3$ g/cm$^3$). Find the total mass and the statue's overall density.", "Total mass $4836$ g; overall density $9.3$ g/cm$^3$"],
  ],
};
