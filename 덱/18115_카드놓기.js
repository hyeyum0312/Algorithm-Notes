const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
class Deque {
  constructor() {
    this.items = [];
  }
  
  pushFront(item) {
    this.items.unshift(item);
  }

  pushBack(item) {
    this.items.push(item);
  }

  popFront() {
    return this.items.shift();
  }

  popBack() {
    return this.items.pop();
  }
  
  insertAt(index, item) {
    this.items.splice(index, 0, item);
  }

  get length() {
    return this.items.length;
  }
}

const [n,...num] = input;
const N = parseInt(n);
const cardList = Array.from({ length: N }, (unused, i) => i + 1); // 길이가 N인 배열 만들기 [1, 2, 3, 4, 5]
const commands = num[0].split(' ').map(Number); // num[0] 문자열을 공백을 기준으로 잘라서 배열로 만들고,그 각 요소를 숫자로 변환

// 덱 초기화
const initList = new Deque();


// 덱을 이용 (덱은 양쪽 끝에서 요소를 추가하거나 제거할 수 있는 자료구조)
// 덱을 이용한 명령어 처리
while (commands.length > 0) {
  const command = commands.pop(); // 배열의 마지막 요소를 제거하고 그 값을 command 변수에 저장, 
  const temp = cardList.shift(); // cardList 배열의 첫 번째 요소를 제거하고 그 값을 temp 변수에 저장.
  
  if (command === 1) {
    initList.pushFront(temp); // temp 값을 initList의 맨 앞에 삽입
  } else if (command === 2) {
    initList.insertAt(1, temp); // temp 값을 initList의 두 번째 위치에 삽입
  } else if (command === 3) {
    initList.pushBack(temp); // temp 값을 initList의 맨 뒤에 삽입.
  }
}


console.log(initList.items.join(''))