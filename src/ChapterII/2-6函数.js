// function foo(x, y) {
//   y = y || "world";
//   console.log(x, y);
// }
// foo("hello", "imooc"); // hello imooc
// foo("hello", 0); // hello world

// function foo(x, y = "world") {
//   console.log(x, y);
// }
// foo("hello", 0); // hello 0

// 函数参数默认值
// function foo(x = 5) {
//   // let x = 1; // 报错 x已经声明过
//   // const x = 1; // 报错 x已经声明过
// }
// function foo(x, x, y = 5) {
//   // 报错 参数名冲突
// }
// foo();
// function foo(x, y = 5, z) {
//   // 报错 参数名冲突
//   console.log(x, y, z);
// }
// foo(1, 2, 3); // 1 2 3
// foo(1, 3); // 1 3 undefined
// foo(1, ,3); // 报错 所以一般带有默认值的放在最后

// 与解构赋值结合
// function foo({ x, y = 5 }) {
//   console.log(x, y);
// }
// foo({}); // undefined 5
// foo({ x: 1 }); // 1 5
// foo({ x: 1, y: 2 }); // 1 2

// function ajax(url, { body = "", method = "GET", headers = {} } = {}) {
//   console.log(method);
// }
// ajax("http://www.imooc,com", {
//   method: "POST",
// }); // POST

// length属性
// function foo(x, y, z) {
//   console.log(x, y);
// }
// console.log(foo.length); // 3
// function foo(x, y, z = 5) {
//   console.log(x, y);
// }
// console.log(foo.length); // 2 返回没有参数默认值的参数个数

// 作用域
// let x = 1;
// function foo(x, y = x) {
//   console.log(y);
// }
// foo(2); // 2 在函数作用域中找x为几
// let x = 1;
// function foo(y = x) {
//   let x = 2
//   console.log(y);
// }
// foo(); // 1
// function foo(y = x) {
//   let x = 2
//   console.log(y);
// }
// foo(); // 报错x is not defined

// 函数name属性
function foo(){}
console.log(foo.name); // foo
console.log((new Function).name); // anonymous
function foo() {
  console.log(123);
}
foo.bind(); // 无输出
foo.bind()(); // 123
function foo() {
  console.log(this);
}
foo.bind({ name: "xiecheng" })(); // {name: 'xiecheng'}
function foo(x, y) {
  console.log(this, x, y);
}
foo.bind({ name: "xiecheng" }, 1, 2)(); // {name: 'xiecheng'} 1 2 第一个参数修改this指向
foo.bind({ name: "xiecheng" })(1, 2); // {name: 'xiecheng'} 1 2
console.log(foo.bind({}).name); // bound foo
console.log(function () {}.bind({}).name); // bound
