

var drumButtonsCount = document.querySelectorAll(".drum").length;

for (var i=0; i < drumButtonsCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } );
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


function makeSound (key) {
    switch (key) {
        case "w":
            var soundCrash = new Audio("sounds/crash.mp3");
            soundCrash.play();
            break;

        case "a":
            var soundKick = new Audio("sounds/kick-bass.mp3");
            soundKick.play();
            break;

        case "s":
            var soundSnare = new Audio("sounds/snare.mp3");
            soundSnare.play();
            break;

        case "d":
            var soundTom1 = new Audio("sounds/tom-1.mp3");
            soundTom1.play();
            break;

        case "j":
            var soundTom2 = new Audio("sounds/tom-2.mp3");
            soundTom2.play();
            break;

        case "k":
            var soundTom3 = new Audio("sounds/tom-3.mp3");
            soundTom3.play();
            break;

        case "l":
            var soundTom4 = new Audio("sounds/tom-4.mp3");
            soundTom4.play();
            break;
    
        default:console.log(key)
    }
}