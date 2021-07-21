"use strict"

class Message{
    constructor(id, title, message, date){
        this.id = id;
        this.title = title;
        this.message = message;
        this.date = date;
    }

    create(){
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            const time = ((today.getHours() < 10) ? "0" + today.getHours() : today.getHours()) + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
            const dateTime = date+' '+time;

            let messageTitle = document.getElementById("messageTitle");
            let messageMessage = document.getElementById("message");

            this.id = i;
            this.title = messageTitle.value;
            this.message = messageMessage.value;
            this.date = dateTime;


            i++;
            return this;
    }

    display(allMessages){
        const searchBar = document.getElementById("searchBarInput");
        postArticle.innerHTML = "";
        
        allMessages.forEach(message => {
            const post = document.createElement("button");
            post.classList.add("post");
            post.addEventListener("click", toggleModal)
            post.value = parseInt(message.id);

            const title = document.createElement("h2");
            title.classList.add('titleValue')
            title.innerText = message.title;
    
            const paragraph = document.createElement("p");
            paragraph.classList.add('messageValue');
            paragraph.innerText = message.message;
    
            const small = document.createElement("small");
            small.innerText = "Date: " + message.date;
    
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.value = message.id;
            deleteBtn.addEventListener("click", this.delete);
    
            post.append(deleteBtn, title, paragraph, small);
    
            postArticle.insertBefore(post, postArticle.childNodes[0]);
        })
        searchBar.focus();
    }

    update(){
        const title = document.getElementById("messageTitleModal");
        const message = document.getElementById("messageModal")

        this.title = title.value;
        this.message = message.value;

        modal.classList.toggle('visible');

        this.display(allMessages)
    }

    delete(){
        if(confirm("Are you sure you want to delete this message?")){
            allMessages.forEach(oneMessage => {
                if(oneMessage.id == this.value){

                    allMessages = allMessages.filter(item => item !== oneMessage)
                    oneMessage.display(allMessages);
                }
            })
        }
        return event.stopPropagation();
    }
}
