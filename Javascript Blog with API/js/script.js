(function(){
    "use strict";
    var id_counter = 0;

    
    function insertMessages(message){
            
            // create a new message element
            var e = document.createElement('div');
            e.id = "message" + message.id;
            var upcounter = message.upvote;
            var downcounter = message.downvote;
            e.className = "message";
            e.innerHTML=`
                <div class="message_user">
                    <img class="message_picture" src="media/user.png" alt="${message.author}">
                    <div class="message_username">${message.author}</div>
                </div>
                <div class="message_content">${message.content}</div>
                <div class="upvote-icon icon">${upcounter}</div>
                <div class="downvote-icon icon">${downcounter}</div>
                <div class="delete-icon icon"></div>
            `;
            // add this element to the document
            document.getElementById("messages").prepend(e);

            document.getElementsByClassName('upvote-icon')[0].addEventListener('click', function(){
                api.upvoteMessage(message.id);
                upcounter++;
                this.textContent = upcounter;
            })
            document.getElementsByClassName('downvote-icon')[0].addEventListener('click', function(){
                api.downvoteMessage(message.id);
                downcounter++;
                this.textContent = downcounter;      
            })
            document.getElementsByClassName('delete-icon')[0].addEventListener('click', function(){
                var element = document.getElementById("message" + message.id);
                api.deleteMessage(message.id);
                element.parentNode.removeChild(element);
                if(api.getlength() >= 5){
                    setHTML(message);
                }
                
            })
            
    }




    window.onload = function() {
        api.getMessages().forEach(insertMessages);
        // your code goes here
        document.getElementById('create_message_form').addEventListener('submit', function(e){
            // prevent from refreshing the page on submit
            e.preventDefault();
            // read form elements
            var username = document.getElementById("post_name").value;
            var content = document.getElementById("post_content").value;
            var upcounter = 0;
            var downcounter = 0;
            // clean form
            document.getElementById("create_message_form").reset();
            var message = api.addMessage(username, content);
            insertMessages(message);
            

        });
    }

    function setLastMessage(message){
        var e = document.createElement('div');
            e.id = "message" + message.id;
            var upcounter = message.upvote;
            var downcounter = message.downvote;
            e.className = "message";
            e.innerHTML=`
                <div class="message_user">
                    <img class="message_picture" src="media/user.png" alt="${message.author}">
                    <div class="message_username">${message.author}</div>
                </div>
                <div class="message_content">${message.content}</div>
                <div class="upvote-icon icon">${upcounter}</div>
                <div class="downvote-icon icon">${downcounter}</div>
                <div class="delete-icon icon"></div>
            `;
            // add this element to the document
            document.getElementById("messages").append(e);
    }

    function setHTML(message){
        var e = document.createElement('div');
        document.getElementById("messages").innerHTML = '';
            var msg = api.getMessages(message.id)
            // add this element to the document
            e.className = "message";
            for(var i = 0; i <= 4; i++){
                insertMessages(msg[i]);
            }     
    }
}());


