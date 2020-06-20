function foo(a) {
  var b = a * 2;
  function bar() {
    bar.prototype.time = 10;
    console.log(a, b, c);
  }

  function fn() {
    console.log(bar.prototype.time);
  }
  fn()
}

foo(2);
