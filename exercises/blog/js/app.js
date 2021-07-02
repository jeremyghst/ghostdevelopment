"use strict"


const dateP = document.getElementById("dateP");
const postArticle = document.getElementById("postArticle");
const posts = document.getElementsByClassName("post");

const postBtn = document.getElementById("postBtn");
const searchBarInput = document.getElementById("searchBarInput");

postBtn.addEventListener("click", createMessage);
searchBarInput.addEventListener("input", search);

function setDate(){
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = ((today.getHours() < 10) ? "0" + today.getHours() : today.getHours()) + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
    const dateTime = date+' '+time;
    dateP.innerText = dateTime;
}
setInterval(setDate, 1000);

function createMessage(){
    const message = new Message;
    message.create();

    return false;
}

function search(){
    Array.from(posts).forEach(post => {
        if(!post.innerText.includes(searchBarInput.value)){
            post.style.display = "none";
        } else {
            post.style.display = "block"
        }
    })
}