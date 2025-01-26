import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const progression = () => {
  const arrNumbers = [];
  const startNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 50);
  const numbersLength = getRandomNumber(5, 10);
  const hiddenEl = getRandomNumber(0, numbersLength - 1);

  let numberOnProg = startNumber;
  for (let i = 0; i < numbersLength; i += 1) {
    arrNumbers.push(numberOnProg);
    numberOnProg += step;
  }

  const correctAnswer = arrNumbers[hiddenEl];
  arrNumbers[hiddenEl] = '..';
  const expression = arrNumbers.join(' ');
  const result = [expression, String(correctAnswer)];

  return result;
};

const playBrainProgression = () => {
  const getExpressionAndAnswer = () => {
    const [expression, answer] = progression();
    const result = [expression, answer];

    return result;
  };

  const description = 'What number is missing in the progression?';
  gameEngine(getExpressionAndAnswer, description);
};

export default playBrainProgression;
