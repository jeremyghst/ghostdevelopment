"use strict"

let i = 0;
let j = 0;

const slogan_container = document.getElementById('slogan');
const slogan_part_container = slogan_container.getElementsByTagName('p');

const slogan = ['The worst part about', 'having all those bugs', 'is', 'people expect you', 'to behave as if', "you don't"];
let slogan_part = slogan[i].split("");

function type_slogan() {
        if(i < slogan.length){
            slogan_part = slogan[i].split("");

            setTimeout(function () {
                if(j < slogan_part.length){
                    if(slogan_part[j] === " "){
                        const span = document.createElement('span');
                        span.innerText = '\u00a0';
                        slogan_part_container[i].appendChild(span);
                    } else {
                        slogan_part_container[i].innerText += slogan_part[j];
                    }
                    j++
                    type_slogan();
                } else{
                    j = 0;
                    i++
                    type_slogan();
                }
            }, 50)

            slogan_part = slogan[i].split("");
        } else{
            return;
        }
}
type_slogan();
