const Promise = require('./Promise.js')


const p = new Promise((resolve, reject) => {
    resolve('resolve')
})

p.then((res) => {
    console.log('res', res);
}, (err) => {
    console.log('err', err);
})