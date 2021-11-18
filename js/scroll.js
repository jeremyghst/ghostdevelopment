"use strict"

window.addEventListener("wheel", scroll_function);

//To scroll to the right direction
function scroll_function(){
    window.removeEventListener("wheel", scroll_function);
    setTimeout(function(){ 
        window.addEventListener("wheel", scroll_function);
    }, 200);

    if(!full_screen){
        if(event.deltaY !== 0){
            if(event.deltaY < 0){
                move_section('up');
            } else {
                move_section('down');
            }
        } else if (section === 2 && event.deltaX !== 0){
            if(event.deltaX < 0){
                move_about_dots('right');
            } else {
                move_about_dots('left');
            }
        } else if (section === 3 && event.deltaX !== 0){
            if(event.deltaX < 0){
                move_portfolio_dots('right');
            } else {
                move_portfolio_dots('left');
            }
        }
    }
}