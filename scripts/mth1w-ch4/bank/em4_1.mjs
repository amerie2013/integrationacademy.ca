// 4.1 Relations — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const trip = (pts, ymax = 10, xmax = 60) => planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax }, segs: [{ pts }], xlabel: "time (min)", ylabel: "distance (km)", step: { x: 10, y: 2 } });

export const E = [
  mc(`The cost of a pizza depends on the number of toppings. Which is the dependent variable?`, "the cost", ["the number of toppings", "the size of the box", "neither"], "The cost responds to the toppings chosen."),
  mc(`Which axis shows the independent variable?`, "the horizontal axis", ["the vertical axis", "either axis", "neither axis"], "Independent: horizontal; dependent: vertical."),
  tf(`The number of students on a bus is a continuous variable.`, false, "Students are counted: discrete."),
  tf(`The temperature of an oven over time is continuous.`, true, "Temperature and time can take any value in between."),
  mc(`Which relation should be graphed as separate points?`, "cost of n movie tickets", ["height of a growing tree", "distance travelled by a car over time", "water in a filling tub"], "Tickets are counted (discrete)."),
  num(`A gym charges C = 30 + 12m dollars for m months. What is the cost for 5 months?`, 90, "30 + 60 = 90."),
  num(`A plant is 6 cm tall and grows 2 cm per week. How tall is it after 4 weeks (cm)?`, 14, "6 + 8 = 14."),
  mx(`A movie pass costs 8 dollars plus 11 dollars per movie. Write an expression for the cost of n movies.`, "8+11*n", "8 + 11n."),
  mc(`On a distance–time graph, a horizontal segment means…`, "the person is not moving", ["the person is moving fast", "the person is returning", "time has stopped"], "Distance does not change."),
  mc(`On a distance–time graph, a steeper segment means…`, "a faster speed", ["a slower speed", "no motion", "moving back toward the start"], "More distance in the same time."),
  num(`Read the graph: how far from home is the person at 20 min (km)?`, 8, "The line reaches 8 km at 20 min.", trip([[0, 0], [20, 8], [40, 8], [60, 0]])),
  num(`Using the same kind of graph: a person goes 8 km in 20 min. What is the speed in km/min?`, 0.4, "8 ÷ 20 = 0.4.", null, 0.001),
  tf(`Estimating a value between two data points is called extrapolation.`, false, "That is interpolation; extrapolation goes beyond the data."),
  mc(`Which is an example of extrapolation?`, "predicting next year's height from this year's data", ["estimating the height on a day between two measurements", "reading a value from a table", "plotting a point"], "Extrapolation predicts beyond the known data."),
  num(`A taxi charges C = 4 + 2d. What is the cost of a 7-km ride (dollars)?`, 18, "4 + 14 = 18."),
  mc(`A table lists x = 1, 2, 3 and y = 10, 20, 30. Which equation fits?`, "y = 10x", ["y = x + 10", "y = 10 + x²", "y = x ÷ 10"], "Each y is 10 times x."),
  tf(`In “the height of a candle depends on how long it burns,” time is the independent variable.`, true, "Time is controlled; height responds."),
  mc(`Which situation is a relation between two variables?`, "the cost of gas and the number of litres", ["the colour of a car", "a single test mark", "the name of a city"], "Two quantities that change together."),
  num(`Water fills a tank at 15 L/min starting from empty. How many litres after 8 minutes?`, 120, "15 × 8."),
  mc(`A graph of distance from home goes DOWN. The person is…`, "moving back toward home", ["moving away quickly", "standing still", "going uphill"], "Distance from home is decreasing."),
];

export const M = [
  num(`Describe the trip: what is the speed on the way back (km/min)?`, 0.4, "8 km in 20 min (40 to 60).", trip([[0, 0], [20, 8], [40, 8], [60, 0]]), 0.001),
  num(`How long does the person in the graph stay still (min)?`, 15, "Flat from 15 to 30 min.", trip([[0, 0], [15, 6], [30, 6], [50, 0]])),
  ms(`Which variables are continuous? Select all.`, ["time to run 100 m", "number of pets", "length of a fish", "goals in a game", "volume of rain"], [0, 2, 4], "Measurements are continuous; counts are discrete."),
  mx(`A pool has 2000 L and drains at 50 L/min. Write an expression for the volume after t minutes.`, "2000-50*t", "Start value minus rate × time."),
  num(`Using V = 2000 − 50t, after how many minutes is the pool empty?`, 40, "50t = 2000."),
  num(`A seedling is 4 cm on day 3 and 10 cm on day 9, growing steadily. Interpolate its height on day 6 (cm).`, 7, "1 cm per day: 4 + 3 = 7."),
  num(`For the same seedling, extrapolate its height on day 20 (cm).`, 21, "4 + 17 = 21 (less reliable)."),
  mc(`Which graph shape matches “walks slowly away, then runs back home”?`, "gentle rise, then steep fall to 0", ["steep rise, then gentle fall", "gentle rise, then flat", "steep fall, then steep rise"], "Slow away: gentle rise; fast back: steep fall."),
  tf(`A ball's height after being thrown is best graphed as separate points.`, false, "Time is continuous: draw a smooth curve."),
  num(`C = 25 + 0.15k for k kilometres. How many km give a cost of 40 dollars?`, 100, "0.15k = 15."),
  mc(`The cost of n concert tickets is graphed. Why not join the points?`, "fractions of a ticket cannot be bought", ["the line would be too steep", "tickets are continuous", "the graph would be curved"], "The relation is discrete."),
  num(`A runner goes from 600 m to 1500 m between t = 3 min and t = 6 min. What is the speed in m/min?`, 300, "900 ÷ 3."),
  ms(`Which statements about the graph are true? Select all.`, ["the person stops for 10 minutes", "the return trip is faster than the trip out", "the farthest distance is 6 km", "the whole trip takes 30 minutes"], [0, 1, 2], "Flat from 20 to 30 min (10 min); back in 10 min vs out in 20 min (faster); peak 6 km; the trip ends at 40 min, not 30.", trip([[0, 0], [20, 6], [30, 6], [40, 0]], 8, 45)),
  num(`A babysitter earns 12 dollars plus 15 dollars per hour. How much for 3.5 hours?`, 64.5, "12 + 52.5.", null, 0.001),
  mc(`In a relation between the side length of a square and its area, which is independent?`, "the side length", ["the area", "both", "neither"], "The area depends on the side."),
  num(`A train travels 240 km in 3 h at a constant speed. How far does it go in 1.25 h (km)?`, 100, "80 km/h × 1.25."),
  tf(`Interpolation is usually more reliable than extrapolation.`, true, "It stays within the known data."),
  mx(`A school orders T-shirts: 60 dollars for the design plus 9 dollars per shirt. Write an expression for s shirts.`, "60+9*s", "60 + 9s."),
  num(`From the expression 60 + 9s, how many shirts cost exactly 357 dollars?`, 33, "9s = 297."),
  mc(`The table shows hours 0, 1, 2, 3 and battery 100, 92, 84, 76 (%). Which statement is true?`, "the battery drops 8% each hour", ["the battery doubles each hour", "the battery is constant", "the battery rises 8% each hour"], "Each hour: −8."),
];
