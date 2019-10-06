const game = () => {
    let pScore = 0;
    let cScore = 0;
    let playerTag = "No Name Guy";

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const playerTagInput = document.querySelector(".playerTag");
        const playerNameContainer = document.querySelector(".player-score h2");

        playBtn.addEventListener("click", () => {
            if (playerTagInput.value.length !== 0) {
                playerTag = playerTagInput.value;
                playerNameContainer.textContent = playerTag;
            } else {
                playerNameContainer.textContent = playerTag;
            }
            introScreen.classList.add("fadeOut");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");


        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            })
        })

        // Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((element) => {
            element.addEventListener("click", function () {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // Player Choice
                const playerChoice = this.textContent;

                // Add hand animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                // Delay everything to match with the end of the above animation
                setTimeout(() => {
                    // Update images
                    playerHand.src = `./assets/${playerChoice}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                    // Here we compare hands
                    compareHands(playerChoice, computerChoice);
                }, 2000);

            });
        });

    };

    const udpateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update Text
        const winner = document.querySelector(".winner");

        // Check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            return;
        }

        // Check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = `${playerTag} Wins :D`;
                pScore++;
                udpateScore();
                return;
            } else if (computerChoice === "paper") {
                winner.textContent = "Computer Wins :(";
                cScore++;
                udpateScore();
                return;
            }
        }

        // Check for papper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = `${playerTag} Wins :D`;
                pScore++;
                udpateScore();
                return;
            } else if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins :(";
                cScore++;
                udpateScore();
                return;
            }
        }

        //Check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = `${playerTag} Wins :D`;
                pScore++;
                udpateScore();
                return;
            } else if (computerChoice === "rock") {
                winner.textContent = "Computer Wins :(";
                cScore++;
                udpateScore();
                return;
            }
        }
    }

    // Call all the inner functions
    startGame();
    playMatch();
};

// Start game
game();