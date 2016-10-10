console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Hello';
//move the image
var img = document.getElementById('img');
img.onclick =function () {
    img.style.marginLeft = '100px';
}