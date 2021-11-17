"use strict"

const portfolio = [
    {
        'section': [
            {
                'image': '/assets/portfolio/crm/1.png',
                'text': [
                    'Inlogscherm',
                    'Onderscheid admin en client',
                    'Wachtwoord onthouden'
                ]
            },
            {
                'image': '/assets/portfolio/crm/2.png',
                'text': [
                    'Clienten inzien',
                    'Clienten aanmaken & aanpassen',
                    'Clienten archiveren & verwijderen'
                ]
            },
            {
                'image': '/assets/portfolio/crm/3.png',
                'text': [
                    'Dagboek inzien',
                    'Dagboek pdf downloaden',
                    'Uitklokken'
                ]
            },
        ]
    },
    {
        'section': [
            {
                'image': '/assets/portfolio/crm/1.png',
                'text': [
                    'Traject beginnen',
                    'Vragen beantwoorden',
                    'Dynamische lijst doorlopen'
                ]
            },
            {
                'image': '/assets/portfolio/crm/2.png',
                'text': [
                    'Aanmelding invullen',
                    'Aanmelding downloaden',
                    'Aanmelding opslaan'
                ]
            },
            {
                'image': '/assets/portfolio/crm/3.png',
                'text': [
                    'Gegevens controleren',
                    'Akkoord geven',
                    'Inschrijven'
                ]
            },
        ]
    }
]

const portfolio_content = document.getElementById('portfolio_content');
let portfolio_case;

function setPortfolioCase(portfolio_section){
    portfolio_content.innerHTML = ""

    const portfolio_content_container = document.createElement('div');
    portfolio_content_container.classList.add('portfolio_content_container');

    portfolio_case = portfolio[portfolio_section - 1];

    const porftolio_div = document.createElement('div');
    porftolio_div.classList.add('flex_column_div', 'porftolio_div');

    const portfolio_img_div = document.createElement('div');
    portfolio_img_div.classList.add('portfolio_img_div');

    const portfolio_img_control = document.createElement('div');
    portfolio_img_control.classList.add('portfolio_img_control');

    const control_left = document.createElement('button');
    control_left.classList.add('control_button');
    control_left.innerText = 'left';
    control_left.style.display = 'none';
    
    control_left.addEventListener('click', function(){
        setPortfolio(-1);
    })

    const control_pause = document.createElement('button');
    control_pause.classList.add('control_button', 'control_pause');
    control_pause.innerText = 'pause';

    control_pause.addEventListener('click', function(){
        control_play.style.display = 'flex';
        control_left.style.display = 'flex';
        control_right.style.display = 'flex';
        control_pause.style.display = 'none';
        
        clearInterval(portfolio_loop);
    })

    const control_play = document.createElement('button');
    control_play.classList.add('control_button', 'control_play');
    control_play.innerText = 'play';
    control_play.style.display = 'none';

    control_play.addEventListener('click', function(){
        control_pause.style.display = 'flex';
        control_play.style.display = 'none';
        control_left.style.display = 'none';
        control_right.style.display = 'none';

        setPortfolioTimer();
    })

    const control_right = document.createElement('button');
    control_right.classList.add('control_button');
    control_right.innerText = 'right';
    control_right.style.display = 'none';

    control_right.addEventListener('click', function(){
        setPortfolio(1);
    })

    portfolio_img_control.append(control_left, control_pause, control_play, control_right);

    const porfolio_img = document.createElement('img');
    porfolio_img.classList.add('porfolio_img');
    porfolio_img.src = portfolio_case.section[0].image;

    portfolio_img_div.append(portfolio_img_control, porfolio_img);

    porftolio_div.appendChild(portfolio_img_div);

    portfolio_case.section[0].text.forEach(text => {
        const p_text_div = document.createElement('div');
        p_text_div.classList.add('flex_row_div');

        const p_bullet = document.createElement('p');
        p_bullet.classList.add('bullet');
        p_bullet.innerHTML = "&#8226;";
                
        const portfolio_text = document.createElement('p');
        portfolio_text.classList.add('text', 'portfolio_text');
        portfolio_text.innerText = text;

        p_text_div.append(p_bullet, portfolio_text);
        porftolio_div.appendChild(p_text_div);
    })
    portfolio_content_container.appendChild(porftolio_div);
    portfolio_content.appendChild(portfolio_content_container);

    setPortfolioTimer();
}

let portfolio_loop;
let portfolio_i;

function setPortfolioTimer(dir = null){
    if(portfolio_i){
        portfolio_i = portfolio_i;
    } else {
        portfolio_i = 1;
    }

    if(dir){
        portfolio_i += dir;
        console.log(portfolio_i);
    }

    const porfolio_img = document.getElementsByClassName('porfolio_img')[0];
    const porfolio_text = Array.from(document.getElementsByClassName('portfolio_text'));

    portfolio_loop = setInterval(function(){
        porfolio_img.src = portfolio_case.section[portfolio_i].image;

        for(let j = 0; j < portfolio_case.section[portfolio_i].text.length; j++){
            porfolio_text[j].innerText = portfolio_case.section[portfolio_i].text[j];
        }

        if(portfolio_i === 2){
            portfolio_i = 0;
        } else {
            portfolio_i++
        }
    }, 2000);

    if(section !== 3){
        clearInterval(portfolio_loop);
    }
}

function setPortfolio(dir){
    portfolio_i += dir;

    if(portfolio_i === 3){
        portfolio_i = 0;
    } else if (portfolio_i === -1){
        portfolio_i = 2;
    }

    const porfolio_img = document.getElementsByClassName('porfolio_img')[0];
    const porfolio_text = Array.from(document.getElementsByClassName('portfolio_text'));

    porfolio_img.src = portfolio_case.section[portfolio_i].image;

    for(let j = 0; j < portfolio_case.section[portfolio_i].text.length; j++){
        porfolio_text[j].innerText = portfolio_case.section[portfolio_i].text[j];
    }
}