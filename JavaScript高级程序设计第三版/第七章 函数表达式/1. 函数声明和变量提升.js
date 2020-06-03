// 1. 函数两种定义
// 函数声明
// function functionName(arg0, arg1, arg2) { }
// console.log(functionName.name); // 'functionName'
// 函数表达式
// var functionName = function () { }
// console.log(functionName.name); // 'functionName' // 与红宝书不同


// 2. 函数声明提升

// sayHi(); // 'hi'
// function sayHi() {
//     console.log('hi');// 'hi'
// }

// sayHi(); // TypeError: sayHi is not a function
// var sayHi = function () {
//     console.log('hi');
// }
/* 函数声明可提升，表达式不可提升 */
// var bool = true;
// if (bool) {
//     function sayHi() {
//         console.log('true');
//     }
// } else {
//     function sayHi() {
//         console.log('false')
//     }
// }
// sayHi(); // true

// var bool = false;
// if (bool) {
//     sayHi = function () {
//         console.log('true');
//     }
// } else {
//     sayHi = function () {
//         console.log('false')
//     }
// }
// sayHi(); // false

// function createComparisonFunction(propertyName) {
//     return function (object1, object2) {
//         var value1 = object1[propertyName];
//         var value2 = object2[propertyName];
//         if (value1 < value2) {
//             return -1;
//         } else if (value1 > value2) {
//             return 1;
//         } else {
//             return 0;
//         }
//     };
// }