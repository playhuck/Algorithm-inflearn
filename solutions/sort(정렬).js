/**
 * 정렬
 *  
 * - sort((a,b) => {}) 메서드를 사용할 때, a와 b는 오름차순인지 내림차순인지를 가리킨다. a와 b에 특별한 의미가 담기진 않는다.
 * - a - b => 오름차순
 * - b - a => 내림차순
 */

/**
 * sort를 사용한 기본적인 오름차순 정렬
 * a - b
 */

const ascSort = [13,5,11,7,23,15].sort((a,b) => {
    return a - b
});

/**
 * sort를 사용한 기본적인 내림차순 정렬
 */

const descSort = [13,5,11,7,23,15].sort((a,b) => {
    return b - a
});

/**
 * 선택정렬
 * 선택 정렬(Selection Sort)은 간단하면서도 비효율적인 정렬 알고리즘 중 하나입니다. 
 * 이 알고리즘은 배열을 순회하면서 가장 작은 값을 찾아 해당 값을 배열의 맨 앞에 위치한 값과 교환하는 방식으로 정렬을 수행합니다.
 * 배열을 순회하면서 최소값을 찾아 맨 앞부터 채워나갑니다. 즉, 현재 위치의 원소와 나머지 원소들을 비교하며 최소값을 찾아 교환합니다.
 * 교환 횟수가 상대적으로 적어 메모리의 이동 횟수가 적습니다. 또한, 최선, 평균, 최악의 경우에도 시간 복잡도가 동일합니다.
 */
function solution2(arr) {

    for (let i = 0; i < arr.length; i++) {

        let idx = i;

        for (let j = 1; j < arr.length; j++) {
            
            /**
             * arr[j]가 arr[idx] 보다 작기 때문에, 더 작은 값을 j로 변경하고 
             * 현재 위치의 나와 더 작은 j를 변경합니다.
             */
            if(arr[j] < arr[idx]) idx = j;
            
        };

        [arr[i], arr[idx]] = [arr[idx], arr[i]]
        
    };

    return arr;
};

console.log(solution2([13,5,11,7,23,15]));

/**
 * 버블정렬
 * 버블 정렬(Bubble Sort)은 간단하면서 이해하기 쉬운 정렬 알고리즘 중 하나입니다. 
 * 이 알고리즘은 인접한 두 원소를 비교하면서 필요에 따라 서로 위치를 교환하여 정렬을 수행합니다.
 * 교환 횟수가 많아 메모리의 이동 횟수가 더 많습니다. 또한, 최선의 경우에도 비효율적인 성능을 보일 수 있습니다.
 */
function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        console.log(arr);
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }