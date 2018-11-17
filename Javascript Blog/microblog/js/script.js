window.onload = function() {
    document.getElementById("create_message_form").addEventListener('submit', function(e){
        // prevent from refreshing the page on submit
        e.preventDefault();
        // read form elements
        username = document.getElementById("post_name").value;
        content = document.getElementById("post_content").value;
        // clean form
        document.getElementById("create_message_form").reset();
        // create a new message element
        elmt = document.createElement('div');
        elmt.id = "message" + document.getElementsByClassName('message').length;
        elmt.className = "message";
        elmt.innerHTML=`
            <div class="message_user">
                <img class="message_picture" src="media/user.png" alt="${username}">
                <div class="message_username">${username}</div>
            </div>
            <div class="message_content">${content}</div>
            <div class="upvote-icon icon">0</div>
            <div class="downvote-icon icon">0</div>
            <div class="delete-icon icon"></div>
        `;
        // upvote and downvote
        document.getElementById("messages").prepend(elmt);
        document.getElementsByClassName('upvote-icon')[0].addEventListener('click', function(){
                var num = Number(this.textContent);
                this.textContent = num+1;
        })
            document.getElementsByClassName('downvote-icon')[0].addEventListener('click', function(){
                var num = Number(this.textContent);
                this.textContent = num+1;     
        })
        // add the delete event listener
        document.getElementsByClassName('delete-icon')[0].addEventListener('click', function(){
                var element = document.getElementById(this.parentNode.id);
                element.parentNode.removeChild(element);
        })
    });
}
