
/**
 *  - 소수를 구하는 첫 번째 방법은 "에라토스테네스의 체" 이다. 방법은 아래와 같다.
 * 
 *  1. 2부터 시작하여 모든 자연수를 순회합니다.
 *  2. 현재 숫자가 아직 지워지지 않은 숫자인 경우, 그 숫자는 소수입니다.
 *  3. 현재 소수의 배수들을 지웁니다. (자기 자신은 지우지 않습니다)
 *  4. 다음 숫자로 넘어가 반복합니다.
 */

function findPrimes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

const n = 50;
const primes = findPrimes(n);
console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

/**
 *  - JS에서 소수를 구하는 두 번째 방법은 Math.sqrt를 이용하여 제곱근이 있는지 확인하는 것이다.
 */

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // 약수가 있으면 소수가 아님
        }
    }

    return true; // 약수가 없으면 소수
}

// 특정 자연수가 소수인지 확인
console.log(isPrime(17)); // true
console.log(isPrime(25)); // false

/**
 *  - Math.sqrt()를 사용하는 이유
 *  1. Math.sqrt()는 제곱근을 구하는 함수이다. 제곱근은 어떤 수를 곱했을 때 원래의 수가 되는 값을 의미한다. 루트4는 2 이런 것...
 *  2. 루프를 적게돌아 효율적이다.
 *  3. 제곱근을 사용하면 부동 소수점 계산에서 발생할 수 있는 오차를 줄여준다.
 */