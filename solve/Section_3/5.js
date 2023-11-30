
/**
 * @param { string } str
 * @comment 나의 풀이
 */
function solution(str) {
    
    const originStr = str.split('');
    let result = '';

    let num = 0;

    for (let i = 0; i < originStr.length; i++) {
        
        if(originStr[i] === originStr[i+1]){
            num ++;
        } else if(originStr[i] !== originStr[i + 1]) {
           
            num ++;

            num > 1 ? result += ( originStr[i] + `${num}`) : result += originStr[i];

            num = 0;
        } else if(i === originStr.length) {

            if (originStr[i] !== originStr[i-1]) {

                result += (originStr[i])
            }
        }
        
    }

    return result;
};

console.log(solution('KKHSSSSSSSE'));


/**
 * @param { string } str
 * @comment 강의 풀이
 */
function solution2(str) {
    
    const originStr = str.split('');
    let result = '';

    let num = 1;

    for (let i = 0; i < originStr.length - 1; i++) {
        
        if(originStr[i] === originStr[i+1]) num ++;
        else {
            result += originStr[i];
            if(num > 1) result[i] += String(num);
            num = 1;
        }
        
        
    }

    return result;
};

console.log(solution2('KKHSSSSSSSE'));