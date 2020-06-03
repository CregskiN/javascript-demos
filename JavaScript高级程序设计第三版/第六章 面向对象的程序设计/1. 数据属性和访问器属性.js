'use strict'
/* 对象的属性 */
/* 1. 数据属性
    [[Configurable]]：属性是否可配置，即delete属性，或修改为访问器属性。默认为true
    [[Enumerable]]：属性是否可枚举，即for-in遍历。默认为true
    [[Writable]]：属性值是否可写。默认为true
    [[Value]]：属性值。默认为undefined
*/
/* 定义方式
    Object.definePerperty(Obj, property, {
    [[Configurable]]: boolean,
    [[Enumerable]]: boolean,
    [[Writable]]: boolean,
    [[Value]]: any
}) */

/* [[Writable]] */
// var person = {};
// Object.defineProperty(person, 'name', {
//     writable: false,
//     value: 'CregskiN'
// });
// console.log(person); // {name: "CregskiN"}
// person.name = 'WuMouRen' // 非严格模式不报错，但修改不生效。 严格模式 err
// console.log(person); // {name: "CregskiN"}

/* [[Configurable]] */
// var person = {};
// Object.defineProperty(person, 'name', {
//     configurable: false,
//     value: 'CregskiN'
// });
// delete person.name; // err
// person.name = ' aa'; // err Object.defineProperty不指定，默认为false

/* 2. 访问器属性 
    [[Configurable]]: 属性是否可配置。
    [[Enumerable]]: 属性是否可枚举。
    [[Get]]: 默认undefined
    [[Set]]：默认undefined
*/
/* 定义方式
    同上
*/
// var book = {
//     _year: 2004,
//     edition: 1
// };
// Object.defineProperty(book, 'year', {
//     get: function () {
//         return this._year;
//     },
//     set: function (newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004
//         }
//     }
// });
// book.year = 2005;
// console.log(book); // {_year: 2005, edition: 2}

/* Class实现访问器 */
// class Book {
//     constructor() {
//         this._year = 2004;
//         this.edition = 1;
//     }
//     get year() {
//         return this._year;
//     }
//     set year(newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// }
// const book = new Book();
// book.year = 2005;
// console.log(book); // Book {_year: 2005, edition: 2}

/* 3. 定义多个属性

*/
const book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
/* 读取数据属性 Object.getOwnPropertyDescriptor(o, property) */
var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor); // {value: 2004, writable: false, enumerable: false, configurable: false}

