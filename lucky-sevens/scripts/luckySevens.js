function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1
}

function validateBet() {
    let bet = document.forms["luckySevens"]["startingBet"].value
    bet = bet.startsWith("$") ? bet.slice(1) : bet
    
    if (!(bet > 0)) {
        document.getElementById("betHelp").style.display = "block"
        return false
    }

    let result = playLuckySevens(bet)

    document.getElementById("tableStartingBet").innerText = `$${Number(bet).toFixed(2)}`
    document.getElementById("tableTotalRolls").innerText = result[0]
    document.getElementById("tableHighestAmountRollCount").innerText = result[1]
    document.getElementById("tableHighestAmountWon").innerText = `$${Number(result[2]).toFixed(2)}`
    document.getElementById("results").style.display = "block"
    document.getElementById("playButton").innerText = "Play Again"
    return false
}

function playLuckySevens(startingBet) {
    let rollCount = 0
    let rollCountAtHighest = 0
    let highestAmountWon = startingBet
    let gameMoney = startingBet

    while (gameMoney > 0) {
        gameMoney = rollDie(6) + rollDie(6) === 7 ? gameMoney + 4 : gameMoney - 1
        rollCount++

        if (gameMoney > highestAmountWon) {
            highestAmountWon = gameMoney
            rollCountAtHighest = rollCount
        }
    }

    return [rollCount, rollCountAtHighest, highestAmountWon]
}