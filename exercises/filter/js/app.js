"use strict"

import { elementArray, filterArray, color, shape, price } from "./class.js";


const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
const priceRange = Array.from(document.querySelectorAll("input[type='range']"));
const inputFilter = checkboxes.concat(priceRange);

const elementContainer = document.getElementById("elementContainer");
const resetButton = document.getElementById("resetButton");

const minPriceRange = document.getElementById("minPriceRange");
const minPrice = document.getElementById("minPrice");

const maxPriceRange = document.getElementById("maxPriceRange");
const maxPrice = document.getElementById("maxPrice");

maxPrice.innerText = maxPriceRange.value;
minPrice.innerText = minPriceRange.value;

inputFilter.forEach(box => {
    box.addEventListener("click", filter);
})

resetButton.addEventListener("click", resetFilters);

function generateElements(){
    elementContainer.innerHTML = "";

    if(filterArray.color.length === 0){
        filterArray.color = color;
    }
    if(filterArray.shape.length === 0){
        filterArray.shape = shape;
    }
    if(filterArray.price.length === 0){
        filterArray.price = price;
    }

    elementArray.forEach(element => {

        if(filterArray.color.includes(element.color) && 
            filterArray.shape.includes(element.shape) && 
            element.price >= filterArray.price[0] && element.price <= filterArray.price[1]){
            const div = document.createElement("div");
            div.classList.add("element");

            if(element.shape === "circle"){
                div.classList.add("circle");
            }

            div.style.backgroundColor = element.color;
            div.innerText = "$" + element.price;
            elementContainer.appendChild(div);
        }
    })

    if(elementContainer.innerHTML === ""){
        const paragraph = document.createElement("p");
        paragraph.innerText = "No elements found...";
        paragraph.classList.add("noElements");
        elementContainer.appendChild(paragraph);
    }
}
generateElements();


function filter(){
    if(this.type === "checkbox"){
        if(this.checked === true){
            if(filterArray[this.name].length === eval(this.name).length){
                filterArray[this.name] = [];
            }
            if(!filterArray[this.name].includes(this.value)){
                filterArray[this.name].push(this.value);
            }

        } else {
            const index = filterArray[this.name].indexOf(this.value);
            
            if (index > -1) {
                filterArray[this.name].splice(index, 1);
            }
        }
    } else {
        filterArray.price[0] = minPriceRange.value;
        minPrice.innerText = minPriceRange.value;

        filterArray.price[1] = maxPriceRange.value;
        maxPrice.innerText = maxPriceRange.value;
        maxPriceRange.min = (parseInt(minPriceRange.value) + 20 > 100 ? 100 : parseInt(minPriceRange.value) + 20);
    }

    generateElements();
}

function resetFilters(){
    checkboxes.forEach(box => {
        box.checked = false;
    })
    minPriceRange.value = 0;
    maxPriceRange.value = 100;
    
    location.reload();
}