import { add, subtract } from './math.js';

let a = 20,
    b = 5;

let result = add(a, b);
console.log(`${a} + ${b} = ${result}`);

result = subtract(a, b);
console.log(`${a} - ${b} = ${result}`);