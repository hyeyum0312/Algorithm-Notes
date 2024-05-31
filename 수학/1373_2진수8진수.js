const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let oct = "";

while (input.length >= 3) {
    // 2진수 문자열을 3자리씩 잘라서 8진수로 변환합니다.
    oct = parseInt(input.slice(input.length-3), 2).toString(8) + oct;

    // input 문자열에서 마지막 3자리를 제거한다.
    input = input.slice(0, input.length-3);
}

console.log((input ? parseInt(input, 2).toString(8) : "") + oct);
