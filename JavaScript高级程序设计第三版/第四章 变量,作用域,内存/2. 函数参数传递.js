
// js的函数的参数传递
// 传递的都是值，值可以是基本类型的值 or 引用类型的引用
var num = 10;
function add(num){
    num = num + 10;
    return num;
}
add(num);
console.log(num); // 10
