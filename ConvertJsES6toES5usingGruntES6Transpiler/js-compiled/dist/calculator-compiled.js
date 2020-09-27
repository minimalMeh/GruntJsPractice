(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Add = Add;
function Add(a, b) {
    return a + b;
}

},{}],2:[function(require,module,exports){
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

},{"./add.js":1,"./substraction.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Substract = Substract;
function Substract(a, b) {
    return a - b;
}

},{}]},{},[2]);
