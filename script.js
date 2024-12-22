'use strict';

// const newNumber = (document.querySelector('.message').textContent =
//   'my number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// let message = 'start Guessing';
// document.querySelector('.message').textContent = message;

// secretNumber = 20;
console.log(secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('No number');
  }
  if (score > 1) {
    if (guess === secretNumber) {
      //   document.querySelector('.message').textContent = ' Correct Number';

      displayMessage('Correct Number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'guess too high' : 'guess too low';
      displayMessage(guess > secretNumber ? 'guess too high' : 'guess too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // else if (guess > secretNumber) {
    //   document.querySelector('.message').textContent = 'guess too high';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else if (guess < secretNumber) {
    //   document.querySelector('.message').textContent = 'guess too low';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  } else {
    // document.querySelector('.message').textContent = 'You lost the game';
    displayMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
