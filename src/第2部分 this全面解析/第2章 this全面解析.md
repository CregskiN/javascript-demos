## 2.1 调用位置

`调用栈`：当前执行栈栈顶的作用域

`调用位置`：上下文

## 2.2 绑定规则

### 2.2.1 默认绑定

this 绑定到调用位置

```js
function foo(){
  // 调用栈 foo
  console.log(this)
}
foo(); // 调用位置 window
// 非严格模式 全局对象
// 严格模式 undefined
```

> 从 ES5 开始默认使用严格模式

### 2.2.2 隐式绑定

1. 调用位置为对象

```js
function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 2,
    foo: foo
}

var obj1 = {
    a: 1,
    obj2: obj2
}

obj1.obj2.foo(); // 2
```



### 2.2.3 显式绑定

1.  apply call bind

```js
// 手写 bind
function bind(fn, obj){
  return function() {
    fn.call(obj, arguments)
  }
}
```

2. API 调用，给函数提供上下文

```js
function foo(el) {
    console.log(el, this.id);
}
var obj = {
    id: 'awesome'
};
[1, 2, 3].forEach(foo, obj);
```



### 2.2.4 new绑定

1. 创建一个空对象
2. 将空对象的`__proto__`指向构造函数的`prototype`
3. 将 this 指向这个空对象
4. 执行构造函数内部代码
5. 返回这个对象



## 2.3 优先级

> new > 显式绑定 > 隐式绑定

```js
function foo(p1, p2){
  this.val = p1 + p2;
}

var bar = foo.bind(null, "p1");

var baz = new bar("p2");
console.log(baz.val); // p1p2
```



## 2.4 例外情况

### 2.4.1 被忽略的this

> 在调用apply call bind时，若将 undefined null 作为第一参数，函数内部 this 执行默认绑定

```js
function foo(){
	console.log(this.a);
}

var a = 2;
foo.call(null); // 2
```

> 什么情况会传入 undefined null ？
>
> 使用 apply bind 柯里化

```js
function foo(a, b) {
    console.log('a :' + a + ', b:' + b);
}
foo.apply(null, [2, 3]); // a:2,b:3

// 使用 bind 函数柯里化，提前传入一些参数
var bar = foo.bind(null, 2);
bar(3); // a:2 b:3
```

> 为避免函数内部有副作用，第一个参数穿一个比较好
>
> 两种选择，1. {} 2. Object.create(null)
>
> 最佳实践 Object.create(null) # DMZ空的非委托对象，真正的空，连 `obj.__proto__` 都没有

```js
function(a, b){
  console.log('a :' + a + ', b:' + b);
}
var ø = Object.create( null );
foo.apply(ø, [2, 3]);
var bar = foo.bind(ø, 2);
bar(3); //  a:2 b:3
```



### 2.4.2 间接引用

```js
function foo(a, b) {
    console.log('a :' + a + ', b:' + b);
}
var a = 2;
var o = {
    a: 3,
    foo: foo
};
var p = {
    a: 4
}

o.foo();
(p.foo = o.foo)(); // 返回的是 foo 的引用，不同于 p.foo 或 o.foo
//a :undefined, b:undefined
//a :undefined, b:undefined
```



### 2.4.3 软绑定

> 硬绑定 this，除非 new 修改 this，是无法更改的。导致函数很不灵活

```js
// 软绑定
if (!Function.prototype.softBind) {
    Function.prototype.softBind = function () {
        var func = this; // 调用bind的函数
        var firstThis = arguments[0]; // 第一次调用时传入的 this
        var args = Array.prototype.slice.call(arguments, 1);
        if (typeof func !== 'function') {
            throw new TypeError('非函数类型不能使用bind');
        }
        var bound = function () {
            var secondThis = (!this || this === (window || global)) ? firstThis : this; // 若第二次调用时，若this为undefined or global（默认绑定），则改this为第一次传入的参数
            var secondArgs = Array.prototype.concat(args, arguments); // 连接两次调用的参数为数组
            return func.apply(secondThis, secondArgs);
        }
        bound.prototype = Object.create(func.prototype);
        return bound;
    }
}
```





## 2.5 箭头函数

```js

```

