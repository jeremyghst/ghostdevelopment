"use strict"

const copyDate = document.getElementById("copyDate");

function getDate(){
  const today = new Date;
  copyDate.innerHTML += today.getFullYear();
}
getDate();