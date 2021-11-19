"use strict"

const facebook_btn = document.getElementById('facebook');

facebook_btn.addEventListener('click', () => {    
    try {
        window.location.href = "fb://profile/100039459462203/";
     } catch (e) {
        console.log(e);
     } finally {
        console.log('finally')
     }
})

// if(window.location = "fb://profile/100039459462203/"){
//     console.log('IOS app')
// } else if (window.location = "fb://page/100039459462203/"){
//     console.log('Andriod app')
// } else if (window.open("https://www.facebook.com/jeremy.ghst.5/", '_blank')){
//     console.log('website');
    
// }