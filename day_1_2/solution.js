var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8');
// var input = '1212' //6
// var input = '1221' //0
// var input = '123425' //4
// var input = '123123' //12
// var input = '12131415' //4
if (typeof input === 'undefined') {
    throw new Error('Invalid input: no input provided.');
}
if (!input.length) {
    throw new Error('Invalid input: empty string.');
}
var numbers = [];
var i = 0;
var sum = 0;
(function solve(input) {
    for (var a = 0; a < input.length; a++) {
        numbers.push(parseInt(input[a]));
    }
    console.log(numbers);
    for (var b = 0; b < numbers.length; b++) {
        (function calcI() {
            if (b < numbers.length / 2) {
                console.log('I:  ' + i);
                i = b + (numbers.length / 2);
            }
            else {
                console.log('I:  ' + i);
                i = b - (numbers.length / 2);
            }
        })();
        if (numbers[b] === numbers[i]) {
            sum += numbers[b];
        }
    }
    console.log(sum);
})(input);
