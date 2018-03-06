var currentWord = ['blacktip', 'mako', 'tiger', 'bull'];
var randomly = Math.floor(Math.random() * currentWord.length);
var randomlyChosenWord = currentWord[randomly];
var splitWord = randomlyChosenWord.split('');
var dashes = [];
var lettersGuessed = [];
for (var i = 0; i < splitWord.length; i++) {
    dashes.push('-');
};
var remainingLetters = currentWord.length;
var guessesRemaining;
var wins;
var currentWordDiv = document.getElementById('currentWord');
var alreadyGuessed = document.getElementById('lettersGuessed');
var guessesRemaining = document.getElementById('guessesRemaining');
var wins = document.getElementById('wins');
currentWordDiv.innerText = dashes.join('');
guessesRemaining.innerText = 15;
wins.innerText = 0;

document.onkeyup = function (event) {
    var key = event.key;
    var joinedValue = lettersGuessed.join('');
    if (lettersGuessed.indexOf(key) === -1) {
        lettersGuessed.push(key);
        guessesRemaining.innerText--;
        alreadyGuessed.innerText = joinedValue;
    };
    for (var i = 0; i < splitWord.length; i++) {
        if (key === splitWord[i]) {
            dashes[i] = key;
            dashes[i].innerHTML = currentWord;
            remainingLetters.innerText--;
            guessesRemaining.innerText--;

        }
        else if (guessesRemaining > -1) {
            alert ('Game Over Please Reload Page to Play Again');
            return
        };

        
    };

    document.addEventListener('keyup', function (e) {
    if (e.keyCode == 13)
        window.location.reload();
})
}







