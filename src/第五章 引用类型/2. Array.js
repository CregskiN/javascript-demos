/* 创建数组 */
// var arr1 = new Array();
// var arr2 = new Array(20); // length = 20
// var arr3 = new Array('123', 345)

// var arr4 = [1, 2,];
// 不要这样，可能创建2到3个项的数组
// IE8- [1,2,undefined] // 3项

// console.log(arr4, arr4.length); // [1,2] 2

// var arr4 = [1, 2];
// arr4[100] = 100;
// console.log(arr4); // 共101个元素
// console.log(arr4[98]); // arr4[2 - 99]都是undefined


/* 类型检测 */
// var arr5 = [];
// console.log(typeof arr5); // object
// console.log(arr5 instanceof Array); // true
// console.log(Array.isArray(arr5)); // true IE9+

/* 转换方法 */
// var arr6 = ['red', 'blue', 'green'];
// console.log(arr6); // ["red", "blue", "green"]
// console.log(arr6.toString()); // red,blue,green
// console.log(arr6.valueOf()); // ["red", "blue", "green"]
// alert(arr6); // red,blue,green底层调用toString()
// alert(arr6.valueOf()); // red,blue,green ，alert接收字符串，底层在调用valueOf()后自动调用toString()

/* toLocaleString() */
// 一般情况下，返回的结果同valueOf() toString()
// 但，toLocaleString() 调用的是每一项的toLocaleString()，而不是toString()
// var person1 = {
//     toLocaleString: function () {
//         return 'CregskiN1-toLocaleString()'
//     },
//     toString: function () {
//         return 'CregskiN1-toString()'
//     }
// };
// var person2 = {
//     toLocaleString: function () {
//         return 'CregskiN2-toLocaleString()'
//     },
//     toString: function () {
//         return 'CregskiN2-toString()'
//     }
// };
// var person = [person1, person2];
// alert(person); // CregskiN1-toString(),CregskiN2-toString()
// console.log(person.toString()); // CregskiN1-toString(),CregskiN2-toString()
// alert(person.toLocaleString()); // CregskiN1-toLocaleString(),CregskiN2-toLocaleString()
// console.log(person.toLocaleString()); // CregskiN1-toLocaleString(),CregskiN2-toLocaleString()

/* 数组转字符串 */
// console.log(arr6.join(null)); // rednullbluenullgreen
// console.log(arr6.join(undefined)); // red,blue,green

/* 栈方法
push() 在最后一项添加，返回添加后length
pop() 取出最后一项
*/

/* 队列方法
unshift() 在第一项添加,返回添加后length
shift() 取出第一项
*/

/* 重排序方法
reverse() 反转
sort() 
*/
// var arr = [0, 1, 5, 20, 15];
// console.log(arr.sort()); // [0, 1, 10, 15, 5]  // V8 当数组长度小于等于10的时候，采用插入排序，大于10的时候，采用快排。

// function customSort(value1, value2) {
//     if (value1 < value2) {
//         return 1;
//     } else if (value1 === value2) {
//         return 0;
//     } else if (value1 > value2) {
//         return -1;
//     }
// }
// console.log(arr.sort(customSort)); // [20, 15, 5, 1, 0]
// console.log(arr); // [20, 15, 5, 1, 0] 改变原数组
// console.log(arr.reverse()) // [20, 15, 5, 1, 0] 与其改变比较函数的return，不如用reverse更快


/* 数组操作
concat() 数组拼接
slice() 截取数组，不会改变原数组
splice() 最强大的数组方法，可删除，可插入，可替换，均改变原数组
*/
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice()); // [1, 2, 3, 4, 5, 6]
// console.log(arr.slice(1)); // [2, 3, 4, 5, 6] 从下标1复制到最后
// console.log(arr.slice(1, 3)); // [2, 3] 从下标1开始复制到下标3-1处
// console.log(arr.slice(1, 5)); // [2, 3, 4, 5] 从下标1开始复制到下标5-1

// console.log(arr.splice(2), arr); // 截取并返回前2项 [3, 4, 5, 6], [1, 2]
// console.log(arr.splice(2, 2), arr); // 截取 [3, 4]， 剩余 [1, 2, 5, 6]
// console.log(arr.splice(1, 1, '插入1', '插入2'), arr); // [2]， [1, "插入1", "插入2", 3, 4, 5, 6]

/* 位置方法
indexOf() 从前往后找
lastIndexOf() 从后往前找
*/
// console.log(arr.indexOf(2)); // 1
// console.log(arr.indexOf(5, 2)); // 4 //从下标2开始找5

/* 迭代方法
every() 给每一项添加运行函数，若都返回true，则返回true
some() 给每一项添加运行函数，若有一项返回true，则返回true
forEach() 无返回值
map() 返回每次函数调用的结果，组成数组
filter() 返回函数true的项，组成数组
*/
// var O = { A: 1, B: 2 };
// console.log(arr.every(function (value, index, arr) {
//     console.log(value, index, arr);
//     console.log(this); // {A: 1, B: 2}
//     return value === 2;
// }, O)); // false

// console.log(arr.some((value, index, arr) => {
//     console.log(value, index, arr);
//     return value === 2;
// })); // true

// console.log(arr.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// }));

// console.log(arr.map((value, index, arr) => {
//     console.log(value, index, arr);
//     // return value === 2 || value === 5; // [false, true, false, false, true, false]
//     return value; // [1, 2, 3, 4, 5, 6]
// }));

// console.log(arr.filter((value, index, arr) => {
//     console.log(value, index, arr);
//     return value === 2 || value === 5;
// })); // [2, 5]

/* 归并方法
reduce() 从左向右遍历
reduceRight() 从右向左遍历
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.reduce(function (preValue, value, index, arr) {
//     console.log(preValue, value, index, arr);
//     return 1; // 1. 每次return的数值 作为下一次遍历的preValue接收
// })
// console.log(arr); // 2. 不改变原数组

