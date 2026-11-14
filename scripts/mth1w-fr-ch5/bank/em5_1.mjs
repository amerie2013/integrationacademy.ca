// 5.1 La géométrie et la mesure à travers l'histoire — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rightTri } from "./fig.mjs";

export const E = [
  mc(`Le mot « géométrie » vient de mots grecs qui signifient…`, "mesure de la terre", ["dessin de formes", "comptage des étoiles", "fabrication d'angles"], "géo = terre, métrie = mesure."),
  num(`Une corde égyptienne compte 12 espaces égaux. Si un côté du triangle rectangle utilise 3 espaces et un autre en utilise 4, combien d'espaces y a-t-il sur le troisième côté ?`, 5, "12 − 3 − 4."),
  tf(`Le triangle 3-4-5 a un angle droit parce que $3^2+4^2=5^2$.`, true, "9 + 16 = 25."),
  mc(`Les mathématiciens babyloniens comptaient en base…`, "60", ["10", "2", "12"], "Base 60 (sexagésimale)."),
  num(`Combien de degrés y a-t-il dans un cercle complet (un héritage babylonien) ?`, 360, "6 × 60."),
  num(`Écris le nombre en base 60 1;15 (une unité et 15 soixantièmes) sous forme décimale.`, 1.25, "15/60 = 0.25."),
  mc(`π est le rapport entre…`, "la circonférence d'un cercle et son diamètre", ["l'aire d'un cercle et son rayon", "le diamètre d'un cercle et son rayon", "le rayon d'un cercle et sa circonférence"], "π = C ÷ d."),
  tf(`π peut s'écrire exactement sous la forme de la fraction 22/7.`, false, "22/7 n'est qu'une approximation; π est irrationnel."),
  mc(`Qui a estimé la circonférence de la Terre vers 240 av. J.-C. à l'aide d'ombres ?`, "Ératosthène", ["Archimède", "Pythagore", "Euclide"], "Il a comparé les ombres à Syène et à Alexandrie."),
  mc(`Archimède a estimé π en traçant…`, "des polygones à l'intérieur et à l'extérieur d'un cercle", ["des triangles sur une sphère", "des carrés sur une droite", "une spirale"], "Le cercle se trouve entre les deux polygones."),
  num(`Écris 22/7 sous forme décimale à 2 décimales près.`, 3.14, "22 ÷ 7 ≈ 3.1429.", null, 0.001),
  mc(`La coudée, une ancienne unité de longueur, était basée sur…`, "l'avant-bras (du coude au bout des doigts)", ["le pied", "un grain d'orge", "la vitesse de la lumière"], "Du coude au bout des doigts."),
  tf(`En utilisant des multiples de 3, 4 et 5, une corde comptant 24 espaces égaux peut former un angle droit.`, true, "6 + 8 + 10 = 24."),
  num(`Combien de minutes y a-t-il dans 2.5 heures ?`, 150, "2.5 × 60."),
  mc(`Aujourd'hui, le mètre est défini à l'aide de…`, "la vitesse de la lumière", ["le pied d'un roi", "le rayon exact de la Terre", "une règle d'une coudée"], "Depuis 1983 : la distance parcourue par la lumière en une fraction de seconde."),
  num(`Un nombre babylonien s'écrit 0;30. À quel nombre décimal correspond-il ?`, 0.5, "30/60."),
  tf(`Des mathématiciens indiens, chinois et babyloniens connaissaient la relation de Pythagore avant Pythagore.`, true, "Śulba Sūtras, Zhoubi Suanjing, Plimpton 322."),
  num(`L'angle d'Ératosthène était de 7.2°. Quelle fraction de 360° est-ce ? Donne le dénominateur de 1/n.`, 50, "360 ÷ 7.2 = 50."),
  mc(`Quelle valeur de π est la plus précise ?`, "355/113", ["22/7", "3", "256/81"], "355/113 ≈ 3.1415929."),
  num(`Si 1 coudée = 7 paumes, combien de paumes y a-t-il dans 4 coudées ?`, 28, "4 × 7."),
];

export const M = [
  num(`Convertis le nombre en base 60 2;24 en nombre décimal.`, 2.4, "24/60 = 0.4."),
  num(`Convertis le nombre en base 60 0;7,30 en nombre décimal.`, 0.125, "7/60 + 30/3600 = 0.1167 + 0.0083."),
  num(`Écris 3.2 heures comme 3 heures et un certain nombre de minutes (combien de minutes ?).`, 12, "0.2 × 60."),
  tf(`Un triangle de côtés 8, 15 et 17 est rectangle.`, true, "64 + 225 = 289 = 17²."),
  num(`Une corde à nœuds égaux forme un triangle rectangle dont les cathètes mesurent 9 et 12 espaces. Combien d'espaces l'hypoténuse mesure-t-elle ?`, 15, "√(81 + 144) = 15.", figDoc({ w: 260, items: rightTri(12, 9, { la: "12", lb: "9", lc: "?", fill: "amber" }) })),
  num(`Deux villes sont à 400 km l'une de l'autre, sur un axe nord–sud. L'angle du Soleil diffère de 3.6° entre elles. Estime la circonférence de la Terre (km).`, 40000, "3.6° représente 1/100 de 360° : 100 × 400."),
  num(`Avec la règle égyptienne (carré des 8/9 du diamètre), quelle aire obtient-on pour un cercle de 45 m de diamètre (m²) ?`, 1600, "8/9 × 45 = 40; 40² = 1600."),
  num(`La règle égyptienne prend comme aire d'un cercle le carré des 8/9 de son diamètre. Quelle valeur de π cette règle sous-entend-elle, à 2 décimales près ?`, 3.16, "256/81 ≈ 3.1605.", null, 0.006),
  mc(`Archimède a montré que 3 10/71 < π < 3 1/7. Combien de côtés ses polygones avaient-ils ?`, "96", ["6", "12", "360"], "Il a doublé de 6 à 12, 24, 48, 96."),
  num(`Un hexagone régulier à l'intérieur d'un cercle de diamètre 1 a un périmètre de 3. Quelle estimation de π donne-t-il ?`, 3, "Périmètre ÷ diamètre."),
  ms(`Lesquels sont des triplets de Pythagore ? Sélectionne toutes les bonnes réponses.`, ["5, 12, 13", "6, 8, 11", "7, 24, 25", "4, 5, 6"], [0, 2], "25 + 144 = 169; 49 + 576 = 625."),
  num(`Écris 355/113 sous forme décimale à 6 décimales près.`, 3.141593, "355 ÷ 113 = 3.14159292…", null, 0.0000006),
  num(`De combien de degrés l'aiguille des minutes d'une horloge tourne-t-elle en 10 minutes ?`, 60, "360 ÷ 60 = 6° par minute."),
  mc(`Pourquoi 60 et 360 sont-ils des bases pratiques pour les angles et le temps ?`, "ils ont beaucoup de facteurs", ["ils sont premiers", "ce sont des puissances de 10", "ils sont impairs"], "60 = 2·2·3·5 : divisible par 2, 3, 4, 5, 6, 10, 12, …"),
  num(`Aryabhata a donné π ≈ 62 832/20 000. Écris cette valeur sous forme décimale.`, 3.1416, "62 832 ÷ 20 000.", null, 0.00001),
  tf(`La méthode d'Ératosthène fonctionne parce que les rayons du Soleil qui atteignent la Terre sont presque parallèles.`, true, "Des rayons parallèles rendent l'angle de l'ombre égal à l'angle au centre."),
  num(`Le pourcentage d'erreur de 22/7 par rapport à π est d'environ combien de pour cent (2 décimales) ?`, 0.04, "(3.142857 − 3.141593)/3.141593 × 100 ≈ 0.04 %.", null, 0.005),
  num(`Si un stade mesure 185 m, combien de km font 250 000 stades ?`, 46250, "250 000 × 0.185 km."),
  mc(`Le texte chinois Zhoubi Suanjing décrit la règle du triangle rectangle comme la…`, "règle du gougu", ["règle de Plimpton", "règle de la corde", "règle d'or"], "Gou et gu sont les deux cathètes."),
  num(`Convertis 1;40 heure (base 60) en minutes.`, 100, "1 h + 40 min."),
];
