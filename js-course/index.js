function object(obj) {
    function Fn() { }
    Fn.prototype = obj;
    return new Fn();
}

function Person(friends) {
    this.friends = friends == null ? [] : friends;
}
Person.prototype.sayFriends = function () {
    console.log(this.friends);
}

function Man(name, age, friends) {
    Person.call(this, friends);
    this.name = name;
    this.age = age;
}
Man.prototype = object(Person.prototype); // 在此处，减少一次父类构造函数调用
Man.prototype.constructor = Man;
Man.prototype.sayName = function () {
    console.log(this.name)
}
Man.prototype.sayAge = function () {
    console.log(this.age);
}

var xialuo = new Man('xialuo', 20, ['qiuya']);
var yuanhua = new Man('yuanhua', 21, []);

console.log(xialuo.friends); // ['qiuya']
console.log(yuanhua.friends); // []
xialuo.friends.push('teacherWang');
console.log(xialuo.friends); // [''qiuya, 'teacherWang']
console.log(yuanhua.friends); // []

console.log(xialuo instanceof Man); // true
console.log(xialuo instanceof Person); // true


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// function Man(name, age) {
//     Person.call(this, name, age);
// };

// Man.prototype = Object.create(Person.prototype);
// Man.prototype.constructor = Man;

// const mike = new Man('mike', 20);
// const bob = new Man('bob', 19);

// console.log(mike); // Man { name: 'mike', age: 20 }
// console.log(bob); // Man { name: 'bob', age: 19 }

// console.log(mike instanceof Man);
// console.log(mike instanceof Person);
