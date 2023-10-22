
function solution() {

    let result = '';

    // function forEach(predicate, thisArg){
    //     for (let i = 0; i < arr.length; i++) {
    //         predicate(a[i], i) // v, idx
    //     }
    // } => for문을 편하게 돌림

    // function map(predicate, thisArg) {
    //     const arrList = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         arrList.push(a[i]) // v, idx
    //     };
    //     return arrList;
    // } => 새 배열을 return

    // function filter(predicate, thisArg) {
    //     const arrList = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if(condition) {arrList.push(a[i]) } // v, idx
    //     };
    //     return arrList;
    // } => 조건에 맞는 새 배열을 return

    let arr = [10, 11, 12, 13, 14, 15];

    function reduce(predicate, v) {
        const result = v;
        for (let i = 0; i < arr.length; i++) {
            result = predicate(result, a[i])    
        };
        return result;
    }
    // reduce.. 재귀적으로 생각..
    // 초기화된 값은 0,
    // 첫 번째 result는 0(누적) + a[0](현재 값) = 10
    // 두 번째 result는 누적된 값 10 + a[1] = 21
    // ... 이런식으로 누적 총 합을 구할 수 있다.

    result = arr.reduce(function (acc, v) {

        return acc + v;
    },0)

    return result;
};

console.log(solution());