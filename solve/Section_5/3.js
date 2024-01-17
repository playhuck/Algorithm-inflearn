/**
 * @param {number} m
 * @param {number[]} arr
 * @returns {number} - 
 * @comment

연속 부분수열 1

N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을
작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
1 2 1 3 1 1 1 2
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
8 6
1 2 1 3 1 1 1 2

▣ 출력예제 1
3
 */
function solution(m, arr) {

    let result = 0;

    const len = arr.length;
    let p1 = 0;
    let p2 = 0;
    let sum = 0;

    if (len === 1) {

        return m === arr[0] ? 1 : 0
    }

    while (p1 < len) {

        if (sum === m) {
            p1++;
            p2 = p1;
            result++;
            sum = 0;
        } else if (sum > m) {

            p1++;
            p2 = p1;
            sum = 0;

        } else {

            sum += arr[p2];
            p2++;
        };

        if (!arr[p2]) break;

    }

    return result;
};

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

function solution2(m, arr) {

    let result = 0;

    if (arr.length === 1) {

        return m === arr[0] ? 1 : 0
    }

    let p2 = 0;
    let sum = 0;

    for (let p1 = 0; p1 < arr.length; p1++) {

        sum += arr[p1];

        if (sum === m) {
            result++;
        };

        while (sum >= m) {
            sum -= arr[p2];

            p2++;
            if (sum === m) {
                result++;
            }
        }
    }

    return result;
};

let a2 = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution2(6, a2));