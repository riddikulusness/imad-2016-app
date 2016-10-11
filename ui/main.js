console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Hello';
//move the image
var img = document.getElementById('twitter');
img.onclick =function () {
    var marginLeft = 0;
    function moveRight(){
        marginLeft= marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
    }
    var interval = setInterval(moveRight, 50)
    img.style.marginLeft = '100px';
}