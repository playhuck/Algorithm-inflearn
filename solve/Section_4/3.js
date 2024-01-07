
/**
 * @param { Array<Array<Number>> } arr
 * @comment 나의 풀이
 * 
 * - 문제 요구사항, 2차원 배열을 완전탐색을 통해 원하는 결과를 도출
 * - 멘토는 N번의 테스트에서, 멘티보다 등수가 높아야 한다.
 * - 테스트는 N번이기 때문에 arr[0] / arr[1] / arr[2] 이런식으로 풀면 안된다.
 * - 2차원 배열의 각 첫 번째 행을 부르는 방법
 * - 각 배열의 첫번째 인덱스 순으로 등수다. 3412면 3번학생이 1등... 4번 학생이 2등
 */
function solution(arr) {

    let result = [];

    const convertArray = arr;

    for (let i = 0; i < arr[0].length - 1; i++) {

        const mento = arr[0][i];

        for (let j = 0; j < arr.length; j++) {

            for (let k = 0; k < arr.length; k++) {

                const menti = arr[k][j];

                if (j > i) {
                    break;
                };

                if (j !== k) {
                    if (mento <= menti) {

                        const index = convertArray[k].indexOf(menti);

                        convertArray[k][index] = 'not';
                    }
                };    
                 
            };

        };

    };

    for (let i = 0; i < arr[0].length - 1; i++) {
        const mento = arr[i][i];

        for (let k = 0; k < arr[0].length; k++) {

            const menti = convertArray[i][k];
    
            if (typeof menti === 'number' && mento !== menti && typeof mento === 'number') {
    
                result.push([mento, menti]);
            };
    
        };
        
    }
    return result.length;
};

const arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));


/**
 * @param {Array<Array<Number>>} arr - 학생들의 시험 등수를 담은 2차원 배열
 * @returns {Number} - 멘토 멘티가 될 수 있는 횟수
 * @comment
 * 
 * - 학생 등수 비교를 통해 멘토와 멘티의 관계를 찾는 문제
 * - 멘토는 N번의 테스트에서, 멘티보다 등수가 높아야 함
 * - 두 명의 학생 i, j에 대해 모든 테스트 케이스에서 i가 j보다 항상 등수가 높다면, 멘토와 멘티의 관계가 성립
 * - 시간 복잡도: O(n^4) (두 개의 중첩된 반복문이 두 번 반복)
 */
function solution2(arr) {
    
    let result = 0; // 멘토 멘티가 될 수 있는 횟수

    const m = arr.length; // 시험 횟수
    const n = arr[0].length; // 학생 수

    // 첫 번째 학생 i에 대한 반복
    for (let i = 1; i <= n; i++) {
        // 두 번째 학생 j에 대한 반복
        for (let j = 1; j <= n; j++) {
            let cnt = 0; // 모든 테스트 케이스에서 i가 j보다 높은 횟수를 카운트하는 변수

            // 각 테스트 케이스에 대한 반복
            for (let k = 0; k < m; k++) {
                let pi = 0;
                let pj = 0;

                // 각 학생의 등수를 찾음
                for (let s = 0; s < n; s++) {
                    if (arr[k][s] === i) pi = s;
                    if (arr[k][s] === j) pj = s;
                }

                // i가 j보다 항상 등수가 높으면 cnt 증가
                if (pi < pj) cnt++;
            }

            // 모든 테스트 케이스에서 i가 j보다 높은 경우, 멘토 멘티 관계가 성립
            if (cnt === m) result++;
        }
    }

    return result;
};

// 테스트
let arr2 = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution2(arr2));