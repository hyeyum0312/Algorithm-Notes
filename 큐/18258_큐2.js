const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// /dev/stdin
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');


[n, ...strings] = input; // 배열 분해 할당 , ex) 6, '(())'
n = Number(n);

class Node {
  prev = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length += 1;
  }
  pop() {
    if (this.length === 0) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return value;
  }
  size() {
    return this.length;
  }
  empty() {
    return this.length === 0 ? 1 : 0;
  }
  front() {
    return this.length ? this.head.value : -1;
  }
  back() {
    return this.length ? this.tail.value : -1;
  }
}

const solution = (n, strings) => {
  const queue = new Queue();
  let answer = '';
  strings.forEach((c) => {
    const [strings, value] = c.split(' ');
    if (strings === 'push') queue[strings](value);
    else answer += queue[strings]() + '\n';
  });

  return answer;
};

console.log(solution(n, strings));