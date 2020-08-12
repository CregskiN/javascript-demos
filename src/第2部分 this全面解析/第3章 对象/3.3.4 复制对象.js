/**
 * 3.3.4 复制对象
 * 
 */

const obj1 = {
    name: 'Cregskin',
    friends: ['Jelly', 'bob'],
    address: {
        province: {
            city: 'langfang'
        }
    }
};

const obj2 = deepClone(obj1);
console.log(obj1 === obj2);

function deepClone(obj){
    if(typeof obj !== 'object' || obj === 'null'){
        return obj;
    }
    
    let res;
    if(obj instanceof Array){
        res = [];
    }else {
        res = {};
    }

    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            res[key] = deepClone(obj[key]);
        }
    }

    return res;
}