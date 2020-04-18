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

//继承
function inherit(origin, target) {
    function F() { }
    F.prototype = origin.prototype;
    target.prototype = new F();
    target.prototype.constructor = target;
}

//浅复制
function shallowCopy(obj) {
    if (obj !== null && typeof obj == 'object') {
        var newObj = obj instanceof Array ? [] : {};
        for (let key in obj) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

//深复制
function deepCopy(obj) {
    if (typeof obj == 'object') {
        var newObj = obj instanceof Array ? [] : {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    newObj[key] = deepCopy(obj[key])
                } else {
                    newObj[key] = obj[key]
                }
            }
        }
    }
    return newObj
}

//数组去重
function unique(arr) {
    let res = arr.filter((item, index, array) => {
        return arr.indexOf(item) == index
    })
    return res
}

// 手写数组方法
// push
Array.prototype.push1 = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};

// forEach
Array.prototype.forEach1 = function (fn, context) {
    for (let i = 0; i < this.length; i++) {
        fn.call(context, this[i], i, this);
    }
    return undefined;
};

