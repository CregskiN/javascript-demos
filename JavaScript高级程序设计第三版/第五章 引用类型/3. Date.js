
// 1.日期字符串 
// MDN不推荐，因浏览器对日期字符串的解析 不同
// YY-MM-DDTHH:mm:ss.sssZ 有Z为UTC时区，没有则当地时区
// console.log(new Date('2020-04-18T20:11'));

// 2. 参数
// 年,月(从0开始),日,时,分,秒,毫秒
// console.log(new Date(2020, 3, 18, 20, 20, 20)); // 生成本地时间 Sat Apr 18 2020 20:20:20 GMT+0800 (中国标准时间)
// console.log(new Date(Date.UTC(2020, 3, 18, 20, 20, 20))); // 生成UTC时间 Sun Apr 19 2020 04:20:20 GMT+0800 (中国标准时间)

// 3. 时间戳
// console.log(Date.now()); // 1587212993141
// console.log(new Date(Date.now()));

// 4. 无参数
// console.log(new Date());

var date = new Date(Date.now());
console.log(date); // Sat Apr 18 2020 20:48:54 GMT+0800 (中国标准时间)
console.log(date.toString()); // Sat Apr 18 2020 20:48:54 GMT+0800 (中国标准时间)
console.log(date.toDateString()); // Sat Apr 18 2020
console.log(date.toTimeString()); // 21:02:12 GMT+0800 (中国标准时间)
console.log(date.toLocaleDateString()); // 2020/4/18
console.log(date.toLocaleTimeString()); // 下午9:02:12

console.log(date.toUTCString()); // Sat, 18 Apr 2020 13:02:12 GMT







