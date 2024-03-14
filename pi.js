const PI = require('pi');
const piStr = PI(1000000, false);

console.log('---- GENERATING RANDOM NUMBERS USING PI ----');
//console.log(piStr);
console.log(`Pi string length: ${piStr.length}\t(Should be equal to 1 million -> ${piStr.length === 1000000})`);

let counts = {};

function getRandomPiDigit(iterations, label) {
    for (let i = 0; i < iterations; i++) {
        const randomIndex = Math.floor(Math.random() * piStr.length);
        const randomPiDigit = BigInt(piStr.charAt(randomIndex));
        counts[randomPiDigit] = (counts[randomPiDigit] ?? 0n) + 1n;
      }
      
    let sum = 0n;
    let count = 0n;

    for (const key in counts) {
        console.log(`Adding ${counts[key]} to ${sum}`);
        sum += counts[key];
        count++;
        console.log('sum now ',sum);
    }

    const avg = sum / count;
    console.log(avg);
    console.log(`${iterations} loop - average: ${avg}`, counts);
    counts = {};
}

function getRandomDigit(iterations, label) {
    for (let i = 0; i < iterations; i++) {
        const randomDigit = BigInt(Math.floor(Math.random() * 10));
        counts[randomDigit] = (counts[randomDigit] ?? 0n) + 1n;
    }

    let sum = 0n;
    let count = 0n;

    for (const key in counts) {
        sum += counts[key];
        count++;
        console.log('sum now ',sum);
    }

    const avg = sum / count;
    console.log(avg);
    console.log(`${iterations} loop - average: ${avg}`, counts);
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

console.log('---- GENERATING RANDOM NUMBERS USING Math.random() ----');
iterations = 1000;
getRandomDigit(iterations, '1 thousand');
iterations = iterations * 10;
getRandomDigit(iterations, '10 thousand')
iterations = iterations * 10;
getRandomDigit(iterations, '100 thousand')
iterations = iterations * 10;
getRandomDigit(iterations, '1 million')
iterations = iterations * 10;
getRandomDigit(iterations, '10 million')
iterations = iterations * 10;
getRandomDigit(iterations, '100 million');

console.log('\t/Fin');