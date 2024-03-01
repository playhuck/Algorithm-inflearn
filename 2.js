/**
 * @param {[]} arr
 * @returns {} - 
 * @comment 버블정렬
 * N개이 숫자가 입력되면 내림차순으로 정렬하여 출력하는 프로그램을 작성하세요
 */
function solution(arr) {

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] > arr[i - 1]) {
            
            for (let j = 0; j < arr.length; j++) {
                
                if(arr[i] > arr[j]) {
                    const now = arr[i];
                    arr.splice(i, 1);
                    arr.splice(j, 0, now);
                };
                
            }
        };
    }

    return arr;
};

console.log(solution([13, 5, 11, 7, 23, 15]));

/**
 * @param {[]} arr
 * @returns {} - 
 * @comment 버블정렬
 * N개이 숫자가 입력되면 내림차순으로 정렬하여 출력하는 프로그램을 작성하세요
 */
function solution2(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length -i - 1; j++) {

            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            };

        };
    }

    return arr;
};

console.log(solution2([13, 5, 11, 7, 23, 15]));

/**
 * @param {[]} arr
 * @returns {} - 
 * @comment 버블정렬
 * N개이 숫자가 입력되면 내림차순으로 정렬하여 출력하는 프로그램을 작성하세요
 */
function solution3(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length -i - 1; j++) {

            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            };

        };
    }

    return arr;
};

console.log(solution3([13, 5, 11, 7, 23, 15]));