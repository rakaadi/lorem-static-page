// Tic-tac-toe game
const statusDisplay = document.querySelector(".game-status");

let gameActive = true;
let currentPlayer = "X"; // The current player
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `It's a draw!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn(); // let the players know whose turn it is

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("data-cell-index")
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
}

// Event listeners for the game cells, and restart button
document.querySelectorAll(".cell").forEach(cell =>
    cell.addEventListener("click", handleCellClick)
);
// document.querySelector(".game-restart").addEventListener("click", handleRestartGame);

// Number increment decrement
const toThePower = document.getElementById("to-the-power");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const minusSelf = document.getElementById("minus-self");

let value = document.getElementById("number");

toThePower.addEventListener("click", () => {
    value.innerHTML = Number(value.innerHTML) ** 2;
})

increment.addEventListener("click", () => {
    // document.getElementById("number").stepUp(1);
    // console.log(document.getElementById("number").value)
    value.innerHTML = Number(value.innerHTML) + 1;
    // console.log(Number(document.getElementById("number").innerHTML))
})

decrement.addEventListener("click", () => {
    // document.getElementById("number").stepDown(1);

    value.innerHTML = Number(value.innerHTML) - 1;
    // console.log(Number(document.getElementById("number").innerHTML))
})

minusSelf.addEventListener("click", () => {
    value.innerHTML = Math.sqrt(Number(value.innerHTML));
})

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    value.innerHTML = 0;
})