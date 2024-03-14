const PI = require('pi');
const piStr = PI(1000000, false);

console.log('---- GENERATING RANDOM NUMBERS USING PI ----');
//console.log(piStr);
console.log(`Pi string length: ${piStr.length}\t(Should be equal to 1 million -> ${piStr.length === 1000000})`);

let counts = {};

function getRandomDigit(iterations, label, isPi) {
    for (let i = 0; i < iterations; i++) {
        let randomDigit = 0;
        if (isPi){
            const randomIndex = Math.floor(Math.random() * piStr.length);
            randomDigit = piStr.charAt(randomIndex);
        } else {
            randomDigit = Math.floor(Math.random() * 10);
        }
        counts[randomDigit] = (counts[randomDigit] ?? 0) + 1;
    }

    let sum = 0n;
    let count = 0n;

    for (const key in counts) {
        sum += BigInt(counts[key]);
        count++;
    }

    const avg = sum / count;
    console.log(`${label} loop - average: ${avg}`, counts);
    counts = {};
}

let iterations = 1000;
getRandomDigit(iterations, '1 thousand', true);
iterations = iterations * 10;
getRandomDigit(iterations, '10 thousand', true);
iterations = iterations * 10;
getRandomDigit(iterations, '100 thousand', true);
iterations = iterations * 10;
getRandomDigit(iterations, '1 million', true);
iterations = iterations * 10;
getRandomDigit(iterations, '10 million', true);
iterations = iterations * 10;
getRandomDigit(iterations, '100 million', true);

console.log('---- GENERATING RANDOM NUMBERS USING Math.random() ----');
iterations = 1000;
getRandomDigit(iterations, '1 thousand', false);
iterations = iterations * 10;
getRandomDigit(iterations, '10 thousand', false);
iterations = iterations * 10;
getRandomDigit(iterations, '100 thousand', false);
iterations = iterations * 10;
getRandomDigit(iterations, '1 million', false);
iterations = iterations * 10;
getRandomDigit(iterations, '10 million', false);
iterations = iterations * 10;
getRandomDigit(iterations, '100 million', false);

console.log('\t/Fin');