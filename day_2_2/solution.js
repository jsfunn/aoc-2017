var fs = require('fs');
// var input = fs.readFileSync('input.txt','utf8');
var input = '5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5'; //checksum = 18
if (typeof input === 'undefined') {
    throw new Error('Invalid input: no input provided.');
}
if (!input.length) {
    throw new Error('Invalid input: empty string.');
}
function solve() {
    var rows = input.split('\n');
    var num_of_rows = rows.length;
    var num_of_columns;
    var columns = [];
    var num_of_nums;
    var numbers = [];
    var num_of_remainders;
    var remainders = [];
    var min;
    var max;
    var remainder;
    var sum = 0;
    for (var i = 0; i < num_of_rows; i++) {
        columns = rows[i].split('\t');
        for (var j = 0; j < num_of_columns; j++) {
            var number = parseInt(columns[j]);
            numbers.push(number);
        }
        num_of_columns = columns.length;
        num_of_nums = numbers.length;
        repeatLoop: for (var k = 0; k < num_of_nums; k++) {
            if (numbers[0] % numbers[k + 1] === 0) {
                numbers[0] < numbers[k + 1] ? (max = numbers[k + 1], min = numbers[0]) : (max = numbers[0], min = numbers[k + 1]);
                remainder = max / min;
                remainders.push(remainder);
                console.log('Row: ' + i + '| min: ' + min + '| max: ' + max + '| remainder: ' + remainder);
                break;
            }
            else if (k === num_of_nums) {
                numbers.splice(0, 1);
                continue repeatLoop;
            }
        }
    }
    num_of_remainders = remainders.length;
    for (var l = 0; l < num_of_remainders; l++) {
        sum += remainders[l];
    }
    console.log('sum: ' + sum);
}
solve();
