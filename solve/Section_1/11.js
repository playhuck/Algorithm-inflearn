
function solution(str) {
    
    let result = 0;

    for (let val of str) {

        /** 나의 풀이 == 강의 풀이 1 */
        // if(val.toUpperCase() === val) {
        //     result ++;
        // }

        /** 강의 풀이 2 아스키 코드 활용 
         * 
         *  외워둘 것, 
         *  1. 대문자는 ASCII코드의 65(대문자A) ~ 90(대문자Z)
         *  2. 소문자는 ASCII코드의 97(소문자a) ~ 122(소문자z)
        */
        let num = val.charCodeAt(); // val의 문자열의 ASCII코드를 넘겨 준다.
        if( num >= 65 && num <= 90) {
            result ++;
        }
    }

    return result;
};

console.log(solution("KoreaGoodTime"));