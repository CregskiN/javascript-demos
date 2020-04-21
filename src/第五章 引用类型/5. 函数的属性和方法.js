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

/* callee示例：阶乘函数 */
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

/* this */
// function getThis() {
//     console.log('arguments', arguments);

//     console.log(this);
// }
// var o = {
//     get: getThis
// };
// getThis(); // window 
// o.get(); // o

/* caller 调用本函数的函数*/
// function outer() {
//     inner();
// }
// function inner() {
//     console.log(inner.caller);
//     /* 调用inner的函数的引用
//         ƒ outer(){
//             inner();
//         }
//     */
// }
// outer();

/* 4. 函数的属性和方法 */

/* length */
// console.log(sum.length); // 2

/* 每个函数都有两个非继承而来的方法 
    apply([this], Array|argument)
    call([this], param1,param2,param3)
    另有es5新加 bind()
*/

// function sum(num1, num2) {
//     return num1 + num2;
// }

// function callSum1(num1, num2) {
//     return sum.apply(this, arguments); // 传入argumrnts对象
// }

// function callSum2(num1, num2) {
//     return sum.apply(this, [num1, num2]); // 传入数组
// }

// function callSum(num1, num2) {
//     return sum.call(this, num1, num2);
// }
// 两个用处：1.传递参数 2.改变函数作用域

// window.color = 'red';
// var o = { color: 'blue' };
// function sayColor() {
//     console.log(this.color);
// }
// sayColor(); // red
// sayColor.call(this); // red
// sayColor.call(window); // red
// sayColor.call(o); //blue // 使用call之前，作用域一直是window

/* bind */
window.color = 'red';
var o = { color: 'blue' };
function sayColor() {
    console.log(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor(); // blue

/* 其他继承自prototype的方法
    toString()
    toLocaleString()
    valueOf() 均返回函数声明代码
*/

