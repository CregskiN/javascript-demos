// -> Boolean
console.log('0, -0, Nan', Boolean(0), Boolean(-0), Boolean(NaN)); // false false false

// -> number
console.log('', Number([]), Number([1]), Number([1, 2]), Number({})) // 0 1 NaN NaN

// 运算符
/* 
    + 运算符
    1. 如果其中一方为字符串，会把另一方也转换为字符串
    2. 如果其中一方不为字符串或数字，会将它转换为数字或字符串
*/
console.log(1 + '1') // "11"
console.log(true + true) // 2
console.log(true + false) // 1
console.log(4 + [1, 2, 3]) // "41,2,3"
console.log('4' + [1, 2, 3]) // "41,2,3"
console.log([1, 2, 3] + [3, 4, 5]) // "1,2,33,4,5"
console.log(true + [1, 2, 3]) // "true1,2,3"
console.log('a' + + 'b') // "aNaN"

/* 
    + 之外的运算符
    1. 只要其中一方是数字，那么另一方就会被转为数字
*/

console.log(1 - '2'); // -1
console.log(1 - [2, 3, 4]); // NaN

// 比较运算符
/* 
    1. 如果是对象，调用toPrimitive转换对象
    2. 如果是字符串，通过unicode字符索引比较
 */
const person = {
    name: 'CregskiN',
    age: 20,
    job: 'engineer',
valueOf: function() {
    return 2;
},
toString: function() {
    return '3';
}
};
Object.defineProperties(person, {
    valueOf: function() {
        return 2;
    },
    toString: function() {
        return 'toString调用了'
    }
})
console.log(person);
console.log(person > 1); // true // person调用valueOf对比
console.log(person > '0');





// == 和 ===
/* 
    1. 二者类型是否相同 ? 比大小出结果 : 进入2
    2. 类型转换
    3. undefined == null -> true
    4. string == number
    -> Number(string) == number
    5. string == boolean
    -> Number(string) == Number(boolean)
    6. object == string|number|symbol
    -> object.toString()|.valueOf()转换为基本类型 == string|number|symbol

*/
// console.log()




