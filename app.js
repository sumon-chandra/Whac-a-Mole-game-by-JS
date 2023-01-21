const time = document.getElementById("time");
const score = document.getElementById("score");
const boxes = document.querySelectorAll(".box");
const btn = document.getElementById("btn");

let result = 00;
let timeLeft = 60;
let randomBoxId = null;
let moveBox;
let countdownFunc;

function handleRandomBox() {
  boxes.forEach((box) => {
    box.classList.remove("mole");
  });
  const randomNum = Math.floor(Math.random() * 9);
  let randomBox = boxes[randomNum];
  randomBox.classList.add("mole");
  randomBoxId = randomBox.id;
}

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    result = 00;
    timeLeft = 60;
    moveBox = setInterval(handleRandomBox, 800);
    countdownFunc = setInterval(countDown, 1000);
    btn.textContent = "Stop";
  } else if (btn.textContent === "Stop") {
    alert(`GAME IS OVER⏱️!! Your Score is ${result}`);
    clearInterval(countdownFunc);
    clearInterval(moveBox);
    timeLeft = 10;
    result = 00;
    btn.textContent = "Start";
    boxes.forEach((box) => box.classList.remove("mole"));
  }
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.id === randomBoxId) {
      result++;
      randomBoxId = null;
    }
  });
});
function countDown() {
  timeLeft--;
  if (timeLeft === 0) {
    alert(`GAME IS OVER⏱️!! Your Score is ${result}`);
    clearInterval(countdownFunc);
    clearInterval(moveBox);
    timeLeft = 60;
    result = 00;
    btn.textContent = "Start";
    boxes.forEach((box) => box.classList.remove("mole"));
  }
  time.textContent = timeLeft;
  score.textContent = result;
}
