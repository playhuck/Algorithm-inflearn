/**
 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위
치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진
인형의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

/** @type {number[Array]} */
const boards = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];

/** @type {number[]} */
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

/**
 * @param {number[][]} board - 2차원 숫자 배열
 * @param {number[]} move - 이동 값
 */
function solution(board, move) {

    let result = 0;

    const stack = [];
    const boardCopy = board.slice();

    for (let i = 0; i < move.length; i++) {

        const boardNumber = move[i] - 1;

        const targetBoard = boardCopy[boardNumber];

        const pushValue = targetBoard[targetBoard.length - 1];

        if (!pushValue) continue;

        stack.push(pushValue);

        targetBoard.splice(targetBoard.length - 1, 1);

        if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {

            result = result + 2;

            stack.splice(stack.length - 2, 2);

        };

    }

    return result;
};

console.log(solution(
    boards,
    moves)
);

/**
 * @param {number[][]} board - 2차원 숫자 배열
 * @param {number[]} move - 이동 값
 */
function solution2(board, move) {

    let result = 0;

    const stack = [];
    
    move.forEach(pos => {

        for (let i = 0; i < board.length; i++) {
            
            // targetBoard가 0이 아니라면,
            if(board[i][pos - 1] !== 0) {

                let tmp = board[i][pos-1]; // targetBoard

                board[i][pos - 1] = 0; // 꺼낸 인형 값은 0

                if(tmp === stack[stack.length - 1]) {
                    stack.pop();

                    result += 2;
                } else {
                    stack.push(tmp);
                    
                };

                break;

            }
            
        }
    })

    return result;
};

console.log(solution2(
    [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4])
);