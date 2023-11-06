
/** @comment 나의 풀이 */
/** @param {string} str  */
function solution(str) {

    const val = str.split('');

    let count = 0;
    let bool = true;

    while (count < Math.floor(str.length / 2)) {

        if (val[count].toUpperCase() !== val[val.length - 1 - count].toUpperCase()) bool = false;

        console.log(val[count].toUpperCase(), val[val.length - 1 - count].toUpperCase());
        count++;

    };

    return bool ? 'YES' : 'NO';

};

console.log(solution('gadsnsdag'));


/** @comment 강의 풀이 */
/** @param {string} str  */
function solution(str) {

    const val = str.toLowerCase();
    if(val.split('').reverse().join('') !== val) return 'NO';
    else return 'YES';

};

console.log(solution('gadsnndag'));