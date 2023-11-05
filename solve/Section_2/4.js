
// function solution(arr) {
    
//     let result = 0;
//     let score = 0;

//     for (let i = 0; i < arr.length; i++) {
        
//         if(i === 0 && arr[i] === 1){
//             result ++;
//             continue;
//         };

//         if(arr[i] === 0 && arr[i-1] === 0){
//             continue;
//         };

//         if(arr[i] === 0 && arr[i-1] === 1){
//             result += score;
//             // console.log(score);
//             score = 0;
//         };

//         if(arr[i] === 1 && arr[i-1] === 1){
//             result ++;
//             score ++;
            
//         };

//         if(arr[i] === 1 && arr[i-1] === 0){
//             result ++;
//         }

//         // console.log(result, arr[i]);
//         console.log(score);
        
//     }

//     return result;
// };

// console.log(solution([1,1,1,1,1,0,0,1,1,0]));

// // 1 2 3 4 5 0 0 1 2 0


function solution(arr){
    
    let answer = 0;
    let cnt = 0;

for(let x of arr){
    if(x===1){
        cnt++;
        answer+=cnt;
    }else cnt = 0;
}

    return answer;
};

console.log(solution([1,1,1,1,1,0,0,1,1,0]));