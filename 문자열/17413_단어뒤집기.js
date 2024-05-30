단어뒤집기
// const filePath = require("path").join(__dirname, "input.txt");
// let input = require("fs").readFileSync(filePath).toString();

let input = require("fs").readFileSync("/dev/stdin").toString();
const re = /(<.+?>|\s)/g; // 공백 , <tag> </tag> 찾기.
let arr = input.split(re); // ex: [ '', '<OPEN>', 'TAG', '<CLOSE>', '' ]
let result = [];
let reverse;

for (let item of arr) {
  if (re.test(item) === true) {
    result += item; // <OPEN> <CLOSE>
  } else {
    reverse = item.split("").reverse().join(""); //뒤집어서
    result += reverse;
  }
}

console.log(result);
