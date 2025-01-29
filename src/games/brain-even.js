import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const playBrainEven = () => {
  const getExpressionAndAnswer = () => {
    const expression = getRandomNumber(1, 100);
    const answer = (expression % 2 === 0) ? 'yes' : 'no';
    const result = [expression, answer];

    return result;
  };

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainEven;
