"use strict"

window.addEventListener('touchstart', swipe_start);
window.addEventListener('touchmove', swipe_move);

window.addEventListener('touchend', swipe_end);

let swipe_start_y;
let swipe_start_x;

let swipe_end_y;
let swipe_end_x;

function swipe_start(e){
    swipe_start_y = e.touches[0].clientY;  
    swipe_start_x = e.touches[0].clientX;  

    swipe_end_y = swipe_start_y;
    swipe_end_x = swipe_start_x;
    return;
}

function swipe_move(e){
    swipe_end_y = e.touches[0].clientY;
    swipe_end_x = e.touches[0].clientX;

    return;   
}

function swipe_end(){
    if(Math.abs(swipe_start_y - swipe_end_y) > 25){
        if(swipe_start_y > swipe_end_y){
            move_section('down');
        } else {
            move_section('up');
        }
    } else if(section === 2 && swipe_start_x !== swipe_end_x){
        if(swipe_start_x > swipe_end_x){
            move_about_dots('right');
        } else {
            move_about_dots('left');
        }
    } else if(section === 3 && swipe_start_x !== swipe_end_x){
        if(swipe_start_x > swipe_end_x){
            move_portfolio_dots('right');
        } else {
            move_portfolio_dots('left');
        }
    }
}