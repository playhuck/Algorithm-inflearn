/**
 * @param {}
 * @returns {} - 
 * @comment
큐(Queue)는 데이터를 선입선출(First-In-First-Out, FIFO)의 순서로 처리하는 자료구조입니다. 
이것은 먼저 도착한 데이터가 먼저 처리되는 구조를 갖고 있습니다. 큐는 일상 생활에서 줄 서기와 유사한 개념을 갖고 있습니다.

큐의 주요 연산:
Enqueue(인큐): 큐에 데이터를 추가하는 작업을 의미합니다.
Dequeue(디큐): 큐에서 데이터를 제거하는 작업을 의미합니다.
Front(프런트): 큐의 맨 앞에 위치한 데이터를 조회하는 작업을 의미합니다.
Rear(리어 또는 백): 큐의 맨 뒤에 위치한 데이터를 조회하는 작업을 의미합니다.
isEmpty(비어있는지 확인): 큐가 비어 있는지 여부를 확인합니다.

n = 왕자 숫자
k = 제외될 순번
 */
function solution(n, k) {

    let princeArray = new Array(n).fill(0).map((_, i) => i + 1);

    let p = 0;
    let cycle = 0;

    while (cycle < n - 1) {

        if (p < k - 1) {

            princeArray.push(princeArray[0]);

            princeArray.splice(0, 1);

            p++;

        } else {

            p = 0;
            cycle++;

        };

    };

    return princeArray[0];
}

console.log(solution(8, 3));

function solution2(n, k) {

    let answer = 0;
    let queue = Array.from({ length: n }, (v, i) => i + 1);

    while(queue.length) {

        for (let i = 1; i < k; i++) {
            
            queue.push(queue.shift());
            
        };

        queue.shift();

        if(queue.length === 1) answer = queue.shift();
    }

    return answer;
}

console.log(solution2(8, 3));