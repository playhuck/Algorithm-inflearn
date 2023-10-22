
function solution(str) {
    
    let result = str.split('');

    result = result.map((v, idx) => {

        if(v === 'A') return '#'
        else return v
        
    }).join('');

    return result;
};

console.log(solution('BANANA'));