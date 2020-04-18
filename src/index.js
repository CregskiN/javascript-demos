/* Function */
/*
    js中的函数实际上是对象，函数名相当于指针。 所以没有函数重载，或者说每次重载都是函数覆写
*/

/*
    1. 函数声明和函数表达式，在js解释器来说并非一视同仁。
        优先读取函数声明，确保在任何位置可以使用(函数声明提升)，而函数表达式视为普通指针+对象，仅在解释器读到才读取
*/

/* 函数声明 */
// console.log(sum(1, 2)); // 3
// function sum(e1, e2) {
//     return e1 + e2;
// }

/* 函数表达式 */
// console.log(sum(1, 2)); // err
// var sum = function (e1, e2) {
//     return e1 + e2;
// }

/*
    2. 函数回调
*/

/*
    3. 函数内部属性
    arguments: {
        [],
        callee: 指向本函数
    },
    this: 当前函数的运行环境,
    caller: 保留当前函数的函数的引用
*/
// callee示例：阶乘函数
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num - 1);
//     }
// }
// console.log(factorial(3));

// this
// function getThis() {
//     console.log('arguments', arguments);

//     console.log(this);
// }
// var o = {
//     get: getThis
// };
// getThis(); // window 
// o.get(); // o

// caller
function outer() {
    inner();
}

function inner() {
    console.log(inner.caller);
    /* 调用inner的函数的引用
        ƒ outer(){
            inner();
        }
    */
}
outer()