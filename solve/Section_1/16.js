
/** 나의 풀이 */
// function solution(str) {
    
//     let result = Array.from(new Set(str.split(''))).join('');

//     return result;
// };

// console.log(solution('skrrrt'));


/** 강의 풀이 1*/
// function solution(str) {
    
//     let result = [];
//     let strArray = str.split('');

//     for (let i = 0; i < strArray.length; i++) {
        
//         const strIndex = str.indexOf(strArray[i]);
//         if(i === 0) {

//             result.push(strArray[i])

//             continue;
//         };

//         if(strIndex === i){

//             result.push(strArray[i])
//         }

//     }

//     return result.join('');
// };

// console.log(solution('skrrrt'));

function solution(str) {
    
    let result = [];
    let strArray = str.split('');

    for (let i = 0; i < strArray.length; i++) {
        
        const strIndex = str.indexOf(strArray[i]);
        str.indexOf(strArray[i]);
        /** 
         * - indexOf는 가장 앞의 1가지 값만을 찾음
         * - 가장 앞의 i는 첫 번째 i입니다.
         * - strIndex(가장 앞의 인덱스 번호가) === i(특정 값의 첫 번째 인덱스 번호라면)
         * - push한 후 join으로 그 중복을 제거하는 것 입니다. 끝
         * */
        if(i === 0) {

            result.push(strArray[i])

            continue;
        };

        console.log("strIndex:", strIndex);
        console.log("strArray[i]:", strArray[i]);
        console.log("i :", i);

        if(strIndex === i){

            console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
            result.push(strArray[i])
        }

    }

    return result.join('');
};

console.log(solution('skrrrt'));