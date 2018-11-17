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