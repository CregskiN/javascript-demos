// Boolean
console.log(Boolean(123)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true

console.log(Boolean('123')); //
console.log(Boolean('')); // false

function fn(){}
console.log(Boolean(fn)); // true

console.log(Boolean({e:1,b:2})); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false


// // ?????
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(null == 0); // false
console.log(false == null); // false

