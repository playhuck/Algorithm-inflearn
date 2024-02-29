/**
 * @param {string} str
 * @returns {} - 
 * @comment
 */
function solution(str) {

    let result = [];

    const splitedStr = str.slice().split('');
    const numberStack = [];

    let calVal = 0;

    for (const x of splitedStr) {

        if (isNaN(parseInt(x))) {

            calVal = eval(`${numberStack[numberStack.length - 1]} ` + x + ` ${numberStack[numberStack.length - 2]}`);

            numberStack.pop();

            numberStack[numberStack.length - 1] = calVal;

        } else {
            numberStack.push(x);
        }
    };

    return Math.abs(calVal)

};

console.log(solution('352+*9-'));