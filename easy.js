let randomNumber;
let attemptsLeft = 3;

    function openPopup() {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("gamePopup").style.display = "block";
      startGame(); // Initialize the game when popup opens
    }

    function closePopup() {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("gamePopup").style.display = "none";
      resetGame(); // Reset the game when popup closes
    }

    function startGame() {
      randomNumber = Math.floor(Math.random() * 5) + 1; // Random number between 1-10
      attemptsLeft = 3;
      document.getElementById("feedback").textContent = "";
      document.getElementById("attempts").textContent = `Attempts left: ${attemptsLeft}`;
    }

    function submitGuess() {
      const userGuess = parseInt(document.getElementById("guessInput").value);
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 10!";
        return;
      }

      attemptsLeft--;

      if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = "Congratulations! You guessed the correct number!";
        disableGame();
      } else {
        const difference = Math.abs(randomNumber - userGuess);
        let feedbackMessage = "Wrong! You're cold.";
        if (difference <= 3) {
          feedbackMessage = "Wrong! You're warm though!";
        }
        
        if (attemptsLeft === 0) {
          document.getElementById("feedback").textContent = `Game Over! The correct number was ${randomNumber}.`;
          disableGame();
        } else {
          document.getElementById("feedback").textContent = feedbackMessage;
          document.getElementById("attempts").textContent = `Attempts left: ${attemptsLeft}`;
        }
      }
    }

    function disableGame() {
      document.getElementById("guessInput").disabled = true;
    }

    function resetGame() {
      document.getElementById("guessInput").disabled = false;
      document.getElementById("guessInput").value = "";
    }