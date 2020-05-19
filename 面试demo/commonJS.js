// commonJS.js
module.exports = {
    a: 10,
    sayA: function() {
        console.log(this.a);
    }
}


// module2.js
const commonjs = require('./commonJS');

module.exports = commonjs;


// index.js
const commonjs = require('./commonJS');
const module2 = require('./module2');

commonjs.sayA();
commonjs.a = 20;
commonjs.sayA();

module2.sayA();