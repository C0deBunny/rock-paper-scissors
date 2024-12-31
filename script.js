function getComputerChoice() {  // function to get the computer choice
    let randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        return `rock`
    } else if (randomNumber <= 0.66) {
        return `paper`
    } else {
        return `scissors`
    }
}



function getHumanChoice() { // function to get the players choice
    let humanPrompt = ""
    humanPrompt = prompt(`Choose 'Rock', 'Paper' or 'Scissors'`)
    humanPrompt = humanPrompt.toLowerCase()
    // console.log(humanPrompt)
    while (humanPrompt !== `rock` && humanPrompt !== `paper` && humanPrompt !== `scissors`) {
        humanPrompt = prompt(`Wrong input, please choose 'Rock', 'Paper' or 'Scissors'`)
        humanPrompt = humanPrompt.toLowerCase()
        // console.log(humanPrompt)
    }
    return humanPrompt
}

let humanScore = 0
let computerScore = 0

// console.log(`humanScore: ` + humanScore + ` and computerScore: ` + computerScore)



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `You Draw! both players chose ` + humanChoice
    } else if (humanChoice === `rock` && computerChoice === `scissors`) {
        return `You Win! Rock smashes scissors`
    } else if (humanChoice === `paper` && computerChoice === `rock`) {
        return `You Win! Paper wraps rock`
    } else if (humanChoice === `scissors` && computerChoice === `paper`) {
        return `You Win! Scissors cuts paper`
    } else if (humanChoice === `scissors` && computerChoice === `rock`) {
        return `You Lose! Rock smashes scissors`
    } else if (humanChoice === `rock` && computerChoice === `paper`) {
        return `You Lose! Paper wraps rock`
    } else if (humanChoice === `paper` && computerChoice === `scissors`) {
        return `You Lose! Scissors cuts paper`
    } else {
        return `playRound() has bug? xD`
    }
}

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))