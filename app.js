'use strict';
var userName = prompt('Greetings!!! What is your name?');
alert('Welcome' + userName + ', glad you\'re here!');

var answer1 = prompt('Was I born in Kirkland, WA?').toLowerCase();
if (answer1 === 'Yes' || answer1 === 'y') {
  alert('Right! Well done.');
} else {
  alert('Wrong! Try again...');
}

var answer2 = prompt('Have I been playing guitar since I was 15?').toLowerCase();
if (answer2 === 'Yes' || answer2 === 'Y') {
  alert('Correct! Well done!');
} else {
  alert('WRONG! How could you not know?');
}

var answer3 = prompt('Do I have 2 cats?').toLowerCase();
if (answer3 === 'Yes' || answer3 === 'Y') {
  alert('Correct! Well done!');
} else {
  alert('WRONG!');
}

var answer4 = prompt('Do I hate the Sounders?').toLowerCase();
if (answer4 === 'No' || answer4 === 'N') {
  alert('Correct! GO SOUNDERS!');
} else {
  alert('WRONG!');
}

var answer5 = prompt('Do I manage a night club?').toLowerCase();
if (answer5 === 'Yes' || answer5 === 'Y') {
  alert('Correct! I manage the Underground!');
} else {
  alert('WRONG!');
}
