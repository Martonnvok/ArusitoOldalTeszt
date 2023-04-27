/*FELHASZNÁLÓI RÉSZ*/ 
/*Ide kerülnek majd a további javascript fájlok meghívása*/ 
import { megjelenitDiv, nav, kosarMegjelenit } from "./AdatokMegjelenitese.js";
import {gombok, hozzaad, felugroAblak  } from "./GombokHsznalata.js";
window.addEventListener('load', init)
function init() {
  const PEKARUK = [{ nev: "Kakaóscsiga", darab: 1, ar: 350, alapar:350, kep: "kepek/csiga.jpeg"}, { nev: "Zsemle", darab: 1, ar: 90, alapar:90, kep: "kepek/zsemle.jpg" }, { nev: "Kifli", darab: 1, ar: 120, alapar:120, kep: "kepek/kifli.jpg" }, { nev: "Redbull", darab: 1, ar: 350, alapar:350, kep: "kepek/redbull.png" }, { nev: "Csokis tej", darab: 1, ar: 220, alapar:220, kep: "kepek/csokis.jpg" }];

  /*Megjelenít*/ 
  kosarMegjelenit();
  megjelenitDiv(PEKARUK);
  nav();
  /*Gombok */
  gombok(PEKARUK);
  hozzaad(PEKARUK);
  felugroAblak(PEKARUK);
  
 
}