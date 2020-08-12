/* 
    1. 存在性
    in 顺着原型链寻找
    Object.hasOwnProperty() 本对象属性
    Object.keys(): any[] 遍历本对象所有可枚举属性，返回Array。
    Object.getOwnPropertyNames(): 获取本对象所有属性
*/


function Child() { }
function Parent() { }

Child.prototype = Object.create(Parent.prototype, {
    a: {
        value: undefined,
        enumerable: false
    }
});

var child = new Child();
Object.defineProperty(child, 'b', {
    writable: false
})

console.log('a' in child); // true 
console.log(child.hasOwnProperty('a')); // false
console.log(Object.hasOwnProperty.call(child, 'a')); // false
console.log(Object.keys(child));
console.log(Object.getOwnPropertyNames(child));