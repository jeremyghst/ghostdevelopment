"use strict"

function toggleModal(){
    const modal = document.getElementById("modal");
    modal.classList.toggle('visible');
}

function editTaxi(id){
    window.location.href = "/edit-taxi/" + id;
}

function editLocation(id){
    window.location.href = "/edit-location/" + id;
}