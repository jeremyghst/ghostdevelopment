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
            const today = new Date();
            const date = ((today.getDate() < 10) ? "0" + today.getDate() : today.getDate())+'-'+((today.getMonth()+1 < 10) ? "0" + (today.getMonth()+1) : today.getMonth()+1)+'-'+today.getFullYear();
            const time = ((today.getHours() < 10) ? "0" + today.getHours() : today.getHours()) + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
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

        return;
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

            messageArray.forEach(message => {
                if(message.id == post.querySelector("input[type='hidden']").value){
                    const index = messageArray.indexOf(message);
                    if (index > -1) {
                        messageArray.splice(index, 1);
                    }
                }
            })

        }
        event.stopImmediatePropagation();
        return;
    }
}
