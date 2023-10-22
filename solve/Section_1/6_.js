
function solution(Array) {
    
    let arr = Array;
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] % 2 === 0) {
            continue;
        } else {

            sum += arr[i];
            if(arr[i] < min) min = arr[i];

        }
        
    }

    console.log(`sum : ${sum}`, `min : ${min}`);

    return [sum, min]
};

console.log(solution([12,77,38,41,53,92,85]));

/**
 * 자연수를 구하는 방법
 * 234689
 */