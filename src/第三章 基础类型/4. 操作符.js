// 操作符
console.log('a' + 1); // 'a1'
console.log('1' + 2); // '12'
console.log(2 + '1'); // '21'
// console.log(1.1++); // err
console.log(+'-01'); //  1 +/-string -> +/-Number(string)

// 操作符的坑！
// *
console.log(1 * 10); // 10
console.log('' * 10); // 0  ''->0 * 10
console.log('1.1' * 10); // 11 '1.1' -> Number('1.1') * 10
console.log(typeof ('' + 1)); // 'string'   // string+number -> string
console.log(typeof ('' * 1)); // 'number'   // string*number -> Number(string) + number

// 关于 ==
console.log(null == undefined); // true @规定 true 
console.log(NaN == NaN); // false @规定 NaN 永远 !== NaN 
console.log('NaN' == NaN); // false @规定 Number(string) == number
console.log(NaN !== NaN); // true
console.log(NaN != NaN); // true
console.log(Number(undefined)); // NaN
console.log(undefined == 0); // false NaN!==number
