// 2주차 (스택/큐/링크드리스트)

// ## 01. 스택과 큐를 구현하시오.

// ---

// 필수 구현 메서드는 다음과 같음.

// > **Stack** > 
// 1. **Enqueue**: 스택 상단에 요소를 추가합니다.
// 2. **Dequeue**: 스택에서 맨 위 요소를 제거합니다.
// 3. **Peek**: 스택의 최상위 요소를 제거하지 않고 어떤 값인지 봅니다.
// 4. **IsEmpty**: 스택이 비어 있는지 확인합니다.


const Stack = () => {
  let items = [];

  return {
    // Stack에 요소를 추가합니다.
    enqueue(element) {
      items.push(element);
    },

    

    // Stack에서 맨 위 요소를 제거하고 반환합니다.
    dequeue() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return items.pop();
    },

    // Stack의 최상위 요소를 제거하지 않고 반환합니다.
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return items[items.length - 1];
    },

    // Stack이 비어 있는지 확인합니다.
    isEmpty() {
      return items.length === 0;
    }
  };
};

// 사용 예시
const stack = Stack();

stack.enqueue(10);
stack.enqueue(20);
stack.enqueue(30);
// stack [10,20,30]

console.log('Stack', stack.peek()); // 30
console.log('Stack', stack.dequeue()); // 30을 제거 후 반환
console.log('Stack', stack.peek()); // 20 // 최상위 요소 반환
console.log('Stack', stack.isEmpty()); // 10, 20이 남아있으므로 false


// > **Queue** > 
// 1. **Enqueue**: 큐 뒤쪽에 요소를 추가합니다.
// 2. **Dequeue**: 큐에서 맨 앞의 요소를 제거합니다.
// 3. **Peek**: 큐의 맨 앞 요소를 제거하지 않고 어떤 값인지 봅니다.
// 4. **IsEmpty**: 큐가 비어 있는지 확인합니다.
// 이 때 class 만들어서 구현하지말고 되도록 언어에 있는 기본 자료구조를 이용해서 간단하게 구현하시오.


// 큐 초기화
const queue = [];

// 요소를 큐의 뒤쪽에 추가합니다.
function enqueue(element) {
  queue.push(element);
}

// 큐에서 맨 앞의 요소를 제거하고 반환합니다.
// shift : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
function dequeue() {
  if (isEmpty()) {
    return "isEmpty";
  }
  return queue.shift();
}

// 큐의 맨 앞 요소를 제거하지 않고 반환합니다.
function peek() {
  if (isEmpty()) {
    return "isEmpty";
  }
  return queue[0];
}

// 큐가 비어 있는지 확인합니다.
function isEmpty() {
  return queue.length === 0;
}

// 사용 예시
enqueue(1);
enqueue(2);
enqueue(3);
// [1,2,3]

console.log('Que',peek()); // 1
console.log('Que',dequeue()); // 1 , 남은것: [2,3]
console.log('Que',peek()); // 2
console.log('Que',isEmpty()); // false, 남은것: [2,3]
dequeue(); // 2제거, 남은것: [3]
dequeue(); // 3제거, 남은것: []
console.log('Que',isEmpty()); // true


// ## 02. linked list를 구현하시오.

// ---

// 필수 구현 메서드는 다음과 같음.

// 1. append : 리스트 가장 뒤에 값을 추가합니다.
// 2. prepend : 리스트 가장 앞에 값을 추가합니다.
// 3. delete : 원하는 값을 삭제합니다.
// 4. delete_first : 리스트 가장 앞에 있는 값을 삭제합니다.
// 5. delete_last : 리스트 가장 뒤에 있는 값을 삭제합니다.
// 6. display : 리스트를 출력합니다.


// 노드 생성 함수
function createNode(value) {
  return {
    value: value,
    next: null
  };
}

// 링크드 리스트 생성 함수
function createLinkedList() {
  let head = null;
  let tail = null;

  return {
    // 리스트 가장 뒤에 값을 추가합니다.
    append(value) {
      const newNode = createNode(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    },

    // 리스트 가장 앞에 값을 추가합니다.
    prepend(value) {
      const newNode = createNode(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head = newNode;
      }
    },

    // 원하는 값을 삭제합니다.
    delete(value) {
      if (!head) {
        return;
      }

      if (head.value === value) {
        head = head.next;
        if (!head) {
          tail = null;
        }
        return;
      }

      let current = head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }

      if (current.next) {
        current.next = current.next.next;
        if (!current.next) {
          tail = current;
        }
      }
    },

    // 리스트 가장 앞에 있는 값을 삭제합니다.
    deleteFirst() {
      if (!head) {
        return;
      }
      head = head.next;
      if (!head) {
        tail = null;
      }
    },

    // 리스트 가장 뒤에 있는 값을 삭제합니다.
    deleteLast() {
      if (!head) {
        return;
      }

      if (!head.next) {
        head = null;
        tail = null;
        return;
      }

      let current = head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
      tail = current;
    },

    // 리스트를 출력합니다.
    display() {
      let current = head;
      let values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(' -> '));
    }
  };
}

// 사용 예시
const list = createLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.display(); // 1 -> 2 -> 3

list.prepend(0);
list.display(); // 0 -> 1 -> 2 -> 3

list.delete(2);
list.display(); // 0 -> 1 -> 3

list.deleteFirst();
list.display(); // 1 -> 3

list.deleteLast();
list.display(); // 1

