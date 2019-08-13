/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
let activePlayer = 0 ;
let players = [0,1];
globalScore = "#score-" + players[activePlayer];
globalCurrent = "#current-" + players[activePlayer];
globalInfo = ".info-" + players[activePlayer];

function rollDiceAnimate(){
    document.querySelector(".dice").src = "die.gif";
    setTimeout(rollDiceUpdate, 1000);
}

function rollDiceUpdate(){
    diceNumber = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    updateScore(diceNumber);
}

function updateScore(value){
    if (value == 1){
        document.querySelector(globalInfo).innerText = " - " + document.querySelector(globalCurrent).innerText;
        document.querySelector(globalCurrent).innerText = 0;
        changePlayer();
    }else
    {
    let score = parseInt(document.querySelector(globalCurrent).innerText) +  parseInt(value);
    document.querySelector(globalCurrent).innerText = score;
    document.querySelector(globalInfo).innerText = " + " + value;
    }
}

function holdScore(){
    let toBeHoldedScore = parseInt(document.querySelector(globalCurrent).innerText) + parseInt(document.querySelector(globalScore).innerText);
    document.querySelector(globalScore).innerText = toBeHoldedScore;
    document.querySelector(globalCurrent).innerText = 0;
    document.querySelector(globalInfo).innerHTML = "&nbsp;";
    if (parseInt(document.querySelector(globalScore).innerText) >= 100){
        winner();
    }else{
    changePlayer();
    }
}
function changePlayer(){
    document.querySelector("#player-" + activePlayer).classList.remove("active");
    activePlayer == 0 ? ++activePlayer : --activePlayer;
    document.querySelector("#player-" + activePlayer).classList.add("active");
    globalScore = "#score-" + players[activePlayer];
    globalCurrent = "#current-" + players[activePlayer];
    globalInfo = ".info-" + players[activePlayer];
    return window.activePlayer;
}

function winner(){
    document.querySelector(".btn-roll").classList.add("invisible");
    document.querySelector(".btn-hold").classList.add("invisible");
    document.querySelector(".dice").classList.add("invisible");
    document.querySelector(".info-"+players[activePlayer]).innerText = "### Winner !!! ###";
    document.querySelector(".info-"+players[activePlayer]).classList.add("winner");
}
function newStart(){
    location.reload();
}
function showRules(){
    alert(`GAME RULES:\n
    - The game has 2 players, playing in rounds\n
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his CURRENT score\n
    - BUT, if the player rolls a 1, all his CURRENT score gets lost. After that, it's the next player\'s turn\n
    - The player can choose to \'Hold\', which means that his CURRENT score gets added to his MAIN score. After that, it's the next player\'s turn\n
    - The first player to reach 100 points on MAIN score wins the game\n
    `);
}