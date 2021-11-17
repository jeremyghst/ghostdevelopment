"use strict"

let device; 
const use_portrait = document.createElement('div');
use_portrait.classList.add('use_portrait');
const use_portrait_img = document.createElement('img');
use_portrait_img.innerText = 'please rotate 90deg';
use_portrait_img.src = 'assets/ghost/ghost.svg';
use_portrait_img.classList.add('use_portrait_img');

use_portrait.appendChild(use_portrait_img);

function deviceType(){
    const ua = navigator.userAgent;
    device = 'desktop';
    
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        device =  "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        device =  "mobile";
        isLandscape();
    }
};
deviceType();

if(device === 'mobile'){
    window.addEventListener("orientationchange", function() {
        isLandscape()
    });
}

function isLandscape(){
    const  screen_orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    alert(screen_orientation.type);

    if(screen_orientation.type === 'landscape-primary'){
            body.appendChild(use_portrait);
        return
    } else {
        if(document.getElementsByClassName('use_portrait')[0]){
            body.removeChild(use_portrait);
        }
    }
    
   return;
}
