"use strict"

const device_elements = Array.from(document.getElementsByClassName('device'));

function deviceType(){
    const ua = navigator.userAgent;
    let device = 'desktop';
    
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        device =  "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        device =  "mobile";
    }

    device_elements.forEach(element => {
        element.classList.add(device);
    })
};

deviceType();