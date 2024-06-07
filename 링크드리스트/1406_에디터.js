const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const initialString = input[0].trim();
const commands = input.slice(2);

let leftStack = initialString.split('');
let rightStack = [];

commands.forEach(command => {

    // L : 커서를 왼쪽으로 이동시키기 위해 leftStack에서 팝한 문자를 rightStack에 푸시합니다.
    if (command === 'L') {
        if (leftStack.length > 0) {
            rightStack.push(leftStack.pop());
        }
    } 
    
    // D: 커서를 오른쪽으로 이동시키기 위해 rightStack에서 팝한 문자를 leftStack에 푸시합니다.
    if (command === 'D') {
        if (rightStack.length > 0) {
            leftStack.push(rightStack.pop());
        }
    } 
    
    // B : 커서 왼쪽의 문자를 삭제하기 위해 leftStack에서 팝합니다.
    if (command === 'B') {
        if (leftStack.length > 0) {
            leftStack.pop();
        }
    } 

    // P $ : leftStack에 문자를 추가합니다.
    if (command.startsWith('P ')) {
        let charToInsert = command.split(' ')[1];
        leftStack.push(charToInsert);
    }
});

// leftStack과 rightStack을 합쳐서 결과 문자열을 생성합니다. 
// rightStack은 거꾸로 되어 있으므로 reverse를 사용하여 제대로 합칩니다.
console.log(leftStack.join('') + rightStack.reverse().join(''));