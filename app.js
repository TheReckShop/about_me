'use strict';
var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var counter = 0;
function q1 () {var answer1 = prompt('Was I born in Kirkland, WA?').toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Right! Well done.');
    counter++;
  } else {
    alert('Wrong! Try again...');
  }
}
q1();
function q2() { var answer2 = prompt('Have I been playing guitar since I was 15?').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! Well done!');
    counter++;
  } else {
    alert('WRONG! How could you not know?');
  }
}
q2();
function q3() {var answer3 = prompt('Do I have 2 cats?').toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Correct! Well done!');
    counter++;
  } else {
    alert('WRONG!');
  }
}
q3();
function q4() {var answer4 = prompt('Do I hate the Sounders?').toLowerCase();
  if (answer4 === 'no' || answer4 === 'n') {
    alert('Correct! GO SOUNDERS!');
    counter++;
  } else {
    alert('WRONG!');
  }
}
q4();
var answer5 = prompt('Do I manage a night club?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  alert('Correct! I manage the Underground!');
  counter++;
} else {
  alert('WRONG!');
}

var numberGameGuesses = 0;
while(numberGameGuesses < 4) {
  var answer6 = parseInt(prompt('What is my favorite number?'));
  if (answer6 === 7) {
    alert('Correct! You are obviously strong with the force young padawan...');
    break;
    counter++;
  } else if(answer6 < 7) {
    alert('Wrong! You\'re answer is too high!');
    numberGameGuesses++;
  } else if(answer6 > 7) {
    alert('You\'re answer is too low!');
    numberGameGuesses++;
  } else {
    alert('Please enter a number!');
    numberGameGuesses++;
  }
}
//remeber you can move numberGameGuesses down one curly bracket so you don't have to repeat using it for each if else statement.

var statesLivedIn = ['AZ', 'LA', 'NY'];
var statesGuesses = 0;
while(statesGuesses < 6) {
  var answer7 = prompt('What states have I lived in besides Washington? Please use state abbreviations for you\'re answer.').toUpperCase();
  if(answer7 === statesLivedIn[0] || answer7 === statesLivedIn[1] || answer7 === statesLivedIn[2]) {
    alert('Correct! I have lived in that state!');
    counter++;
    break;
  } else {
    alert('Sorry, you are incorrect!');
    statesGuesses++;
  }
}
//add a for loop to evaluate answer7 more efficiantly
alert('You got' + counter + ' out of 7 correct!');
