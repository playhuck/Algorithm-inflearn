
/**
 * 스택(stack) 
 * 일반적으로 pop으로 뒤 부터 제거한다.
 */

// 스택 생성
let myStack = [];

// push 메서드를 사용하여 스택에 데이터 추가
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack); // 출력: [1, 2, 3]

// pop 메서드를 사용하여 스택에서 데이터 제거 (가장 마지막에 추가된 데이터부터 제거)
let removedStack = myStack.pop();

console.log(removedStack); // 출력: 3
console.log(myStack);     // 출력: [1, 2]

/**
 * 큐(queue)
 * 일반적으로 shift로 앞 부터 제거한다.
 */

let myQueue = [];

// push 메서드를 사용하여 큐에 데이터 추가
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue); // 출력: [1, 2, 3]

// shift 메서드를 사용하여 큐에서 데이터 제거 (가장 처음에 추가된 데이터부터 제거)
let removedQueue = myQueue.shift();

console.log(removedQueue); // 출력: 1
console.log(myQueue);     // 출력: [2, 3]