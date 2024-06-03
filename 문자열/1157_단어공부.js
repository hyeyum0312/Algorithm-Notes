const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().toLowerCase();

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase();
const result = new Array(26).fill(0); // 길이가 26인 배열을 생성, 알파벳 빈도 수 계산: 영어 알파벳은 26자
console.log('result',result);

for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97] ++;
    // input.charCod가At(i)는 input 문자열의 i번째 문자의 유니코드 값을 반환
    // - 97: 'a'의 유니코드 값은 97이기 때문에 97을 빼면 0
    // 문자 'a'를 0으로, 'b'를 1로, ..., 'z'를 25로 변환
    // ++ : 이 부분은 result 배열의 해당 인덱스 값을 1 증가시킴, 각 알파벳이 문자열에 나타날 때마다 해당 알파벳의 빈도가 증가하도록..
}

const max = Math.max(...result); // 가장 큰수를 찾는다.
const index = result.indexOf(max); // 큰수의 index를 찾는다. 
let isSame = false; // 


// 알파벳 26자만큼 반복문 
for (let j = 0; j < 26; j++) {

    // 가장 큰 값과 동일한 것을 찾고 , 동일한 index가 아닌 다른 index에 같은 값이 있으면 same = true
    if (result[j] === max && index != j) {
      isSame = true;
      break;
    }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));
