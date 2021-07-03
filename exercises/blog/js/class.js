"use strict"

let i = 0;

class Message{
    constructor(id, title, message, date, i){
        this.id = id;
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

            this.id = i;
            this.title = messageTitle.value;
            this.message = messageMessage.value;
            this.date = dateTime;
            i++;

            return this;
        }
    }
    
    show(){
        postArticle.innerHTML = "";

        messageArray.forEach(message => {
        const post = document.createElement("div");
        post.classList.add("post");
        post.addEventListener("click", showUpdatePost)

        const hiddenInput = document.createElement("input");
        hiddenInput.value = message.id;
        hiddenInput.type = "hidden";

        const title = document.createElement("h2");
        title.innerText = message.title;

        const paragraph = document.createElement("p");
        paragraph.innerText = message.message;

        const small = document.createElement("small");
        small.innerText = "Date: " + message.date;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", message.delete);

        post.append(hiddenInput, deleteBtn, title, paragraph, small);
     
        

        searchBar.focus();
        postArticle.insertBefore(post, postArticle.childNodes[0]);

        })
    }

    update(){
        this.title = document.getElementById("moduleTitle").value;
        this.message = document.getElementById("moduleMessage").value;

        this.show();
    }

    delete(event){
        if(confirm("Are you sure you want to delete this message?")){
            const post = this.parentNode;
            postArticle.removeChild(post);

        }
        closeModule()
        return false;
    }
}
