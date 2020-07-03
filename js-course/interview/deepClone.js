
/**
 * 深拷贝
 * @param {*} obj 
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        // obj不是object或为null，无需拷贝，直接返回
        // ? 这里为什么用==
        return obj;
    }

    // 初始化返回结果
    let result;
    if (obj instanceof Array) {
        // 对于数组
        result = [];
    } else {
        // 对于对象
        result = {};
    }

    for (let key in obj) {
        // key为obj实例属性，不是原型链属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key]);
        }
    }

    // 返回结果
    return result;
}