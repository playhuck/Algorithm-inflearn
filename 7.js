/**
 * @param {string} needStr
 * @param {string} design
 * @returns {} - 
 * @comment
 */
function solution(needStr, design) {

    let result = 'YES';

    const queue = [];

    for (const x of needStr) {

        queue.push(design.indexOf(x));

    };

    let max = queue[0];

    for (let i = 0; i < queue.length; i++) {

        if (i === 0) continue;

        if (queue[i] < max) {

            result = 'NO';
            break;
        } else {

            max = queue[i]
        }

    };

    return result;
};

console.log(solution('CBA', 'CDAGEB'));

/**
 * @param {string} needStr
 * @param {string} design
 * @returns {} - 
 * @comment
 */
function solution2(needStr, design) {

    let result = 'YES';

    const queue = needStr.split('');

    for(const x of design) {

        /** x가 queue에서 포함되는 값이 있다면 */
        if(queue.includes(x)) {

            /** 하지만 x 값이 queue의 제거될 첫번 째 값이 아니라면 */
            if(x !== queue.shift()) {
                result = 'NO';
            }
        }
    };

    if(queue.length > 0) {
        result = 'NO';
    }

    return result;
};

console.log(solution2('CBA', 'CDAGEB'));