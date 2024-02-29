/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {} - 
 * @comment
 */
function solution(arr1, arr2) {
    
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        
        if(i <= arr2.length - 3){
            result.push(arr2[i] + arr2[i+1] + arr2[i+2]);
        }
        
    };

    const maxPrice = Math.max(...result);

    return maxPrice;
};

console.log(solution([10,3], [12,15,11,20,25,10,20,19,13,15]));

/**
 * @param {number[]} k
 * @param {number[]} arr
 * @returns {} - 
 * @comment sliding window ? 
 * "Sliding window"는 컴퓨터 과학 및 알고리즘에서 사용되는 기술 중 하나입니다. 
 * 이 용어는 연속적이거나 순차적인 데이터의 부분 집합을 나타냅니다. 이 부분 집합은 "슬라이딩"이라 불리는 과정을 통해 이동하며 새로운 데이터를 포함하거나 기존 데이터를 제외하여 창을 이동시킵니다.

주로 배열 또는 연속적인 데이터의 경우에 사용되며, 특히 데이터 스트림에서 특정 패턴을 찾거나 최적의 해결책을 찾기 위해 유용합니다. 
슬라이딩 윈도우 기법은 윈도우의 크기와 이동하는 스텝의 크기를 조절하여 원하는 결과를 얻을 수 있습니다.

예를 들어, 연속적인 배열에서 최대 부분 합을 찾는 문제를 해결할 때 슬라이딩 윈도우를 사용할 수 있습니다. 
윈도우는 배열의 부분 집합이 되며, 이를 이동시키면서 합을 계산하여 최대 부분 합을 찾을 수 있습니다.
 */
function solution2(k, arr) {
    
    let result, sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i]
    };

    result = sum;

    for (let i = k; i < arr.length; i++) {
        
        sum += ( arr[i] - arr[i - k]); // 현재 값을 더하고 이전 값을 차감
        result = Math.max(result, sum) // 그리고 두 값중 최대 값을 구함
        
    };

    return result;
    
};

console.log(solution2(3, [12,15,11,20,25,10,20,19,13,15]));