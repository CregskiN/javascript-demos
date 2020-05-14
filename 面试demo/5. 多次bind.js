/* 
    bind多次会出现什么结果
 */
var a = { value: 'this is a' }
var fn = function () { console.log(this) }
fn.bind(a).bind(this)()

// 等价于
const that = this;
function fn() {
    var a = { value: 'this is a' }
    return (function () {
        console.log(this);
    }).apply(a);
}
fn.bind(that)();