const filePath = require("path").join(__dirname, "input.txt");
let inputs = require("fs").readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, expression, ...nums] = inputs;
const numbers = nums.map((i) => Number(i));
const operators = ['-', '/', '+','*']; // 연산자.
const stack = [];
let trasnformer = {};
let ASCII = 65;
let answer;

console.log('expression',expression);
//계산식 
const calculator = {
    '+' : (a,b) => a+b,
    '-' : (a,b) => a-b,
    '*' : (a,b) => a*b,
    '/' : (a,b) => a/b,
}

for (let i = 0; i < n; i++) {
    const alphabet = String.fromCharCode(ASCII++);
    trasnformer[alphabet] = numbers[i];
}


const trasnformExpression = expression.split('').map(value => operators.includes(value) === false ? trasnformer[value] : value)
// expression = ABC*+DE/-
// value값이 '+,-,*,/'중 포함되는게 없다면 알파벳의 숫자값을 , 그렇지 않으면 연산자를 map에 담습니다.
// [1, 2, 3,   '*', '+',4, 5, '/', '-'];

for (let i = 0; i < trasnformExpression.length; i++) {
    let pushValue = trasnformExpression[i];

    // 연산자값에 pushValue값이 있다면 계산을 한다. 
    if (operators.includes(pushValue) === true) {
        //pushValue : *+/-

        console.log('stack',stack);
        const secondValue = stack.pop();
        console.log('secondValue',secondValue);

        const firstValue = stack.pop();
        console.log('firstValue',firstValue);

        const calculateFunction = calculator[pushValue];
        pushValue = calculateFunction(firstValue,secondValue);
    }
    stack.push(pushValue);

}

answer = (Math.floor(stack[0]* 100) / 100).toFixed(2);
console.log(answer);

//https://woongsios.tistory.com/288
// 연산자를 만나면 연산자 직전의 두 숫자를 연산해주고 다시 스택에 넣는다. 