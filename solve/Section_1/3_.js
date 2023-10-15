
function solution(a) {
    
    let result = null;
    
    const das = a/12;
    const rest = a % 12;

    if(rest === 0) {
        result = Math.floor(das);
    } else {
        result = Math.floor(das) + 1;
    }
    return result;
};

console.log(solution(178));

/** 1다스는 12자루 */
/** 1명당 연필 1자루 */
/** N < 1000, */