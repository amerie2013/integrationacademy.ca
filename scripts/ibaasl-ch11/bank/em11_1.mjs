// 11.1 Distance, Volume and Surface Area in 3D — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, prism, cylinder, cone, pyramid, sphere, cuboidDiag } from "../figs11.mjs";

const S = String.raw;
const d1 = (v) => Math.round(v * 10) / 10;

export const E = [
  num(S`Find the distance between $(0,0,0)$ and $(1,2,2)$.`, 3, "√(1 + 4 + 4)."),
  num(S`Find the distance between $(1,1,1)$ and $(3,4,7)$.`, 7, "√(4 + 9 + 36)."),
  mc(S`The midpoint of $(2,4,6)$ and $(8,0,-2)$ is:`, S`$(5,2,2)$`, [S`$(6,-4,-8)$`, S`$(10,4,4)$`, S`$(3,2,4)$`], "Average each coordinate."),
  num(S`Find the volume of a cuboid 3 × 5 × 8.`, 120, "lwh."),
  num(S`Find the surface area of a cube of side 5.`, 150, "6s²."),
  mc("The volume of a cylinder is:", S`$\pi r^2h$`, [S`$2\pi rh$`, S`$\frac13\pi r^2h$`, S`$\pi r^2+2\pi rh$`], "Base area × height."),
  mc("The volume of a pyramid is:", S`$\frac13\times$ base area $\times$ height`, ["base area × height", S`$\frac12\times$ base area $\times$ height`, S`$\frac43\times$ base area $\times$ height`], "One third of the prism."),
  mc("The curved surface area of a cone is:", S`$\pi rl$`, [S`$\pi r^2$`, S`$2\pi rl$`, S`$\pi rh$`], "l is the slant height."),
  num(S`Find the volume of a cylinder with radius 2 and height 5 as a multiple of $\pi$: k = ?`, 20, "π(4)(5)."),
  num(S`Find the surface area of a sphere of radius 5 as a multiple of $\pi$: k = ?`, 100, "4π(25)."),
  num(S`Find the slant height of a cone with radius 9 and height 12.`, 15, "√(81 + 144)."),
  num(S`A square pyramid has base 6 and height 5. Find its volume.`, 60, "⅓ × 36 × 5."),
  tf("A hemisphere's total surface area is 3πr².", true, "2πr² curved + πr² base."),
  tf("The volume of a cone is half the volume of the cylinder with the same base and height.", false, "It is one third."),
  fill("The longest straight line inside a cuboid is called the space ___.", ["diagonal", "Diagonal"], "Corner to opposite corner."),
  ms("Which have volume formula ⅓ × base area × height? Select all.", ["cone", "square pyramid", "cylinder", "triangular pyramid"], [0, 1, 3], "Cylinders are prisms."),
  mc("The solid shown has volume:", "105", ["71", "142", "35"], "7 × 3 × 5.", figDoc({ items: prism(7, 3, 5) })),
  mc("For the cylinder shown, the volume is:", S`$45\pi$`, [S`$30\pi$`, S`$15\pi$`, S`$90\pi$`], "π(9)(5).", figDoc({ items: cylinder(3, 5, { lr: "r = 3", lh: "5" }) })),
  num(S`Find the distance from $(2,0,0)$ to $(0,0,2)$ (2 d.p.).`, 2.83, "√8.", null, 0.01),
  num(S`The midpoint of AB is $(1,1,1)$ and $A=(0,0,0)$. Find the z-coordinate of B.`, 2, "Double the midpoint."),
];

export const M = [
  num(S`Find the distance between $(-1,3,2)$ and $(5,-3,-5)$.`, 11, "√(36 + 36 + 49)."),
  num(S`The midpoint of $(a,4,-1)$ and $(7,0,9)$ is $(3,2,4)$. Find $a$.`, -1, "(a + 7)/2 = 3."),
  num(S`Find the volume of a cone with radius 6 and height 10 as a multiple of $\pi$: k = ?`, 120, "⅓π(36)(10)."),
  num(S`Find the total surface area of a cone with radius 5 and height 12 as a multiple of $\pi$: k = ?`, 90, "25π + π(5)(13)."),
  num(S`A sphere has surface area $144\pi$. Find its radius.`, 6, "4r² = 144."),
  num(S`A sphere has volume $\frac{500}{3}\pi$. Find its radius.`, 5, "r³ = 125."),
  num(S`A cylinder has volume $300\pi$ and height 12. Find its radius.`, 5, "r² = 25."),
  num(S`A square pyramid has volume 147 and height 9. Find its base side.`, 7, "b² = 49."),
  num(S`Find the space diagonal of a cuboid 2 × 10 × 11.`, 15, "√(4 + 100 + 121)."),
  num(S`Find the total surface area of a hemisphere of radius 4 (1 d.p.).`, d1(48 * Math.PI), "3π(16).", null, 0.1),
  num(S`Find the volume of a hemisphere of radius 3 as a multiple of $\pi$: k = ?`, 18, "⅔π(27)."),
  mc("A square pyramid has base 18 and height 12. The height of each triangular face is:", "15", ["12", "√468", "21"], "√(9² + 12²)."),
  num(S`Find the total surface area of a square pyramid with base 18 and height 12.`, 864, "324 + 4 × ½ × 18 × 15."),
  mc("Doubling the radius of a sphere multiplies its volume by:", "8", ["2", "4", "6"], "r³."),
  tf("Doubling the radius of a cylinder (same height) multiplies its curved surface area by 2.", true, "2πrh is linear in r."),
  mc("The cone shown has volume:", S`$12\pi$`, [S`$36\pi$`, S`$15\pi$`, S`$20\pi$`], "⅓π(9)(4).", figDoc({ items: cone(3, 4, { lr: "r = 3", lh: "h = 4", ls: "5" }) })),
  mc("The space diagonal of the cuboid shown is:", "13", ["12", "√153", "17"], "√(12² + 4² + 3²).", figDoc({ items: cuboidDiag(12, 4, 3) })),
  ms("A cylinder has radius 3 and height 8. Which are correct? Select all.", [S`$V=72\pi$`, S`curved area $48\pi$`, S`total area $66\pi$`, S`$V=24\pi$`], [0, 1, 2], "18π + 48π."),
  num(S`Find $k$ if the distance from $(0,k,0)$ to $(3,0,4)$ is 13 ($k>0$).`, 12, "9 + k² + 16 = 169."),
  num(S`A cube has surface area 96. Find its volume.`, 64, "s = 4."),
];
