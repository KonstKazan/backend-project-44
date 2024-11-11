import readlineSync from 'readline-sync';


const min = 1;
const max = 100;
const numberOfRound = 3;

const isEven = (num) => {
    return num % 2 === 0 ? true : false;
};

const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < numberOfRound; i += 1) {
        const question = getRandomInt(min, max);
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(question) ? 'yes' : 'no';
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
