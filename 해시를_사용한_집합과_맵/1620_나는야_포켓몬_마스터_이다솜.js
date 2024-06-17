const filePath = require("path").join(__dirname, "input.txt");
// let input = require("fs").readFileSync(filePath).toString().trim().split(/\s/);

// 도감에서 번호와 이름을 서로 매핑하여, 주어진 질문에 대해 번호 또는 이름을 출력하는 프로그램.
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// 데이터를 문자열로 변환하고 양쪽 공백을 제거한다. 공백을 기준으로 나눈더,

const n = +input[0]; //  input 배열의 첫 번째와 두 번째 요소를 각각 N과 M으로 저장. 문자열을 숫자로 변환
const m = +input[1];
const arr = input.slice(2, n+2); //포켓몬 이름
// input 배열의 3번째 요소부터 (N+2)번째 요소까지 잘라서 arr에 저장합니다. 이 배열은 포켓몬 이름들을 담고 있다.

const pokemonMap = new Map(arr.map((v, i) => [v, i+1])); // 이름,벨류로 원하는 값찾기위해서 map사용.
const question = input.slice(n+2); // input 배열의 (N+2)번째 요소부터 끝까지 잘라서 question에 저장. (문제)
const answer = [];

question.forEach(v => {
  // 문자라면) pokemonMap.get(v)를 사용해 이름에 해당하는 번호를 answer 배열에 추가
    if (Number.isNaN(+v)) {
      answer.push(pokemonMap.get(v));
    } else  {
      // 요소가 숫자라면 arr[+v-1]를 사용해 해당 번호에 해당하는 포켓몬 이름을 answer 배열에 추가
      answer.push(arr[+v-1])
    }
});
console.log(answer.join("\n"));
// answer 배열을 줄바꿈 문자(\n)로 연결하여 출력