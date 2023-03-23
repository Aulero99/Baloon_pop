let startButton = document.getElementById("start-button");
let inflateButton = document.getElementById("inflate-button");
let clickCountElem = document.getElementById("click-count");

let clickCount = 0;
let balloonHeight = 120;
let balloonWidth = 100;
let inflationRate = 20;
let maxSize = 300;
let popCount = 0;
let gameLength = 4000;
let timeRemain = 0; 
let clockId = 0;



function startGame(){
    startButton.setAttribute("disabled", "true");
    inflateButton.removeAttribute("disabled");
    startClock();
    setTimeout(stopGame, gameLength);
}

function startClock(){
    timeRemain = gameLength;
    drawClock();
    clockId = setInterval(drawClock, 1000);
}

function stopClock(){
    clearInterval(clockId);
}

function drawClock() {
    let countdown = document.getElementById("countdown");
    countdown.innerText = (timeRemain/1000).toString();
    timeRemain -= 1000;
    console.log(timeRemain);
}

function inflate(){
    clickCount++;
    balloonHeight += inflationRate;
    balloonWidth += inflationRate;
    draw();
    
    if (balloonHeight >= maxSize){
        popCount++;
        console.log("Popped " + popCount);
        balloonHeight = 10;
        balloonWidth = 10;
        draw();
    }
    
};

function draw() {
    let balloonElement = document.getElementById("balloon");
    
    balloonElement.style.height = balloonHeight + "px";
    balloonElement.style.width = balloonWidth + "px";
    
    document.getElementById("pop-count").innerText = popCount.toString();
    clickCountElem.innerText = clickCount.toString();
};

function stopGame() {
        stopClock();
        console.log ("game over");
        inflateButton.setAttribute("disabled", "true");
        startButton.removeAttribute("disabled");

        console.log("Clicked " + clickCount + " times.");
        console.log("Popped " + popCount + " baloons.");
        clickCount = 0;
        popCount = 0;
        balloonHeight = 120;
        balloonWidth = 100;

        draw();
};