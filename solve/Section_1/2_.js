
function solution(a, b, c) {

    let result = "YES";
    let sum = a + b + c
    let max = null;

    if(a < b) max = b
    else max = a

    if(c > max) max = c
    
    if((sum - max) <= max) result = "NO"

    return result;
};

console.log(solution(13, 33, 17));

// if (a + b < c) result = false;
// if (a + c < b) result = false;
// if (b + c < a) result = false;