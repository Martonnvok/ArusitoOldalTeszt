//A piaci rész felületet jeleníti meg
import { xKattintas } from "./GombokHsznalata.js";
export function megjelenitDiv(list) {
  const ARTICLE = $("article");
  const DIVTORLES = ARTICLE.find(".div");
  const MODALID = $("#myModal .modal-content");
  DIVTORLES.remove();

  

  let htmlkod = `<div class="semmi row bg-secondary p-3"> `;
  for (let index = 0; index < list.length; index++) {
    htmlkod += `
      <div class="text-bg-dark col-3 col-3 rounded-4 border border-warning">
        <p>Neve: ${list[index].nev}</p>
        <p>db: ${list[index].darab}</p>
        <p>Ár: ${list[index].ar}Ft</p>
        <p>Kép: <img class="img-fluid border border-warning" src="${list[index].kep}" alt="kep${index}"></p>
        <p><button class="jobb btn btn-primary ">+</button><button class="bal btn btn-primary">-</button></p>
        <p><button class="kosar btn btn-success btn-sm" id="id1${index}">Kosárba</button></p>
        <p><button type="button" class="btn btn-primary ">Mutat</button></p>
      </div>`
      ;
  }

  /*
  const KOSARAK = $(".class2");
  KOSARAK.on("click", function(event) {
    let id = event.target.id.substring(3);
    let bruh = `
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">${list[id].nev}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>${list[id].leiras}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezárás</button>
            </div>
          </div>
        </div>
      </div>
    `;
    MODALID.html(bruh);
  });
*/
  ARTICLE.html(htmlkod);
  
}


//Az admin, weblap elejét jeleníti meg

export function megjelenitTabla(adatok) {

  const ARTICLE = $("article");

  let htmlkod = `
    <div class="semmi">
      <table class="table" id="torol table table-dark table-striped rounded-4">
        <thead class="table-dark">
          <tr>
            <td class="table-dark">Neve</td>
            <td class="table-dark">db</td>
            <td class="table-dark">Ár</td>
            <td class="table-dark"></td>
          </tr>
        </thead>
        <tbody>
  `;
  for (let index = 0; index < adatok.length; index++) {
    htmlkod += `
          <tr>
            <td class="table-secondary">${adatok[index].nev}</td>
            <td class="table-light">${adatok[index].darab}</td>
            <td class="table-secondary">${adatok[index].ar}Ft</td>
            <td class="table-light"><button class="btn btn-danger" id="x${index}">X</button></td>
          </tr>
    `;
  }
  htmlkod += `
        </tbody>
      </table>
    </div>
  `;
  ARTICLE.html(htmlkod);

  xKattintas(adatok); // hívjuk meg az xKattintas függvényt a megfelelő paraméterekkel
}


//Navigáció, oldal linkek
export function nav() {
  const HEADER = $("header");
  let header = "";
  header += `<h1 class="text-warning">Oláh Pékség</h1>`;
  HEADER.append(header);
  const NAV = $("nav");
  let nav = "";
  nav +=
    `
        <nav class=" navbar navbar-expand-lg navbar-warning bg-warning rounded-end">
  <div class="semmi  container-fluid">
    <a class="navbar-brand " >Navigációk</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="semmi collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Főoldal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="admin.html">Admin felület</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  NAV.append(nav);
}

export function adminHozzaad() {
  const ASIDE = $("aside");
  let aside = `
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid semmi">
          <ul class="navbar-nav">
            <li class="nav-item">
              <label>Név:</label>
              <br>
              <input type="text" id="nev">
            </li>
            <li class="nav-item">  
              <label>Darab:</label>
              <br>
              <input type="text" id="darab">
            </li>
            <li class="nav-item">
              <label>Ár:</label>
              <br>
              <input type="text" id="ar">
            </li>
          </ul>
        </div>
      </nav>
    `;
  ASIDE.append(aside);
}


//hozzáadás gomb
export function hozzaAdas(adatok) {
  const ASIDE = $("aside");
  let aside = `
      <div class="semmi">
        <button class="kosar btn btn-success" id="b">Hozzáadás</button>
      </div>
    `;
  ASIDE.append(aside);

  $("#b").click(() => {
    let nev = $("#nev").val();
    let darab = $("#darab").val();
    let ar = $("#ar").val();
    adatok.push({ nev: nev, darab: darab, ar: ar });

    $("article").empty();
    megjelenitTabla(adatok);
  });
}

//kosár megjelenítése
export function kosarMegjelenit() {
  const ASIDE = $("aside");
  let aside = `
        <div class="semmi text-bg-dark col-3 col-3 rounded-4 border border-warning">
          <p>Kosár összes tartalma:</p>
          <p class="szamol">0</p>
        </div>
    `;
  ASIDE.append(aside);

  
}

