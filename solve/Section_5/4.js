/**
 * @param {number} m
 * @param {number[]} arr
 * @returns {number} - 
 * @comment
 * 
연속 부분수열 2

N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
1 3 1 2 3
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3},
{1, 3, 1}로 총 10가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
5 5
1 3 1 2 3

▣ 출력예제 1
10
 */
function solution(m, arr) {

    let result = 0;

    let sum = 0;
    let p2 = 0;

    for (let p1 = 0; p1 < arr.length; p1++) {

        sum += arr[p1];
        
        if (sum <= m) {
            result ++;

            sum = sum - arr[p2];
            if(sum <= m) {
                result ++;
                p2++;
            }
        };

    }

    return result;
};

console.log(solution(5, [1, 3, 1, 2, 3]));

function solution3(m, arr) {
    let result = 0;
    let sum = 0;
    let p2 = 0;

    for (let p1 = 0; p1 < arr.length; p1++) {
        sum += arr[p1];

        while (sum > m) {
            sum -= arr[p2];
            p2++;
        }
        
        /** 애초에 나열된 값의 합이지 완전 전체 탐색이 아님; */
        result += p1 - p2 + 1;
    }

    return result;
}

console.log(solution3(5, [1, 3, 1, 2, 3]));