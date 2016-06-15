'use strict';
var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

/*var answer1 = prompt('Was I born in Kirkland, WA?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Right! Well done.');
} else {
  alert('Wrong! Try again...');
}

var answer2 = prompt('Have I been playing guitar since I was 15?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct! Well done!');
} else {
  alert('WRONG! How could you not know?');
}

var answer3 = prompt('Do I have 2 cats?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('Correct! Well done!');
} else {
  alert('WRONG!');
}

var answer4 = prompt('Do I hate the Sounders?').toLowerCase();
if (answer4 === 'no' || answer4 === 'n') {
  alert('Correct! GO SOUNDERS!');
} else {
  alert('WRONG!');
}

var answer5 = prompt('Do I manage a night club?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  alert('Correct! I manage the Underground!');
} else {
  alert('WRONG!');
}
*/
/*
var numberGameGuesses = 0;
while (numberGameGuesses < 4) {
  var answer6 = parseInt(prompt('What is my favorite number?'));
  if (answer6 === 7) {
    alert('Correct! You are obviously strong with the force young padawan...');
    break;
  } else if (answer6 < 7) {
    alert('Wrong! You\'re answer is too high!');
    numberGameGuesses++;
  } else if (answer6 > 7) {
    alert('You\'re answer is too low!');
    numberGameGuesses++;
  } else {
    alert('Please enter a number!');
    numberGameGuesses++;
  }
}
*/
var statesLivedIn = [AZ, LA, NY];
var statesGuesses = 6;
while (statesGuesses < 6) {
  var answer7 = statesLivedIn[1] || statesLivedIn[2] || statesLivedIn[3].toUpperCase();
    alert('Correct! I have lived in that state!');
    break;
  } else {
    alert('Wrong! Please try again!')
    statesGuesses++;
  }
