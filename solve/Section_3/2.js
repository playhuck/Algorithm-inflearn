
/** @param {string} str  */
function solution(str) {
    
    const originString = str;
    const replaceStr = originString.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
    const reverseStr = replaceStr.split('').reverse().join('');

    if(replaceStr === reverseStr) return true;
    else return false;
    
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));