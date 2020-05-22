// 柯里化的意思是将一个多元函数，转换成一个依次调用的单元函数
// f(a,b,c) → f(a)(b)(c)
var add = function (x) {
    return function (y) {
        return x + y;
    }
}
const increment = add(1)(10);
console.log(increment); // 11
