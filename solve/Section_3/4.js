
/** 
 * @param { string } str
 * @param { string } x 
 * @comment 나의 풀이
 * */

function solution(str, x) {

    const originStr = str.split('');
    const indexArr = [];
    const result = [];

    for (let i = 0; i < str.length; i++) {

        if (originStr[i] === x) {

            indexArr.push(i);
        }

    };

    for (let i = 0; i < originStr.length; i++) {

        const matchResult = [];
        for (let j = 0; j < indexArr.length; j++) {

            matchResult.push({
                val: Math.abs(indexArr[j] - i),
                idx: j
            });

        };

        result.push(matchResult.sort((a, b) => {
            return a.val - b.val
        })[0].val);

    };

    return result;
};

console.log(solution('teachermode', 'e'));


/** 
 * @param { string } str
 * @param { string } x 
 * @comment 강의 풀이
 * */

function solution2(str, x) {

    let result = [];
    let p = 1000;

    /** 먼저 선형탐색을 수행 e를 기준으로 한 번 씩 다 더해줌*/
    for (let v of str) {

        if (v === x) {
            p = 0;
            result.push(p);
        }
        else {

            p++;
            result.push(p);
        }
    };

    /** p를 다시 1000으로 초기화, 그리고 역순 선형 탐색을 실행한다.*/
    p = 1000;
    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] === x) {
            p = 0;
            continue;
        } else {
            p ++;
            result[i] = Math.min(result[i], p);
        }
    }

    return result;
};

console.log(solution2('teachermode', 'e'));