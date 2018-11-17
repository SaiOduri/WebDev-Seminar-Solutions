var api = (function(){
    "use strict"
    var module = {};

    if(!localStorage.getItem('message')){
        localStorage.setItem('message', JSON.stringify({next: 0, items: []}));
    }

    /*  ******* Data types *******
        message objects must have at least the following attributes:
            - (String) messageId 
            - (String) author
            - (String) content
            - (Int) upvote
            - (Int) downvote 
    
    ****************************** */ 
    
    // add a message
    // return an message object
    
    module.addMessage = function(author, content){
        // store data here
        var message = JSON.parse(localStorage.getItem('message'));
        var upvote = 0;
        var downvote = 0;
        var item = {id: message.next++, author: author, 
            content: content, upvote: upvote, downvote: downvote}
        message.items.push(item);
        localStorage.setItem('message', JSON.stringify(message));
        return item;
    }
    
    // delete a message given its messageId
    // return an message object
    module.deleteMessage = function(messageId){
        var message = JSON.parse(localStorage.getItem('message'));
        var index = message.items.findIndex(function(item){
            return item.id == messageId;
        });
        if (index == -1) return null;
        var item = message.items[index];
        message.items.splice(index, 1);
        localStorage.setItem('message', JSON.stringify(message));
        return item;
    }


    // upvote a message given its messageId
    // return an message object
    module.upvoteMessage = function(messageId){
        var message = JSON.parse(localStorage.getItem('message'));
        var index = message.items.findIndex(function(item){
            return item.id == messageId;
        })
        if (index == -1) return null;
        var item = message.items[index];
        item.upvote++;
        localStorage.setItem('message', JSON.stringify(message));
        return item;
    }
    
    // downvote a message given its messageId
    // return an message object
    module.downvoteMessage = function(messageId){
        var message = JSON.parse(localStorage.getItem('message'));
        var index = message.items.findIndex(function(item){
            return item.id == messageId;
        })
        if (index == -1) return null;
        var item = message.items[index];
        item.downvote++;
        localStorage.setItem('message', JSON.stringify(message));
        return item;
    }
    
    // get 5 latest messages given an offset 
    // return an array of message objects
    module.getMessages = function(offset=0){
        var message = JSON.parse(localStorage.getItem('message'));
        var temp_return = []
        if(message.items.length > 5){
            offset = message.items.length - 5;
            temp_return = message.items.slice(offset, offset + 5);
        }
        else{
            temp_return = message.items;
        }
        return temp_return;

    }

    module.getlength = function(){
        var message = JSON.parse(localStorage.getItem('message'));
        return message.items.length;
    }
    
    
    return module;
})();