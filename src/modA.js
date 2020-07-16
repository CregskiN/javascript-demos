exports.done = false
let b = require('./modB.js')
console.log('a.js-1', b.done); // 3. true
exports.done = true
console.log('a.js-2', '执行完毕'); // 4. 