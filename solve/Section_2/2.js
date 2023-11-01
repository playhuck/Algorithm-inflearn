
/** @comment 나의 풀이 */
// /** @param {number[]} numArray  */
// function solution(numArray) {
    
//     let result = [];

//     for (let i = 0; i < numArray.length; i++) {
//         const numi = numArray[i];

//         if (i === 0) {

//             result.push(numi);

//             continue;
//         };

//         const lengthValue = result[result.length - 1];

//         if (numi > lengthValue) {

//             result.push(numi)

//             continue;

//         };

//     }

//     return result.length;
// };

// console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));

/** @comment 강의 풀이 */
/** @param {number[]} numArray  */
function solution(numArray) {
    
    let result = 1;
    let max = numArray[0]

    for (let i = 1; i < numArray.length; i++) {
        
        if(numArray[i] > max){

            result ++;

            max = numArray[i]
        };

    }

    return result;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));