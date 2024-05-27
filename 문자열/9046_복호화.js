
const filePath = require('path').join(__dirname, 'input.txt');
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const frequency = {};
let max = 0;
let count;
let frequencyArr = [];
let alpha='';
let maxValue = -Infinity;
let maxIndex = 0;
let keys;

input.map((item)=>{
    for (let char of item) {
        if (char !== ' ') {
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
        }
    }

    for (let char in frequency) {
        count = frequency[char];
        if (count > max) {
            max = frequency[char];
            alpha = char;
        }
    }
    frequencyArr.push({[alpha] : max});
});

frequencyArr.forEach((obj, index) => {
    let value = Object.values(obj)[0];
    if (value > maxValue) {
        maxValue = value;
        maxIndex = index;
    }
});

// 가장 큰 값을 가진 객체의 키를 '?'로 바꿉니다.
if (maxIndex !== -1) {
    let maxObj = frequencyArr[maxIndex];
    let key = Object.keys(maxObj)[0];
    maxObj['?'] = maxObj[key];
    delete maxObj[key];
}

keys = frequencyArr.map(obj => Object.keys(obj)[0]);

console.log('keys.join();',keys.join());