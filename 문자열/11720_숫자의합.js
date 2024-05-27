// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, 'input.txt');
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split("");
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += Number(arr[i]);
}

console.log(sum);