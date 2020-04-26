/* 为便于操作基本类型，ES提供三个包装类，因此基本类型也有特殊的方法和属性调用 
    Boolean Number String 
    在创建基本类型变量时自动创建包装类实例
*/

// var s1 = 'some text';
// var s2 = s1.substring(2);
// console.log(s2); // me text
/* 
    访问s1时，处于一种读取模式，即从内存中读取字符串的值。 底层完成下列过程
    1. 创建String类型的实例
    2. 在实例上调用指定方法
    3. 销毁这个实例
    与引用类型不同，
    var s1 = new String('some text');
    var s2 = s1.subString(2);
*/
/*
    s1在作用域执行完之前，一直存在于内存中，可随时访问、添加属性
    包装类型不同，在访问完成后立即销毁，在访问完成后也立即销毁(添加的属性被销毁)。 因此不能运行时添加属性
*/

/* 直接调用 */
// var s1 = 'some text';
// s1.color = 'red'; // 访问时底层逻辑 => 创建包装类 -> 添加colo属性 -> 删除包装类，仅保存值'some text'
// console.log(s1.color); // undefined

/* 显式调用 */
// var s1 = new String('some text');
// var s2 = s1.subString(2); // index.js:23 Uncaught TypeError: s1.subString is not a function
// console.log(s2);
// console.log(typeof s1); // object // 底层会把基本包装类型对象都转换为true??这个有啥影响吗
// var b1 = new Boolean(false);
// var b2 = false;
// console.log(typeof b1); // object
// console.log(typeof b2); // boolean


/* 显示调用和使用转型函数的结果是不一样的 */
// var value = "25";
// var number = Number(value); // number保存的是基本类型值"25"
// console.log(typeof number); // number
// var obj = new Number(value) // obj保存的是实例
// console.log(typeof obj); // object

/* -------------------- */
/* Boolean型 尽量避免使用 */
// var booleanObject = new Boolean(false);
// var result = booleanObject && true;
// console.log(result); // true
// var falseValue = false;
// var result = falseValue && true;
// console.log(result); // false

// console.log(result.valueOf()); // false
// console.log(result.toString()); // 'false'
// console.log(result.toLocaleString()); // 'false'


/* Number型 */
// var numberObject = new Number(10);
// console.log(numberObject.valueOf()); // 10
// console.log(numberObject.toString(2)); // '1010'
// console.log(numberObject.toString(8)); // '12'
// console.log(numberObject.toString(10)); // '10'
// console.log(numberObject.toString(16)); // 'a'
// console.log(numberObject.toLocaleString()); // '10'

/* toFixed() 规范小数位数 */
// console.log(numberObject.toFixed(2)); // '10.00'
// var num = 10.005;
// console.log(num.toFixed(2)); // '10.01' 自动舍入 // Warrning：IE8及以前不能正确舍入{(-0.94, -0.5], [0.5, 0.94)]}返回0，而不是1 -1
// console.log((-num).toFixed(1)); // '-10.0'
// console.log((-num).toFixed(2)); // '-10.01'

/* toExponential() 返回指数表示法e */
// console.log(num.toExponential(1)) // '1.0e+1'
// console.log(num.toExponential(2)) // '1.00e+1'
// console.log(num.toExponential(3)) // '1.001e+1'

/* totoPrecision() 填入有效数字位数*/
// var num2 = 99;
// console.log(num2.toPrecision(1)); // '1e+2'
// console.log(num2.toPrecision(2)); // '99'
// console.log(num2.toPrecision(3)); // '99.0'

/* 
    同Boolean 不建议显示创建实例，因类型转换和基本数据类型的typeof结果不一
*/
// var numberObject = new Number(10);
// var numberValue = 10;
// console.log(typeof numberObject); // 'object'
// console.log(typeof numberValue); // 'number'
// console.log(numberObject instanceof Number); // true
// console.log(numberValue instanceof Number); // false // 要命了，包装类仅在访问时才创建，此处以基本类型的方式引入
// numberObject是Number的实例，numberValue却不是

/* String型 */
// var stringObject = new String('Hello World');
// console.log(stringObject.length); // 11

/* 针对访问字符，String提供很多方法
    1. 字符方法
    2. 字符串操作方法
    3. 字符串位置方法
    4. trim()方法
    5. 字符串大小写转换方法
    6. 字符串的模式匹配
    7. localeCompare()
    8. 静态方法 fromCharCode()
*/
/* 
    1. 字符操作方法
    charAt
    charCodeAt
*/

// var stringValue = 'hello';
/* charAt() 获取单字符 */
// console.log(stringValue.charAt(1), 'typeof it is ', typeof stringValue.charAt(1)); // 'e' 'typeof it is  string'
/* charCodeAt() 获取单字符的码点 */
// console.log(stringValue.charCodeAt(1)); // 101
/* 数组方式获取 */
// console.log(stringValue[1]); // 'e'

/**
    2. 字符串操作方法
    concat
    slice
    substring
    substr
 */
/* concat() 拼接字符串，不改变原串 */
// var stringValue = 'hello'
// console.log(stringValue.concat(' world')); // 'hello world'
// console.log(stringValue); // 'hello' 不改变愿字符串

/* slice(开始的下标，截止的下标+1) 纯下标逻辑 */
// var stringValue = 'hello world';
// console.log('slice()', stringValue.slice()); // 'hello world'
// console.log('slice(-3)', stringValue.slice(-3)); // 'rld' // 从倒数第3个截取到最后
// console.log('slice(3)', stringValue.slice(3)); // 'lo world' // 从下标3个截取到最后
// console.log('slice(1,5)', stringValue.slice(1, 5)); // 'ello' // 从下标1截取到下标5-1
// console.log('slice(3,-4)', stringValue.slice(3, -4)); // 'lo w' // 从下标3截取到下标-4-1
// console.log('---');
/* substring(开始的下标，截止的下标+1) 纯下标逻辑，按下标截取 */
// var stringValue = 'hello world';
// console.log('substring()', stringValue.substring()); // 'hello world'
// console.log('substring(-3)', stringValue.substring(-3)); // 'hello world' // Warning 所有的-都被substring转为0，即从下标0开始截取到最后
// console.log('substring(3)', stringValue.substring(3)); // 'lo world' 从下标3截取到最后
// console.log('substring(1,5)', stringValue.substring(1, 5)); // 'ello ' 从下标1截取到下标5-1 // 该结果与.slice(1,5)相同
// console.log('substring(3,-4)', stringValue.substring(3, -4)); // 'hel' 从下标0开始截取到下标3-1 // (3, -4) -> (3, 0) -> (0, 3)
// console.log('---');
/* substr(开始的下标，截取的个数) */ // IE8- 第二个参数为负时存在问题
// var stringValue = 'hello world';
// console.log('substr()', stringValue.substr()); // 'hello world'
// console.log('substr(-3)', stringValue.substr(-3)); // 'hello world' // Warning 所有的-都被substring转为0，即从下标0开始截取到最后
// console.log('substr(3)', stringValue.substr(3)); // 'lo world' 从下标3截取到最后
// console.log('substr(1,5)', stringValue.substr(1, 5)); // 'ello' 从下标1截取到下标5-1 // 该结果与.slice(1,5)相同
// console.log('substr(3,-4)', stringValue.substr(3, -4)); // '' (3, -4) -> (3, 0) 从下标3开始，截取0个字符串 -> ''空串


/**
    3. 字符串位置方法
    indexOf
 */
/* indexOf(string) 返回第一次出现的下标 */
// var stringValue = 'hello world';
// console.log(stringValue.indexOf('l')) // 2
// console.log(stringValue.lastIndexOf('l')) // 9
/* indexOf(string, starIndex) 从startIndex开始搜string，返回第一次出现位置的下标*/
// var stringValue = 'hello world';
// console.log(stringValue.indexOf('l', 3)); // 3
// console.log(stringValue.indexOf('l', 5)); // 9
// console.log(stringValue.indexOf('l', -1)); // 2
// console.log(stringValue.indexOf('l', stringValue.length)); // -1 即找不到

/* 使用indexOf找到所有匹配字符串位置 */
// var stringValue = 'Talk is cheap, show me the code.'
// var positions = new Array();
// var pos = stringValue.indexOf('e');
// while (pos > 1) {
//     positions.push(pos);
//     pos = stringValue.indexOf('e', pos + 1);
// }
// console.log(positions); // [10, 21, 25, 30]

/* 
    4. trim() ES5创建一个字符串副本，返回去掉前后空格的字符串，不改变原串
*/
// var stringValue = '   hello world!   ';
// console.log(stringValue.trim()); // 'hello world!'
// console.log(stringValue); // '   hello world!   '


/* 
    5. 大小写转换，不改变原串
    toLowerCase()
    toLocaleLowerCase()
    toUpperCase()
    toLocaleUpperCase()
    不知道代码运行位置的情况下，用locale更稳妥些
*/
// var stringValue = 'hello World';
// console.log(stringValue.toLocaleUpperCase()); // 'HELLO WORLD'
// console.log(stringValue.toUpperCase()); // 'HELLO WORLD'
// console.log(stringValue.toLocaleLowerCase()); // 'hello world'
// console.log(stringValue.toLowerCase()); // 'hello world'

/* 
    6. 字符串模式匹配方法
    match()
    search()
*/
// var text = 'cat,bat,sat,fat';
// var pattern = /.at/;
// var matches = text.match(pattern);
// console.log(matches); // ["cat", index: 0, input: "cat,bat,sat,fat", groups: undefined]
// console.log(matches.index); // 0
// console.log(pattern.lastIndex); // 0

// var text = 'cat,bat,sat,fat';
// var pos = text.search(/at/);
// console.log(pos); // 1

/* 非全局匹配，替换第一个'at'为'ond' */
// var text = 'cat,bat,sat,fat';
// var result = text.replace('at', 'ond');
// console.log(result); // 'cond,bat,sat,fat'
/* 全局匹配，替换'at'为ond''*/
// result = text.replace(/at/g, 'ond');
// console.log(result); // 'cond,bond,sond,fond'

// 这部分参考红宝书P128页

/* 
    7. localeCompare() 按字母表比较
*/
// var stringValue = 'yellow';
// console.log(stringValue.localeCompare('brick')); // 1 排序yellow 后于brick
// console.log(stringValue.localeCompare('yellow')); // 0 排序yellow同于yellow
// console.log(stringValue.localeCompare('zoo')); // -1 排序yellow先于zoo

/* Math */
/* 1. 属性 */
// console.log(Math.E); // 2.718281828459045
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LOG2E); // 1.4426950408889634
// console.log(Math.LOG10E); // 0.4342944819032518
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.SQRT1_2); // 0.7071067811865476
// console.log(Math.SQRT2); // 1.4142135623730951
/* 2. 最大值最小值
    Math.max()
    Math.min()
*/
/* 3.
    Math.ceil() 向上取整
    Math.floor() 向下取整
    Math.round() 四舍五入
*/
// console.log(Math.ceil(25.9)); // 26
// console.log(Math.floor(25.9)); // 25
// console.log(Math.round(25.9)); // 26
/* 4. 
    Math.random()
 */
// console.log(Math.floor(Math.random() * 10) + 1); // [1,10]


