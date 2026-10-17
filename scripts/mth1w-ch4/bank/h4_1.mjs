// 4.1 Relations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.1 Relations";
const trip = (pts, ymax, xmax, ylabel = "distance (km)", xlabel = "time (min)", step = { x: 10, y: 2 }) => planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax }, segs: [{ pts }], xlabel, ylabel, step });

export const Q = [
  num(`The graph shows a cyclist's distance from home. What is her fastest speed during the trip, in km/h?`, 36, "Speeds: 0–20 min 9 km ÷ 1/3 h = 27 km/h; 30–40 min 6 km ÷ 1/6 h = 36 km/h; 40–55 min 3 km ÷ 0.25 h = 12 km/h.", trip([[0, 0], [20, 9], [30, 9], [40, 3], [55, 0]], 10, 60)),
  num(`For the same trip, what total distance did the cyclist ride (km)?`, 18, "9 out + 6 back + 3 back = 18 km.", trip([[0, 0], [20, 9], [30, 9], [40, 3], [55, 0]], 10, 60)),
  mc(`Which story matches the graph?`, "walks to a friend's, chats, walks partway home, then runs the rest", ["runs to a friend's, chats, walks home", "walks away, walks back, walks away again", "stands still, then runs away"], "Rise, flat, gentle fall, steep fall to 0.", trip([[0, 0], [15, 3], [35, 3], [50, 1.5], [55, 0]], 4, 60, "distance (km)", "time (min)", { x: 10, y: 1 })),
  num(`A water tank is filled at 25 L/min for 12 min, then drained at 40 L/min until empty. How many minutes does the whole process take?`, 19.5, "300 L in; 300 ÷ 40 = 7.5 min to drain; 12 + 7.5.", null, 0.001),
  ms(`Which situations produce a graph that goes DOWN as time increases? Select all.`, ["a candle burning", "a car's distance from home as it drives home", "money saved each week", "ice melting in the sun (mass of ice)", "a plant growing"], [0, 1, 3], "Height, distance from home and mass of ice decrease."),
  num(`A relation has (2, 11) and (6, 23) and grows at a constant rate. Interpolate y at x = 3.5.`, 15.5, "Rate 3; 11 + 1.5(3) = 15.5.", null, 0.001),
  num(`For the same relation, extrapolate y at x = 0.`, 5, "11 − 2(3) = 5."),
  tf(`If a distance–time graph has a vertical segment, the object moved some distance in zero time.`, true, "Which is impossible: real distance–time graphs never have vertical segments."),
  mc(`A graph of a person's distance from a wall has a segment going down to 0 and then up again. What happened?`, "the person walked to the wall, touched it, and walked away", ["the person stopped", "the person walked through the wall", "the person jumped"], "Distance 0 means at the wall."),
  num(`A swimmer's lap times (s) for laps 1–4 are 40, 42, 44, 46. If the pattern continues, how many seconds is the total time for 10 laps?`, 490, "Lap n takes 38 + 2n; sum for n = 1..10: 380 + 110 = 490."),
  ms(`Which relations are discrete? Select all.`, ["number of figures in a pattern vs figure number", "cost of n movie tickets", "height of a thrown ball vs time", "number of people vs number of pizzas needed", "temperature vs time"], [0, 1, 3], "Counts are discrete; time and height are continuous."),
  num(`Two runners start together. Ana runs at 5 m/s; Bo runs at 4 m/s but starts 30 m ahead. After how many seconds is Ana 20 m ahead of Bo?`, 50, "5t − (4t + 30) = 20 → t = 50."),
  mc(`A distance–time graph is a straight line through (0, 0) and (5, 2) (minutes, km). Which is true?`, "the speed is 24 km/h", ["the speed is 2.5 km/h", "the speed is 0.4 km/h", "the speed changes"], "2 km in 5 min = 0.4 km/min = 24 km/h."),
  num(`An elevator rises from floor 2 to floor 14 in 30 s, waits 10 s, then descends to floor 5 in 15 s. What is its descending speed in floors per second?`, 0.6, "9 floors in 15 s.", null, 0.001),
  num(`A car's distance from Toronto is 380 km at 1 p.m. and 140 km at 4 p.m., at a steady speed toward Toronto. At what time (24-h clock, as a decimal hour) will it arrive?`, 17.75, "80 km/h toward Toronto; 140 ÷ 80 = 1.75 h after 4 p.m. = 5:45 p.m. = 17.75.", null, 0.01),
  tf(`Extrapolating a child's height from ages 2–8 gives a reliable prediction at age 40.`, false, "Growth stops in adulthood: the pattern does not continue."),
  num(`The graph shows a phone's battery. Extrapolating the line, at what time (h) will it reach 0%?`, 12.5, "It falls 8% per hour from 100%: 100 ÷ 8 = 12.5.", planeDoc({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 110 }, segs: [{ pts: [[0, 100], [5, 60]] }], xlabel: "time (h)", ylabel: "battery (%)", step: { x: 2, y: 10 } }), 0.01),
  mc(`Which variable pair has the independent variable listed SECOND?`, "your mark on a test and the hours you studied", ["the number of hours worked and pay", "the radius and the area of a circle", "time and distance travelled"], "The mark depends on the hours studied, which is listed second."),
  num(`A pattern of tables seats 6 people at 1 table, 10 at 2, 14 at 3. How many tables are needed for 90 people?`, 22, "4n + 2 ≥ 90 → n ≥ 22."),
  num(`Sound travels about 343 m/s. You see lightning and hear thunder 4.5 s later. About how far away is the storm (m)? (Round to the nearest metre.)`, 1544, "343 × 4.5 = 1543.5 ≈ 1544.", null, 1),
];
