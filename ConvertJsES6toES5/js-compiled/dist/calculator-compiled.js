'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Calculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _add = require('./add.js');

var _substraction = require('./substraction.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = exports.Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);
    }

    _createClass(Calculator, [{
        key: 'AplusB',
        value: function AplusB(a, b) {
            return (0, _add.Add)(a, b);
        }
    }, {
        key: 'AminusB',
        value: function AminusB(a, b) {
            return (0, _substraction.Substract)(a, b);
        }
    }]);

    return Calculator;
}();

var calculator = new Calculator();

var firstOperation = calculator.AminusB(10, 5);
console.log(firstOperation);
//# sourceMappingURL=calculator-compiled.js.map
