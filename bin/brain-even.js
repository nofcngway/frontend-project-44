#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = userName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numbers = [15, 6, 7];

for (let i = 0; i <= numbers.length - 1; i += 1) {
  console.log(`Question: ${numbers[i]}`);

  const answer = readlineSync.question('Your answer: ');

  if (numbers[i] % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if (numbers[i] % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    break;
  }

  if (i === numbers.length - 1) {
    console.log(`Congratulations, ${name}!`);
  }
}
