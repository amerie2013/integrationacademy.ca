const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.8",
  title: "Volume & Surface Area of Solids",
  intro: "Volume and surface area of prisms, cylinders, pyramids, cones, and spheres — including the cone slant height.",
  lesson: [
    ["Prisms & cylinders", R`Volume $=$ base area $\times$ height. Cylinder $V=\pi r^2 h$, surface area $2\pi r^2+2\pi r h$. Rectangular prism $V=lwh$, $SA=2(lw+lh+wh)$.`],
    ["Pyramids & cones", R`Volume $=\tfrac13\cdot(\text{base area})\cdot h$. Cone $V=\tfrac13\pi r^2 h$; lateral area $\pi r\ell$; total surface area $\pi r^2+\pi r\ell$, where $\ell=\sqrt{r^2+h^2}$ is the slant height.`],
    ["Spheres", R`$V=\tfrac43\pi r^3$ and $SA=4\pi r^2$.`],
  ],
  examples: [
    ["Example 1: Cylinder", R`Find the volume of a cylinder with $r=3$, $h=10$.`, R`$\pi(3)^2(10)=90\pi$.`],
    ["Example 2: Rectangular prism", R`Find the volume of a $2\times3\times4$ box.`, R`$2\cdot3\cdot4=24$.`],
    ["Example 3: Cone", R`A cone has $r=3$, $h=4$. Find the slant height, volume, and lateral area.`, R`$\ell=\sqrt{9+16}=5$; $V=\tfrac13\pi(9)(4)=12\pi$; lateral $\pi(3)(5)=15\pi$.`],
    ["Example 4: Sphere", R`Find the volume and surface area of a sphere with $r=6$.`, R`$V=\tfrac43\pi(216)=288\pi$; $SA=4\pi(36)=144\pi$.`],
    ["Example 5: Cube", R`Find the volume and surface area of a cube with edge $5$.`, R`$V=125$; $SA=6(25)=150$.`],
  ],
  questions: [
    ["Problem 1", R`Volume of a cylinder with $r=2$, $h=5$?`, R`$20\pi$`],
    ["Problem 2", R`Volume of a $3\times4\times5$ box?`, R`$60$`],
    ["Problem 3", R`Volume of a cone with $r=6$, $h=10$?`, R`$120\pi$`],
    ["Problem 4", R`Volume of a sphere with $r=3$?`, R`$36\pi$`],
    ["Problem 5", R`Surface area of a cube with edge $4$?`, R`$96$`],
    ["Problem 6", R`Slant height of a cone with $r=6$, $h=8$?`, R`$10$`],
    ["Problem 7", R`Surface area of a sphere with $r=5$?`, R`$100\pi$`],
    ["Problem 8", R`Volume of a cube with edge $3$?`, R`$27$`],
  ],
};
