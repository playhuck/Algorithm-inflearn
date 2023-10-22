
/** 나의 풀이 */
// function solution(day, array) {

//     let result = 0;

//     for (let i = 0; i < array.length; i++) {

//         if (day === +`${array[i]}`.split('')[1]) {
//             result += 1;
//         }

//     }

//     return result;
// };

/** 강의 풀이 */
function solution(day, array) {

    let result = 0;

    for (let i = 0; i < array.length; i++) {

        if(array[i] % 10 === day) result += 1; /** 이게 더 깔끔한 듯 */
    }

    return result;
};

console.log(solution(0
    , [12, 20, 54, 30, 87, 91, 30]));