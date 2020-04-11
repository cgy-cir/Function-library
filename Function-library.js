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

//防抖
function debounce(func, wait) {
    let timeout;
    return function () {
        let content = this; //保存this
        let args = arguments; //保存arguments
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(content, args);
        }, wait);
    };
}

//节流（两种） 1.时间戳
function throttle1(func, wait) {
    let prev = 0;
    return function () {
        let content = this;
        let args = arguments;
        let now = +new Date();
        if (now - prev > wait) {
            func.apply(content, args);
            prev = now;
        }
    };
}

//2.定时器
function throttle2(func, wait) {
    var context, args, timeout;
    return function () {
        context = this;
        args = arguments;
        if (!timeout) {
            //如果定时器存在就不执行函数。
            timeout = setTimeout(function () {
                func.apply(context, args);
                timeout = null;
            }, wait);
        }
    };
}

