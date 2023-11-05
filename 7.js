/** @comment 나의 풀이 */
/** @param {[number[]]} arr  */
function solution(arr) {

    let result = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const val = arr[i][j];
            const leftVal = j < len - 1 && typeof arr[i][j + 1] === 'number' ? arr[i][j + 1] : 0;
            const rightVal = j > 0 && typeof arr[i][j - 1] === 'number' ? arr[i][j - 1] : 0;
            const topVal = i > 0 && typeof arr[i - 1][j] === 'number' ? arr[i - 1][j] : 0;
            const bottomVal = i < len - 1 && typeof arr[i + 1][j] === 'number' ? arr[i + 1][j] : 0;

            if (val === Math.max(leftVal, rightVal, topVal, bottomVal, val)) result++;
        }
    }

    return result;
};

console.log(solution(
    [
        [5, 3, 7, 2, 3],
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]
    ]
));

/** @comment 강의 풀이 */
/** @param {[number[]]} arr  */
function solution2(arr) {

    let result = 0;
    let len = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    /**
     * dx와 dy를 더 해준다. (i + dx[k],j + dy[k])
     * 1. 위(top)를 보고 싶다면, (-1, 0)
     * 2. 아래(bottom)를 보고 싶다면, (1, 0)
     * 3. 오른쪽(right)을 보고 싶다면, (0, -1)
     * 4. 왼쪽(light)을 보고 싶다면 (0, 1)
     * 
     * i와 j가 0보다 크고 leng보다는 작아야한다.. i-1 j-1 // i+1, j+1에서 에러가 발생할 수 있음
     */
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let bool = true;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (
                    nx >= 0 && nx < len && ny >= 0 && ny < len &&
                    arr[nx][ny] >= arr[i][j]) {
                    bool = false; break;
                }
            };
            if (bool) result++;


        }
    }

    return result;
};

console.log(solution2(
    [
        [5, 3, 7, 2, 3],
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]
    ]
));