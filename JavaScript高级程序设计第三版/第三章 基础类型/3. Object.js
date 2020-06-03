// object 的 toString valueOf
const o = { a: 1, b: 2 }
const b = {};

console.log(b.toString());// '[object Object] '
console.log(o.toString()); // 对象的字符串表示 '[object Object] '
console.log(o.valueOf()); // 与console.log(o)相同
console.log(b.valueOf());
console.log(typeof o); // 'object'

// object 的 方法
const o = new Object({ a: 1 });
console.log(o.hasOwnProperty('a')); // 实例中是否有'a'这个属性 （并非原型）
console.log(Function.isPrototypeOf(o)); // Object是否是o的原型
console.log(o.propertyIsEnumerable('a')); // 是否可枚举，被for-in遍历
console.log(o.toLocaleString()); // '[object Object] '

// === 比较的是引用
var o1 = {
    b: 2,
    c: {
        d: 3,
        e:4
    }
}
var o2 = o1;
o1.b = 3;
console.log(o1 === o2); // 浅比较

for (const key in o2) {
    console.log(key) // b c // for-in 浅层遍历 无d 无e
}