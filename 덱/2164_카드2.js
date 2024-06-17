const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input); // 6

// 버린다, 옮긴다, 

// 연결 리스트의 노드 클래스를 정의합니다.
class Node {
    constructor(val) {
        this.val = val; // 현재노드
        this.next = null; // 이전노드
        this.prev = null; // 다음노드
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null; // 연결리스트 처음 
        this.tail = null; // 연결리스트 끝 
        this.length = 0; // 연결리스트 길이. 
    }

    push(val) { // 연결 리스트에 추가
        const newNode = new Node(val); // 새로운 노드 생성

        if (!this.head) { 
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode; // 새로운 노드를 연결 리스트의 끝에 추가
        this.length++; //길이 증가
        return newNode;  // 새로 추가된 노드 반환
    }

    getHead() { // 첫 노드(head) 가져오기
        return this.head.val; 
    }

    removeHead() { // 첫 노드(head)를 연결리스트에서 지우기
        this.head = this.head.next; // 처음 노드를 삭제하고 다음 노드를 새로운 처음 노드로 설정
        this.head.prev = null; // 새로운 처음 노드의 이전 노드를 null로 설정
        this.length--;  // 길이 감소
    }

    getLength() { // 연결리스트의 길이 반환
        return this.length;
    }
}

// N 개의 카드를 연결 리스트에 추가합니다.
const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
    cards.push(i); // 1부터 N까지의 숫자를 연결 리스트에 추가
}

// 카드 제거 규칙에 따라 연결 리스트에서 노드를 제거합니다
while (cards.getLength() !== 1) { // 길이가 0 이 아니라면.
    cards.removeHead(); // 맨 앞 노드를 지우고
    cards.push(cards.getHead()); // 제거한 노드를 맨 뒤로 이동시킵니다.
    cards.removeHead(); // 다시 맨 앞 노드를 제거합니다.
}
console.log(cards.getHead());

// addrear