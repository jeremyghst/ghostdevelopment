"use strict"

//To add right direction to key
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 32:
            if(section === 3){
                if(is_portfolio_loop){
                    pausePortfolioTimer();
                } else {
                    startPortfolioTimer();
                }
            }
            break;
        case 37:
            if(section === 2){
                move_about_dots('left');
            } else if (section === 3){
                if(full_screen){
                    setPortfolio(-1);
                } else {
                    move_portfolio_dots('left');
                }
            }
            break;
        case 38:
            move_section('up');
            break;
        case 39:
            if(section === 2){
                move_about_dots('right');
            } else if (section === 3){
                if(full_screen){
                    setPortfolio(1);
                } else {
                    move_portfolio_dots('right');
                }
            }
            break;
        case 40:
            move_section('down');
            break;
    }
});