const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.3",
  title: "Triangles & Classification",
  intro: "The angle sum, classification by sides and angles, isosceles base angles, congruence criteria, and the triangle inequality.",
  lesson: [
    ["Angle sum", R`The interior angles of a triangle sum to $180^\circ$. An <b>exterior angle</b> equals the sum of its two remote interior angles.`],
    ["Classifying triangles", R`By sides: equilateral (3 equal), isosceles (2 equal), scalene (none equal). By angles: acute, right, obtuse. The <b>base angles</b> of an isosceles triangle are equal.`],
    ["Congruence & inequality", R`Congruence criteria: SSS, SAS, ASA, AAS, and HL (right triangles). The <b>triangle inequality</b>: each side is less than the sum of the other two; the longest side is opposite the largest angle.`],
  ],
  examples: [
    ["Example 1: Third angle", R`Two angles are $50^\circ$ and $60^\circ$. Find the third.`, R`$180-50-60=70^\circ$.`],
    ["Example 2: Isosceles base angles", R`An isosceles triangle has a vertex angle of $40^\circ$. Find each base angle.`, R`$\tfrac{180-40}{2}=70^\circ$.`],
    ["Example 3: Exterior angle", R`An exterior angle's remote interior angles are $30^\circ$ and $80^\circ$. Find it.`, R`$30+80=110^\circ$.`],
    ["Example 4: Right triangle test", R`Do sides $3,4,5$ form a right triangle?`, R`$3^2+4^2=9+16=25=5^2$: yes.`],
    ["Example 5: Triangle inequality", R`Can sides $2,3,6$ form a triangle?`, R`$2+3=5<6$: no.`],
  ],
  questions: [
    ["Problem 1", R`Third angle if two are $45^\circ,45^\circ$?`, R`$90^\circ$`],
    ["Problem 2", R`Each angle of an equilateral triangle?`, R`$60^\circ$`],
    ["Problem 3", R`Base angle of an isosceles triangle with vertex $100^\circ$?`, R`$40^\circ$`],
    ["Problem 4", R`Classify a triangle with a $90^\circ$ angle.`, R`right`],
    ["Problem 5", R`Exterior angle with remote interiors $40^\circ$ and $55^\circ$?`, R`$95^\circ$`],
    ["Problem 6", R`A triangle with sides $5,5,8$ is?`, R`isosceles`],
    ["Problem 7", R`Can $4,4,10$ form a triangle?`, R`no`],
    ["Problem 8", R`The longest side is opposite the ___ angle.`, R`largest`],
  ],
};
