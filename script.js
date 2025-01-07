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

	//Get choices
	computerChoice = getComputerChoice()

	// Determine the winner
	let score = 0

	function battle() {
		if (humanChoice === computerChoice) {
			return `You Draw! both players chose ` + humanChoice
		} else if (humanChoice === `rock` && computerChoice === `scissors`) {
			score++
			humanScore++
			return `You Win! Rock smashes scissors`
		} else if (humanChoice === `paper` && computerChoice === `rock`) {
			score++
			humanScore++
			return `You Win! Paper wraps rock`
		} else if (humanChoice === `scissors` && computerChoice === `paper`) {
			score++
			humanScore++
			return `You Win! Scissors cuts paper`
		} else if (humanChoice === `scissors` && computerChoice === `rock`) {
			score--
			computerScore++
			return `You Lose! Rock smashes scissors`
		} else if (humanChoice === `rock` && computerChoice === `paper`) {
			score--
			computerScore++
			return `You Lose! Paper wraps rock`
		} else if (humanChoice === `paper` && computerChoice === `scissors`) {
			score--
			computerScore++
			return `You Lose! Scissors cuts paper`
		} else {
			return `playRound() has bug? xD`
		}
	}

	//Print stuff
	resultHuman.textContent = `Player chooses: ` + humanChoice
	resultComputer.textContent = `Computer chooses: ` + computerChoice
	resultFinal.textContent = battle()
	if (score > 0) {
		resultFinal.style.color = "rgb(255, 90, 31)"
	} else if (score < 0) {
		resultFinal.style.color = "rgb(31, 173, 255)"
	} else if (score === 0) {
		resultFinal.style.color = "white"
	}
	vs.textContent = humanScore + " VS " + computerScore

	//5 rounds mechanic
	if (humanScore == 5 || computerScore == 5) {
		if (humanScore > computerScore) {
			resultFinal.textContent = "Congratulations! You won the tournament!"
			resultFinal.style.color = "rgb(255, 90, 31)"
		} else {
			resultFinal.textContent = "Oh no! :C  The computer won the tournament.."
			resultFinal.style.color = "rgb(31, 173, 255)"
		}

		humanScore = 0
		computerScore = 0
	}
}

// Play X amount of rounds (NO LONGER USED)
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

//Text UI
let resultHuman = document.querySelector("#resultHuman")
let resultComputer = document.querySelector("#resultComputer")
let resultFinal = document.querySelector("#resultFinal")
let vs = document.querySelector("#vs")

//Buttons
rock.addEventListener("click", function () {
	console.log(playRound(`rock`))
})
paper.addEventListener("click", function () {
	console.log(playRound(`paper`))
})
scissors.addEventListener("click", function () {
	console.log(playRound(`scissors`))
})
