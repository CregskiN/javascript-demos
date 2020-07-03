/**
 * 手写深比较
 */

const obj1 = { a: 10, b: { c: 100, d: 200 } };
const obj2 = { a: 10, b: { c: 100, d: 200 } };
console.log(isEqual(obj1, obj2)); // true


function isObject(param) {
    return typeof param === 'object' && param !== null;
}

function isEqual(obj1, obj2) {
    // 两个值类型
    if (!isObject(obj1) || !isObject(obj2)) {
        // 值类型（注意：参与equal一般不是函数）
        return obj1 === obj2;
    }

    // 两个是引用类型，是同一个引用
    if (obj1 === obj2) {
        return true;
    }

    // 两个是引用类型，不是同一个引用
    // 1. 取出obj1 obj2的keys，比较个数
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    // 2. 以 obj 为基准，和 obj2 一次递归比较
    for (let key in obj1) {
        // 比较当前 key 的 val 递归！
        const res = isEqual(obj1[key], obj2[key]);
        if (!res) {
            return false;
        }
    }

    // 3. 全相等
    return true;
}