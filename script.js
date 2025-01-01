function playRound() {

    // Reset choices
    let humanChoice = ``
    let computerChoice = ``

    // Gets players choice
    function getHumanChoice() {
        let humanPrompt = ""
        humanPrompt = prompt(`Choose 'rock', 'paper' or 'scissors'`)
        humanPrompt = humanPrompt.toLowerCase()
        // console.log(humanPrompt)

        while (humanPrompt !== `rock` && humanPrompt !== `paper` && humanPrompt !== `scissors`) {
            humanPrompt = prompt(`Wrong input, please choose 'Rock', 'Paper' or 'Scissors'`)
            humanPrompt = humanPrompt.toLowerCase()
            // console.log(humanPrompt)
        }

        console.log(`Player chooses: ` + humanPrompt)
        return humanPrompt
    }

    // Gets computers choice
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

    // Get choices
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    // Determine the winner
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

// Play round
// console.log(playRound())