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
        alreadyGuessed.innerText = joinedValue;
    };

    for (var i = 0; i < splitWord.length; i++) {
        if (key === splitWord[i]) {
            dashes[i] = key;
            key = currentWord.innerText;
            remainingLetters.innerText--;

        };

        if (guessesRemaining.innerText === '0') {
            alert('Game Over Please Reload Page to Play Again');

        }
    };
    currentWordDiv.innerText = dashes.join('');
    guessesRemaining.innerText--;


    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 13)
            window.location.reload();
    })
}







