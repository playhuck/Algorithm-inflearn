/**
 * @param {string} str
 * @returns {} - 
 * @comment
스택(Stack)은 데이터를 저장하고 검색하는데 사용되는 추상 자료형(ADT) 중 하나로, 후입선출(LIFO, Last In, First Out) 원칙에 기반하고 있습니다. 
스택은 데이터의 삽입(Push)과 삭제(Pop)가 한쪽 끝에서만 이루어지는 자료구조입니다. 맨 위에 있는 항목이나 맨 끝에 삽입된 항목만이 삭제될 수 있습니다.

스택은 다음과 같은 주요 연산을 지원합니다:

Push(삽입): 스택의 맨 위(또는 맨 끝)에 항목을 추가합니다.
Pop(삭제): 스택의 맨 위(또는 맨 끝)에 있는 항목을 제거하고 반환합니다.
Top(탑): 스택의 맨 위(또는 맨 끝)에 있는 항목을 조회합니다. 삭제하지 않고 단순히 값을 확인합니다.
isEmpty(비어있는지 확인): 스택이 비어 있는지 여부를 확인합니다.
 */
function solution(str) {

    let result = 'YES';

    const splitedStr = str.split('');
    const matchedArray = [];

    let strPointer = 0;

    for (let i = 0; i < str.length; i++) {

        if (i === 0) {
            matchedArray.push(str[splitedStr[i]]);
            strPointer++;
        };

        if (splitedStr[i] === matchedArray[strPointer]) {
            matchedArray.push(str[splitedStr[i]]);
            strPointer++;
        } else {

            if (matchedArray.length > 0) {
                matchedArray.pop();
            } else {

                result = 'NO';

                break;
            }

        }
    }


    return result;
};

console.log(solution('(()(()))(()'));

function solution2(str) {

    let result = 'YES';

    const stack = [];

    for (const x of str) {

        if (x === '(') {
            stack.push(x);
            continue;
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {

                result = 'NO';

                break;
            }
        };
    };

    if(stack.length > 0) result = 'NO'


    return result;
};

console.log(solution2('(()(()))(()'));