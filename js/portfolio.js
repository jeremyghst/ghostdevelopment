"use strict"

const portfolio = [
    {
        'languague': [
            'laravel',
            'javascript'
        ],
        'section': [
            {
                'image': '/assets/portfolio/crm/1.png',
                'section_title': 'inlogscherm'
            },
            {
                'image': '/assets/portfolio/crm/2.png',
                'section_title': 'clienten archiveren & verwijderen'
            },
            {
                'image': '/assets/portfolio/crm/3.png',
                'section_title':'dagboek inzien'
            },
        ]
    },
    {
        'languague': [
            'laravel',
            'javascript'
        ],
        'section': [
            {
                'image': '/assets/portfolio/traject/1.png',
                'section_title':'begin traject'
            },
            {
                'image': '/assets/portfolio/traject/2.png',
                'section_title':'traject vragen'
            }
        ]
    }
]

const portfolio_content = document.getElementById('portfolio_content');
let portfolio_case;

let full_screen = false;

let control_play;
let control_pause;
let control_left;
let control_right;

//Initialize portfolio slider
function setPortfolioCase(portfolio_section){
    if(is_portfolio_loop){
        pausePortfolioTimer()
    }
    portfolio_i = 0;
    
    portfolio_content.innerHTML = ""

    const portfolio_content_container = document.createElement('div');
    portfolio_content_container.classList.add('portfolio_content_container');

    portfolio_case = portfolio[portfolio_section - 1];

    const porftolio_div = document.createElement('div');
    porftolio_div.classList.add('flex_column_div', 'porftolio_div');

    const portfolio_img_div = document.createElement('div');
    portfolio_img_div.classList.add('portfolio_img_div');
    portfolio_img_div.addEventListener('dblclick', function(e){
        this.classList.toggle('full_screen');

        if(full_screen){
            full_screen = false;
        } else {
            full_screen = true;
        }

        deviceType(this);
    })

    const portfolio_img_control = document.createElement('div');
    portfolio_img_control.classList.add('portfolio_img_control');

    control_left = document.createElement('button');
    control_left.classList.add('control_button');
    control_left.innerText = 'left';
    
    control_left.addEventListener('click', function(){
        setPortfolio(-1);
    })

    control_pause = document.createElement('button');
    control_pause.classList.add('control_button', 'control_pause');
    control_pause.innerText = 'pause';

    control_pause.addEventListener('click', pausePortfolioTimer)

    control_play = document.createElement('button');
    control_play.classList.add('control_button', 'control_play');
    control_play.innerText = 'play';
    control_play.style.display = 'none';
    control_play.addEventListener('click', startPortfolioTimer);

    control_right = document.createElement('button');
    control_right.classList.add('control_button');
    control_right.innerText = 'right';

    control_right.addEventListener('click', function(){
        setPortfolio(1);
    })

    portfolio_img_control.append(control_left, control_pause, control_play, control_right);

    const porfolio_img = document.createElement('img');
    porfolio_img.classList.add('porfolio_img');
    porfolio_img.src = portfolio_case.section[0].image;

    portfolio_img_div.append(portfolio_img_control, porfolio_img);

    porftolio_div.appendChild(portfolio_img_div);

    const section_lang_div = document.createElement('div');
    section_lang_div.classList.add('flex_row_div', 'section_lang_div');
    
    portfolio_case.languague.forEach(lang => {
        const section_lang = document.createElement('p');
        section_lang.classList.add('text', 'section_lang');
        section_lang.innerText = lang;
    
        const p_bullet = document.createElement('p');
        p_bullet.classList.add('bullet');
        p_bullet.innerHTML = "&#8226;";

        section_lang_div.append(section_lang, p_bullet);
    })


    const section_title_div = document.createElement('div');
    section_title_div.classList.add('flex_row_div');
            
    const section_title = document.createElement('p');
    section_title.classList.add('text', 'section_title');
    section_title.innerText =  portfolio_case.section[0].section_title;

    section_title_div.appendChild(section_title);

    porftolio_div.append(section_lang_div, section_title_div);
    portfolio_content_container.appendChild(porftolio_div);
    portfolio_content.appendChild(portfolio_content_container);

    setPortfolioTimer();
}

let portfolio_loop;
let is_portfolio_loop = false;
let portfolio_i;

//Set portfolio section timer
function setPortfolioTimer(dir = null){
    if(portfolio_i){
        portfolio_i = portfolio_i;
    } else {
        portfolio_i = 1;
    }

    if(dir){
        portfolio_i += dir;
    }

    const porfolio_img = document.getElementsByClassName('porfolio_img')[0];
    const section_title = document.getElementsByClassName('section_title')[0];

    portfolio_loop = setInterval(function(){
        console.log(portfolio_i);
        porfolio_img.src = portfolio_case.section[portfolio_i].image;
        section_title.innerText = portfolio_case.section[portfolio_i].section_title;

        if(portfolio_i >= portfolio_case.section.length - 1){
            portfolio_i = 0;
        } else {
            portfolio_i++
        }
    }, 2000);

    is_portfolio_loop = true;

    if(section !== 3){
        clearInterval(portfolio_loop);
        is_portfolio_loop = false;
    }
}

function startPortfolioTimer(){
    control_pause.style.display = 'flex';
    control_play.style.display = 'none';

    setPortfolioTimer();
}

//pause portfolio section timer
function pausePortfolioTimer(){
    control_pause.style.display = 'none';
    control_play.style.display = 'flex';
    
    clearInterval(portfolio_loop);
    is_portfolio_loop = false;
}

//set portfolio section manually
function setPortfolio(dir){
    if(is_portfolio_loop){
        pausePortfolioTimer()
    }

    portfolio_i += dir;

    if(portfolio_i >= portfolio_case.section.length){
        portfolio_i = 0;
    } else if (portfolio_i === -1){
        portfolio_i = portfolio_case.section.length - 1;
    }

    const porfolio_img = document.getElementsByClassName('porfolio_img')[0];
    const section_lang_div = document.getElementsByClassName('section_lang_div')[0];
    const section_title = document.getElementsByClassName('section_title')[0];

    porfolio_img.src = portfolio_case.section[portfolio_i].image;
    section_title.innerText = portfolio_case.section[portfolio_i].section_title;

    section_lang_div.innerHTML = "";
    portfolio_case.languague.forEach(lang => {
        const section_lang = document.createElement('p');
        section_lang.classList.add('text', 'section_lang');
        section_lang.innerText = lang;
    
        const p_bullet = document.createElement('p');
        p_bullet.classList.add('bullet');
        p_bullet.innerHTML = "&#8226;";

        section_lang_div.append(section_lang, p_bullet);
    });
}