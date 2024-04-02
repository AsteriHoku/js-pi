require('ansi-colors');
const PI = require('pi');
const piStr = PI(1000000, false);

function printPiSlices(){
    console.log('3.'+ piStr.substring(0,99).rfg())
    let spaces = 1;
    let s = 100;
    let e = 198;
    
    while (s < e){
        console.log(' '.repeat(spaces) + piStr.substring(s,e).rfg());
        ++spaces;
        s = e + 1;
        e = s + (100-(spaces*2));
    }
    console.log(' '.repeat(spaces-1) + 'Pi');
}

printPiSlices();
console.log('\nTake note of:\n\t-counts for each digit & how close they are to each other\n\t-average of the counts values\n');
console.log('---- GENERATING RANDOM NUMBERS USING PI ----'.fg('blue').clearAll());
console.log(`Pi string length: ${piStr.length}\t(Should be equal to 1 million -> ${`${piStr.length === 1000000}`.fg('green', 'bright').clearAll()})`);

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

    for (const key in counts) {
        sum += BigInt(counts[key]);
    }

    const avg = sum / BigInt(Object.keys(counts).length);
    console.log(`${label} loop - average: ${`${avg}`.fg('cyan').clearAll()}`, counts);
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

console.log('---- GENERATING RANDOM NUMBERS USING Math.random() ----'.fg('blue').clearAll());
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