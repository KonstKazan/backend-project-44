import runGame from '../index.js';

const minNumber = 1;
const maxNumber = 99;

// eslint-disable-next-line consistent-return
const gcd = (n, m) => {
  let numberOne = n;
  let numberTwo = m;
  const always = true;
  while (always) {
    if (numberOne === numberTwo) {
      return numberTwo;
    }
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
};

const getRandomInt = (min, max) => {
  const minCelled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled);
};

const gameLogic = () => {
  const numOne = getRandomInt(minNumber, maxNumber);
  const numTwo = getRandomInt(minNumber, maxNumber);
  const question = `${numOne} ${numTwo}`;
  const correctAnswer = String(gcd(numOne, numTwo));
  return [question, correctAnswer];
};

export default () => {
  const tutorial = 'Find the greatest common divisor of given numbers.';
  runGame(tutorial, gameLogic);
};
