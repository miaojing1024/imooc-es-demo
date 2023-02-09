// // 1. let的块级作用域
// // let性质
// // let不属于顶层对象window
// // let不允许重复声明
// // let不存在变量提升
// // let暂时性死区
// // let块级作用域

// if (false) {
//   var a = 5
// }
// console.log(a); // undefined var无块级作用域
// if (false) {
//   let a = 5
// }
// console.log(a); // 报错 var有块级作用域

// if (true) var a = 5 // 不报错
// if (true) let a = 5 // 报错 需严格遵守es6语法

// // 打印出0 1 2
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // 3 3 3
//   });
// }
// // 闭包方式
// // 内部函数调用外部函数的变量 此时外部变量的状态不会被释放
// for (var i = 0; i < 3; i++) {
//   (function (j) { 
//     setTimeout(function () {
//       console.log(j); // 0 1 2
//     });
//   })(i);
// }
// // 使用let块级作用域
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // 0 1 2
//   });
// }
