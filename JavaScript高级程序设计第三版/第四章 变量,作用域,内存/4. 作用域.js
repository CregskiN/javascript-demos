// 全局 执行环境
console.log(window);
console.log(this);
/* 直到退出浏览器 or 关闭网页 window对象才被销毁 */

// 函数 执行环境
// 作用域链 和 活动对象
// console.log(arguments); // err 全局对象中不存在arguments

var color = 'red';
function changeColor() {
    if (color === 'red') {
        color = 'blue';
    } else {
        color = 'blue';
    }
}
changeColor();
console.log('changeColor执行后 - ', color); // blue


// 作用域链的延长
// js中只有两种作用域 全局作用域 函数作用域 
// try-catch中的catch
// <= IE8 catch中
try {
    var num = 10;
    console.log(arguments); // err
} catch(err) {
    // console.log(this); // window
    console.log(err);
    
    console.log(num);
}

// with

// 没有块级作用域
// 1. var自动将变量添加到最近的作用域
// 2. b=10; b会直接添加进window全局作用域
var a = 1;
function fn() {
    var b = 2; // 添加进fn作用域
    c = 10; // 存入全局
}
var d = new fn();
console.log(a); // 1
console.log(window.a); // 1
console.log(window.b); // undefined
console.log(window.fn.b); // undefined
console.log(window.c); // 10
console.log(window.d); // fn{}

// 3. 查询标识符