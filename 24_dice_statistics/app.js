const outputDiceRoll = document.getElementById("outputDiceRoll");
const outputDiceRollArray = document.getElementById("outputDiceRollArray");
const outputDiceRollStats = document.getElementById("outputDiceRollStats");

const diceRolls = [];

function randomD6(){
    let r = Math.random() * 6;
    return Math.ceil(r);
}

function rollDice(){
    diceRolls.push(randomD6());
    outputData();
}

function createDiceStats(){
    let frequency = [0,0,0,0,0,0,0];
    for (let dice of diceRolls){
        frequency[dice]++;
    }
    return frequency;
}

function outputData(){
    let lastDiceRoll = diceRolls[diceRolls.length - 1];
    outputDiceRoll.innerHTML = `<h1>${lastDiceRoll}</h1>`;

    outputDiceRollArray.innerHTML = diceRolls.toString();

    let f = createDiceStats();
    let statsHTML = "<table><tr>";
    for (let d = 1; d < 7; ++d){
        statsHTML += `<th>${d}</th>`;
    }
    statsHTML += "</tr><tr>";
    for (let d = 1; d < 7; ++d){
        statsHTML += `<td>${f[d]}</td>`;
    }
    statsHTML += "</tr></table>";
    outputDiceRollStats.innerHTML = statsHTML;
}