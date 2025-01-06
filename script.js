// Scoreboard
let humanScore = 0
let computerScore = 0

// Play one Round
function playRound(humanChoice) {
	//Gets computers choice
	function getComputerChoice() {
		let randomNumber = Math.random()

		if (randomNumber <= 0.33) {
			console.log(`Computer chooses: rock`)
			return `rock`
		} else if (randomNumber <= 0.66) {
			console.log(`Computer chooses: paper`)
			return `paper`
		} else {
			console.log(`Computer chooses: scissors`)
			return `scissors`
		}
	}

	// // Get choices
	console.log(`Player chooses: ` + humanChoice)
	computerChoice = getComputerChoice()

	// Determine the winner
	if (humanChoice === computerChoice) {
		return console.log(`You Draw! both players chose ` + humanChoice)
	} else if (humanChoice === `rock` && computerChoice === `scissors`) {
		humanScore++
		return `You Win! Rock smashes scissors`
	} else if (humanChoice === `paper` && computerChoice === `rock`) {
		humanScore++
		return `You Win! Paper wraps rock`
	} else if (humanChoice === `scissors` && computerChoice === `paper`) {
		humanScore++
		return `You Win! Scissors cuts paper`
	} else if (humanChoice === `scissors` && computerChoice === `rock`) {
		computerScore++
		return `You Lose! Rock smashes scissors`
	} else if (humanChoice === `rock` && computerChoice === `paper`) {
		computerScore++
		return `You Lose! Paper wraps rock`
	} else if (humanChoice === `paper` && computerChoice === `scissors`) {
		computerScore++
		return `You Lose! Scissors cuts paper`
	} else {
		return `playRound() has bug? xD`
	}
}

// Play X amount of rounds
function playRoundX() {
	// Reset score
	humanScore = 0
	computerScore = 0

	roundNumber = prompt(`How many rounds do you wish to play?`)
	while (!parseInt(roundNumber)) {
		alert(roundNumber + ` is not a number..  :c`)
		roundNumber = prompt(`How many rounds do you wish to play?`)
	}
	// console.log(roundNumber)

	for (i = 0; i < roundNumber; i++) {
		console.log(`Start round: ` + (i + 1))
		console.log(playRound())
		console.log(``)
		console.log(`Scoreboard:`)
		console.log(`Player score: ` + humanScore + ` | Computer score: ` + computerScore)
		console.log(``)
	}

	if (humanScore > computerScore) {
		console.log(`You won the battle! :D`)
	} else if (humanScore < computerScore) {
		console.log(`HAHA COMPUTER WON! YOU SUCK! XD`)
	} else {
		console.log(`Looks like it's a draw.. well played!`)
	}
}

//Buttons UI
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let result = document.querySelector("#result")

rock.addEventListener("click", function () {
	console.log(playRound(`rock`))
})
paper.addEventListener("click", function () {
	console.log(playRound(`paper`))
})
scissors.addEventListener("click", function () {
	console.log(playRound(`scissors`))
})
