"use strict"

const gameover = document.getElementById("gameover");
const winner_p = document.getElementById("wins");
winner_p.innerText = "";

const x_wins = document.getElementById("x_wins");
const o_wins = document.getElementById("o_wins");

const buttons = Array.from(document.getElementsByClassName("playBtn"));
buttons.forEach(button => {
    button.addEventListener("mouseenter", tryPlay);
    button.addEventListener("mouseleave", removeTry);

    button.addEventListener("click", play);
})

const playagainBtn = document.getElementById("playagain");
playagainBtn.addEventListener("click", playagain);

const winningArrays = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"],
    ["a","d","g"],
    ["b","e","h"],
    ["c","f","i"],
    ["a","e","i"],
    ["c", "e", "g"]
];

//Player 0 = X
//Player 1 = O
let player = 0;
let clicked = 0;

let x_array = [];
let x_wins_count = 0;
x_wins.innerText = x_wins_count;

let o_array = [];
let o_wins_count = 0;
o_wins.innerText = o_wins_count;

function tryPlay(){
    if(this.innerText === ""){
        if(!player){
            this.innerText = "X";
            clicked = 0;
        } else {
            this.innerText = "O";
            clicked = 0;
        }
    } else {
        return;
    }
    return;
}

function removeTry(){
    if(clicked === 0){
        this.innerText = "";
    }
    return;
}

function play(){
    if(!player){
        this.innerText = "X";
        x_array.push(this.value);
        clicked = 1;
        player = 1;
    } else {
        this.innerText = "O";
        clicked = 1;
        player = 0;
        o_array.push(this.value);
    }

    this.classList.add("checked");
    this.removeEventListener("mouseenter", tryPlay);
    this.removeEventListener("mouseleave", removeTry);
    this.removeEventListener("click", play);
    return checkPlay();
}

function checkPlay(){
    winningArrays.forEach(arr => {
        if(arr.every(x => x_array.includes(x))){
            winner_p.innerText = "Player 1 wins";
            gameover.classList.add('visible');
            x_wins_count++;
            x_wins.innerText = x_wins_count;
            return
        }
        if(arr.every(o => o_array.includes(o))){
            winner_p.innerText = "Player 2 wins";
            gameover.classList.add('visible');
            o_wins_count++;
            o_wins.innerText = o_wins_count;
            return 
        }
    });
}

function playagain(){
    clicked = 0;
    x_array = [];
    o_array = [];

    gameover.classList.remove('visible');

    buttons.forEach(button => {
        button.addEventListener("mouseenter", tryPlay);
        button.addEventListener("mouseleave", removeTry);
    
        button.addEventListener("click", play);

        button.innerText = "";
        button.classList.remove("checked");
    })
}