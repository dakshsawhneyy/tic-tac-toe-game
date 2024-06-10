let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let topPara = document.querySelector("#top");
let topDiv = document.querySelector(".top-text");
let h1 = document.querySelector(".h1");

let winO;
let clickCount = 0;

let resetGame = () => {
  enableBoxes();
  topDiv.classList.add("hide");
  resetCount();
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


let click = () => {
  clickCount++;
  if (clickCount === 9) {
    console.log("Game is draw");
    topPara.innerText = "Game Is Draw, Try Again";
    topDiv.classList.remove("hide");
  }
};

let resetCount = () => {
  clickCount = 0;
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (winO === true) {
      box.innerText = "O";
      winO = false;
    } else {
      box.innerText = "X";
      winO = true;
    }
    box.disabled = true;
    checkWinner();

    click();
  });
});

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner is", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

let showWinner = (winner) => {
  topPara.innerText = `Congratulations, Winner is ${winner}`;
  topDiv.classList.remove("hide");
  disableBoxes();
};

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
