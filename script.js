'use-strict';
/*document.querySelector('.message').textContent;
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = 12;

document.querySelector('.guess').value = 390;
console.log(document.querySelector('.guess').value); */

let score = 20;
let highscore = 0;



let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// RESET FUNCTIONALITY

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;

    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('body').style.transition = '0.5s';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...    ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.transition = '0.2S';

    // TRANSITIONS







})

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number((document.querySelector('.guess').value));

    if (!guess) {
        document.querySelector('.message').textContent = '⚠️ You need to type a number';
    }
    else if (guess === number) {
        document.querySelector('.message').textContent = '🥳 Wohooo That/s correct!!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('body').style.transition = '0.5s';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if (score >= highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }




    }
    else if (guess > number) {
        document.querySelector('.message').textContent = ' 🥲 Too high!!';
        score -= 1;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.message').textContent = ' 🥲 You LOST!!!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('body').style.transition = '0.5s';



        }


    }
    else if (guess < number) {
        document.querySelector('.message').textContent = ' 🥲 Too low!!';
        score -= 1;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.message').textContent = ' 🥲 You LOST!!!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'darkred';
            document.querySelector('body').style.transition = '0.5s';




        }

    }


}
);

