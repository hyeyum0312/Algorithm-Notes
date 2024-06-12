const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const integer = input[1].split(' ').map(Number);
const check = input[3].split(' ').map(Number);

let map = new Map();
let answer = [];

// 1. 각각의 정수 갯수 파악.
// 2. 체크 해야할 배열에 해당 정수가 있으면 갯수를 확인한다. 없으면 0을 반환.

// 주어진 정수의 중복된 갯수 파악.
integer.forEach(item => {
    if(map.has(item)) {
        map.set(item, map.get(item)+1);
    } else {
        map.set(item, 1);
    }
});

// 체크 해야할 배열에 해당 정수가 있으면 갯수를 확인한다. 없으면 0을 반환.
check.forEach((item) => {
    answer.push(map.get(item)||0)
});

console.log(answer.join(' '));



// 개념정리를 이번에 못하고 바로 문제를 풀려니 생각보다 어려웠습니다.
// 개념정리 해보고 어떤 식으로 접근 해야할지 고민을 하고 난 후 문제를 풀게되었습니다.

// 잘못된 방식 
// 상근이가 가지고있는 정수 배열과
// 구해야 할 M개의 정수 배열.
// 두개를 비교해서 같은 값의 갯수를 구하는 것으로 판단.
// 처음엔 filter를 사용해서 include되어있는 것을 찾아내려고 생각했지만 
// 가지고있는 정수배열중 중복된 것이 몇 개인지를 key와 value로 뽑아낸 후 , 
// 구해야 할 정수와 동일은 key의 값을 채크하여 배열에 담아야겠다고 생각함. 
// 그런데 생각보다 많은 과정이 필요했고 계속 오류가 났음.

// 개념정리 이후.
// 결국 검색결과 map과 set을 사용하면 훨씬 깔끔하고 간단하게 해결이 가능하다는것을 이해하고
// 문제를 다시 풀어보았습니다. 