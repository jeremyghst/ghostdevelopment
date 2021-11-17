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

    const porfolio_img = document.createElement('img');
    porfolio_img.classList.add('porfolio_img');
    porfolio_img.src = portfolio_case.section[0].image;

    porftolio_div.appendChild(porfolio_img);

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

function setPortfolioTimer(){
    let i = 1;
    const porfolio_img = document.getElementsByClassName('porfolio_img')[0];
    const porfolio_text = Array.from(document.getElementsByClassName('portfolio_text'));

    const portfolio_loop = setInterval(function(){
        porfolio_img.src = portfolio_case.section[i].image;

        for(let j = 0; j < portfolio_case.section[i].text.length; j++){
            porfolio_text[j].innerText = portfolio_case.section[i].text[j];
        }

        if(i === 2){
            i = 0;
        } else {
            i++
        }
    }, 2000);

    if(section !== 3){
        clearInterval(portfolio_loop);
    }
}
