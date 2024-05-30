const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((item) => +item);

const prime = { 1: true };

// i <= Math.sqrt(m);: i가 m의 제곱근보다 작거나 같을 때까지 루프를 반복한다. 
// 에라토스테네스의 체 알고리즘에서는 sqrt(m) 이상의 수에 대해서는 확인할 필요가 없음.
for (let i = 2; i <= Math.sqrt(m); i++) {

  // i가 이미 소수가 아닐경우 넘어감.
  if (prime[i]) continue;

  // **는 JavaScript에서 지수 연산자이다.
  // 소수가 아닌 수의 배수를 찾기 위한 for 루프:
  // let j = i ** 2;: j에는 현재 소수인 i의 제곱이 할당된다.
  // 에라토스테네스의 체 알고리즘에서는 i보다 작은 배수들은 이미 이전에 처리되었으므로, i의 제곱부터 시작하여 m 이하의 모든 배수를 확인한다.
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}

const results = [];

// 에라토스테네스의 체 알고리즘을 통해 구한 소수를 활용하여 
// 주어진 범위 내의 모든 소수를 식별하고 결과 배열에 추가한다.
for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join("\n"));
