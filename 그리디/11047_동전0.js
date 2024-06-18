const filePath = require("path").join(__dirname, "input.txt");
// let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const coins = input.map(Number).sort((a, b) => b - a);
let cnt = 0;
for (const coin of coins) {
    cnt += Math.floor(K / coin); // 현재 동전으로 사용할 수 있는 최대 개수를 계산
    K %= coin; // 현재 동전의 가치로 나눈 후의 나머지를 K에 할당
}
console.log(cnt);

// 동전의 큰 단위가 항상 작은 단위의 배수이므로, 단위가 큰 동전부터 사용한다면 필요한 동전 개수를 최소로 할 수 있다.
// 주어진 입력값은 오름차순이므로, 처음에는 sort()를 이용하여 내림차순 정렬함.
