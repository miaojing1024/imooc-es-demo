// 扩展运算符 把数组或者类数组展开成用逗号隔开的值(三点在实参上)
// function foo(a, b, c) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// foo(...arr); // 1 2 3

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2); // ES5方法
// console.log(arr1); // [1, 2, 3, 4, 5, 6]
// arr1.push(...arr2)
// console.log(arr1); // [1, 2, 3, 4, 5, 6, 4, 5, 6] ES6方法(连接上一步)

// let str = 'imooc'
// var arr = [...str]
// console.log(arr);

// rest参数 吧逗号隔开的值组合成一个数组(三点在形参上)
// ES5写法
// function foo(x, y, z) {
//   let sum = 0;
//   Array.prototype.forEach.call(arguments, function (item) {
//     sum += item;
//   });
//   return sum;
// }
// console.log(foo(1, 2)); // 3
// console.log(foo(1, 2, 3)); // 6
// ES6写法 Array.from
// function foo(x, y, z) {
//   let sum = 0;
//   Array.from(arguments).forEach(function(item){
//     sum += item;
//   })
//   return sum
// }
// console.log(foo(1, 2)); // 3
// console.log(foo(1, 2, 3)); // 6

// ES6写法 解构
// function foo(...args) {
//   console.log(args); // [1, 2]  [1, 2, 3]
//   let sum = 0;
//   args.forEach(function (item) {
//     sum += item;
//   });
//   return sum
// }
// console.log(foo(1, 2)); // 3
// console.log(foo(1, 2, 3)); // 6

// function foo(x, ...args) {
//   console.log(x); // 1
//   console.log(args); // [2, 3, 4]
// }
// foo(1, 2, 3, 4);

// let [x, ...y] = [1, 2, 3];
// console.log(x); // 1
// console.log(y); // [2, 3]

let arr = [1, 2, 3, 4, 5, 6];
console.log(...arr); // 1 2 3 4 5 6

let [x, y, ...z] = arr;
console.log(x, y, z); // 1 2 [3, 4, 5, 6]
