"use strict"

const basics = {
    'html': 4.5,
    'css': 4.5,
    'scss': 4
}

const frontend = {
    'javascript': 4
}

const backend = {
    'php': 4,
    'mysql': 3.5
}

const frameworks = {
    'laravel': 4
}

const skills = [
    {
        'title': 'Basics',
        'skills': basics
    },
    { 
        'title': 'Frontend',
        'skills': frontend
    },
    {
        'title': 'Backend',
        'skills': backend
    },
    {  
        'title': 'Frameworks',
        'skills': frameworks
    }];

const about_content = document.getElementById('about_content');

function setSkills(){
    about_content.innerHTML = "";
    
    const skill_container_container = document.createElement('div');
    skill_container_container.classList.add('about_content_container', 'skill_container_container');

    skills.forEach(skill => {
        const skill_container = document.createElement('div');
        skill_container.classList.add('skill_container', 'flex_column_div');

        const title = document.createElement('h2');
        title.innerText = skill.title;

        skill_container.appendChild(title);
        
            for (const lang in skill.skills){
                const skill_div = document.createElement('div');
                skill_div.classList.add('skill_div', 'flex_row_div');

                
                const p = document.createElement('p');
                p.innerText = `${lang}:`;
                p.classList.add('text', 'skills_text');

                const bar = document.createElement('div');
                bar.classList.add('bar');

                const innerBar = document.createElement('div');
                innerBar.classList.add('innerBar');
                innerBar.dataset.level = skill.skills[lang];

                bar.appendChild(innerBar)
                skill_div.append(p, bar);
                skill_container.append(skill_div)
            }
            skill_container_container.appendChild(skill_container)
            about_content.appendChild(skill_container_container);
    })
    setLevel();
}

setSkills()

function setLevel(){
    const skill_container = Array.from(document.getElementsByClassName('skill_container'));
    let i = 0;

    const container_loop = setInterval(function(){
        if(skill_container[i]){
            const innerBars = Array.from(skill_container[i].getElementsByClassName('innerBar'));

            innerBars.forEach(bar => {
                    const level = bar.dataset.level;
                    bar.style.width = `${level * 20}%`;
                })
            i++;
        } else {
            clearInterval(container_loop);
        }
    }, 250);
}