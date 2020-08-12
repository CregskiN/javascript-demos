/**
 * Getter Setter
 */


var myObj = {
    

    get a() {
        return this._a;
    },

    set a(val) {
        this._a = val;
    }
}
console.log(myObj);
console.log(myObj.a);
myObj.a = 30;
console.log(myObj);
