// 1. object
// 字面量创建 and 构造函数创建
var o1 = {
    name: 'CregskiN',
    age: 10,
};
var o2 = new Object();

// .访问 and []访问
console.log(o1.name);
console.log(o1['name']);

var o3 = {
    'first name': 'CregskiN'
}
console.log(o3["first name"]); // 只能以这种方式访问

