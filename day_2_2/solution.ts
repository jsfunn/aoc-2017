var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

// var input = '5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8' //checksum = 18

if (typeof input === 'undefined') {
    throw new Error('Invalid input: no input provided.');
  }
  
  if (!input.length) {
    throw new Error('Invalid input: empty string.');
  }

  var rows = input.split('\n');
  var diffs = []
  var sum: number = 0;

  for (var a = 0; a<rows.length; a++) {
      var cells = [];
      var values: Array<number> = [];
      cells = rows[a].split('\t')
      for (var b = 0; b<cells.length; b++) {
          values.push(parseInt(cells[b]));
      }
      var diff = max - min;
      diffs.push(diff);
  }

  for (var i = 0; i < diffs.length; i++) {
    sum += diffs[i]
  }

  console.log(sum);