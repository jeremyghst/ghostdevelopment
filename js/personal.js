"use strict"

const personal_info = {
    'Name': {
        'firstname': 'Jeremy',
        'lastname': 'Ghost'
        },
    'Age': {
        'years': getYears(),
        'months': getMonths(),
        'days': getDays()
    },
    'Location': {
        'country': 'the Netherlands'
    },
    'Profession': {
        'first': 'webdeveloper',
        'second': 'trainer',
        'third': 'autisme peer coach'
        },
    'Work': {
        'work': 'Spectrum multimedia & it'
    } 
}

function setPersonal(){
    about_content.innerHTML = "";
    
    const personal_container = document.createElement('div');
    personal_container.classList.add('about_content_container', 'personal_container');
    
    for (const info in personal_info){
        const info_div = document.createElement('div');
        info_div.classList.add('info_div', 'flex_column_div');

        const label = document.createElement('h2');
        label.innerText = info;

        const p_div = document.createElement('div');
        p_div.classList.add('flex_row_div');

        for (const info_part in personal_info[info]){
            if(info !== 'Profession' && info !== 'Age'){
                const p_part = document.createElement('p');

                p_part.classList.add('text');
                p_part.innerText =  personal_info[info][info_part];


                const p_bullet = document.createElement('p');
                p_bullet.classList.add('bullet');
                p_bullet.innerHTML = "&#8226;";
                
                p_div.append(p_part, p_bullet);
            }
        }
        
        if(info === 'Profession'){
            const p_part = document.createElement('p');
            p_part.classList.add('text');
            p_part.innerText =  personal_info[info].first;

            p_div.appendChild(p_part);

            setProfession(p_part);
        } else if (info === 'Age'){
            const p_year = document.createElement('p');
            p_year.classList.add('text');

            const p_bullet1 = document.createElement('p');
            p_bullet1.classList.add('bullet');
            p_bullet1.innerHTML = "&#8226;";

            const p_month = document.createElement('p');
            p_month.classList.add('text');

            const p_bullet2 = document.createElement('p');
            p_bullet2.classList.add('bullet');
            p_bullet2.innerHTML = "&#8226;";

            const p_day = document.createElement('p');
            p_day.classList.add('text');

            p_div.append(p_year, p_bullet1, p_month, p_bullet2, p_day)

            setAge(p_year, p_month, p_day);
        }

        info_div.append(label, p_div);
        personal_container.appendChild(info_div);
    }
    about_content.appendChild(personal_container);
}

function setProfession(text_container){
    const index = ['first', 'second', 'third']
    let i = 1;

    const profession_timer = setInterval(function(){
        text_container.innerText = personal_info.Profession[index[i]];

        if(i === 2){
            i = 0;
        } else {
            i++
        }
    }, 1000);

    if(section !== 2){
        clearInterval(profession_timer);
    }
}

function setAge(p_year, p_month, p_day){
    let y = 0;
    let m = 0;
    let d= 0;

    const year_timer = setInterval(function(){
        p_year.innerText = `${y} years`;

        if(y === personal_info.Age.years){
            clearInterval(year_timer);
        } else {
            y++;
        }

    }, (1000/personal_info.Age.years));

    const month_timer = setInterval(function(){
        let month_text = 'months';

        if(m === 1){
            month_text = 'month';
        }

        p_month.innerText = `${m} ${month_text}`;

        if(Math.abs(m) === personal_info.Age.months){
            clearInterval(month_timer);
        } else {
            m++;
        }

    }, (1000/personal_info.Age.months));

    const day_timer = setInterval(function(){

        let day_text = 'days';

        if(d === 1){
            day_text = 'day';
        }

        p_day.innerText = `${d} ${day_text}`;

        if(Math.abs(d) === personal_info.Age.days){
            clearInterval(day_timer);
        } else {
            d++;
        }

    }, (1000/personal_info.Age.days));
}