'use strict';
var userName = prompt('Greetings!!! What is your name?');
alert('Welcome' + userName + ', glad you\'re here!');

var answer1 = prompt('Was I born in Kirkland, WA?').toLowerCase();
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
