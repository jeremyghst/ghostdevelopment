"use strict"

let type_slogan_timeout;
let i = 0;
let j = 0;
let p;

const slogan_container = document.getElementById('slogan');
const slogan = ['The worst part about', 'having all those bugs', 'is,', 'people expect you', 'to behave as if', "you don't"];
let slogan_part = slogan[i].split("");

const peekaboo = document.getElementById('peekaboo');

function type_slogan() {
        if(i < slogan.length){
            slogan_part = slogan[i].split("");

            if(i === 2){
                peekaboo.classList.add('boo');
            }
            type_slogan_timeout = setTimeout(function () {
                if(j < slogan_part.length){
                    if(j === 0){
                        p = document.createElement('p');
                        slogan_container.appendChild(p);
                    }

                    if(slogan_part[j] === " "){
                        p.innerText += '\u00a0';
                    } else {
                        p.innerText += slogan_part[j];
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
            i = 0;
            j = 0;
            peekaboo.classList.remove('boo');
            clearInterval(type_slogan_timeout);
            return;
        }
}

if(section === 2){
    type_slogan();
}
