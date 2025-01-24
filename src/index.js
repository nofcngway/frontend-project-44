import readlineSync from 'readline-sync';

const gameEngine = (getExpressionAndAnswer, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptionGame);

  for (let i = 0; i < 3; i += 1) {
    const [expression, answer] = getExpressionAndAnswer();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
