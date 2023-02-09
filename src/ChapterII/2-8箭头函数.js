// console.log(sum) // undefined
// // 正常情况下let不存在变量提升应该报错 sum is not defined 但src下的代码会被webpack打包编译 所以输出undefined
// let sum = function (x, y) {
//   return x + y;
// };

// let sum = (x, y) => {
//   return x + y;
// };
// let sum = (x, y) => x + y;
// console.log(sum(3, 4));

// 正常下this指向
// let oBtn = document.querySelector("#btn");
// oBtn.addEventListener("click", function () {
//   console.log(this); // 输出为<button id="btn">点我</button>
//   setTimeout(function () {
//     console.log(this); // 输出为window...
//   }, 1000);
// });
// ES5 中改变this指向方法 call apply bind
// bind方法后的bind并不会立即执行,等1s后执行 call和apply会对这个方法立即执行
// let oBtn = document.querySelector("#btn");
// oBtn.addEventListener("click", function () {
//   console.log(this); // 输出为<button id="btn">点我</button>
//   setTimeout(function () {
//     console.log(this); // 输出为<button id="btn">点我</button>
//   }.bind(this), 1000);
// });
// 箭头函数改变this指向
// 箭头函数this指向定义时所在的对象,而不是调用时所在的对象 箭头函数中this指向外层执行环境中指向的this
// let oBtn = document.querySelector("#btn");
// oBtn.addEventListener("click", function () {
//   console.log(this); // 输出为<button id="btn">点我</button>
//   setTimeout(() => {
//     console.log(this); // 输出为<button id="btn">点我</button>
//   }, 1000);
// });

// 类
// function People(name, age) {
//   console.log(this); // People {}
//   this.name = name;
//   this.age = age;
// }
// let p1 = new People("xiecheng", 34);
// console.log(p1); // People {name: 'xiecheng', age: 34}
// 箭头函数不能作为构造函数使用
// let People = (name, age) => {
//   this.name = name;
//   this.age = age;
// };
// let p1 = new People("xiecheng", 34);
// console.log(p1); // 代码执行效果People {},因为webpack中eval打包造成
// 浏览器执行效果 People is not a constructor
// 箭头函数不可以使用arguments对象
// let foo=()=>{
//   console.log(arguments);
// }
// foo()
// 代码执行效Arguments(3) [{…}, {…}, ƒ, callee: ƒ, Symbol(Symbol.iterator): ƒ],因为webpack中eval打包造成
// 浏览器执行效果arguments is not defined at foo
// 使用rest
let foo = (...args) => {
  console.log(args);
};
foo(1, 2, 3); // [1, 2, 3]
