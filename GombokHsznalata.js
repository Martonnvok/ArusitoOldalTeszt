import { megjelenitDiv, megjelenitTabla } from "./AdatokMegjelenitese.js";

/*Darabok növelése és csökkenése */
export function gombok(list) {
    const BALELEM = $(".bal");
    const JOBBELEM = $(".jobb");

    let db = 0;
    let darabokSzama = 0;

    JOBBELEM.each(function (index, elem) {
        $(elem).on("click", function () {
            darabokSzama++;
            list[index].darab++;
            db++;
            list[index].ar = list[index].alapar * list[index].darab;
            megjelenitDiv(list);
            gombok(list);
            console.log("Darabok száma:", db);
        });
    });

    BALELEM.each(function (index, elem) {
        $(elem).on("click", function () {
            darabokSzama--;
            list[index].darab--;
            db--;
            list[index].ar = list[index].alapar * list[index].darab;
            megjelenitDiv(list);
            gombok(list);
            console.log("Darabok száma:", darabokSzama);
        });
        /*Ellenőri hogy ne menjen túl 0-tól mínuszos irányba */
        if (list[index].darab <= 1) {
            list[index].darab = 1;
            list[index].ar = list[index].alapar;
        }
    });
}
/*Kosárhoz adás */
export function hozzaad(list) {
    const KOSAR = $(".kosar");
    const KOSARLAT = $(".szamol");

    let kosar = {};
    KOSAR.on("click", function () {
        let index = $("#index");
        kosar.push({
            nev: list[index].nev,
            darab: list[index].darab,
            ar: list[index].ar
        });
        megjelenitDiv(list);
        gombok(list);
    });
}

/*Felugró ablak */
export function felugroAblak(list) {
    const MEGNEZEM = $(".megnezem");
    MEGNEZEM.on("click", function(){
        let htmlkod =`
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
    console.log(htmlkod);
    let articleElem = $("article");
    articleElem.append(htmlkod);

    })
    
}
 
export function xKattintas(list) {
  const GOMBOK = $("button[id^='x']");
  GOMBOK.on("click", function() {
    const INDEX = parseInt(this.id.substring(1));
    const TABLA = megjelenitTabla(list);
    
      list.splice(INDEX, 1);
      $('#torol').html(TABLA);
      $('#torol').remove();
    
    
    
    xKattintas(list);
  });
}