/*ADMIN RÉSZ*/
/*Ide kerülnek majd a további javascript fájlok meghívása*/
import { megjelenitTabla, nav, hozzaAdas, adminHozzaad } from "./AdatokMegjelenitese.js";
import { gombok, hozzaad, xKattintas } from "./GombokHsznalata.js";
window.addEventListener('load', init)
function init() {
  const PEKARUK = [{ nev: "Kakaóscsiga", darab: 1, ar: 350, alapar: 350 }, { nev: "Zsemle", darab: 1, ar: 90, alapar: 90 }, { nev: "Kifli", darab: 1, ar: 120, alapar: 120 }, { nev: "Redbull", darab: 1, ar: 350, alapar: 350 }, { nev: "Csokis tej", darab: 1, ar: 220, alapar: 220 }];

  
  /*Tábla */
  megjelenitTabla(PEKARUK);
  gombok(PEKARUK);
  xKattintas(PEKARUK);
  /*hozzaad(PEKARUK);*/ 

  /*Szerkesztés */
  nav();
  adminHozzaad();
  hozzaAdas(PEKARUK);
}