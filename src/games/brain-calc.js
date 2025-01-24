import gameEngine from '../index.js';
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
      return 'error';
  }
};

const playBrainCalc = () => {
  const getExpressionAndAnswer = () => {
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);
    const operatorList = ['+', '-', '*'];
    const randomOperator = operatorList[getRandomNumber(0, 2)];
    const expression = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const answer = String(calculate(firstNumber, secondNumber, randomOperator));
    const result = [expression, answer];

    return result;
  };

  const description = 'What is the result of the expression?';
  gameEngine(getExpressionAndAnswer, description);
};

export default playBrainCalc;
