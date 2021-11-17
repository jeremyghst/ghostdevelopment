"use strict"

let section = 1;

//To move to the right section
function move_section(dir){
    switch(dir){
        case 'up':
            if(section === 1){
                section = 4;
            } else {
                section--;
            };
            break;
        case 'down':
            if(section === 4){
                section = 1;
            } else {
                section++;
            };
            break;
    }
    return show_section();
}

let about_section = 1;

//To move to the right subsection in section about
function move_about_dots(dir = null){

    switch(dir){
        case 'right':
            if(about_section !== 3){
                about_section++
            } else {
                about_section = 1;
            }
            break;
        case 'left':
            if(about_section !== 1){
                about_section--
            } else {
                about_section = 3;
            }
            break;
    }

    return show_about_section();
}

let portfolio_section = 1;

function move_portfolio_dots(dir = null){

    switch(dir){
        case 'right':
            if(portfolio_section !== 2){
                portfolio_section++
            } else {
                portfolio_section = 1;
            }
            break;
        case 'left':
            if(portfolio_section !== 1){
                portfolio_section--
            } else {
                portfolio_section = 2;
            }
            break;
    }

    return show_portfolio_section();
}