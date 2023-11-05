
/** @comment 나의풀이 */
/** @param {number[]} numArr  */
function solution(numArr) {

    let count = 0;
    let arr = numArr;
    let rank = 1;

    while (count < numArr.length) {

        const max = arr.indexOf(Math.max(...arr));
        const val = arr[max];

        arr[max] = rank;

        const fixedRank = rank;

        for (let i = 0; i < arr.length; i++) {
            
            if(arr[i] === val) {
                console.log("일치:",arr[i], i, fixedRank);
                arr[i] = fixedRank;
                rank++;
                count++;
            };
        };

        rank++;
        count++;

    }

    return arr;
};

/**
 * 1. 정렬
 * 2. 정렬 후 그 인덱스에 맞는 값 탐색
 * 3. 그 인덱스에 번호 부여
 */

// console.log(solution([100, 100, 92, 100 ,76]));

/** @comment 강의풀이+ 나의풀이 */
/** @param {number[]} numArr  */
function solution2(numArr) {
    
    let result = [];

    for (let i = 0; i < numArr.length; i++) {
        
        const numI = numArr[i];

        let count = 1;

        for (let j = 1; j < numArr.length; j++) {
            const numJ = numArr[j];

            if(numI < numJ) count ++;
            
        };

        if(numI < numArr[0]) count ++;

        result.push(count);
        
    }

    return result;
};

// console.log(solution2([89, 89, 89, 100 ,76]));

/** @comment 강의풀이 */
/** @param {number[]} numbArr  */
function solution(numbArr) {
    
    let len = numbArr.length;
    let answer = Array.from({ length : len }, () => 1);
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(numbArr[j] > numbArr[i]) answer[i]++;
        }
    }

    return answer;
};

console.log(solution([89, 89, 89, 100 ,76]));