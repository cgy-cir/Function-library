//计算范围内素数
function prime(m, n) {
    let count = [];
    for (let i = m; i <= n; i++) {
        let flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false
            }
        }
        if (flag) {
            count.push(i);
        }
    }
    return count
}

//判断一个数是否是素数
function ifPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    return true
}

var str = 'string';
console.log(str.substring(0));
console.log(str.substring(1, 0));

//斐波那契数列
function fibonacci(n) {
    let first = 1;
    let second = 1;
    let third;
    for (let i = 2; i < n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return third;
}



