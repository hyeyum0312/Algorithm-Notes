const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

[n, ...strings] = input; // 배열 분해 할당 , ex) 6, '(())'
n = Number(n);  // n을 숫자로 변환. 예: n = 6

 // 현재 문자열의 각 문자를 검사
for (let i=0; i < n; i++) {
    const string = strings[i];
    const stack = [];
    let result = true;

    for (let j=0; j<string.length; j++) {

        if (string[j] === '(') { // '('이면 스택에 푸시
            stack.push(string[j]);

        } else if (string[j] === ')'){
            //  ')'이면 스택에서 팝. 스택이 비어있으면 false 반환
            if (!stack.pop('')) { 
                result = false // 스택이 비어있는 경우, 잘못된 괄호 쌍이므로 result를 false로 설정
                break;
            }
        }
    }

    // 스택이 비어있지 않으면 괄호 쌍이 완벽하지 않음
    if (stack.length !== 0 ) {
        result = false
    }

    if (result == false){
        console.log('NO')
    } else {
        console.log('YES')
    }
}