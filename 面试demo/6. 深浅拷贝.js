// 深浅拷贝
/* 
    浅拷贝
    1. Object.assign
    2. ...
*/

// Object.assign()
// const a = {
//     name: 'CregskiN',
//     age: 20,
//     friends: ['JellyFishMix', 'LiuFan', 'XinYunjie'],
//     job: undefined,
//     sayName: function () {
//         console.log(this.name);
//     }
// };
// const b = Object.assign({}, a);
// b.friends.push('friendB');
// b.name = 'newCregskiN';

// console.log(a);
/* 
    {
    name: 'CregskiN',
    age: 20,
    friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie', 'cdc' ]
    }
*/
// console.log(b);
/*
    {
    name: 'newCregskiN',
    age: 20,
    friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie', 'cdc' ]
    }
*/

// ...
// const c = {...a};
// c.friends.push('friendC');
// c.name = 'NameC';
// console.log(a);
/* 
{
  name: 'CregskiN',
  age: 20,
  friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie', 'friendB', 'friendC' ]
}
*/
// console.log(c);
/* 
{
  name: 'NameC',
  age: 20,
  friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie', 'friendB', 'friendC' ]
}
*/


/* 
    深拷贝
    1. JSON.stringify + JSON.parse
    局限性：忽略undefined、symbol、函数、不能序列化循环引用！
    2. 自己写
    3. lodash
*/

// const d = JSON.parse(JSON.stringify(a));
// d.friends.push('friendD');
// console.log(a);
/* 
    {
    name: 'CregskiN',
    age: 20,
    friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie' ],
    job: undefined,
    sayName: [Function: sayName]
    }
*/
// console.log(d);
/* 
    {
    name: 'CregskiN',
    age: 20,
    friends: [ 'JellyFishMix', 'LiuFan', 'XinYunjie', 'friendD' ]
    }
*/

function deepClone(obj) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null
    }

    if (!isObject(obj)) {
        throw new Error('非对象')
    }

    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : { ...obj };

    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
    })

    return newObj
}

let obj = {
    a: [1, 2, 3],
    b: {
        c: 2,
        d: 3
    }
}
let newObj = deepClone(obj)
newObj.b.c = 1
// console.log(obj.b.c) // 2

console.log(Reflect.ownKeys(obj));
console.log(Object.getOwnPropertyNames(obj)); // 效果相同

