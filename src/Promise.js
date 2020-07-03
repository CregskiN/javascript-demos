/**
 * Promise 构造函数需要传入 executor 函数，同步立即执行
 * 内部类提供两种方法：resolve成功， reject失败， 
 * 可以更改 Promise 的三个状态：pending fullfied rejected
 */

/**
 * 1. executor 接收 resolve, reject
 * 2. 只有状态为pending，执行 resolve，reject 才能更改状态
 * 3. try { executor } catch(err) { reject(err) }
 */

class Promise {
    constructor(executor) {

        const resolve = () => {

        }

        const reject = () => {
            
        }

        executor(resolve, reject);
    }
}

module.exports = Promise;