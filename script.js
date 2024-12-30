function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        return `Rock`
    } else if (randomNumber <= 0.66) {
        return `Paper`
    } else {
        return `Scissors`
    }
}

console.log(`--Computer chooses: ` + getComputerChoice())

function getHumanChoice() {
    return prompt(`Choose 'Rock', 'Paper' or 'Scissors'`)
}

console.log(`--Human chooses: ` + getHumanChoice())