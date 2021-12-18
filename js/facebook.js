"use strict"

const facebook_btn = document.getElementById('facebook');
facebook_btn.addEventListener('click', () => {
        setTimeout(function() {
          window.open("https://www.facebook.com/jeremy.ghst.5/", '_blank');
        }, 25);
        window.location = "fb://profile/100039459462203/";
      
        event.stopPropagation;
})
