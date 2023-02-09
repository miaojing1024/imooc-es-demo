// var a = 5;
// console.log(a); // 5
// delete a; // 此时的a是定义在全局的一个变量 delete没用
// console.log(a); // 5

// var b = 5;
// console.log(b); // 5
// delete b; // 报错 delete只能删除对象里面的属性
// console.log(b);

// let a = 5;
// console.log(a); // 5
// console.log(window.a); // undefined

// function foo(a = 2, b = a) {
//   console.log(a, b);
// }
// foo();

// for (var i = 0; i < 3; i++) {
//   console.log("内" + i);
// }
// console.log("外" + i);
// // 内0 内1 内2 外3

// for (let i = 0; i < 3; i++) {
//   console.log("内" + i);
// }
// console.log("外" + i);
// 内0 内1 内2 报错

// if (false) {
//   var a = 5
// }
// console.log(a); // undefined 取到了定义但没被赋值的a

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3 3 3
  });
}

// 闭包
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // 0 1 2
    });
  })(i);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0 1 2
  });
}
