/** 
 * - 코테에서 slice를 사용한 후 sort()를 실행시키는 이유 > 원본 배열을 변경하지 않고 새로운 배열을 생성하기 위해 
 * */
const students=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

const sortedStudents = students.slice().sort((a,b) => {

    return b[0] - a[0];
}); // 원본배열 보존

const sortedStudents2 = students.sort((a,b) => {

    return b[0] - a[0];
}); // 원본배열 변경

/**
 * 이와 비슷하게 동작하는 메서드
 */

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.concat().slice(0, 3);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(slicedArray);   // [1, 2, 3]

const originalArray2 = [1, 2, 3, 4, 5];
const slicedArray2 = [...originalArray2].slice(0, 3);

console.log(originalArray2); // [1, 2, 3, 4, 5]
console.log(slicedArray2);   // [1, 2, 3]