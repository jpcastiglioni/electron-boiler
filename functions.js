document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 52:
            document.getElementById('four').play();
            console.log('4 detected');
            break;
        case 65:
            document.getElementById('A').play();
            console.log('a detected');
            break;
        default:
        	console.log("Key is not found!");
    }
};


function play() {
  var audio = new Audio('./sounds/4.mp3');
  audio.play();
  console.log("here i am");
}

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
  play();
  console.log('played');
}