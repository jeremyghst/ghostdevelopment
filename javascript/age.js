"use strict"
function setAge(){
  const ageInput = document.getElementById('age');
  const today = new Date();
  let ageYear = today.getFullYear() - 1993;
  let ageMonth = today.getMonth() + 1 - 3;
  let ageDay = today.getDate() - 1;

  if(ageMonth < 0){
    ageYear = ageYear - 1 + " years";
    ageMonth = 12 + ageMonth + " months";
  } else if(ageMonth === 1){
    ageYear = ageYear + " years";
    ageMonth = ageMonth + " month";
  } else {
    ageYear = ageYear + " years";
    ageMonth = ageMonth + " months";
  }

  if(ageDay === 1){
    ageDay = ageDay + " day";
  } else {
    ageDay = ageDay + " days";
  }

  const age = ageYear + " " + String.fromCharCode(0x2022) + " " + ageMonth + " " + String.fromCharCode(0x2022) + " " + ageDay;
  ageInput.value = age;
}
setAge();
