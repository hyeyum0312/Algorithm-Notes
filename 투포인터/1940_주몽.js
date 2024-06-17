const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

function countArmorPairs(N, M, numbers) {
  let arr = numbers.map(Number); // [ 2, 7, 4, 1, 5, 3 ]
  arr.sort((a, b) => a - b); // [ 1, 2, 3, 4, 5, 7 ]

  let left = 0;
  let right = N - 1;
  let count = 0;

  while (left < right) {
      // 현재 left와 right 포인터가 가리키는 두 숫자의 합을 계산합니다.
      let sum = arr[left] + arr[right];
      if (sum === M) {
          count++;
          left++; // 오른쪽 한칸이동 
          right--; // 왼쪽 한칸이동.
      } else if (sum < M) {
          left++; // 오른쪽 한칸이동 
      } else {
          right--; // 왼쪽 한칸이동.
      }
  }

  return count;
}

let N = parseInt(input[0]);
let M = parseInt(input[1]);
let numbers = input[2].split(' ');

console.log(countArmorPairs(N, M, numbers));





