import readlineSync from 'readline-sync';

const runGameEngine = (getExpressionAndAnswer, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptionGame);

  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
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

export default runGameEngine;
