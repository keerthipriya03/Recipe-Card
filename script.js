const text = "Hello, welcome to my world!";
let index = 0;
function type() {
    if (index < text.length) {
        document.getElementsByClassName("typing-txt").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
// type();

let hrs = 0;
let min = 30;
let sec = 0;
let interval;
const timerElement = document.getElementById("timer");
function updateTimerDisplay(){
        timerElement.innerHTML = String(hrs).padStart(2,'0')+":"+String(min).padStart(2,'0')+":"+String(sec).padStart(2,'0');
}
    function startTimer(){
        if(!interval){
            interval= setInterval(()=>{
            if(hrs==0 && min==0 && sec==0){
                clearInterval(pause);
                timerElement.innerHTML = "Time is Over!!";
            }
            else{
                if(sec==0){
                    if(min==0){
                        hrs--;
                        min=59;
                    }
                    else{
                    min--;
                    }
                    sec=59;
                }
                else{
                sec--;
                }
                updateTimerDisplay();
            }
            },1000);
        }
    }
    function stopTimer(){
        clearInterval(interval);
        interval = null;
    }
    function resetTimer(){
        stopTimer();
        hrs=0;
        min=30;
        sec=0;
        updateTimerDisplay();
    }
    // updateTimerDisplay();

function ingredients(){
    const ingredientsDiv = document.getElementById("items");
    const button = document.querySelector("button");

    if (ingredientsDiv.style.display === "none") {
            ingredientsDiv.style.display = "block";
            button.innerText = "";
    } 
    else {
            ingredientsDiv.style.display = "none";
            button.innerText = "Show Ingredients";
    }
}

// func. for buttons
function toggle(id, btn) {
    const section = document.getElementById(id);
    if (section.style.display === "none") {
        section.style.display = "block";
        btn.innerText = "Hide " + capitalize(id);
    } else {
        section.style.display = "none";
        btn.innerText = "Show " + capitalize(id);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// progress bar logic
let currentStep = 0;

function startCooking() {
    const steps = document.querySelectorAll("#steps li");
    if (steps.length === 0) return;

    steps.forEach(step => step.style.background = "");
    currentStep = 0;
    steps[currentStep].style.background = "#e0f7fa";
    updateProgressBar(steps.length, currentStep);
}

function nextStep() {
    const steps = document.querySelectorAll("#steps li");
    if (currentStep < steps.length - 1) {
        steps[currentStep].style.background = "";
        currentStep++;
        steps[currentStep].style.background = "#e0f7fa";
        updateProgressBar(steps.length, currentStep);
    }
}

function updateProgressBar(total, current) {
    const bar = document.getElementById("progress");
    const percent = ((current + 1) / total) * 100;
    bar.style.width = percent + "%";
}
