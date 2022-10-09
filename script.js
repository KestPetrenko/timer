let hr = 0;
let min = 0;
let sec = 0;
let t;

let start = document.querySelector(".start").addEventListener("click", funcStart);
let pause = document.querySelector(".pause").addEventListener("click", funcPause);
let reset = document.querySelector(".reset").addEventListener("click", funcReset);

function funcStart() {
    t = setInterval(nextColor, 1000);
    t = setInterval(startTime, 1000);

    document.querySelector(".start").disabled = true;
}

function funcPause() {
    clearInterval(t);
    document.querySelector(".start").disabled = false;
}

function funcReset() {
    clearInterval(t);
    hr = 0;
    min = 0;
    sec = 0;
    document.querySelector(".second").innerHTML = sec;
    document.querySelector(".minuts").innerHTML = min;
    document.querySelector(".hour").innerHTML = hr;
}

let second = document.querySelector(".second");
let minuts = document.querySelector(".minuts");
let hours = document.querySelector(".hour");



function nextColor() {
    second.style.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    minuts.style.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    hours.style.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

    function getRandom(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }
}


function startTime() {
    if (sec < 59) {
        sec++;
        document.querySelector(".second").innerHTML = print(sec);
    } else {
        sec = 0;
        min++;
        document.querySelector(".second").innerHTML = print(sec);
    }
    if (min <= 59) {
        document.querySelector(".minuts").innerHTML = print(min);
    } else {
        min = 0;
        hr++;
        document.querySelector(".minuts").innerHTML = print(min);
    }
    if (hr < 59) {
        document.querySelector(".hour").innerHTML = print(hr);
    } else {
        pause();
    }
}

function print(e) {
    if (e <= 9) {
        return "0" + e;
    } else {
        return e;
    }
}
