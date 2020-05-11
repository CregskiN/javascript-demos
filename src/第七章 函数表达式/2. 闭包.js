/*
    1. 递归
*/
// 写法 1
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(10)); // 3628800

// 问题复现
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1); // factorial is not a function
//     }
// }
// var anotherFactorial = factorial; // 1. 指向函数的指针两个 anotherFactorial factorial
// factorial = null; // 2. 删除一个指针
// console.log(anotherFactorial(10));  // 3. 因为anotherFactorial触发的函数体内部调用factorial，而factorial=null，非函数，故报错

// 写法 2 
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num - 1);
//     }
// }
// console.log(factorial(10)); // 3628800

/* 在严格模式下，无法访问arguments.callee，故有第三种方式 */

// 写法三
// var factorial = (function f(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * f(num - 1);
//     }
// });
// console.log(factorial(10)); // 3628800

/* 
    2. 闭包
*/
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

var result = compare(5, 10);
/* 
{
    compare execution context 函数执行环境
    scope chain: [
        GLobal Variable object 全局变量对象: {
            compare: function(){ },
            result: undefined
        }
        compare() activation object compare 活动对象: {
            arguments: [5, 10],
            value1: 5,
            value2: 10
        }
    ]
}
*/