window.onload = function() {
        // your code goes here
        document.getElementById('button_1').addEventListener('click', function(f){
            var img = document.getElementById("myImage");
            img.src = 'off.jpg'
        });
        document.getElementById('button_2').addEventListener('click', function(f){
            var img = document.getElementById("myImage");
            img.src = 'on.png'
    });
}