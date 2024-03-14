const PI = require('pi');
const piStr = PI(1000000, false);

console.log('GENERATING RANDOM NUMBERS USING PI');
//console.log(piStr);
console.log(`Pi string length: ${piStr.length}\tShould be equal to 1 million -> ${piStr.length === 1000000}`);

let counts = {};

function getRandomPiDigit(iterations, label) {
    for (let i = 0; i < iterations; i++) {
        const randomIndex = Math.floor(Math.random() * piStr.length);
        const randomPiDigit = piStr.charAt(randomIndex);
        counts[randomPiDigit] = (counts[randomPiDigit] ?? 0) + 1;
      }
      
    let sum = 0;
    let count = 0;

    for (const key in counts) {
        sum += counts[key];
        count++;
    }

    console.log('sum: ',sum);
    const average = sum / count;
    console.log('average: ',average);
    console.log(label,' loop - avg: ',counts);
    counts = {};
}

function getRandomDigit(iterations, label) {
    for (let i = 0; i < iterations; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        counts[randomDigit] = (counts[randomDigit] ?? 0) + 1;
    }

    let sum = 0;
    let count = 0;

    for (const key in counts) {
        sum += counts[key];
        count++;
    }

    console.log('sum: ',sum);
    const average = sum / count;
    console.log('average: ',average);
    console.log(label,' loop - avg: ',counts);
    counts = {};
}

let iterations = 1000;
getRandomPiDigit(iterations, '1 thousand');

iterations = iterations * 10;
getRandomPiDigit(iterations, '10 thousand');

iterations = iterations * 10;
getRandomPiDigit(iterations, '100 thousand');

iterations = iterations * 10;
getRandomPiDigit(iterations, '1 million');

iterations = iterations * 10;
getRandomPiDigit(iterations, '10 million');

iterations = iterations * 10;
getRandomPiDigit(iterations, '100 million');

//iterations = iterations * 10;
//getRandomPiDigit(iterations, '1 billion');

console.log('GENERATING RANDOM NUMBERS USING Math.random()');
iterations = 1000;
getRandomDigit(iterations, '1 thousand');

iterations = iterations * 10;
getRandomDigit(iterations, '10 thousand');

iterations = iterations * 10;
getRandomDigit(iterations, '100 thousand');

iterations = iterations * 10;
getRandomDigit(iterations, '1 million');

iterations = iterations * 10;
getRandomDigit(iterations, '10 million');

iterations = iterations * 10;
getRandomDigit(iterations, '100 million');

console.log('\t/Fin');