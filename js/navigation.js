"use strict"

const navigation_item = Array.from(document.getElementsByClassName('navigation_item'));

navigation_item.forEach(dot => {
    dot.addEventListener('click', navigate);
})

//To scroll to the right section when clicking on navigation_item
function navigate(e){
    section = Number(e.target.dataset.section);
    return show_section();
}

const navigation_about_item = Array.from(document.getElementsByClassName('navigation_about_item'));

navigation_about_item.forEach(item => {
    item.addEventListener('click', about_navigate);
});

//To show the right sub section in section about when clicking on dot_about_items
function about_navigate(e){
    about_section = Number(e.target.dataset.section);
    return show_about_section();
}

const navigation_portfolio_item = Array.from(document.getElementsByClassName('navigation_portfolio_item'));

navigation_portfolio_item.forEach(item => {
    item.addEventListener('click', portfolio_modal_navigate);
});

//To show the right sub section in section about when clicking on dot_about_items
function portfolio_modal_navigate(e){
    portfolio_modal_section = Number(e.target.dataset.section);
    return show_portfolio_modal_section();
}