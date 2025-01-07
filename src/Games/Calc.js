import runGame from '../index.js';

const minNumber = 0;
const maxNumber = 20;

// eslint-disable-next-line no-shadow
const getRandomInt = (min, max) => {
  const minCelled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled);
};

const getRandom = (list) => list[Math.floor((Math.random() * list.length))];

const calculator = (numOne, numTwo, operation) => {
  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return 'Sorry, an unexpected error has occurred';
  }
};

const gameLogic = () => {
  const operators = ['+', '-', '*'];
  const randOperator = getRandom(operators);
  const numOne = getRandomInt(minNumber, maxNumber);
  const numTwo = getRandomInt(minNumber, maxNumber);
  const question = `${numOne} ${randOperator} ${numTwo}`;
  const correctAnswer = String(calculator(numOne, numTwo, randOperator));
  return [question, correctAnswer];
};

export default () => {
  const tutorial = 'What is the result of the expression?';
  runGame(tutorial, gameLogic);
};
