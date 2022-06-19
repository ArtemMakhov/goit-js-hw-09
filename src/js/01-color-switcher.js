function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let timerId = null;
let isActive = false;


startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
    timerId = setInterval(() => {
      
      changeBackgroundColor()  
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    isActive = false;
});


function changeBackgroundColor() { 
    body.style.backgroundColor = getRandomHexColor(); 
};
