// 7.2 Suites géométriques — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";
import { TITLE } from "../l7_2.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const TOPIC = TITLE;
export const Q = [
  num(S`Une suite géométrique a \(t_3=50\) et \(t_6=-6250\). Trouve \(t_1\).`, 2, "r³ = −125 ⇒ r = −5; a = 50/25."),
  num(S`Une suite géométrique a \(t_2=24\) et \(t_5=3\). Trouve \(t_8\).`, 0.375, "r³ = ⅛ ⇒ r = ½; t₈ = 3 · ⅛.", null, 0.0001),
  num("Quel est le rang du premier terme de 3, 6, 12, … qui dépasse 1 000 000?", 20, "3 · 2ⁿ⁻¹ > 10⁶ ⇒ 2ⁿ⁻¹ > 333 333; 2¹⁹ = 524 288."),
  num(S`\(k\), \(k+4\) et \(k+16\) sont des termes consécutifs d'une suite géométrique. Trouve k.`, 2, "(k + 4)² = k(k + 16) ⇒ 8k + 16 = 16k; les termes sont 2, 6, 18."),
  num("Une suite géométrique a des termes positifs; le 3e terme est le quadruple du 1er et le 5e terme est 80. Trouve le 1er terme.", 5, "r² = 4 ⇒ r = 2; a · 16 = 80."),
  num("Insère trois nombres entre 7 et 567 pour former une suite géométrique à termes positifs. Quel est le nombre du milieu des cinq?", 63, "r⁴ = 81 ⇒ r = 3 : 7, 21, 63, …"),
  num("Un échantillon de 640 mg d'un médicament diminue de 25 % chaque heure. Après combien d'heures complètes en reste-t-il moins de 100 mg?", 7, "640(0.75)ⁿ < 100 ⇒ 0.75ⁿ < 0.156; 0.75⁶ = 0.178, 0.75⁷ = 0.133."),
  num("Une ville de 12 000 habitants croît de 3 % par année. Pendant quelle année dépasse-t-elle 15 000 habitants pour la première fois (année 1 = 12 000)?", 9, "12 000(1.03)ⁿ⁻¹ > 15 000 ⇒ 1.03ⁿ⁻¹ > 1.25; 1.03⁸ = 1.267."),
  tf("Si on élève au carré chaque terme d'une suite géométrique, on obtient une suite géométrique.", true, "La raison devient r²."),
  tf("Si on ajoute 5 à chaque terme d'une suite géométrique, on obtient une suite géométrique.", false, "1, 2, 4 → 6, 7, 9."),
  ms(S`Pour \(t_n=-3(2)^{n-1}\), quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["r = 2", "t₁ = −3", "tous les termes sont négatifs", "−192 est un terme", "les termes alternent de signe"], [0, 1, 2, 3], "−192 = −3 · 64 = t₇; r > 0, donc pas d'alternance."),
  mc("Quel terme les suites 2, 6, 18, … et 162, 54, 18, … ont-elles en commun?", "18", ["6", "54", "elles n'en ont aucun"], "Le t₃ des deux suites."),
  num("On coupe une bande de papier en deux, puis on coupe chaque morceau en deux, et ainsi de suite. Après combien de séries de coupes y a-t-il 4096 morceaux?", 12, "2ⁿ = 4096."),
  num(S`Le produit des trois premiers termes d'une suite géométrique est 1000 et \(t_1=2\). Trouve \(r\) (r > 0).`, 5, "t₂³ = 1000 ⇒ t₂ = 10."),
  num("Une balle qu'on laisse tomber de 25 m rebondit chaque fois à 80 % de sa hauteur. À quel rebond la hauteur est-elle inférieure à 5 m pour la première fois?", 8, "20(0.8)ⁿ⁻¹ < 5 ⇒ 0.8ⁿ⁻¹ < 0.25; 0.8⁶ = 0.262, 0.8⁷ = 0.210."),
  num("Le graphique montre une suite géométrique. Quel est le rang du terme 3125?", 6, "a = 1, r = 5 : 5⁵ = 3125.", dotsD(geo(1, 5, 4), { labels: true })),
  num("Le graphique montre une suite géométrique. Trouve t₁₀ (au dix-millième près).", rd(81 * (1 / 3) ** 9, 4), "a = 81, r = ⅓.", dotsD(geo(81, 1 / 3, 5).map((v) => rd(v, 3)), { labels: true }), 0.0001),
  num("Le graphique montre une suite géométrique alternée. Trouve t₇.", 1458, "a = 2, r = −3 : 2(−3)⁶.", dotsD(geo(2, -3, 5), { labels: true })),
  num("Le graphique montre la valeur d'un placement au début de chaque année. Quel est le taux de croissance annuel (en pourcentage)?", 8, "Raison 1.08.", dotsD(geo(1000, 1.08, 5).map((v) => rd(v, 2)), { labels: true, xlabel: "année", ylabel: "valeur" })),
  num(S`Les 2e et 3e termes d'une suite géométrique sont \(-6\) et \(-2\). Trouve le 1er terme.`, -18, "r = ⅓; a = −6 ÷ ⅓."),
];
