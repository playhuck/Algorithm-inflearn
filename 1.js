/**
 * @param {number[]} arr
 * @returns {} - 
 * @comment 선택정렬
 * 선택 정렬(Selection Sort)은 간단하면서도 비효율적인 정렬 알고리즘 중 하나입니다. 
 * 이 알고리즘은 배열을 순회하면서 가장 작은 값을 찾아 해당 값을 배열의 맨 앞에 위치한 값과 교환하는 방식으로 정렬을 수행합니다.
 */
function solution(arr) {
    
    let result = [];

    result = arr.sort((a, b) => {

        return a - b;
    })

    return result;
};

// console.log(solution([13,5,11,7,23,15]));

/**
 * @param {number[]} arr
 * @returns {} - 
 * @comment 선택정렬
 * 선택 정렬(Selection Sort)은 간단하면서도 비효율적인 정렬 알고리즘 중 하나입니다. 
 * 이 알고리즘은 배열을 순회하면서 가장 작은 값을 찾아 해당 값을 배열의 맨 앞에 위치한 값과 교환하는 방식으로 정렬을 수행합니다.
 */
function solution2(arr) {

    for (let i = 0; i < arr.length; i++) {

        let idx = i;

        for (let j = 1; j < arr.length; j++) {
            
            /**
             * arr[j]가 arr[idx] 보다 작기 때문에, 더 작은 값을 j로 변경하고 현재 위치의 나와 더 작은 j를 변경합니다.
             */
            if(arr[j] < arr[idx]) idx = j;
            
        };

        [arr[i], arr[idx]] = [arr[idx], arr[i]]
        
    };

    return arr;
};

console.log(solution2([13,5,11,7,23,15]));