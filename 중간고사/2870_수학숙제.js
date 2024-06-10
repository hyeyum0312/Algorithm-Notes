const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, ...nums] = input;

let answer = [];

for (let i =0 ; i < nums.length; i++) {
    // nums : [lo3za4, 01]
    
    let arr = nums[i].split(/[a-z]/g); // '', '', '3', '', '4' ] , [ '01' ];

    for (let item of arr) {

        if (item === '') continue;

        if (!isNaN(item)) {
            if (item === 0) {
                answer.push('0');
            } else {
                answer.push(item.replace(/^0+/, ''));
            }
        }
    }
}

// [ '3', '4', '1' ] => [ '1', '3', '4' ]
const sorted = answer.sort((a, b) => Number(a) - Number(b));
console.log(sorted.join('\n'));