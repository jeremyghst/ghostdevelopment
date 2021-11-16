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

const dot_about_items = Array.from(document.getElementsByClassName('dot_about_item'));

dot_about_items.forEach(dot => {
    dot.addEventListener('click', about_navigate);
});

//To show the right sub section in section about when clicking on dot_about_items
function about_navigate(e){
    about_section = Number(e.target.dataset.section);
    return show_about_section();
}