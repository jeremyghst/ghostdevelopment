import {Pokedex} from "/js/Pokedex.js";

const pokedex = new Pokedex;

const btn_prev = document.getElementById("btn_prev");
btn_prev.addEventListener("click", prevPage);

const btn_next = document.getElementById("btn_next");
btn_next.addEventListener("click", nextPage);

const btn_first = document.getElementById("btn_first");
btn_first.addEventListener("click", firstPage);

const btn_last = document.getElementById("btn_last");
btn_last.addEventListener("click", lastPage);



function setPokedex(){
    pokedex.getAll_pokemon();
    pokedex.setRecordsPerPage(5);
    pokedex.setCurrentPage(1);
}
setPokedex();

function firstPage(){
    pokedex.setCurrentPage(1);
    pokedex.display_pokemon(1);
}

function lastPage(){
    pokedex.setCurrentPage(pokedex.numPages());
    pokedex.display_pokemon(pokedex.numPages());
}

function prevPage()
{
    if (pokedex.current_page > 1) {
        pokedex.current_page--;
        pokedex.display_pokemon(pokedex.current_page);
    }
}

function nextPage()
{
    if (pokedex.current_page < pokedex.numPages()) {
        pokedex.current_page++;
        pokedex.display_pokemon(pokedex.current_page);
    }
}