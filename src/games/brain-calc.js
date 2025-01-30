import runGameEngine from '../index.js';
import getRandomNumber from '../random.js';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('It is not part of the program.');
  }
};

const playBrainCalc = () => {
  const getExpressionAndAnswer = () => {
    const firstNumber = getRandomNumber(50);
    const secondNumber = getRandomNumber(50);
    const operatorList = ['+', '-', '*'];
    const randomOperator = operatorList[getRandomNumber(operatorList.length - 1, 0)];
    const expression = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const answer = String(calculate(firstNumber, secondNumber, randomOperator));
    const result = [expression, answer];

    return result;
  };

  const description = 'What is the result of the expression?';
  runGameEngine(getExpressionAndAnswer, description);
};

export default playBrainCalc;
