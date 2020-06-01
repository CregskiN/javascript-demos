const b = false;

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (b) {
            resolve(true);
        } else {
            resolve(false);
        }
    }, 1000);
})

p.then(res => {
    console.log(res);
})