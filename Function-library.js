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

//斐波那契数列（返回第几位） 递推法
function fibonacci(n) {
    let first = 1;
    let second = 1;
    let third;
    for (let i = 2; i < n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return n === 1 || n === 2 ? 1 : third;
}

//斐波那契数列（返回前 n 位）
function fibonacci1(n) {
    let arr = []
    let first = 1
    let second = 1
    let third
    if (n <= 2) {
        for (let i = 0; i < n; i++) {
            arr.push(1)
        }
        return arr
    } else {
        for (let i = 0; i < 2; i++) {
            arr.push(1)
        }
        for (let i = 2; i < n; i++) {
            third = first + second;
            arr.push(third)
            first = second;
            second = third;

        }
        return arr
    }
}


//call
Function.prototype.call1 = function (obj) {
    obj.fn = this
    obj.fn()
    delete obj.fn
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

var obj = {
    a: 1,
    b: function () {
        console.log(this.c);
    }
}
Object.prototype.c = 2
obj.b()
console.log(obj.c);



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

//pop
Array.prototype.pop1 = function () {
    let last = this[this.length - 1]
    this.length = this.length - 1
    return last
}

//unshift
Array.prototype.unshift1 = function () {
    let length = arguments.length
    for (let i = this.length; i > 0; i--) {
        this[i - 1 + length] = this[i - 1]
    }
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    return this.length
}

//shift
Array.prototype.shift1 = function () {
    let first = this[0];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    this.length = this.length - 2
    return first
}

//reverse
Array.prototype.reverse1 = function () {
    let arr = this.slice()
    for (let i = 0; i < this.length; i++) {
        this[i] = arr[this.length - 1 - i]
    }
    return this
}





// forEach
Array.prototype.forEach1 = function (fn, context) {
    var _this = context ? context : window;
    for (let i = 0; i < this.length; i++) {
        fn.call(_this, this[i], i, this);
    }
    return undefined;
};

// map
Array.prototype.map1 = function (fn, context) {
    let _this = context ? context : window;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(fn.call(_this, this[i], i, this));
    }
    return arr;
};

//filter
Array.prototype.filter1 = function (fn, context) {
    let _this = context ? context : window;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn.call(_this, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
};
// some
Array.prototype.some1 = function (fn, context) {
    let _this = context ? context : window;
    let passed = false;
    for (let k = 0, length = this.length; k < length; k++) {
        if (passed === true) break;
        passed = !!fn.call(_this, this[k], k, this);
    }
    return passed;
};
//更新版 some，即使遇到返回 true 的项，也会继续执行之后的项。
Array.prototype.some2 = function (fn, context) {
    let _this = context ? context : window;
    let arr = [];
    let tag = false;
    for (let i = 0; i < this.length; i++) {
        arr.push(!!fn.call(_this, this[i], i, this));
    }
    for (let i = 0; i < arr.length; i++) {
        tag = arr[i];
        if (tag) break;
    }
    return tag;
};

