/* 
值遍历
ES5
    forEach(e => {}) 忽略值
    every(e => boolean) 直至返回 false
    some(e => boolean) 直至返回 true
ES6
    for value of array，使用迭代器遍历
*/

/**
 * 数组中内置的迭代器
 */
var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator](); // 调用数组内置的迭代器@@iterator
console.group()
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }
console.groupEnd();

/**
 * 为对象设置迭代器
 */
var person = {
    name: 'CregskiN',
    age: 20,
    friends: ['jelly', 'bob']
};
Object.defineProperty(person, Symbol.iterator, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: function(){
        var obj = this;
        var keys = Object.keys(this);
        var i = 0;
        return {
            next: function(){
                return {
                    value: obj[keys[i++]],
                    done: i > keys.length
                }
            },

        }
    }
});
console.group();
for(let val of person){
    console.log(val);
}
console.groupEnd();
/* 
    CregskiN
    20
    ["jelly", "bob"]
*/
