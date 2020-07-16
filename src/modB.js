exports.done = false
let a = require('./modA.js')
console.log('b.js-1', a.done); // 1. false // 使用了在index.js中引入modA时的缓存 a.done
exports.done = true
console.log('b.js-2', '执行完毕'); // 2. 