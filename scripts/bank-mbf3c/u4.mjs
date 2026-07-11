// MBF3C Unit 4 — Geometry & Trigonometry: question bank (60 per topic).
// 4.1 / 4.2 authored fresh. 4.3 reuses MCF3M "5.3" (Sine Law); 4.4 reuses MCF3M "5.4" (Cosine Law).
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";
import mcf3m5 from "../bank-mcf3m/u5.mjs";

const g5 = Object.fromEntries(mcf3m5.map((t) => [t.code, t.gen]));

// ── 4.1 Surface Area & Volume ────────────────────────────────
function g41() {
  const q = [];
  q.push(mc("easy", "Volume of a cylinder:", ["πr²h", "2πrh", "⅓πr²h", "4πr²"], 0));
  q.push(mc("easy", "Volume of a sphere:", ["⁴⁄₃πr³", "πr²h", "⅓πr²h", "4πr²"], 0));
  q.push(mc("easy", "Volume of a cube with side 3:", ["27", "9", "18", "81"], 0));
  q.push(mc("easy", "Volume of a cylinder with r=2, h=5:", ["20π", "10π", "40π", "7π"], 0));
  q.push(mc("easy", "Surface area of a sphere:", ["4πr²", "πr²", "2πr²", "⁴⁄₃πr³"], 0));
  q.push(mc("easy", "A cone's volume is what fraction of the matching cylinder's?", ["1/3", "1/2", "2/3", "equal"], 0));
  q.push(ms("easy", "A cylinder's volume needs:", ["the radius", "the height", "V=πr²h", "the slant height"], [0, 1, 2]));
  q.push(ms("easy", "Volume measures:", ["space inside", "in cubic units", "a 3-D amount", "material outside"], [0, 1, 2]));
  q.push(ms("easy", "Surface area measures:", ["the outside covering", "in square units", "the total of the faces", "space inside"], [0, 1, 2]));
  q.push(ms("easy", "Sphere formulas:", ["V=⁴⁄₃πr³", "SA=4πr²", "need only r", "need a height"], [0, 1, 2]));
  q.push(tf("easy", "A cone's volume is 1/3 of the matching cylinder's.", true));
  q.push(tf("easy", "Volume is measured in square units.", false));
  q.push(tf("easy", "A sphere needs only its radius to find its volume.", true));
  q.push(fill("easy", "Volume of a cube with side 4.", ["64"]));
  q.push(fill("easy", "Formula for a cylinder's volume.", ["πr²h", "pi r^2 h", "πr^2h"]));
  q.push(fill("easy", "Volume of a cylinder with r=1, h=10 (as a multiple of π).", ["10π", "10pi"]));
  q.push(num("easy", "Volume of a cube with side 5.", 125, 0));
  q.push(num("easy", "Volume of a cylinder r=2, h=3 — the coefficient of π.", 12, 0));
  q.push(num("easy", "Surface area of a sphere r=1 — the coefficient of π.", 4, 0));
  q.push(match("easy", "Match each solid to its volume formula.", ["cylinder", "sphere", "cone"], ["πr²h", "⁴⁄₃πr³", "⅓πr²h"], [0, 1, 2]));
  q.push(mc("medium", "Volume of a cylinder with r=5, h=12:", ["300π", "60π", "120π", "150π"], 0));
  q.push(mc("medium", "Surface area of a cylinder with r=5, h=12:", ["170π", "50π", "120π", "300π"], 0));
  q.push(mc("medium", "Slant height of a cone with r=6, h=8:", ["10", "14", "48", "7"], 0));
  q.push(mc("medium", "Volume of a sphere with r=3:", ["36π", "27π", "12π", "9π"], 0));
  q.push(mc("medium", "Volume of a silo: cylinder (r=3,h=10) + cone (r=3,h=4):", ["102π", "90π", "12π", "120π"], 0));
  q.push(mc("medium", "Volume of a cone with r=3, h=4:", ["12π", "36π", "9π", "4π"], 0));
  q.push(ms("medium", "A cone's surface area:", ["needs the slant ℓ", "ℓ=√(r²+h²)", "SA=πr²+πrℓ", "SA=2πrh"], [0, 1, 2]));
  q.push(ms("medium", "Composite solids:", ["split into known shapes", "find each volume", "add the pieces", "multiply them"], [0, 1, 2]));
  q.push(ms("medium", "For r=5, h=12:", ["V=300π", "SA=170π", "V=πr²h", "V=170π"], [0, 1, 2]));
  q.push(ms("medium", "Reverse problems:", ["set the formula equal to the given value", "solve for the dimension", "e.g. sphere V → r", "always add"], [0, 1, 2]));
  q.push(tf("medium", "The slant height of a cone with r=6, h=8 is 10.", true));
  q.push(tf("medium", "The volume of a sphere with r=3 is 36π.", true));
  q.push(tf("medium", "The surface area of a cylinder r=5, h=12 is 300π.", false));
  q.push(fill("medium", "Slant height of a cone with r=3, h=4.", ["5"]));
  q.push(fill("medium", "Volume of a sphere r=3 (multiple of π).", ["36π", "36pi"]));
  q.push(fill("medium", "Volume of a cylinder r=5, h=12 (multiple of π).", ["300π", "300pi"]));
  q.push(num("medium", "Slant height of a cone with r=6, h=8.", 10, 0));
  q.push(num("medium", "Volume of a sphere r=6 — the coefficient of π.", 288, 0));
  q.push(num("medium", "Volume of the silo (cyl r3,h10 + cone r3,h4) — coefficient of π.", 102, 0));
  q.push(match("medium", "Match each to its value.", ["cyl r5,h12 V", "cone r6,h8 slant", "sphere r3 V"], ["300π", "10", "36π"], [0, 1, 2]));
  q.push(mc("hard", "A sphere has volume 36π. Its radius is:", ["3", "6", "9", "27"], 0));
  q.push(mc("hard", "A cube has volume 125. Its side is:", ["5", "25", "15", "10"], 0));
  q.push(mc("hard", "Surface area of a cone with r=6, h=8:", ["96π", "36π", "60π", "100π"], 0));
  q.push(mc("hard", "Volume of a hemisphere with r=3:", ["18π", "36π", "9π", "27π"], 0));
  q.push(mc("hard", "A cylinder has V=100π and h=4. Its radius is:", ["5", "25", "10", "4"], 0));
  q.push(ms("hard", "Sphere reverse (V=36π):", ["⁴⁄₃πr³=36π", "r³=27", "r=3", "r=6"], [0, 1, 2]));
  q.push(ms("hard", "A hemisphere:", ["is half a sphere", "V=⅔πr³", "r=3 → 18π", "V=⁴⁄₃πr³"], [0, 1, 2]));
  q.push(ms("hard", "Cone SA with r=6, h=8:", ["ℓ=10", "πr²=36π", "πrℓ=60π", "SA=96π"], [0, 1, 2, 3]));
  q.push(ms("hard", "Finding a dimension:", ["substitute the knowns", "isolate the unknown", "take a root if needed", "never use roots"], [0, 1, 2]));
  q.push(tf("hard", "A sphere of volume 36π has radius 3.", true));
  q.push(tf("hard", "A hemisphere of radius 3 has volume 18π.", true));
  q.push(tf("hard", "A cube of volume 125 has side 25.", false));
  q.push(fill("hard", "Radius of a sphere with V=36π.", ["3"]));
  q.push(fill("hard", "Side of a cube with V=64.", ["4"]));
  q.push(fill("hard", "Surface area of a cone r=6, h=8 (multiple of π).", ["96π", "96pi"]));
  q.push(num("hard", "Radius of a sphere with V=36π.", 3, 0));
  q.push(num("hard", "Radius of a cylinder with V=100π, h=4.", 5, 0));
  q.push(num("hard", "Volume of a hemisphere r=3 — the coefficient of π.", 18, 0));
  q.push(order("hard", "Order the steps to find a cone's surface area (r=6, h=8).", ["Slant ℓ=√(36+64)=10", "Base πr²=36π", "Side πrℓ=60π", "SA=96π"]));
  q.push(match("hard", "Match each to its value.", ["sphere V=36π → r", "cube V=125 → side", "cone r6,h8 SA"], ["3", "5", "96π"], [0, 1, 2]));
  return q;
}

// ── 4.2 2-D Design & Optimization ────────────────────────────
function g42() {
  const q = [];
  q.push(mc("easy", "Area of a rectangle:", ["lw", "2l+2w", "l+w", "l²"], 0));
  q.push(mc("easy", "Perimeter of a rectangle:", ["2l+2w", "lw", "l+w", "4l"], 0));
  q.push(mc("easy", "Area of an 8×5 rectangle:", ["40", "26", "13", "45"], 0));
  q.push(mc("easy", "Perimeter of an 8×5 rectangle:", ["26", "40", "13", "18"], 0));
  q.push(mc("easy", "The most area for a fixed perimeter is a:", ["square", "long thin rectangle", "circle", "triangle"], 0));
  q.push(mc("easy", "Area of a square with side 6:", ["36", "24", "12", "30"], 0));
  q.push(ms("easy", "A rectangle:", ["A=lw", "P=2l+2w", "has two dimensions", "A=2l+2w"], [0, 1, 2]));
  q.push(ms("easy", "Optimization:", ["max area ↔ square", "for a fixed perimeter", "model A=x(...)", "max ↔ long rectangle"], [0, 1, 2]));
  q.push(ms("easy", "Composite area:", ["add the pieces", "subtract any holes", "split the figure", "always add"], [0, 1, 2]));
  q.push(ms("easy", "A net → surface area:", ["shows every face", "add the face areas", "box SA=2(lw+lh+wh)", "one face only"], [0, 1, 2]));
  q.push(tf("easy", "A square gives the most area for a fixed perimeter.", true));
  q.push(tf("easy", "Area is measured in linear units.", false));
  q.push(tf("easy", "The perimeter of a 12×5 rectangle is 34.", true));
  q.push(fill("easy", "Area of a 12×5 rectangle.", ["60"]));
  q.push(fill("easy", "Perimeter of a 12×5 rectangle.", ["34"]));
  q.push(fill("easy", "Area of a square with side 7.", ["49"]));
  q.push(num("easy", "Area of an 8×5 rectangle.", 40, 0));
  q.push(num("easy", "Perimeter of an 8×5 rectangle.", 26, 0));
  q.push(num("easy", "Area of a square with side 9.", 81, 0));
  q.push(match("easy", "Match each to its value.", ["A of 8×5", "P of 8×5", "A of a square side 6"], ["40", "26", "36"], [0, 1, 2]));
  q.push(mc("medium", "With 40 m of fencing, the maximum-area rectangle is:", ["10×10 = 100", "20×20", "5×15 = 75", "8×12"], 0));
  q.push(mc("medium", "Area 36 m², least perimeter (whole numbers):", ["6×6", "1×36", "4×9", "2×18"], 0));
  q.push(mc("medium", "Grass area: a 10×6 yard minus a pond of r=2:", ["60−4π", "60", "60−2π", "40"], 0));
  q.push(mc("medium", "Surface area of a closed 4×3×2 box:", ["52", "24", "26", "100"], 0));
  q.push(mc("medium", "Maximum area with 60 m of fencing:", ["225", "100", "200", "400"], 0));
  q.push(mc("medium", "Area of an L-shape: a 6×4 plus a 3×2 rectangle:", ["30", "24", "18", "36"], 0));
  q.push(ms("medium", "A fencing problem:", ["one side is x", "the other is 20−x", "A=x(20−x)", "A=x·40"], [0, 1, 2]));
  q.push(ms("medium", "Least perimeter for a fixed area:", ["compare factor pairs", "the square is best", "6×6 for area 36", "1×36 is best"], [0, 1, 2]));
  q.push(ms("medium", "Composite with a hole:", ["the yard's area", "minus the pond's area", "60−4π", "60+4π"], [0, 1, 2]));
  q.push(ms("medium", "Box surface area:", ["2(lw+lh+wh)", "three pairs of faces", "4×3×2 → 52", "= 24"], [0, 1, 2]));
  q.push(tf("medium", "With 40 m of fence the maximum-area rectangle is 10×10.", true));
  q.push(tf("medium", "The surface area of a closed 4×3×2 box is 52.", true));
  q.push(tf("medium", "The least-perimeter rectangle of area 36 is 1×36.", false));
  q.push(fill("medium", "Maximum area with 40 m of fencing.", ["100"]));
  q.push(fill("medium", "Surface area of a closed 4×3×2 box.", ["52"]));
  q.push(fill("medium", "Grass area of a 10×6 yard minus a pond r=2.", ["60−4π", "60-4π", "60-4pi"]));
  q.push(num("medium", "Maximum area with 40 m of fencing.", 100, 0));
  q.push(num("medium", "Surface area of a 5×4×3 box.", 94, 0));
  q.push(num("medium", "Maximum area with 60 m of fencing.", 225, 0));
  q.push(match("medium", "Match each to its answer.", ["40 m fence: max area", "area 36: min-P shape", "box 4×3×2 SA"], ["100", "6×6", "52"], [0, 1, 2]));
  q.push(mc("hard", "Maximum area with 100 m of fencing:", ["625", "2500", "400", "1000"], 0));
  q.push(mc("hard", "A 3-sided pen (against a wall) with 20 m of fence has max area:", ["50", "100", "25", "40"], 0));
  q.push(mc("hard", "Surface area of a cube with side 4:", ["96", "64", "16", "48"], 0));
  q.push(mc("hard", "Area 24 m², least-perimeter whole-number rectangle:", ["4×6", "1×24", "2×12", "3×8"], 0));
  q.push(mc("hard", "A 10×8 rectangle with a 4×3 piece removed has area:", ["68", "80", "12", "58"], 0));
  q.push(ms("hard", "3-sided optimization:", ["only 3 sides are fenced", "A=x(20−2x)", "max at x=5", "A=x(20−x)"], [0, 1, 2]));
  q.push(ms("hard", "Max area for fixed perimeter:", ["the vertex of A=x(p−x)", "at x=p/2", "a square", "at x=0"], [0, 1, 2]));
  q.push(ms("hard", "Composite by subtraction:", ["the big area", "minus the removed part", "10×8−4×3=68", "add them"], [0, 1, 2]));
  q.push(ms("hard", "Cube surface area:", ["6 equal faces", "6s²", "side 4 → 96", "= s³"], [0, 1, 2]));
  q.push(tf("hard", "A 3-sided pen with 20 m of fence maximizes at width 5, length 10.", true));
  q.push(tf("hard", "The surface area of a cube with side 4 is 96.", true));
  q.push(tf("hard", "100 m of fencing gives a maximum area of 2500 m².", false));
  q.push(fill("hard", "Maximum area with 100 m of fencing.", ["625"]));
  q.push(fill("hard", "Maximum area of a 3-sided pen with 20 m of fence.", ["50"]));
  q.push(fill("hard", "Surface area of a cube with side 4.", ["96"]));
  q.push(num("hard", "Maximum area with 100 m of fencing.", 625, 0));
  q.push(num("hard", "Maximum area of a 3-sided pen with 20 m of fence.", 50, 0));
  q.push(num("hard", "Surface area of a cube with side 4.", 96, 0));
  q.push(order("hard", "Order the steps to maximize a 3-sided pen with 20 m of fence.", ["Let the width be x, length 20−2x", "Area A=x(20−2x)", "Maximum at x=5", "A=5×10=50"]));
  q.push(match("hard", "Match each to its answer.", ["100 m fence: max area", "cube side 4: SA", "area 24: min-P shape"], ["625", "96", "4×6"], [0, 1, 2]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g5["5.3"] }, // Sine Law (reused from MCF3M)
  { code: "4.4", gen: g5["5.4"] }, // Cosine Law (reused from MCF3M)
];
