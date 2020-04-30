/* 继承
传统OOP语言有两种继承方式
    1. 接口继承，只继承方法签名
    2. 实现继承，直接继承实际方法
*/
/* 1. 原型链：让原型对象直接指向一个实例 */
// function SuperType() {
//     this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// }

// function SubType() {
//     this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// }

// var instance = new SubType();
// console.log('实现继承，对照组', instance);

/* 
SubType {subproperty: false}
    subproperty: false
    __proto__: SuperType
        getSubValue: ƒ ()
        property: true
        __proto__: Object 
*/
// console.log(instance instanceof Object); // true
// console.log(instance instanceof SuperType); // true
// console.log(instance instanceof SubType); // true

// console.log(Object.prototype.isPrototypeOf(instance)); // true
// console.log(SuperType.prototype.isPrototypeOf(instance)); // true
// console.log(SubType.prototype.isPrototypeOf(instance)); // true

/* 2. 方法重写 */
// function SuperType3() {
//     this.property = true;
// }

// SuperType3.prototype.getSuperValue = function () {
//     return this.property;
// }

// function SubType3() {
//     this.subproperty = false;
// }
// // 继承了SuperType
// SubType3.prototype = new SuperType3();

// // 添加新方法
// SubType3.prototype.getSubValue = function () {
//     return this.subproperty;
// }
// // 重写超类型中的方法
// SubType3.prototype.getSuperValue = function () {
//     return false;
// }
// var instance = new SubType3();
// console.log('重写方法', instance);
/* 
SubType3 {subproperty: false}
    subproperty: false
    __proto__: SuperType3
        getSubValue: ƒ ()
        getSuperValue: ƒ ()
        property: true
        __proto__: Object
*/

/* 3. 原型链的问题 */
/* 
    1. 原型对象中的引用类型
*/
// function SuperType4() {
//     this.colors = ['red', 'blue', 'green'];
// }
// function SubType4() { }
// SubType4.prototype = new SuperType4();
// var instance4_1 = new SubType4();
// instance4_1.colors.push('black');
// var instance4_2 = new SubType4();
// console.log(instance4_2.colors); // ["red", "blue", "green", "black"]
/* 
    2. 创建字类型实例，不能向超类型的构造函数传递参数。
    实际上，没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数
*/


/* 
    4. 借用构造函数
        -- 解决原型对象引用类型的问题
*/
// function SuperType5() {
//     this.colors = ['red', 'blue', 'green'];
// }
// function SubType5() {
//     SuperType5.call(this); // ! 妙不可言！
// }
// var instance5_1 = new SubType5();
// instance5_1.colors.push('black');
// console.log(instance5_1.colors); // ["red", "blue", "green", "black"]
// var instance5_2 = new SubType5();
// console.log(instance5_2.colors); // ["red", "blue", "green"]

/* 4.1 借用构造函数的优点：传递参数 */
// function SuperType6(name) {
//     this.name = name;
// }
// function SubType6(name) {
//     SuperType6.call(this, name);
//     this.age = 20;
// }
// var instance6 = new SubType6('CregskiN');
// console.log(instance6.name); // 'CregskiN'
// console.log(instance6.age); // 20

/* 4.2 借用构造函数的问题
    (1) 构造函数的通病 - 函数无法复用
    (2) 超类型中定义的方法，对子类型不可见
*/

/* 5. 组合继承 */
// function SuperType7(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }
// SuperType7.prototype.sayName = function () {
//     console.log(this.name);
// }

// function SubType7(name, age) {
//     // 继承属性
//     SuperType7.call(this, name); // 借用构造函数
//     this.age = age;
// }

// // 继承方法(原型链模式)
// SubType7.prototype = new SuperType7();
// SubType7.prototype.constructor = SubType7;
// SubType7.prototype.sayAge = function () {
//     console.log(this.age);
// }
// var instance7_1 = new SubType7('CregskiN', 20);
// instance7_1.colors.push('black');
// console.log(instance7_1.colors); // ["red", "blue", "green", "black"]
// instance7_1.sayName(); // 'CregskiN'
// instance7_1.sayAge(); // 20

// var instance7_2 = new SubType7('Cre', 30);
// console.log(instance7_2.colors); // ["red", "blue", "green"]
// instance7_2.sayName(); // 'Cre'
// instance7_2.sayAge(); // 30

/* 组合模式 = 原型链模式 + 构造函数模式，最常用 */


/* 6. 原型式继承 */
/* 构造一个临时类型，将传入对象作为该临时类型的原型，返回临时类型的实例 */
// function object(o) {
//     function F() { }
//     F.prototype = o;
//     return new F();
// }

// var person = {
//     name: 'CregskiN',
//     friends: ['a', 'b', 'c']
// };
// var anotherPerson = object(person);
// anotherPerson.name = 'Greg';
// anotherPerson.friends.push('d');

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = 'Jelly';
// yetAnotherPerson.friends.push('e');

// console.log(anotherPerson);
/* 
F {name: "Greg"}
name: "Greg"
__proto__: Object
*/
// console.log(yetAnotherPerson);
/* 
{name: "Jelly"}
name: "Jelly"
__proto__: Object
*/
// console.log(person);
/* 
friends: (5) ["a", "b", "c", "d", "e"]
name: "CregskiN"
*/

/* 原型式继承，实际上对o有一个浅拷贝 */

/* Object.create() ES5对原型式继承 写法的优化 */
// var person = {
//     name: 'CregskiN',
//     friends: ['a', 'b', 'c']
// };
// var anotherPerson = Object.create(person);
// anotherPerson.name = 'Greg';
// anotherPerson.friends.push('d');

// var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = 'Jelly';
// yetAnotherPerson.friends.push('e');

// console.log(anotherPerson); // {name: "Greg"}
// console.log(yetAnotherPerson); // {name: "Jelly"}
// console.log(person); // {name: "CregskiN", friends: Array(5)}

// var person = {
//     name: 'CregskiN',
//     friends: ['a', 'b', 'c']
// };
// var anotherPerson = Object.create(person, {
//     name: {
//         value: 'ccc'
//     }
// });
// console.log(anotherPerson);
/* 
{name: "ccc"}
name: "ccc"
__proto__:
    friends: (3) ["a", "b", "c"]
    name: "CregskiN"
    __proto__: Object
*/

/* 注意：仍未解决引用类型共享的问题 */


/* 7. 寄生式继承 */
// function object(o) {
//     function F() { }
//     F.prototype = o;
//     return new F();
// }

// function createAnother(original) {
//     var clone = object(original); // 原型继承 创建一个新对象
//     clone.sayHi = function () { // 以某种方式增强这个对象
//         console.log('hi');
//     };
//     return clone; // 返回这个对象
// }

// var person = {
//     name: 'CregskiN',
//     friends: ['a', 'b', 'c']
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); // 'hi'

/* 寄生式继承的缺点：
    1. 与构造函数相同，为对象添加的函数，无法做到函数复用
    2. 调用两次超类型构造函数 一次创建person 一次object内创建F，属性name和friends同时存在person实例和F实例，浪费
*/

/* 8. 寄生组合式继承 */
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
function SuperType8(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType8.prototype.sayName = function () { // 原型模式：添加方法
    console.log(this.name);
};

function SubType8(name, age) {
    SuperType8.call(this, name); // 第二次调用 SuperType()
    this.age = age;
}

SubType8.property = new SuperType8(); // 第一次调用 SuperType()
SubType8.prototype.constructor = SubType8;
SubType8.prototype.sayAge = function () {
    console.log(this.age);
};

function inheritPrototype(subType8, superType8) {
    var prototype = object(superType8.property); // 创建对象
    prototype.constructor = subType8; // 增强对象
    subType8.prototype = prototype; // 指定对象
}

/* ** 这里对比ES6 class语法糖创建的实例 */

class SuperType2 {
    constructor() {
        this.property = true;
    }
    getSuperValue() {
        return this.property;
    }
}

class SubType2 extends SuperType2 {
    constructor() {
        super(); // 必须
        /* 
        Uncaught ReferenceError: 
            Must call super constructor in derived class before accessing 'this' or returning from derived constructor
            at new SubType2
        */
        this.subproperty = false;
    }
    getSubValue() {
        return this.subproperty;
    }
}

var instance = new SubType2();
console.log('ES6 class', instance);

/*
SubType2 {property: true, subproperty: false}
    property: true
    subproperty: false
    __proto__: SuperType2
        constructor: class SubType2
        getSubValue: ƒ getSubValue()
        __proto__: Object
*/

