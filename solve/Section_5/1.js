/**
 * @param {number[]} firArray
 * @param {number[]} secArray
 * @returns {number[]} - 
 * @comment
 * 
* 두 배열 합치기

** 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

 */
function solution(firArray, secArray) {

    let result = [];

    const length = firArray.length >= secArray.length ?
        firArray.length :
        secArray.length;

    for (let i = 0; i < length; i++) {

        if (firArray[i]) result.push(firArray[i]);

        if (secArray[i]) result.push(secArray[i]);

    }

    return result.sort();
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));

/**
 *  2 pointer 알고리즘
 * 
 *  sort 함수를 호출하기만 해도, nlog n 시간 복잡도가 들어간다.
 * 
 * - p1 배열과 - p2 배열을 for문 한 번으로 작업을 완료할 수 있다.
 */

/**
 * 강의 풀이
 * @param {number[]} firArray
 * @param {number[]} secArray
 * @returns {number[]} - 
 * @comment
 */

function solution2(firArray, secArray) {

    let result = [];

    let n = firArray.length;
    let m = secArray.length;
    let p1 = p2 = 0; // 2 포인터

    while (p1 < n && p2 < m) {

        if (firArray[p1] <= secArray[p2]) {
            result.push(firArray[p1]);
            p1++;
        } else {
            result.push(secArray[p2]);
            p2++;
        }
    };

    while (p1 < n) {
        result.push(firArray[p1]);
        p1++;
    };
    while (p2 < m) {
        result.push(secArray[p2]);
        p2++;
    };


    return result;
};

console.log(solution2([1, 3, 5], [2, 3, 6, 7, 9]));