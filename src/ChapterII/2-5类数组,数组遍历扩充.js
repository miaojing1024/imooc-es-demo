// // DOM
// let divs = document.getElementsByTagName('div')
// console.log(divs); // HTMLCollection

// let divs2 = document.getElementsByTagName('xx')
// console.log(divs2); // HTMLCollection

// let divs3 = document.querySelectorAll('.xx')
// console.log(divs3) // NodeList
// console.log(divs3 instanceof Array) // false
// // divs3.push(123) // 报错

// // slice 将伪数组转换为数组 [ES5方法]
// let arr = Array.prototype.slice.call(divs3)
// console.log(arr) // []
// arr.push(123) // [123]

// // arguments
// function foo(){
//   console.log(arguments) // Arguments(3) [1, 'imooc', true, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log(arguments instanceof Array); // false
// }
// foo(1, 'imooc', true)

// [ES6方法] 将伪数组转换为数组
// let arrayLike = {
//   0: "es6",
//   1: "es7",
//   2: "es8",
//   length: 3,
// };
// // Array.from
// let arr = Array.from(arrayLike);
// arr.push("es9");
// console.log(arr[0]); // es6

// new Array
// let arr = new Array(1, 2);
// console.log(arr); // [1,2]

// let arr = new Array(3);
// console.log(arr); // [empty × 3]

// fill 参数1 用谁去填充 参数2 下标开始位置 参数3 下标结束位置
// let arr = new Array(3).fill(7);
// console.log(arr); // [7,7,7]

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill("imooc", 1, 3)); // [1, 'imooc', 'imooc', 4, 5]
// console.log(arr.fill("imooc", 2, 1)); // [1, 2, 3, 4, 5]
// console.log(arr.fill(0)); // [0, 0, 0, 0, 0]  

// let arr = Array.of(1, 2);
// console.log(arr); // [1, 2]

// let arr = Array.of(3);
// console.log(arr); // [3]

// let arr = Array.of(1, true, "imooc", [1, 2, 3], {
//   name: "xiecheng",
// });
// console.log(arr); // [1, true, 'imooc', Array(3), {…}]

// copyWithin 参数1 从那个位置开始替换(必填) 参数2 从此位置开始读取元素(可选没有表示从初始开始) 参数3 到那个位置停止(可选没有表末尾)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(1, 3)); // [1, 4, 5, 4, 5]
// console.log(arr.copyWithin(1)); // [1, 1, 2, 3, 4]
// console.log(arr.copyWithin(1,2,3)); // [1, 3, 3, 4, 5]
// console.log(arr.copyWithin(1,2,1)); // 终止位置比起始位置小 不变动[1, 2, 3, 4, 5]

// includes
let arr = [1,2,3,NaN]
console.log(arr.indexOf(NaN)); // -1
console.log(NaN == NaN) // false
console.log(arr.includes(NaN)); // true