var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

if (typeof input === 'undefined') {
    throw new Error('Invalid input: no input provided.');
  }
  
  if (!input.length) {
    throw new Error('Invalid input: empty string.');
  }

var numbers = [];

function solve(input) {
    let sum: number = 0;
    for (var a = 0; a<input.length; a++) {
        numbers.push(parseInt(input[a]));
    }

    console.log(numbers);

    for (var b = 0; b<=numbers.length-1; b++) {
        if (numbers[b]!==numbers.length-1 && numbers[b]===numbers[b+1]) {
            sum += numbers[b];
        } else if (b === numbers.length-1 && numbers[numbers.length-1] === numbers[1]) {
            sum += numbers[0];
        }
        console.log('index:' + b + ' | value: ' + numbers[b])
    }

    console.log(sum);
}
solve(input);