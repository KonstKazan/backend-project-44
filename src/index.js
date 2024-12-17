import readlineSync from 'readline-sync';
import cli from './cli.js';

const numberOfRound = 3;

export default (tutorial, gameLogic) => {
  const name = cli();
  console.log(tutorial);
  for (let i = 0; i < numberOfRound; i += 1) {
    const [question, correctAnswer] = gameLogic();
    console.log(`Question: , ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
