"use strict"

const studies = [
    {
        'title': 'it essentials',
        'by': {
            'organisation': 'spectrum multimedia & it'
        },
        'date':{
            'day': '25',
            'month': '05',
            'year': '2019'
        },
    },
    { 
        'title': 'professional scrum master 1',
        'by':{
            'organisation': 'scrum'
        },
        'date':{
            'day': '15',
            'month': '11',
            'year': '2019'
        },
    },
    {
        'title': 'software enginering track',
        'by': {
            'organisation1': 'capgemini',
            'organisation2': 'spectrum multimedia & it'
        },
        'date': {
            'day': '18',
            'month': '12',
            'year': '2019'
        },
    },
    {  
        'title': 'praktijkopleider plus',
        'by':{
            'organisation': 'marlijn academie'
        },
        'date': {
            'day': '25',
            'month': '10',
            'year': '2020'
        }
    }
];

function setStudies(){
    about_content.innerHTML = ""

    const study_container = document.createElement('div');
    study_container.classList.add('about_content_container', 'study_container');

    studies.forEach(study => {
        const study_div = document.createElement('div');
        study_div.classList.add('flex_column_div', 'study_div');

        const title = document.createElement('h2');
        title.innerText = study.title;

        const p_by_div = document.createElement('div');
        p_by_div.classList.add('flex_row_div');

        for (const study_by in study.by){
            const by = document.createElement('p');
            by.classList.add('text', 'study_text');
            by.innerText = study.by[study_by];

            const p_bullet = document.createElement('p');
            p_bullet.classList.add('bullet');
            p_bullet.innerHTML = "&#8226;";
            
            p_by_div.append(by, p_bullet);
        }

        const p_date_div = document.createElement('div');
        p_date_div.classList.add('flex_row_div');

        for (const study_date in study.date){
            const date = document.createElement('p');
            date.classList.add('text', 'study_text')
            date.innerText = study.date[study_date];

            const p_bullet = document.createElement('p');
            p_bullet.classList.add('bullet');
            p_bullet.innerHTML = "&#8226;";
            
            p_date_div.append(date, p_bullet);
        }

        study_div.append(title, p_by_div, p_date_div);
        study_container.appendChild(study_div);
    });
    about_content.append(study_container);
    setHightlight();
}
setStudies()

function setHightlight(){
    const study_div = Array.from(document.getElementsByClassName('study_div'));
    let i = 0;

    const container_loop = setInterval(function(){
        if(study_div[i]){
            const study_p = Array.from(study_div[i].getElementsByClassName('study_text'));

            study_p.forEach(p => {
                    p.classList.remove('study_text');
                })
            i++;
        } else {
            clearInterval(container_loop);
        }
    }, 250);
}