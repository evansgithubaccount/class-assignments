var hands = ['rock','paper','scissors']

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
}

var player1 = {
    name: 'Arya',
    hand: getHand(),
    wins: 0,
    losses: 0,
    aGirl: 'has no name'
}

var player2 = {
    name: 'Sansa',
    hand: getHand(),
    wins:0,
    losses:0,
    queen: 'in the north'
}

var player3 = {
    name: 'Jon',
    hand: getHand(),
    wins:0,
    losses:0,
    knows: null
}

var player4 = {
    name:'Bran',
    hand: getHand(),
    wins:0,
    losses:0,
    spine: 'broken'
}

var userPlayer;
var otherPlayer;

function chooseArya(){userPlayer = player1;otherPlayer = player2; secondPlayer = player3; thirdPlayer = player4; document.getElementById("playerSelect").style.display="none"; playTourney(userPlayer, secondPlayer, thirdPlayer, otherPlayer, 5)}
function chooseSansa(){userPlayer = player2;otherPlayer = player3; secondPlayer = player4; thirdPlayer = player1;document.getElementById("playerSelect").style.display="none"; playTourney(userPlayer, secondPlayer, thirdPlayer, otherPlayer, 5)}
function chooseJon(){userPlayer = player3;otherPlayer = player4; secondPlayer = player1; thirdPlayer = player2;document.getElementById("playerSelect").style.display="none"; playTourney(userPlayer, secondPlayer, thirdPlayer, otherPlayer, 5)}
function chooseBran(){userPlayer = player4;otherPlayer = player1; secondPlayer = player2; thirdPlayer = player3;document.getElementById("playerSelect").style.display="none"; playTourney(userPlayer, secondPlayer, thirdPlayer, otherPlayer, 5)}

function getProfileUpdate(flomo){
	flomo.hand = prompt("rock, paper, or scissors?: ");
}

function playRound(playerOne, playerTwo) {
    playerOne.hand = getHand();
    playerTwo.hand = getHand();
    if (playerOne == userPlayer || playerTwo == userPlayer){
        userPlayer.hand = prompt("rock, paper, or scissors?: ");
    }
    console.log(playerOne.name + ' has ' + playerOne.hand);
    document.getElementById("roundResult").innerHTML = (playerOne.name + ' has ' + playerOne.hand);
    console.log(playerTwo.name + ' has ' + playerTwo.hand);
    document.getElementById("roundResult").nextElementSibling.innerHTML = (playerTwo.name + ' has ' + playerTwo.hand)
    if ((playerOne.hand == 'rock' && playerTwo.hand == 'scissors')||(playerOne.hand=='paper' && playerTwo.hand=='rock')||(playerOne.hand=='scissors'&&playerTwo.hand=='paper')) {
        console.log('The winner is ' + playerOne.name);
        document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = ('The winner is ' + playerOne.name)
        playerOne.wins = playerOne.wins + 1;
        playerTwo.losses = playerTwo.losses + 1;
    }
    else if ((playerTwo.hand == 'rock' && playerOne.hand == 'scissors')||(playerTwo.hand=='paper' && playerOne.hand=='rock')||(playerTwo.hand=='scissors'&&playerOne.hand=='paper')) {
        console.log('The winner is ' + playerTwo.name);
        document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = ('The winner is ' + playerTwo.name)
        playerTwo.wins = playerTwo.wins + 1;
        playerOne.losses = playerOne.losses + 1;
    }
    else {
        console.log("It's a draw")
        document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = ("It's a draw")
    }
    console.log("The score is " + playerOne.wins + " to " + playerTwo.wins);
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = ("The score is " + playerOne.wins + " to " + playerTwo.wins)
}

function playGame1(playerOne,playerFour,playUntil) {
    document.getElementById("tourneySum").innerHTML = "";
    document.getElementById("gameOnePlayers").innerHTML = "";
    document.getElementById("gameTwoPlayers").innerHTML = "";
    document.getElementById("finalPlayers").innerHTML = "";
    console.log("-----GAME NUMBER 1-----")
    document.getElementById("gameOnePlayers").innerHTML = `Game 1: ${userPlayer.name} vs ${otherPlayer.name}`;
    while (playerOne.wins<(playUntil)&&playerFour.wins<(playUntil)) {
        setInterval(playRound(playerOne,playerFour),1000);
    }
    document.getElementById("gameOnePlayers").innerHTML = `Game 1: ${userPlayer.name} vs ${otherPlayer.name} -- FINAL SCORE: ${userPlayer.wins} to ${otherPlayer.wins}`
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "";
    if (playerOne.wins==playUntil) {
        return playerOne
    }
    if (playerFour.wins==playUntil) {
        return playerFour
    }
}


function playGame2(playerTwo,playerThree,playUntil) {
    console.log("-----GAME NUMBER 2-----")
    document.getElementById("gameTwoPlayers").innerHTML = `Game 2: ${playerTwo.name} vs ${playerThree.name}`
    while (playerTwo.wins<playUntil && playerThree.wins<playUntil) {
        setInterval(playRound(playerTwo,playerThree),1000);
    }
    document.getElementById("gameTwoPlayers").innerHTML = `Game 2: ${playerTwo.name} vs ${playerThree.name} -- FINAL SCORE: ${playerTwo.wins} to ${playerThree.wins}`;
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "";
    if (playerTwo.wins==playUntil) {
        return playerTwo
    }
    if (playerThree.wins==playUntil) {
        return playerThree
    }

}

function playFinal(playerOne,playerTwo,playUntil) {
    console.log("-----FINAL-----");
    document.getElementById("finalPlayers").innerHTML = `Final: ${playerOne.name} vs ${playerTwo.name}`;
    playerOne.wins=0;
    playerTwo.wins =0;
    while (playerOne.wins<playUntil && playerTwo.wins<playUntil) {
        setInterval(playRound(playerOne,playerTwo),1000);
    }
    document.getElementById("finalPlayers").innerHTML = `Championship: ${playerOne.name} vs ${playerTwo.name} -- FINAL SCORE: ${playerOne.wins} to ${playerTwo.wins}`
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.innerHTML = "";
    document.getElementById("roundResult").nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "";
    if (playerOne.wins==(playUntil)) {
        return playerOne
    }
    if (playerTwo.wins==(playUntil)) {
        return playerTwo
    }
}

function playTourney(playerOne,playerTwo,playerThree,playerFour,playUntil) {
    var GameFinal = playFinal(playGame1(playerOne,playerFour,playUntil),playGame2(playerTwo,playerThree,playUntil),playUntil);
    console.log("The tourney winner is " + GameFinal.name);
    GameFinal.wins = playUntil * 2;
    document.getElementById("tourneySum").innerHTML = `The winner of the tournament is ${GameFinal.name} -- Wins: ${GameFinal.wins} Losses: ${GameFinal.losses}`;
    document.getElementById("playerSelect").style.display="block"
    player1.wins = 0; player1.losses = 0;
    player2.wins = 0; player2.losses = 0;
    player3.wins = 0; player3.losses = 0;
    player4.wins = 0; player4.losses = 0;
    return GameFinal;
}