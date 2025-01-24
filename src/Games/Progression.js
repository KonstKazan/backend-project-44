import runGame from '../index.js';

const progressionMinNumber = 1;
const progressionMaxNumber = 40;
const progressionMinStep = 1;
const progressionMaxStep = 5;
const progressionMinLength = 5;
const progressionMaxLength = 10;

const getRandomInt = (min, max) => {
  const minCelled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCelled) + minCelled);
};

const createProgression = (numStart, step, length) => {
  const progression = [];
  const numEnd = numStart + step * length;
  for (let i = numStart; i <= numEnd; i += step) {
    progression.push(i);
  }
  return progression;
};

const gameLogic = () => {
  const numStart = getRandomInt(progressionMinNumber, progressionMaxNumber);
  const step = getRandomInt(progressionMinStep, progressionMaxStep);
  const length = getRandomInt(progressionMinLength, progressionMaxLength);
  const progression = createProgression(numStart, step, length);
  const mark = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[mark]);
  progression[mark] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  const tutorial = 'What number is missing in the progression?';
  runGame(tutorial, gameLogic);
};
