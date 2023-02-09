// 数组结构
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c); // 1 2 3
// 数组结构
// let [a, b, c] = [1, 2, [3, 4]];
// console.log(a, b, c); // 1 2 [3,4]

// let [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a, b, c, d); // 1 2 3 4

// 对象结构
// let user = {
//   name: "aaa",
//   age: 34,
// };
// // let { name, age } = user;
// // console.log(name, age); // aaa 34
// let { age, name } = user; // 对象的结构是通过key来对应的
// console.log(name, age); // aaa 34

// 对象结构,修改键名
// let user = {
//   name: "aaa",
//   age: 34,
// };
// let { age: uage, name: uname } = user;
// // console.log(name, age); // 报错
// console.log(uage, uname); // 34 'aaa'

// let str = "imooc";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]); // i m o o c
// }

// z字符串的结构
// let str = "imooc";
// let [a,b,c,d,e] = str
// console.log(a,b,c,d,e); // i m o o c


// 解构用途
// let [a, b, c = 8] = [4, 5]
// console.log(a,b,c) // 是个惰性赋值 4 5 8

// let {name, age} = {
//   name: 'xiecheng',
//   age: 34
// }
// console.log(name, age) // xiecheng 34
// console.log(name, age) // 给age默认值18  xiecheng 18

// 证明惰性赋值
// function foo() {
//   console.log(123);
// }
// let [a = foo()] = [1]; // 无输出 因为给a赋了默认值1 没执行函数
// let [a = foo()] = []; // 输出123

// 函数赋值
// function foo([a, b, c]) {
//   console.log(a, b, c); // 1 2 3
// }
// let arr = [1, 2, 3];
// foo(arr);

// 函数参数解构
// function foo({ name, age, scholl = "imooc" }) {
//   console.log(name, age); // aaa 34
//   console.log(name, age, school); // aaa 34 imooc
// }
// let obj = {
//   name: "aaa",
//   age: 34,
// };
// foo(obj);

// 函数返回值解构
// function foo() {
//   let obj = {
//     name: "aaa",
//     age: 34,
//   };
//   return obj;
// }
// let { name, age } = foo();
// console.log(name, age); // aaa 34

// json
// let json = '{"a": "hello","b": "world"}';
// let { a, b } = JSON.parse(json);
// console.log(a, b); // hello world
