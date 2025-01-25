import runGame from '../index.js';

const min = 1;
const max = 100;

const isEven = (num) => num % 2 === 0;

// eslint-disable-next-line no-shadow
const getRandomInt = (min, max) => {
  const minCelled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled);
};

const gameLogic = () => {
  const question = String(getRandomInt(min, max));
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const tutorial = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(tutorial, gameLogic);
};
