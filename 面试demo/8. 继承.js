// 组合继承
// function Parent(value) {
//     this.value = value;
// }
// Parent.prototype.getValue = function () {
//     console.log(this.value);
// }

// function Child(value) {
//     Parent.call(this, value);
// }
// Child.prototype = new Parent();

// const c = new Child(1);
// console.log(c instanceof Child); // true
/* 
    缺点：无用的父属性也被继承了
*/

// 寄生组合模式 
// function Parent(value) {
//     this.val = value
// }
// Parent.prototype.getValue = function () {
//     console.log(this.val)
// }

// function Child(value) {
//     Parent.call(this, value)
// }
// Child.prototype = Object.create(Parent.prototype, {
//     constructor: {
//         value: Child,
//         enumerable: false,
//         writable: true,
//         configurable: true
//     }
// })

function Animal() { }
function Dog() { }

console.log('Dog.prototype', Dog.prototype); // Dog{}
console.log('Animal.prototype', Animal.prototype); // Animal{}

// 继承
Dog.prototype = Object.create(Animal.prototype);

Object.defineProperties(Animal.prototype, {
    name: {
        value() {
            return 'animal';
        }
    },
    say: {
        value() {
            return `i am ${this.name()}`;
        }
    }
})
let dog = new Dog();
console.log(dog.say()); // 'i am animal'

Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value() {
            return 'dog'
        }
    }
})

dog = new Dog();
console.log(dog.say()); // 'i am dog'