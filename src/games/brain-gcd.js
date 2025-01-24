import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const gcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;

  /* Алгоритм Евклида */
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
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const expression = `${firstNumber} ${secondNumber}`;
    const answer = String(gcd(firstNumber, secondNumber));
    const result = [expression, answer];

    return result;
  };

  const description = 'Find the greatest common divisor of given numbers.';
  gameEngine(getExpressionAndAnswer, description);
};

export default playBrainGcd;
