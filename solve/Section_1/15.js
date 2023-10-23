
/** 나의 풀이 */
// function solution(str) {

//     let result = '';
//     let strArr = str.split('')
//     let ceil = Math.ceil(str.length / 2);
//     let floor = Math.floor(str.length / 2);
    
//     if (str.length % 2 === 0) {
//         result = strArr[floor - 1] + strArr[floor];
//     } else {
//         result = strArr[ceil - 1];
//     }

//     return result;
// };

// console.log(solution("aaaabbaaaa"));

/** 강의 풀이 */
function solution(str) {

    let result = '';
    let mid = Math.floor(str.length / 2);
    if(str.length % 2 === 1){
        result = str.substr(mid, 1);
    } else {
        result = str.substr(mid-1, 2);
    }

    return result;
};

console.log(solution("aaaabbaaaa"));