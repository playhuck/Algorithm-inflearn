
/** 나의 풀이 */
// function solution(strArray) {

//     let result = '';

//     for (let i = 0; i < strArray.length; i++) {

//         if (i === 0) {
//             result = strArray[i];
//         }

//         if (i > 0 && strArray[i].length > strArray[i - 1].length) {
//             result = strArray[i]
//         };

//     }

//     return result;
// };

/** 강의 풀이 */
function solution(strArray) {

    let result;
    let max = Number.MIN_SAFE_INTEGER;
    for (let val of strArray) {
        if (val.length > max) {
            max = val.length;
            result = val;
        }
    }

    return result;
};

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));