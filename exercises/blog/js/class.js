"use strict"

class Message{
    constructor(title, message, date){
        this.title = title;
        this.message = message;
        this.date = date;
    }

    create(){
        if(document.getElementById("messageTitle").value !== "" && document.getElementById("message").value !== ""){
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
            const dateTime = date+' '+time;

            let messageTitle = document.getElementById("messageTitle");
            let messageMessage = document.getElementById("message");
            const searchBar = document.getElementById("searchBarInput");

            this.title = messageTitle.value;
            this.message = messageMessage.value;
            this.date = dateTime;

            const post = document.createElement("div");
            post.classList.add("post");

            const title = document.createElement("h2");
            title.innerText = this.title;

            const paragraph = document.createElement("p");
            paragraph.innerText = this.message;

            const small = document.createElement("small");
            small.innerText = "Date: " + this.date;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.addEventListener("click", this.delete);

            post.append(deleteBtn, title, paragraph, small);

            postArticle.insertBefore(post, postArticle.childNodes[0]);

            searchBar.focus();
        } else {
            return;
        }
    }

    delete(){
        if(confirm("Are you sure you want to delete this message?")){
            const post = this.parentNode;
            postArticle.removeChild(post);
        }
    }
}
