// 经典问题
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

// 闭包解决
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, i * 1000)
    })(i)
}
console.log('ss')

setTimeout第三个参数
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer(j) {
        console.log(j)
    }, i * 1000, i
    )
}