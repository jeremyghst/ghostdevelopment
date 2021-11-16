"use strict"

const personal_info = {
    'name': {
        'firstname': 'Jeremy',
        'lastname': 'Ghost'
        },
    'age': {
        'years': `${getYears()} years`,
        'months': `${getMonths()} months`,
        'days': `${getDays()} days`
    },
    'location': {
        'country': 'the netherlands'
    },
    'profession': {
        'first': 'webdeveloper',
        'second': 'trainer',
        'third': 'autisme peer coach'
        },
    'work': {
        'work': 'spectrum multimedia & it'
    } 
}

function setPersonal(){
    about_content.innerHTML = "";
    
    const personal_container = document.createElement('div');
    personal_container.classList.add('about_content_container', 'personal_container');
    
    const div = document.createElement('div');
    div.classList.add('image_container');

    const imag_div = document.createElement('div');
    imag_div.classList.add('image_div');

    const image = document.createElement('img');
    image.classList.add('image_profile')
    image.src = "assets/ghost-min-light-blue/ghost.svg";

    imag_div.appendChild(image);
    div.appendChild(imag_div);

    personal_container.appendChild(div);

    for (const info in personal_info){
        const info_div = document.createElement('div');
        info_div.classList.add('info_div', 'flex_column_div');

        const label = document.createElement('h2');
        label.innerText = info;

        const p_div = document.createElement('div');
        p_div.classList.add('flex_row_div');

        for (const info_part in personal_info[info]){
            const p_part = document.createElement('p');
            p_part.classList.add('text');
            p_part.innerText =  personal_info[info][info_part];

            const p_bullet = document.createElement('p');
            p_bullet.classList.add('bullet');
            p_bullet.innerHTML = "&#8226;";
            
            p_div.append(p_part, p_bullet);
        }
        

        info_div.append(label, p_div);
        personal_container.appendChild(info_div);
    }
    about_content.appendChild(personal_container);
}