console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';


var img = document.getElementById('madi')
var marginLeft = 0;
function moveLeft() {
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px'; 
}
img.onclick = function() {
  var interval = setInterval(moveLeft , 50);  
};