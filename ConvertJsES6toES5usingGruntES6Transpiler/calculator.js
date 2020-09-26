import {Add} from './add.js';
import {Substract} from './substration.js';

export class Calculator {
    AplusB (a , b) {
        return Add(a, b);
    }

    AminusB (a, b) {
        return Substract(a, b);
    }
}
