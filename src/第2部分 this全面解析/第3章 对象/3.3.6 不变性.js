/**
 * 不变性
 * 1. 对象常量 writable: false, configurable: false
 * 2. 禁止扩展 Object.preventExtensions()
 * 3. 密封 Object.seal()
 * 4. 冻结 Object.freeze()
 */

/* 
    1. 对象常量  
    writable: false,
    configurable: false
    不可写，不可配置
*/
// var myObj = {};
// Object.defineProperty(myObj, 'FAVORITE_NUMBER',{
//     value: 42,
//     writable: false,
//     configurable: false
// })
// console.log(myObj);

/* 
    2. 禁止扩展，禁止添加新属性，且保留旧属性，属性值可改变
    严格模式报错
    Object.preventExtensions()
*/
// var myObj = {
//     a: 10
// };
// Object.preventExtensions(myObj);
// myObj.b = 20;
// console.log(myObj); // 添加属性失效
// myObj.a = 100;
// console.log(myObj); // 修改属性值成功

/* 
    3. 密封
    Object.seal()
    = Object.preventExtensions() + configurable: false
*/
// var myObj = { a: 10 };
// Object.seal(myObj);
// myObj.a = 20;
// console.log(myObj); // 修改属性值成功
// delete myObj.a;
// console.log(myObj); // delete 无效


/* 
    4. 冻结
    Object.freeze()
*/

// var myObj = {
//     name: 'Cregskin',
//     friends: ['jelly', 'bob']
// };
// Object.freeze(myObj);
// myObj.name = 'CC';
// console.log(myObj);
// myObj.friends[1] = 'Alice';
// console.log(myObj); // 对引用对应的值无法freeze