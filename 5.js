/**
 * @param {string} str
 * @returns {} - 
 * @comment
 */
function solution(str) {

    let result = 0;

    const cut = [];

    /** @type number[][] */
    const stick = [];

    for (let i = 0; i < str.length; i++) {

        if (str[i] === ')' && str[i - 1] === '(') {
            cut.push(i);
        };


        if (str[i] === '(' && str[i + 1] === '(') {
            stick.push([i])
        };

    };

    let stack = [];

    for (let j = 0; j < stick.length; j++) {

        for (let k = stick[j]; k < str.length; k++) {

            if (str[k] === '(') stack.push('(');
            else stack.pop();

            if (stack.length === 0) {
                stick[j].push(k);
                break;
            }

        }

    }

    for (let i = 0; i < stick.length; i++) {

        let between = 0;

        for (const x of cut) {

            if (x > stick[i][0] + 1 & x - 1 < stick[i][1] + 1) {
                between++;
            }
        };

        result += between + 1;

    }

    return result;
};

console.log(solution(`(((()(()()))(())()))(()())
`));