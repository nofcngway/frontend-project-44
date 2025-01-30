import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (expression) => {
  const result = (expression % 2 === 0) ? 'yes' : 'no';
  return result;
};

const playBrainEven = () => {
  const getExpressionAndAnswer = () => {
    const expression = getRandomNumber();
    const answer = isEven(expression);
    const result = [expression, answer];

    return result;
  };

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainEven;
