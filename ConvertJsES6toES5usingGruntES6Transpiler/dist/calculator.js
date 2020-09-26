import {Add} from './add.js';
import {Substract} from './substraction.js';

export class Calculator {
    AplusB (a , b) {
        return Add(a, b);
    }

    AminusB (a, b) {
        return Substract(a, b);
    }
}

const calculator = new Calculator();

const firstOperation = calculator.AminusB(10, 5);
console.log(firstOperation);