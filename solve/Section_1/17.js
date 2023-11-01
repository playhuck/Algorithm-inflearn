
/** @comment 나의풀이 */
// /** @param {string[]} strArray  */
// function solution(strArray) {
    
//     let result = [];

//     for (let i = 0; i < strArray.length; i++) {
        
//         const strIndex = strArray.indexOf(strArray[i]);

//         if(strIndex === i){
//             result.push(strArray[i])
//         }
        
//     }

//     return result;
// };

// console.log(solution(["good", "time", "good", "time", "student"]));

/** @comment 나의 풀이2 */
// /** @param {string[]} strArray  */
// function solution(strArray) {

//     const result = [];
//     strArray.filter((str, i) => {

//         const bool = result.some((val, i) => str === val);

//         if (!bool) {
//             result.push(str)
//         }

//         return result.some((val, i) => str !== val)
//     });

//     return result;
// };

// console.log(solution(["good", "time", "good", "time", "student"]));

/** @comment 강의 풀이 */
/** @param {string[]} strArray  */
function solution(strArray) {

    return strArray.filter((str, i) => {

        return strArray.indexOf(str) === i;
    });

};

console.log(solution(["good", "time", "good", "time", "student"]));