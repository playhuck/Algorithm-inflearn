/**
 * @param {string} str
 * @param {string} anagram
 * @returns {} - 
 * @comment
 */
function solution(str, anagram) {

    let result = 0;

    const splitedStr = str.split('');
    const sortedAnagram = anagram.split('').sort().join('');

    for (let i = 0; i < splitedStr.length; i++) {

        if (i < splitedStr.length - 2) {

            const strings = splitedStr[i] + splitedStr[i + 1] + splitedStr[i + 2];
            const sortedStrs = strings.split('').sort().join('');

            if (sortedStrs === sortedAnagram) {

                result++;

            }
        }
    };

    return result;
};

console.log(solution('bacaAacba', 'abc'));

/**
 * @param {string} str
 * @param {string} anagram
 * @returns {} - 
 * @comment
 */
function solution2(str, anagram) {

    let result = 0;

    let tH = new Map();
    let sH = new Map();

    for (let x of anagram) {

        if (tH.has(x)) {
            tH.set(x, tH.get(x) + 1)
        } else {
            tH.set(x, 1)
        };

    };
    let len = anagram.length - 1;

    for (let i = 0; i < len; i++) {

        if (sH.has(str[i])) {
            sH.set(str[i], sH.get[s[i]] + 1)
        } else {
            sH.set(s[i], 1)
        }

    };

    let lt = 0;

    for (let rt = len; rt < str.length; rt++) {
        if (sH.has(str[rt])) {
            sH.set(str[rt], sH.get[s[rt]] + 1)
        } else {
            sH.set(s[rt], 1)
        };

        if (compareMaps(sH, tH)) {
            sH.set(s[lt], sH.get(s[lt] - 1));
            if (sH.get(lt) === 0) sH.delete(s[lt]);
            lt++;
        }

    };

    /**
     * 
     * @param {Map} sH 
     * @param {Map} tH 
     */
    const compareMaps = (sH, tH) => {
        if (sH.size !== tH.size) return false;

        for (let [key, value] of sH) {

            if (
                !tH.has(key) ||
                tH.get(key) !== value
            ) return false;

        };

        return true;

    }

    return result;
};

console.log(solution2('bacaAacba', 'abc'));