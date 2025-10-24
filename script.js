let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let winnerTitle = document.getElementById("winnerTitle");
let playerA , playerB, winner;

let options = ["rock", "scissor", "paper"];

btn1.addEventListener("click", () => {
    // playerA = Math.floor(Math.random()*options.length);
    playerA = document.getElementById("inputA").value;
    winnerTitle.textContent = "Player B It's Ur Turn";

});

// rock > scissor , scissor > paper, paper > rock
btn2.addEventListener("click", () => {
    // playerB = Math.floor(Math.random()*options.length);
    playerB = document.getElementById("inputB").value;
    winnerTitle.textContent = "Check Winner";

});


result.addEventListener("click", () => {
    if (playerA === playerB) {
        winnerTitle.textContent = "TIE TIE TIE";
    }
    else if(playerA !== "rock" || playerA !== "scissor" || playerA !== "paper") {
        winnerTitle.textContent = "Invalid Choice by player A"
    }
    else if(playerB !== "rock" || playerB != "scissor" || playerB !== "paper") {
        winnerTitle.textContent = "Invalid Choice by player B"
    }
    else 
    {
        playerA = playerA.trim().toLowerCase();
        playerB = playerB.trim().toLowerCase();
        if ((playerA === "rock" && playerB === "scissor") || (playerA === "scissor" && playerB === "paper") || (playerA === "paper" && playerB === "rock")) {
            winner = "A";
        }
        else {
            winner = "B";
        }
        winnerTitle.textContent = "Winner is: " + winner;
    }
})