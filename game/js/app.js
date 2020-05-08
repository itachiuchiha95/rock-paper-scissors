const game = () =>{
	let pScore = 0;
	let cScore = 0;

	const startGame = () =>{
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () =>{
			introScreen.classList.add("fade-out");
			match.classList.add("fade-in");
		});
	};


	//play Match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");

		//Computer options
		const computerOptions = ["rock", "paper", "scissors"];

		options.forEach(option => {
			option.addEventListener('click',function(){
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				//her is where we call compare hands
				compareHands(this.textContent, computerChoice);

				console.log(computerChoice);

				//update images
				playerHand.src = `./assets/${this.textContent}.png`;
				computerHand.src = `./assets/${computerChoice}.png`;

			});
		});

	};

	const updateScore = () =>{
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};


	const compareHands = (playerChoice, computerChoice) =>{
		const winner = document.querySelector('.winner');

		if(playerChoice == computerChoice){
			winner.textContent = "It is a tie";
			return;
		}

		if(playerChoice === "rock"){
			if(computerChoice === "scissors"){
				winner.textContent = "Player Wins"
				pScore++;
				updateScore();
				return;
			} else{
				winner.textContent = "Computer Wins";
				cScore++;
				updateScore();

				return;
		}

	}
			//Check for paper
		if(playerChoice === "paper"){
			if(computerChoice === "scissors"){
				winner.textContent = "Computer Wins"
				cScore++;
				updateScore();
			} else{
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
		}

	}


		if(playerChoice === "scissors"){
			if(computerChoice === "rock"){
				winner.textContent = "Computer Wins"
				cScore++;
				updateScore();
			} else{
				winner.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
		}

	}

};

	//call the inner function
	startGame();
	playMatch();
};

//start the game function
game();