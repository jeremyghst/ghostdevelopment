"use strict"

window.addEventListener("wheel", scroll_function);

//To scroll to the right direction
function scroll_function(){
    window.removeEventListener("wheel", scroll_function);
    setTimeout(function(){ 
        window.addEventListener("wheel", scroll_function);
    }, 200);


    if(event.deltaY < 0){
        move_section('up');
    } else {
        move_section('down');
    }
}