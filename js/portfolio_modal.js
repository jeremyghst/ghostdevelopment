"use strict"
peekaboo.addEventListener('click', toggle_portfolio_modal);

const portfolio_modal = document.getElementById('portfolio_modal');
function toggle_portfolio_modal(){
    if(portfolio_modal.classList.contains('visible')){
        portfolio_modal.classList.toggle('visible');
    }

    if(portfolio_modal.classList.contains('visible')){
        portfolio_modal.classList.remove('visible');
    }
    setTimeout(() => {
        if(portfolio_modal.classList.contains('visible')){
            portfolio_modal.classList.add('visible');
        }
    }, 1000)
}

function close_portfolio_modal(){
    if(portfolio_modal.classList.contains('visible')){
        portfolio_modal.classList.remove('visible');
    }
}

function remove_peekaboo(){
    if (peekaboo.classList.contains('boo')){
        peekaboo.classList.remove('boo');
    }
}