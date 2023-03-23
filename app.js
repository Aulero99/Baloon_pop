let startButton = document.getElementById("start-button");
let inflateButton = document.getElementById("inflate-button");

let clickCount = 0;
let balloonHeight = 120;
let balloonWidth = 100;
let inflationRate = 20;
let maxSize = 300;
let popCount = 0;
let timer = 2000;



function startGame(){
    startButton.setAttribute("disabled", "true");
    inflateButton.removeAttribute("disabled");
    setTimeout(() => {
        inflateButton.setAttribute("disabled", "true");
        startButton.removeAttribute("disabled");

        console.log(timer);
    }, timer);
}

function inflate(){
    let clickCountElem = document.getElementById("click-count");

    clickCount++;
    clickCountElem.innerText = clickCount.toString();
    balloonHeight += inflationRate;
    balloonWidth += inflationRate;
    draw();

    if (balloonHeight >= maxSize){
        console.log("Pop the Balloon");
        popCount++;
        document.getElementById("pop-count").innerText = popCount.toString();
        balloonHeight = 10;
        balloonWidth = 10;
        draw();
    }
    
};

function draw() {
    let balloonElement = document.getElementById("balloon");
    
    balloonElement.style.height = balloonHeight + "px";
    balloonElement.style.width = balloonWidth + "px";
    
}
