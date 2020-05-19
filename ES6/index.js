// var obj = new Proxy({}, {

//     /**
//      * @param {*} target 要拦截的目标对象
//      * @param {*} key 属性名
//      * @param {*} receiver 
//      */
//     get: function (target, key, receiver) {
//         console.log(`getting`, key);
//         console.log(`target is`, target)
//         console.log(`receiver is`, receiver)
//         return Reflect.get(target, key, receiver);
//     },

//     set: function (target, key, value, receiver) {
//         console.log(`target is`, target)
//         console.log(`getting`, key);
//         console.log(`value`, value);
//         console.log(`receiver is`, receiver)
//         return Reflect.set(target, key, value, receiver);
//     }
// })
// 为空对象{} 定义一层拦截器，重定义属性的读取(get)和设置(set)行为

function createFunction() {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
        result[i] = (function father(num) {
            console.log('fatner receive',arguments[0]); // futer接收的局部变量 全是基础类型
            return function () {
                return num;
            }
        })(i);
    }

    return result;
}

for(const func of createFunction()){
    console.log(func())
}
