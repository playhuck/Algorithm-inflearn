
// function solution(arr) {

//     let result = [];

//     /**
//      * 1. 원본 배열이 필요한지?
//      * 2. 최소값 위주로 정렬을 한 뒤 더해주면 될지?
//      * 3. 100을 넘지 않는 조합이 여러개인지는 아닌지
//      */
//     let sum = 0;
//     arr.map((v, idx) => {

//         if(sum > 100) {
//             sum = 0;
//         }
//         sum += v;
//         result.push(v)

//     })

//     return result;
// };
/** 나의 풀이 */

function solution(arr) {

    let result = arr; // 얕은 복사, 주소인 arr을 가르킨다.
    let sum = arr.reduce((acc, v) => acc + v, 0) // 덧셈을 누적

    for (let i = 0; i < arr.length; i++) {

        let found = false;

        for (let j = i + 1; j < arr.length; j++) {

            if ((sum - arr[i] - arr[j]) === 100) {

                result.splice(j, 1);
                result.splice(i, 1);
                found = true
                break;

            }

        };

        if (found) {
            break;
        }
    }

    return result;
};

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]

console.log(solution(arr));