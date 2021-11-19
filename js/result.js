"use strict"
//To show the right section
function show_section(){
    const articles = Array.from(document.getElementsByClassName('article'));
    const article = document.getElementById("article_" + section);

    articles.forEach(article => {
        article.classList.remove('selected');
    });

    article.classList.add('selected');

    article.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });

    //To highlight the right list_item in #header_nav
    highlight_navigation();
    //To highlight the right dot_item in #aside_nav
    highlight_dots();
    head_header();

    if(section === 2){
        show_about_section();
    }
}
show_section();

//To show the right subsection in section about
function show_about_section(){
    switch(about_section){
        case 1:
            setPersonal();
            break;
        case 2:
            setSkills();
            break;
        case 3:
            setStudies();
            break;
    }
    //To highlight the right list_item in #header_about_nav
    highlight_about_navigation();
    //To hightlight the right dot_about_item in #about_nav
    highlight_about_dots();
}


//To highlight the right list_item in #header_nav
function highlight_navigation(){
    const list_items = Array.from(document.getElementsByClassName('list_item'));

    list_items.forEach(list_item => {
        list_item.classList.remove('selected');
    })

    const selected_list_item = document.getElementById('list_item_' + section);
    selected_list_item.classList.add('selected');
}

//To highlight the right dot_item in #aside_nav
function highlight_dots(){
    const dot_items = Array.from(document.getElementsByClassName('dot_item'));
    
    dot_items.forEach(dot => {
        dot.classList.remove('selected');
    })

    const selected_dot = document.getElementById('dot_' + section);
    selected_dot.classList.add('selected');
}

//To highlight the right list_item in #header_about_nav
function highlight_about_navigation(){
    const list_about_items = Array.from(document.getElementsByClassName('list_about_items'));

    list_about_items.forEach(item => {
        item.classList.remove('selected')
    });
    
    const selected_list_about_items = document.getElementById('list_about_item_' + about_section);
    selected_list_about_items.classList.add('selected')
}

//To hightlight the right dot_about_item in #about_nav
function highlight_about_dots(){
    const dot_about_items = Array.from(document.getElementsByClassName('dot_about_item'));

    dot_about_items.forEach(dot => {
        dot.classList.remove('selected')
    });
    
    const selected_dot_about_item = document.getElementById('about_dot_' + about_section);
    selected_dot_about_item.classList.add('selected')
}