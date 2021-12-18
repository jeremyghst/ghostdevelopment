"use strict"

const home_elements = Array.from(document.getElementsByClassName('home'));

function head_header(){
    if(section !== 1){
        home_elements.forEach(element => {
            element.classList.remove('home');
        })
    } else {
        home_elements.forEach(element => {
            element.classList.add('home');
        })
    }
}