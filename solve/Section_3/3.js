
/** 
 * @param { string } str 
 * @comment 나의 풀이
 * */
function solution(str) {
    
    const originStr = str;
    const removeStr = +originStr.replace(/[^0-9]/g, '');

    return removeStr;
};

console.log(solution('g0en2T0s8eSoft'));


/** 
 * @param { string } str
 * @comment 강의 풀이
 * */
function solution2(str) {
    
    let result = '';
    for(let x of str) {

        if(!isNaN(x)) result += x; 
    }
    
    return parseInt(result); // Number(result) // +result; 

    // 강사님은 str을 for of로 루프를 돌며 개별 값을 확인하는 것을 좋아하는 것 같음.
};

console.log(solution2('g0en2T0s8eSoft'));