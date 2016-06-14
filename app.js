'use strict';
var userName = prompt('Greetings!!! What is your name?');
alert('Welcome' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Sam have 3 cats?').toLowerCase();
if (answer1() === 'Yes' || answer1() === 'y') {
  alert('Right!');
} else {
  alert(wrong);
}
