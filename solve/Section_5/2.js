/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]} - 
 * @comment 공통원소 구하기

A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제 1
5
1 3 9 5 2
5
3 2 5 7 8

▣ 출력예제 1
2 3 5
 */
function solution(arr1, arr2) {
    
    let result = [];

    const len2 = arr2.length;

    const n = arr1.slice().sort();
    const m = arr2.slice().sort(); 

    let p2 = 0;

    while(p2 < len2) {
        const v = n.indexOf(m[p2]);

        if(v >= 0) {
            result.push(m[p2]);
            p2 ++;
        };

        if(v < 0) {
            p2 ++;
        }

    }

    return result;
};

console.log(solution([1,3,9,5,2], [3,2,5,7,8]));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]} -
 * @coment 강의 풀이 
 */

function solution2(arr1, arr2) {
    
    let result = [];

    const len1 = arr1.length;
    const len2 = arr2.length;

    /**
     * sort()는 문자열로 바꾼 후 사전에 정의된 대로 정렬하기 때문에 숫자가 2자리 이상이 되면 위험하다.
     * 사전 순으로 하게 된다면, [ 1, 10, 2] 이런식으로 될 수 도있다.
     * 그렇기 때문에 정렬 기준을 항상 줘야 한다.
     */
    const n = arr1.slice().sort();
    const m = arr2.slice().sort();

    const sampleArray = [1,2,10,3] 
    const sample = sampleArray.slice().sort();
    const sample2 = sampleArray.slice().sort((a,b) => {
        return a - b;
    })

    console.log(sample); // [ 1, 10, 2, 3 ]
    console.log(sample2); // [ 1, 2, 3, 10 ]

    let p1 = 0, p2 = 0;

    while(p1 < len1 && p2 < len2) {
      
        if(n[p1] === m[p2]) {
            result.push(n[p1])
            p1 ++;
            p2 ++;
        } else {

            n[p1] > m[p2] ? p2 ++ : p1 ++;
        }

    }

    return result;
};

console.log(solution2([1,3,9,5,2], [3,2,5,7,8]));