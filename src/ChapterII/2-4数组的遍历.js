// let arr = [1, 2, 3];
// ES5 数组遍历的方式
// for
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 2) {
//     continue;
//   }
//   console.log(arr[i]); // 1 3
// }

// // forEach 不支持break continue
// arr.forEach(function (element, index, array) {
//   console.log(element, index, array); // 1 0 [1,2,3] 2 1 [1,2,3] 3 2 [1,2,3]
// });

// map
// arr.map(function (value) {
//   console.log(value); // 1 2 3
// });
// let result = arr.map(function (value) {
//   value += 1;
//   return value;
// });
// console.log(arr, result); //  [1, 2, 3]   [2, 3, 4]

// filter
// let result = arr.filter(function (value) {
//   return value == 2;
// });
// console.log(arr, result); // [1, 2, 3] [2]

// some
// let result = arr.some(function (value) {
//   return value == 2;
// });
// console.log(arr, result); // [1, 2, 3] true

// every
// let result = arr.every(function (value) {
//   return value == 2;
// });
// console.log(arr, result); // [1, 2, 3] false

// reduce 求和 参数一:接收一个方法 参数1: 上一次调用函数的回显 参数2: 当前正在处理的数组里元素 参数3: 当前处理参数的下标 参数4: 原数组
//            参数二: 累加初始值
// let result = arr.reduce(function (prev, cur, index, array) {
//   return prev + cur;
// }, 0);
// console.log(arr, result); // [1, 2, 3] 6
// 求最大值
// let result = arr.reduce(function (prev, cur) {
//   return Math.max(prev, cur);
// }, 0);
// console.log(arr, result); // [1, 2, 3] 3
// 去重
// let arr = [1, 2, 3, 4, 2, 1, 2, 1];
// let result = arr.reduce(function (prev, cur) {
//   prev.indexOf(cur) == -1 && prev.push(cur);
//   return prev;
// }, []);
// console.log(arr, result); // [1, 2, 3, 4, 2, 1, 2, 1]  [1, 2, 3, 4]

// for ... in
// let arr = [1, 2, 3, 2, 4]
// for (let index in arr) {
//   console.log(index, arr[index]); // 01 12 23 32 44
// }
// for ... in遍历数组 但是遍历数组会有些许小问题
// Array.prototype.foo = function(){
//   console.log('foo');
// }
// for (let index in arr) {
//   console.log(index, arr[index]); // 01 12 23 32 44  foo ƒ () { console.log('foo');}
// }

// ES6 数组遍历
let arr = [1, 2, 3, 2, 4];
// find 返回第一个通过测试的元素
// let res = arr.find(function (value) {
//   return value == 2;
// });
// console.log(arr, res); // [1, 2, 3, 2, 4] 2

// findIndex 返回第一个通过测试的元素的下标
// let res = arr.findIndex(function (value) {
//   return value == 2;
// });
// console.log(arr, res); // [1, 2, 3, 2, 4] 1

// for ... of
// for (const item of arr) {
//   console.log(item); // 1 2 3 2 4
// }
// for (const item of arr.values()) {
//   console.log(item); // 1 2 3 2 4 输出对应的值
// }
// for (const item of arr.keys()) {
//   console.log(item); // 0 1 2 3 4 输出对应的下标
// }
for (const [index,item] of arr.entries()) {
  console.log(index,item); // 01 12 23 32 44 输出对应的值和下标
}
