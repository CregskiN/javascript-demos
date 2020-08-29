function *gen(){
    console.log('执行');
    yield 1 + 1;
    return 3;
}

let g = gen();
console.log(g);
console.log(g.next()); // { value: 2, done: false }
console.log(g.next(1)); // { value: 3, done: true }
console.log(g.next()); // { value: undefined, done: true }