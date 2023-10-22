
/** 나의 풀이 */
// function solution(str, alphabet) {
    
//     let strArray = str.split('');
//     let result = 0;

//     for (let i = 0; i < strArray.length; i++) {
//         if(strArray[i] === alphabet) {

//             result += 1;
//         }
        
//     }

//     return result;
// };

/** 강의 풀이 1 */
// function solution(str, alphabet) {
    
//     let strArray = str.split('');
//     let result = 0;

//     /** for of를 사용하면 string의 하나씩 값을 부를 수 있다. */
//     // for(let v of strArray) {

//     //     if(v === alphabet) {
//     //         result ++;
//     //     }
//     // }

//     return result;
// };

/** 강의 풀이 2 */
function solution(str, alphabet) {
    
    let strArray = str.split(alphabet).length;
    let result = strArray - 1;
    

    return result;
};