/* 
    5.1.2 属性设置和屏蔽
*/
'use strict'
var parent = {};
Object.defineProperty(parent, 'foo', {
    writable: false,
    configurable: true,
    enumerable: true,
    value: 2
});
var child = Object.create(parent);

/* 
    1. 原型链 descriptor{writable:false} 的属性无法屏蔽
*/
child.foo = 20; // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'

/* 
    2. 用 Object.defineProperty() 可以屏蔽？？？？
*/
Object.defineProperty(child, 'foo', {
    value: 20
});
console.log(child); // {foo: 20} 

