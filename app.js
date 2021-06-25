// create a func that generate and return a random between rock, paper and scissor
function computerPlay() {
  let computerHand;
  let randomHand = Math.floor(Math.random() * 3 + 1);
  if (randomHand === 1) {
    computerHand = "rock";
  } else if (randomHand === 2) {
    computerHand = "paper";
  } else if (randomHand === 3) {
    computerHand = "scissor";
  }
  return computerHand;
}

// function that logically compares the selection between the player and computer selections to determine who wins or lose
function playRound(playerHand, computerHand) {
  if (playerHand === "rock" && computerHand === "rock") {
    return "It is a tie.";
  } else if (playerHand === "rock" && computerHand === "paper") {
    return "You lose :(";
  } else if (playerHand === "rock" && computerHand === "scissor") {
    return "You Win! :)";
  }

  if (playerHand === "paper" && computerHand === "rock") {
    return "You Win! :)";
  } else if (playerHand === "paper" && computerHand === "paper") {
    return "It is a tie.";
  } else if (playerHand === "paper" && computerHand === "scissor") {
    return "You lose :(";
  }

  if (playerHand === "scissor" && computerHand === "rock") {
    return "You lose :(";
  } else if (playerHand === "scissor" && computerHand === "paper") {
    return "You Win! :)";
  } else if (playerHand === "scissor" && computerHand === "scissor") {
    return "It is a tie.";
  }
}

// gets input(data id) using click eventlistener for each hand icon then pass it on game()
const handBtn = document.querySelectorAll(".hand");

handBtn.forEach(function (hand) {
  hand.addEventListener("click", function (e) {
    let playerHandPick = e.currentTarget.dataset.id;
    game(playerHandPick);
  });
});

// game() variables
let playerScore = -1;
let computerScore = -1;
let numberOfRnds = 5;
const playerBox = document.querySelector(".player-box");
const computerBox = document.querySelector(".computer-box");
const result = document.querySelector(".result");
const playerScore_El = document.querySelectorAll(".player-score");
const computerScore_El = document.querySelectorAll(".computer-score");
const selectHandText = document.querySelector(".select-hand");
const newGameBtn = document.querySelector(".new-game-button");

// create a function that determines the winner when the user/computer scores 5 points
function game(playerHandPick) {
  // get user and computer input
  const playerHand = playerHandPick;
  const computerHand = computerPlay();
  const roundResult = playRound(playerHand, computerHand);

  //add graphical icons
  // display selected hand sign
  // for player
  if (playerHand === "rock") {
    if (!playerBox.classList.contains("fa-hand-rock")) {
      playerBox.classList.remove("fa-hand-paper");
      playerBox.classList.remove("fa-hand-scissors");
      playerBox.classList.add("far");
      playerBox.classList.add("fa-hand-rock");
    }
  } else if (playerHand === "paper") {
    if (!playerBox.classList.contains("fa-hand-paper")) {
      playerBox.classList.remove("fa-hand-rock");
      playerBox.classList.remove("fa-hand-scissors");
      playerBox.classList.add("far");
      playerBox.classList.add("fa-hand-paper");
    }
  } else {
    if (!playerBox.classList.contains("fa-hand-scissors")) {
      playerBox.classList.remove("fa-hand-rock");
      playerBox.classList.remove("fa-hand-paper");
      playerBox.classList.add("far");
      playerBox.classList.add("fa-hand-scissors");
    }
  }
  // for computer
  if (computerHand === "rock") {
    if (!computerBox.classList.contains("fa-hand-rock")) {
      computerBox.classList.remove("fa-hand-paper");
      computerBox.classList.remove("fa-hand-scissors");
      computerBox.classList.add("far");
      computerBox.classList.add("fa-hand-rock");
    }
  } else if (computerHand === "paper") {
    if (!computerBox.classList.contains("fa-hand-paper")) {
      computerBox.classList.remove("fa-hand-rock");
      computerBox.classList.remove("fa-hand-scissors");
      computerBox.classList.add("far");
      computerBox.classList.add("fa-hand-paper");
    }
  } else {
    if (!computerBox.classList.contains("fa-hand-scissors")) {
      computerBox.classList.remove("fa-hand-rock");
      computerBox.classList.remove("fa-hand-paper");
      computerBox.classList.add("far");
      computerBox.classList.add("fa-hand-scissors");
    }
  }

  //add graphical result
  if (roundResult === "You Win! :)") {
    playerScore++;
    result.textContent = `YOU WIN!!! ${playerHand.toUpperCase()} BEATS ${computerHand.toUpperCase()}`;

    // black circle score indicator || score system
    playerScore_El.forEach(function (score, index) {
      if (index === playerScore) {
        score.style.backgroundColor = "black";
      }
    });
  } else if (roundResult === "You lose :(") {
    computerScore++;
    result.textContent = `YOU LOSE... ${computerHand.toUpperCase()} BEATS ${playerHand.toUpperCase()}`;

    computerScore_El.forEach(function (score, index) {
      if (index === computerScore) {
        score.style.backgroundColor = "black";
      }
    });
  } else {
    result.textContent = "TIE";
  }

  // game resets
  if (playerScore >= 4) {
    result.textContent = "VICTORY!!!!!!!";
    reset();
  } else if (computerScore === 4) {
    result.textContent = "DEFEAT......";
    reset();
  }
}

// reset values
function reset() {
  handBtn.forEach(function (hand) {
    hand.style.visibility = "hidden";
  });
  selectHandText.style.visibility = "hidden";
  newGameBtn.classList.add("show-new-game");
}

reset();

// new game
// re initialize
newGameBtn.addEventListener("click", function () {
  newGame();
});

function newGame() {
  playerScore = -1;
  computerScore = -1;
  playerScore_El.forEach(function (score, index) {
    score.style.backgroundColor = "white";
  });
  computerScore_El.forEach(function (score, index) {
    score.style.backgroundColor = "white";
  });

  handBtn.forEach(function (hand) {
    hand.style.visibility = "visible";
  });
  selectHandText.style.visibility = "visible";
  newGameBtn.classList.remove("show-new-game");
  result.textContent = "Test your luck! First to 5 points.";

  // remove display
  playerBox.classList.remove("fa-hand-rock");
  playerBox.classList.remove("fa-hand-scissors");
  playerBox.classList.remove("fa-hand-paper");
  computerBox.classList.remove("fa-hand-rock");
  computerBox.classList.remove("fa-hand-scissors");
  computerBox.classList.remove("fa-hand-paper");
}
