"use strict"


const dateP = document.getElementById("dateP");
const postArticle = document.getElementById("postArticle");
const posts = document.getElementsByClassName("post");
const module = document.getElementById("module");

const postBtn = document.getElementById("postBtn");
const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");

const searchBarInput = document.getElementById("searchBarInput");
const messageArray = [];

postBtn.addEventListener("click", createMessage);
closeBtn.addEventListener("click", closeModule);
updateBtn.addEventListener("click", updatePost);

searchBarInput.addEventListener("input", search);

function setDate(){
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = ((today.getHours() < 10) ? "0" + today.getHours() : today.getHours()) + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
    const dateTime = date+' '+time;
    dateP.innerText = dateTime;

    return dateTime;
}
setInterval(setDate, 1000);

function createMessage(){
    const message = new Message;
    messageArray.push(message.create());
    message.show(messageArray);
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

function showUpdatePost(){
    module.classList.add("visible");

    document.getElementById("moduleTitle").value = this.getElementsByTagName("h2")[0].innerText;
    document.getElementById("moduleMessage").value = this.getElementsByTagName("p")[0].innerText;
    document.getElementById("moduleId").value = this.querySelector("input[type='hidden']").value;

    return false;
}

function updatePost(){
    messageArray.forEach(message => {
        if(message.id == this.parentNode.querySelector("input[type='hidden']").value){
            message = message.update();
        }
    })
    closeModule();
}

function closeModule(){
    module.classList.remove("visible");

    return false;
}