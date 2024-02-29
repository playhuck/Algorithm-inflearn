/**
 * @param {string} val
 * @param {string} val2
 * @returns {} - 
 * @comment
 */
function solution(val, val2) {
    
    let result = true;

    const sortedVal = val.split('').sort();
    const sortedVal2 = val2.split('').sort();

    for (let i = 0; i < sortedVal.length; i++) {
        
        if(sortedVal[i] !== sortedVal2[i]) {

            result = false;

            break;
        }
        
    }

    return result;
};

console.log(solution('abaCC', 'Caaab'));

/**
 * @param {string} val
 * @param {string} val2
 * @returns {} - 
 * @comment
 */
function solution2(val, val2) {

    let result = true;

    const hashMap = new Map();
    const hashMap2 = new Map();

    if (val.length !== val2.length) return false;

    for (let i = 0; i < val.length; i++) {

        if (hashMap.has(val)) {

            hashMap.set(val, hashMap.get(val) + 1);
        } else {
            hashMap.set(val, 1);
        };

        if (!hashMap2.has(val) || hashMap.get(val) === 0) {
            
            result = false;

            break;
        } else {
            hashMap.set(val, hashMap.get(val) - 1)
        }

    };
    return result;
};

console.log(solution2('abaCC', 'Caaab'));