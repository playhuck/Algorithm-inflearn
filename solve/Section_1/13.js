
function solution(str) {
    
    let result = '';

    for(let val of str) {

        if(val === val.toUpperCase()) result += val.toLowerCase();
        else if(val === val.toLowerCase()) result += val.toUpperCase();
        else result += val;
    }

    return result;
};

console.log(solution("tEMPLATE IS NEED IT"));