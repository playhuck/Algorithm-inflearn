
function solution(a) {
    
    let result = Math.min(...a);
    let result2 = Math.min.apply({
        ab : 5
    }, a);
    console.log(result2);
    return result;
};

console.log(solution([5,3,7,11,2,15,17]));