
/**
 * 
 * @param { number } n;
 * @param { number[] } array;
 * @comment 나의 풀이
 */
function solution(n, array) {

    let num = 0;
    let sum = 0;

    for(const val of array) {

        const splitVal = val.toString().split('');

        /**
         * const splitVal2 = +val.toString().split('').reduce((a,b) => a + b, 0);
         * 
         * 이런식으로 합을 구할 수도 있음.
        */
        let valSum = 0;
        for(const sv of splitVal) {

            valSum += +sv;
        };

        if(valSum === sum) {

            if(num < val) num = val; 
        }
        if(valSum > sum) {

            num = val;
            sum = valSum;
        }
    }

    return num;
};

console.log(solution(7, [128,460,603,40,521,137,123]));


/**
 * 
 * @param { number } n;
 * @param { number[] } array;
 * @comment 강의 풀이
 */
function solution2(n, array) {

    let answer, max = Number.MIN_SAFE_INTEGER;

    for(const x of array) {

        let sum = 0, tmp = x;

        while(tmp) {

            /** 매 루프마다 10으로나눈 나머지가 일의자리 
             * 십의자리 백의자리.... 이런식으로 자리수의 값이 나오고 이걸 더함 */
            sum += tmp % 10;

            /** 그 다음 tmp의 값을 뒤부터 떨어지는 형태로 만들고
             *  정수형을 만들기 위해 Math.floor를 사용
             *  128, 12, 1...
             */
            tmp = Math.floor(tmp/10);

        };

        if(sum > max) {
            max = sum;
            answer = x;
        } else if ( sum === max) {

            if(x > answer) answer = x;

        };
    }

    return answer;
};

console.log(solution2(7, [128,460,603,40,521,137,123]));