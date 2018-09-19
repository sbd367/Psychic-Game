var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var myGuess = letters[Math.floor(Math.random() * letters.length)];

var wins = [];
var losses = 0;
var guesses = 10;

console.log(myGuess);

document.onkeypress = function(event){
    var yourGuess = event.key;

    if(yourGuess == myGuess){
        wins ++;
    }else{
        guesses --;
        losses ++;
    }
    document.getElementById('wins').innerHTML = "wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
}
console.log(wins);


