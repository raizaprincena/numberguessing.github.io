let min, max, randomNumber, triesLeft;

function startGame() {
  const possibleRanges = [50, 75, 100];
  max = possibleRanges[Math.floor(Math.random() * possibleRanges.length)];
  min = 1;
  randomNumber = Math.floor(Math.random() * max) + min;
  triesLeft = 5;

  document.getElementById("rangeDisplay").textContent =
    `Guess a number between ${min} and ${max}`;
  document.getElementById("message").textContent = "";
  document.getElementById("triesLeft").textContent = `Tries left: ${triesLeft}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  triesLeft--;
  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    disableInput();
  } else if (triesLeft === 0) {
    message.textContent = `❌ Out of tries! The correct number was ${randomNumber}.`;
    disableInput();
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }

  document.getElementById("triesLeft").textContent = `Tries left: ${triesLeft}`;
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}

function restartGame() {
  startGame();
}

// Start on page load
startGame();
