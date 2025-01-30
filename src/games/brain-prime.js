import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const playBrainPrime = () => {
  const getExpressionAndAnswer = () => {
    const number = getRandomNumber();
    const expression = number;
    const answer = isPrimeNumber(number) ? 'yes' : 'no';
    const result = [expression, answer];

    return result;
  };

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainPrime;
