import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const getProgression = (startNumber, step, numbersLength) => {
  const arrNumbers = [];

  let currentNumber = startNumber;
  for (let i = 0; i < numbersLength; i += 1) {
    arrNumbers.push(currentNumber);
    currentNumber += step;
  }

  return arrNumbers;
};

const playBrainProgression = () => {
  const getExpressionAndAnswer = () => {
    const startNumber = getRandomNumber();
    const step = getRandomNumber(50);
    const numbersLength = getRandomNumber(10, 5);
    const arrNumbers = getProgression(startNumber, step, numbersLength);
    const hiddenEl = getRandomNumber(numbersLength - 1, 0);
    const answer = arrNumbers[hiddenEl];
    arrNumbers[hiddenEl] = '..';
    const expression = arrNumbers.join(' ');
    const result = [expression, String(answer)];

    return result;
  };

  const description = 'What number is missing in the progression?';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainProgression;
