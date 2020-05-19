function Counter() {
    console.log(this.add())
}

Object.defineProperties(Counter.prototype, {
    count: {
        value: 0,
        configurable: false,
        enumerable: false,
        writable: true,
    },
    constructor: {
        value: Counter,
        configurable: false,
        enumerable: false,
        writable: false,
    },
    add: {
        value: function() {
            this.count = this.count + 1;
            return this.count;
        },
        configurable: false,
        enumerable: false,
        writable: false,
    }
});

new Counter();
new Counter();
new Counter();
new Counter();