import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const getGcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num2;
};

const playBrainGcd = () => {
  const getExpressionAndAnswer = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const expression = `${firstNumber} ${secondNumber}`;
    const answer = String(getGcd(firstNumber, secondNumber));
    const result = [expression, answer];

    return result;
  };

  const description = 'Find the greatest common divisor of given numbers.';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainGcd;
