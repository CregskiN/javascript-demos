
/* 
    访问 prototype
*/

// 1. 语义上很不妥当
function isRelatedTo(o1, o2){
    function F(){}
    F.prototype = o2;
    return o1 instanceof F;
}

// 2.
Foo.prototype.isPrototypeOf(a); // boolean
// 3. Object.getPrototypeOf(a)