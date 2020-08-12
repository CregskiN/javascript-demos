exports.done = false
let b = require('./modB.js')
console.log('modA.js-1', b.done)
exports.done = true
console.log('modB.js-2', '执行完毕')