var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var myGuess = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSofar = [];

console.log(myGuess);

document.onkeypress = function(event){
    var yourGuess = [event.key];
    guessesSofar.push(event.key);
    if(yourGuess == myGuess){
        wins ++;
        alert("correct");
        myGuess = letters[Math.floor(Math.random() * letters.length)];
    }else{
        guesses --;
        losses ++;
    }
    if(guesses === 0){
        alert('Game Over you guessed ' + wins + " correct out of " + losses);
        guesses = 10;
        losses = 0;
    }
    document.getElementById('wins').innerHTML = "wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessSofar').innerHTML = "Guesses so far: " + guessesSofar;
}
if(guesses === 0){
    alert('Game Over you guessed ' + wins, " correct out of " + losses);
    guesses = 10;
}
console.log(wins);


