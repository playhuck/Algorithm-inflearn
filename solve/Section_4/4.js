/**
선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라
고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는
할인에 포함되지 않습니다.
▣ 입력설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.
▣ 출력설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.
 */

/**
 * @param {number} budget - 예산
 * @param {Array<number>} students - Length = 학생수 / 0번째 idx 가격, 1번째 idx 배송비
 * @returns {Number} - 멘토 멘티가 될 수 있는 횟수
 * @comment
 * 
 * 한정된 예산 budget으로 몇 명의 선물을 사줄 수 있는지 선택하는 문제
 * 가격은 반값 할인이되지만, 배송비는 그럴 수 없다.
 * 첫 번째로 큰값의 반값이 두 번쨰로 큰 값의 반값보다 작아야만 선택된다.
 * 
 * - 1차 풀이
 */

function solution(budget, students) {
    
    let result = 0;

    let arr = students;
    let restBudget = budget;

    const firPrice = {
        price: 0,
        delivery: 0,
        idx: null
    };
    const secPrice = {
        price: 0,
        delivery: 0,
        idx: null
    };

    let discount = 1;
    let isntDiscount = firPrice;

    for (let i = 0; i < students.length; i++) {
        
        if(i === 0) {
            firPrice.price = students[i][0];
            firPrice.delivery = students[i][1];
            firPrice.idx = 0;
        };

        if (students[i][0] > firPrice.price) {

            secPrice.price = firPrice.price;
            secPrice.delivery = firPrice.delivery;
            secPrice.idx = firPrice.idx;

            firPrice.price = students[i][0];
            firPrice.delivery = students[i][1];
            firPrice.idx = i;
        } else {

            if (students[i][0] > secPrice.price) {

                secPrice.price = students[i][0];
                secPrice.delivery = students[i][1];
                secPrice.idx = i;

            }

        }
        
    };

    if((firPrice.price / 2) + firPrice.delivery > secPrice.price + secPrice.delivery) {
        discount = 2;
    };

    discount === 1 ? (() => {
        arr[firPrice.idx][0] = firPrice.price / 2;
        arr.splice(secPrice.idx, 1);
        isntDiscount = secPrice;
    })() : (() => {
        arr[secPrice.idx][0] = secPrice.price / 2;
        arr.splice(firPrice.idx, 1)
    })();

    for (let idx = 0; idx < students.length; idx++) {

        const num = students[idx][0] + students[idx][1];

        if (restBudget - num > 0) {
            result++;
            restBudget -= num;
        }

        if (restBudget - num === 0) {
            restBudget -= num;
            result++;
        }
    };

    if(restBudget > 0 && restBudget - isntDiscount.price + isntDiscount.delivery >= 0) {
        result ++;
    }

    return result;
};

const students=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]]));


/**
 * @param {number} budget - 예산
 * @param {Array<number>} students - Length = 학생수 / 0번째 idx 가격, 1번째 idx 배송비
 * @returns {Number} - 멘토 멘티가 될 수 있는 횟수
 * @comment
 * 
 * 한정된 예산 budget으로 몇 명의 선물을 사줄 수 있는지 선택하는 문제
 * 가격은 반값 할인이되지만, 배송비는 그럴 수 없다.
 * 첫 번째로 큰값의 반값이 두 번쨰로 큰 값의 반값보다 작아야만 선택된다.
 * 
 * - 2차 풀이
 */
function solution2(budget, students) {
    
    let result = 0;
    let restBudget = budget;

    const sortedStudents = students.slice().sort((a,b) => {

        return b[0] - a[0];
    });

    let fir = sortedStudents[0];
    let sec = sortedStudents[1];

    let excludeIdx = 0;
    let discountIdx = 0;

    if(fir[0] / 2 + fir[1] > sec[0] + sec[1]) discountIdx = 1;
    else {
        excludeIdx = 1;
    }

    if(fir[0] === sec[0] && fir[1] < sec[1]) {
        excludeIdx = 1;
    };
    
    sortedStudents[discountIdx][0] = sortedStudents[discountIdx][0] / 2;

    for (let idx = 0; idx < sortedStudents.length; idx++) {

        const num = sortedStudents[idx][0] + sortedStudents[idx][1];
        
        if(idx === excludeIdx) continue;

        if (restBudget - num >= 0) {
            result++;
            restBudget -= num;
        } else {
            break;
        };
    };

    if(restBudget > 0 && restBudget - sortedStudents[excludeIdx][0] + sortedStudents[excludeIdx][1] >= 0) {
        result ++;
    }

    return result;
};
const students2=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution2(28, students2));

/**
 * @param {number} budget - 예산
 * @param {Array<number>} students - Length = 학생수 / 0번째 idx 가격, 1번째 idx 배송비
 * @returns {Number} - 멘토 멘티가 될 수 있는 횟수
 * @comment
 * 
 * 한정된 예산 budget으로 몇 명의 선물을 사줄 수 있는지 선택하는 문제
 * 가격은 반값 할인이되지만, 배송비는 그럴 수 없다.
 * 첫 번째로 큰값의 반값이 두 번쨰로 큰 값의 반값보다 작아야만 선택된다.
 * 
 * - 강의 풀이
 */
function solution3(m, product){
    let answer=0;
    let n=product.length;
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n; i++){
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}
const students3=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution3(28, students3));