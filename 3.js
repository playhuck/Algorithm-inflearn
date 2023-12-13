
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