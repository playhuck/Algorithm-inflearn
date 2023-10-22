
function solution(str) {
    
    // let result = str.split('');

    /** 나의 풀이 */
    // result = result.map((val, idx) => {

    //     const ascIIValue = val.charCodeAt();
    //     if(ascIIValue >= 97 && ascIIValue <= 122) {
    //         return val.toUpperCase();
    //     } else {
    //         return val;
    //     };

    // }).join('');

    /** 강의 풀이 1*/
    // let result = "";
    
    // for(let val of str) {

    //     if(val === val.toLowerCase()) {
    //         result += val.toUpperCase();
    //     } else {
    //         result += val;
    //     }
    // }

    /** 강의 풀이 2 */
    let result = "";
    
    for(let val of str) {

        let num = val.charCodeAt();
        if(num >= 97 && num <= 122) result += String.fromCharCode(num - 32) // -32는 소문자 번호를 대문자 번호로 바꿔준다.
        else result += val;

    }
    

    return result;
};

console.log(solution("Have a Good Time"));