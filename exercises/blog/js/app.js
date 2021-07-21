"use strict"

let allMessages = [];
let i = 0;

const dateP = document.getElementById("dateP");
const postArticle = document.getElementById("postArticle");
const posts = document.getElementsByClassName("post");

const postBtn = document.getElementById("postBtn");
const searchBarInput = document.getElementById("searchBarInput");

const modal = document.getElementById("modal");
const messageTitleModal = document.getElementById("messageTitleModal");
const messageModal = document.getElementById("messageModal");

const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");

postBtn.addEventListener("click", createMessage);
searchBarInput.addEventListener("input", search);
closeBtn.addEventListener("click", toggleModal);
updateBtn.addEventListener("click", updateMessage);

function setDate(){
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = ((today.getHours() < 10) ? "0" + today.getHours() : today.getHours()) + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
    const dateTime = date+' '+time;
    dateP.innerText = dateTime;
}
setInterval(setDate, 1000);

function createMessage(){
    if(document.getElementById("messageTitle").value !== "" && document.getElementById("message").value !== ""){
        const messagePost = new Message;
        allMessages.push(messagePost.create());
        messagePost.display(allMessages);
    } else {
        return false;
    }
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

function toggleModal(){
    modal.classList.toggle('visible');
    document.getElementsByTagName("body")[0].classList.toggle('visibleModal');

    allMessages.forEach(oneMessage => {
        if(oneMessage.id == this.value){
            window.scrollTo(0,0);
            const id = oneMessage.id;
            const title = oneMessage.title;
            const message = oneMessage.message;
            
            document.getElementById("updateBtn").value = id;
            document.getElementById("messageTitleModal").value = title;
            document.getElementById("messageModal").value = message;
            return false;
        } else {
            return false;
        }
    })
}

function updateMessage(){
    if(document.getElementById("messageTitleModal").value !== "" && document.getElementById("messageModal").value !== ""){
        allMessages.forEach(oneMessage => {
            if(oneMessage.id == this.value){
                oneMessage.update()
            } else {
                return false;
            }
        })
    }
}