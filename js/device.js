"use strict"

let device; 
const use_portrait = document.createElement('div');
use_portrait.classList.add('use_portrait');
const use_portrait_img = document.createElement('img');
use_portrait_img.innerText = 'please rotate 90deg';
use_portrait_img.src = 'assets/ghost/ghost.svg';
use_portrait_img.classList.add('use_portrait_img');

use_portrait.appendChild(use_portrait_img);

function deviceType(full_screen = null){
    const ua = navigator.userAgent;
    device = 'desktop';
    
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        device =  "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        device =  "mobile";
        isLandscape(full_screen);
    }
};
deviceType();

if(device === 'mobile'){
    window.addEventListener("orientationchange", function() {
        isLandscape()
    });
}

function isLandscape(full_screen_div){
    if(window.matchMedia("(orientation: landscape)").matches){
            body.appendChild(use_portrait);
    } else {
        if(document.getElementsByClassName('use_portrait')[0]){
            body.removeChild(use_portrait);

            section = 1;
            show_section();
        }
        if(full_screen){
            full_screen_div.classList.add('mobile');
        }
    }
    
   return;
}
