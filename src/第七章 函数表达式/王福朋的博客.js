/* 
    1. 执行上下文环境
*/
// 情况 1
console.log(a); // undefined
// --
console.log(a); // undefined
var a = 10;


// 情况 2
console.log(this); // window

// 情况 3
console.log(f1); // f1() {}
function f1() { }

console.log(f2); // undefined
const f2 = function () { }