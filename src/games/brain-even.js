import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const playBrainEven = () => {
  const getExpressionAndAnswer = () => {
    const expression = getRandomNumber();
    const answer = isEven(expression) ? 'yes' : 'no';
    const result = [expression, answer];

    return result;
  };

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainEven;
