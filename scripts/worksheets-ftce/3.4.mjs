const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.4",
  title: "Similar Triangles & Polygons",
  intro: "Similarity, scale factor, and the ratio relationships for perimeter and area — plus indirect measurement with proportions.",
  lesson: [
    ["Similarity", R`Similar figures have equal corresponding angles and proportional corresponding sides. Triangle similarity: <b>AA</b>, <b>SSS</b> (proportional sides), and <b>SAS</b> (proportional, with equal included angle).`],
    ["Scale factor", R`The ratio of corresponding sides is the scale factor $k$. Then the ratio of perimeters is $k$, and the ratio of <b>areas is $k^2$</b>.`],
    ["Applications", R`Set up a proportion of corresponding sides to find a missing length — the basis of indirect measurement (shadows, maps, similar right triangles).`],
  ],
  examples: [
    ["Example 1: Missing side", R`Triangles are similar: $3,4,5\sim 6,8,x$. Find $x$.`, R`Scale factor $2$: $x=10$.`],
    ["Example 2: Area ratio", R`Two similar figures have side ratio $3:6=1:2$. Find the area ratio.`, R`$k^2=(1:2)^2=1:4$.`],
    ["Example 3: Shadows", R`A $6$-ft person casts a $4$-ft shadow; a tree casts a $20$-ft shadow. Find the tree's height.`, R`$\dfrac{6}{4}=\dfrac{h}{20}\Rightarrow h=30$ ft.`],
    ["Example 4: Perimeter ratio", R`Similar polygons have side ratio $2:3$. Find the perimeter ratio.`, R`Equal to the side ratio: $2:3$.`],
    ["Example 5: Area to side", R`Two similar triangles have area ratio $9:16$. Find the side ratio.`, R`$\sqrt{9}:\sqrt{16}=3:4$.`],
  ],
  questions: [
    ["Problem 1", R`Similar: $2,3,4\sim 4,6,x$. Find $x$.`, R`$8$`],
    ["Problem 2", R`Scale factor $1:3$ gives area ratio?`, R`$1:9$`],
    ["Problem 3", R`The ratio of perimeters equals the ratio of ___.`, R`sides`],
    ["Problem 4", R`A $5$-ft person casts a $3$-ft shadow; a pole casts $12$ ft. Find the pole's height.`, R`$20$ ft`],
    ["Problem 5", R`Area ratio $4:25$ gives side ratio?`, R`$2:5$`],
    ["Problem 6", R`AA similarity requires how many pairs of equal angles?`, R`$2$`],
    ["Problem 7", R`Corresponding angles of similar figures are ___.`, R`equal`],
    ["Problem 8", R`Similar: $6,8,10\sim 9,12,x$. Find $x$.`, R`$15$`],
  ],
};
