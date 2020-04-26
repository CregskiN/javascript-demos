/* 1. 工厂模式 */
// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     return o;
// }

// var person1 = createPerson('CregskiN', 20, 'Engineer');
// // {name: "CregskiN", age: 20, job: "Engineer"}
// var person2 = createPerson('JellyFishMix', 20, 'Doctor');
// // {name: "JellyFishMix", age: 20, job: "Doctor"}
// console.log(person1, person2);

/* 此中方式解决实现一个接口，大量代码重复的问题。 但，如何识别对象类型，又成了一个问题 */

/* 2. 构造函数模式 */
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function () {
//         return this.name;
//     };
// }
// var person1 = new Person('CregskiN', 20, 'Engineer');
// // {name: "CregskiN", age: 20, job: "Engineer", sayName: ƒ} 
// var person2 = new Person('JellyFishMix', 20, 'Doctor');
// // Person {name: "JellyFishMix", age: 20, job: "Doctor", sayName: ƒ}
// console.log(person1, person2);
/* new Person底层步骤如下
1. 创建一个新对象person
2. 将构造函数Person的作用域赋给新对象person
3. 执行构造函数Person中的代码（即为person添加属性）
4. 返回新对象person
*/
/* 新对象person中有一个属性指向Person */
// console.log(person1.constructor === Person); // true
// console.log(person2.constructor === Person); // true

/* constructor最初是用来识别对象类型的，但是对象类型检测用instanceof更好 */
// console.log(person1 instanceof Person); // true
// console.log(person1 instanceof Object); // true

/* 相比构造函数creatorPerson() 创建对象，new Person() 的构造函数模式更好，可以将实例标识为一种新类型Person*/

/* 2.1 用new(当作构造函数) 与 不用new有什么区别 */
// var person = new Person('CregskiN', 20, 'Engineer');
// console.log(person); // Person {name: "CregskiN", age: 20, job: "Engineer", sayName: ƒ}

// Person('CregskiN', 20, 'Engineer');
// console.log(window.sayName()); // 'CregskiN' Function内this为window，name,age,job,sayName()自然绑定在了window对象

// var o = new Object();
// Person.call(o, "CregskiN", 20, 'engineer');
// console.log(o.sayName()); // 'CregskiN' 绑定在o内。 印证了call()改变Function内的this指向

/* 2.2 构造函数的问题 */
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = new Function(console.log(this.name)); // 与上边等同
// }
// var person1 = new Person('CregskiN', 20, 'Engineer');
// var person2 = new Person('JellyFishMix', 20, 'Doctor');
// console.log(person1.sayName === person2.sayName); // false

/* 同样执行结果的两个函数，没必要定义两次。 */

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName;
// }
// function sayName() {
//     console.log(this.name);
// }
// var person1 = new Person('CregskiN', 20, 'Engineer');
// var person2 = new Person('JellyFishMix', 20, 'Doctor');
// person1.sayName(); // 'Cregski'
// console.log(person1.sayName === person2.sayName); // true

/* 节省了一块sayName()的内存 */

/* 新的问题：
    1. 全局函数sayName()只有被特定的Person实例使用（只得到预期结果），
    2.如果需要更多方法，需要定义更多全局函数，毫无封装性可言
*/

/* 3. 原型模式 */
// function Person() { }
// Person.prototype.name = 'CregskiN';
// Person.prototype.age = 20;
// Person.prototype.job = 'Engineer';
// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// var person1 = new Person('CregskiN', 20, 'Engineer');
// var person2 = new Person('JellyFishMix', 20, 'Doctor');
// console.log(person1 === person2); // false

/* 
    3.1 原型对象、构造函数、实例
    Person：构造函数
    Person.prototype：Person的原型对象
    Person.prototype.constructor === Person // true
*/
/* Person.prototype.isPrototypeOf(person) 判断 原型对象Person.prototype是否是实例person1的 原型对象*/
// console.log(Person.prototype.isPrototypeOf(person1)); // true
// console.log(person1.__proto__ === Person.prototype); // true
/* Object.getPrototypeOf(实例) 得到原型对象  */
// console.log(Object.getPrototypeOf(person1)); // {name: "CregskiN", age: 20, job: "Engineer", sayName: ƒ, constructor: ƒ}
// console.log(Person.prototype);// {name: "CregskiN", age: 20, job: "Engineer", sayName: ƒ, constructor: ƒ}
// console.log(Person.prototype === Object.getPrototypeOf(person1)); // true
/* person.hasOwnProperty() 判断是否是实例的属性 */
// console.log(person1.hasOwnProperty('name')); // false
// person1.name = 'aaa';
// console.log(person1.hasOwnProperty('name')); // true

/* person.hasOwnProperty()可以判断实例属性，但如何判断一个属性，存在切存在于实例？ */

/* 
    3.2 原型与in操作符

*/
// function Person() { }
// Person.prototype.name = 'CregskiN';
// Person.prototype.age = 20;
// Person.prototype.job = 'Engineer';
// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// var person1 = new Person('CregskiN', 20, 'Engineer');
// var person2 = new Person('JellyFishMix', 20, 'Doctor');
// console.log(person1.hasOwnProperty('name')); // false // 'name'属性不属于实例
// console.log('name' in person1); // true // 说明person1 可访问到属性'name'

/* 综上，同时使用hasOwnProperty()和in，能判断属性属于原型对象还是实例 */

/* 封装一个判断属性是否为原型属性的方法 */
// function hasPrototypeProperty(object, property) {
//     return !object.hasOwnProperty(property) && (property in object);
// }
/* !() ()
    1   1 实例无&&能访问 => 原型属性 => true
    1   0 实例无&&不能访问 => err => false
    0   0 实例有&&不能访问 => err => false
    0   1 实例有&&能访问 => 实例属性 => false
*/

// Object.defineProperty(Person.prototype, 'gender', {
//     value: 'male',
//     enumerable: true,
//     writable: false,
//     configurable: false,
// })
// var person3 = new Person('CregskiN', 20, 'Engineer');
// for(let key in person3) {
//     console.log(key); // age // name // job // sayName // (若gender.enumerable为true) gender
// }
/* for-in 可遍历到原型属性 */
// console.log(hasPrototypeProperty(person3, 'gender')); // true

// IE8- for-in不可枚举到[[enumerable]]: false 重写的原型方法
// var o = {
//     toString: () => {
//         console.log('toString');
//     }
// }
// for(let key in o){
//     console.log(key); // toString  // IE8- undefined
// }


/* Object.keys() 获取可枚举属性，不包括继承属性 */
// console.log(Object.keys(Person.prototype)); // ["name", "age", "job", "sayName", "gender"]
// console.log(Object.keys(person3)); // [] 实例上没有属性，也就没有可枚举属性

/* Object.getOwnPropertyNames() 获取对象(原型对象，实例对象)上所有属性，不包括继承属性 */
// console.log(Object.getOwnPropertyNames(person3)); // []
// console.log(Object.getOwnPropertyNames(Person.prototype)); // ["constructor", "name", "age", "job", "sayName", "gender"]

/* 这里的constructor属性是不可枚举的，但仍可用Object.getOwnPropertyNames()获取 */

/* 3.3 字面量定义原型 */
// function Person() { }
// Person.prototype = {
//     constructor: Person,
//     name: "cregskin",
//     age: 20,
//     job: 'Engineer',
//     sayName: function () {
//         console.log(this.name);
//     }
// };
// var person4 = new Person();
// for (let key in person4) {
//     console.log(key); // constructor // age // name // job // sayName 
// }

/* 字面量设置prototype相当于重写，从前[[enumerable]]:false的constructor 变成了true，这是不符合预期的 */

/* 3.4 原型的动态性 */
// function Person() {}
// var friend = new Person();
// Person.prototype.sayHi = function() {
//     console.log('hi');
// }
// friend.sayHi(); // 'hi'
/* Person.prototypr.sayHi 往原型添加sayHi方法，这里没毛病 */
// function Person() {
//     this.flag = 'Person'
// }
// var friend1 = new Person();
// console.log(friend1.__proto__ === Person.prototype); // true 指向正常
// Person.prototype = {
//     constructor: Person,
//     sayHi: function () {
//         console.log('hi');
//     }
// }
/* 以重写的方式 添加sayHi方法，有问题！ */
// console.log(friend1.__proto__ === Person.prototype); 
// false 重写Person.prototype后，Person的原型已经改变。但实例的隐式原型并未改变
// 即 原型的动态性在此 作为鸡肋
// console.log(friend1.__proto__.constructor); // ƒ Person() { this.flag = 'Person' }
// console.log(friend1.__proto__.constructor.prototype); // {constructor: ƒ, sayHi: ƒ}
// friend.sayHi(); // TypeError: friend.sayHi is not a function 
/* friends1保存的__proto__是修改之前的原型对象 */

// var friend2 = new Person();
// console.log(friend2.__proto__); // {constructor: ƒ, sayHi: ƒ}


/* 3.5 原生对象的原型 */
// function 


/* 3.6 原型对象的问题 */


