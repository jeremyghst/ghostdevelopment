"use strict"
const inputField = document.getElementById('inputField');
const typeIndicator = document.getElementById('typeIndicator');
const typeDots = typeIndicator.querySelectorAll('dot');

function focusOnInput() {
  inputField.onfocus = function(){
    showTypeIndicator();
  };

  inputField.onkeyup = function() {
    showTypeIndicator();
    activateTypeIndicator();
  };

  inputField.onblur = function(){
      removeTypeIndicator();
  };
  return;
}

focusOnInput();

function showTypeIndicator(){
  typeIndicator.classList.add("visible");
  
  setTimeout(function(){ 
    if(inputField.value === ""){
      removeTypeIndicator();
      }
    }, 2250); 
  
  return;    
}

function removeTypeIndicator(){
  typeIndicator.classList.remove("visible");
  typeIndicator.classList.remove("typing");
  return;
}

function activateTypeIndicator(){
  typeIndicator.classList.add("typing");

  if(inputField.value === ""){
    removeTypeIndicator();
    return;
  }

  timerTypeIndicator(inputField.value);
  return
}

function timerTypeIndicator(inputFieldParameter){
  let inputFieldValue = inputFieldParameter;

    setTimeout(function(){ 
      if(inputFieldValue === inputField.value){
        typeIndicator.classList.remove("typing");
        timerActiveTypeIndicator(inputFieldValue);
        return;

      }else if(inputFieldValue === ""){
        removeTypeIndicator();
      } else {
        timerTypeIndicator();
        return;
      }
    }, 2250); 
}

function timerActiveTypeIndicator(inputFieldValue){
  setTimeout(function(){ 
    if(inputFieldValue === inputField.value){
      removeTypeIndicator();
      return;
    } else {
      return;
    }
  }, 2250); 
}

