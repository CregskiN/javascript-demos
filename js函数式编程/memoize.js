function memoize(fn) {
    const cache = {};
    return function () {
        const key = JSON.stringify(arguments);
        // console.log(key); // 形参数组
        var value = cache[key];
        if (!value) {
            value = [fn.apply(null, arguments)];
            cache[key] = value;
        }
        return value[0];
    }
}

function foo(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const fibonacci = memoize(foo);
console.log(fibonacci(4));
console.log(fibonacci(10));