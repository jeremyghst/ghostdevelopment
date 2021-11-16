"use strict"

window.addEventListener('touchstart', swipe_start);
window.addEventListener('touchmove', swipe_move);

window.addEventListener('touchend', swipe_end);

let swipe_start_y;
let swipe_end_y;

function swipe_start(e){
    swipe_start_y = e.touches[0].clientY;  
    swipe_end_y = swipe_start_y;
    return swipe_start_y;
}

function swipe_move(e){
    swipe_end_y = e.touches[0].clientY;
    return swipe_end_y   
}

function swipe_end(){
    if(swipe_start_y !== swipe_end_y){
        if(swipe_start_y > swipe_end_y){
            move_section('down');
        } else {
            move_section('up');
        }
    }
}