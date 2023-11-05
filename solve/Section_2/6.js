
/** @comment 나의풀이 */
/** @param {[num[]]} arr  */
function solution(arr) {

    let result = Number.MIN_SAFE_INTEGER;
    let row = 0;
    let column = new Array(arr.length).fill(0);
    let diagonal = new Array(2).fill(0);

    let miniDia1 = 0; /** 대각의 합 */
    let miniDia2 = 0;

    for (let i = 0; i < arr.length; i++) {

        let miniRow = 0; /** 행의 합 */
        let miniCol = 0; /** 열의 합 */

        for (let r = 0; r < arr.length; r++) {
            miniRow += arr[i][r];
            miniCol += arr[r][i];
            if (miniRow > row) row = miniRow;
        };
        
        miniDia1 += arr[i][i];
        miniDia2 += arr[i][arr.length - 1 - i];

        column[i] = miniCol;

    };

    diagonal[0] = miniDia1;
    diagonal[1] = miniDia2;

    const maxCol = Math.max(...column);
    const maxDia = Math.max(...diagonal);

    result = Math.max(maxCol, maxDia, row);

    return result;
};

// console.log(solution(
//     [
//         [10, 13, 10, 12, 15],
//         [12, 39, 30, 23, 11],
//         [11, 25, 50, 53, 15],
//         [19, 27, 29, 37, 27],
//         [19, 13, 30, 13, 19]
//     ]
// ));

/** @comment 강의 풀이 */
function solution2(arr) {

    let result = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < n; i++) {
        sum = 0;
        sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[i][j] /** 행 탐색 */
            sum2 += arr[j][i] /** 열 탐색 */
        }
        result = Math.max(result, sum, sum2);
    };
    sum = 0;
    sum2 = 0;
    for (let i = 0; i < n; i++) {
        
        sum += arr[i][i];
        sum2 += arr[i][n - i - 1];
        
    };

    result = Math.max(result, sum, sum2);

    return result;
};

console.log(solution2(
    [
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]
    ]
));
