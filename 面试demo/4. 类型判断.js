// 类型判断
const obj = {
    valueOf() {
        return 'valueOf被调用了'
    },
    toString() {
        return 'toString被调用了'
    }
}

console.log(obj.toString()); // "toString被调用了"
console.log(Object.prototype.toString(obj)); // "[object Object]"
console.log(Object.prototype.toString.call(obj)); // "[object Object]"
console.log(Object.toString()); // "function Object() { [native code] }"