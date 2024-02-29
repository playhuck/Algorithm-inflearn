/**
 * @param {string} results
 * @returns {} - 
 * @comment
 */
function solution(results) {

    const resultsArray = results.split('');
    const undupResults = Array.from(new Set(resultsArray));
    const obj = {};

    // console.log(obj);
    for (let i = 0; i < resultsArray.length; i++) {

        const equal = undupResults.indexOf(resultsArray[i]);
        const sameAlpha = undupResults[equal];

        if (equal >= 0) {

            if (isNaN(obj[sameAlpha])) {

                obj[sameAlpha] = 0;
            };

            obj[sameAlpha] = obj[sameAlpha] + 1;
        }

    }

    const maxAlpha = {
        alpha: '',
        value: 0
    };

    for (let key in obj) {

        if (obj[key] > maxAlpha.value) {

            maxAlpha.alpha = key;
            maxAlpha.value = obj[key];
        };

    };

    return maxAlpha.alpha;
};

console.log(solution('BACBACCACCBDEDE'));

/**
 * @param {string} results
 * @returns {} - 
 * @comment 
 * JavaScript에서는 Map이라는 내장 객체를 사용하여 해시 맵(Hash Map)을 구현할 수 있습니다. 
 * Map은 키-값 쌍을 저장하며, 키는 중복되지 않습니다.
 * 
// 빈 Map 생성
const myMap = new Map();

// 키-값 쌍 추가
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// 키를 사용하여 값에 접근
console.log(myMap.get('key1')); // 출력: value1

// Map의 크기 확인
console.log(myMap.size); // 출력: 2

// 키-값 쌍 순회
myMap.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

// 특정 키가 존재하는지 확인
console.log(myMap.has('key1')); // 출력: true

// 특정 키 제거
myMap.delete('key1');

// 모든 키-값 쌍 제거
myMap.clear();
 */
function solution2(results) {

    let result;
    let sh = new Map();

    for(let x of results) {

        // map 객체에 존재?
        if(sh.has(x)) {
            sh.set(x, sh.get(x) + 1);
        } else {
            sh.set(x, 1);
        }
    }

    let max = Number.MIN_SAFE_INTEGER;

    for(let [key, value] of sh) {

        if(value > max) {
            result = key;
            max = value;
        }
    }

    return result;
};

console.log(solution2('BACBACCACCBDEDE'));