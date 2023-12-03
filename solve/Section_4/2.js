/**
 * @param { number[] } array
 * @comment 나의 풀이
 */
function solution(array) {
    
    let result = [];

    for (let i = 0; i < array.length; i++) {
        
        const reverseNum = +(array[i].toString().split('').reverse().join(''));
        let isMinor = true;

        for(let j = 2; j <= Math.sqrt(reverseNum); j++) {

            if(reverseNum % j === 0) {

                isMinor = false;
                break;

            };
        };

        if(isMinor && reverseNum !== 1) result.push(reverseNum);
    }
    return result;
};

// console.log(solution([32,55,62,20,250,370,200,30,100]));

/**
 * @param { number[] } array
 * @comment 강의 풀이
 * @description 숫자를 뒤집었을 때 소수인지 아닌지 판별하는 문제
 */
function solution(array) {
    
    let result = [];

    for(const x of array) {

        let res = 0;
        let y = x;

        /**
         *  - 내가 푼 숫자를 reverse로 뒤집는 방법 말고,
         *  - 이번 강의에서도 몫과 나머지를 통해 설명.
         *  - let t = 10의자리가 모두 사라진 y
         *  - res 에 뒤집혀진 값의 10*을 곱한 후 t를 다시 더해줌 이런식으로
         *  - 값을 역순으로 뒤집음
         *  - 그리고 parseInt나 Math.floor로 정수형으로 다시 맞춰줌.
         *  - chat gpt 답변으론, while문이 더 수학적이지만, 연산성능 상 큰 차이는 없을 것으로 추정
         */

        while(y) {
            let t = y % 10;
            res = res * 10 + t;
            y = parseInt(y / 10);
        };

        console.log(res);
    }

    return result;
};

console.log(solution([32,55,62,20,250,370,200,30,100]));