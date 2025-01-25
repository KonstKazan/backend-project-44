import runGame from '../index.js';

const minNumber = 1;
const maxNumber = 3001;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRandomInt = (min, max) => {
  const minCelled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled);
};

const gameLogic = () => {
  const num = getRandomInt(minNumber, maxNumber);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const tutorial = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(tutorial, gameLogic);
};
