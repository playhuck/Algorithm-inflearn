
function solution(a, b ,c) {
    const numberArray = [a,b,c]
    const result = Math.min(...numberArray);

    return result;
};

console.log(solution(12,33,44));