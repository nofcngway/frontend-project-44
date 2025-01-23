#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from './cli.js';

const playBrainEven = () => {
  const name = userName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playBrainEven;
