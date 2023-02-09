// 普通写法
// let name = "xiecheng";
// let age = 34;
// let obj = {
//   name: name,
//   age: age,
//   study: function () {
//     console.log(this.name + "学习");
//   },
//   listen: () => {
//     console.log(this.name + "听");
//   },
// };
// console.log(obj); // {name: 'xiecheng', age: 34}
// obj.study(); // xiecheng学习
// obj.listen(); // undefined听 视频中报错 'name' of undefined
// ES6写法 若key与value相同可简写 对象内部key为变量写法 对象内部函数简写
// let name = "xiecheng";
// let age = 34;
// let s = "scholl";
// let obj = {
//   name,
//   age,
//   [s]: "imooc", // [s]带上[]表示属性的key是个变量
//   study(){
//     console.log(this.name + "学习")
//   }
// };
// console.log(obj); // {name: 'xiecheng', age: 34}
// obj.study() // xiecheng学习

// Object.is() 判断两个值是否严格相等
// console.log(Object.is(2, "2")); // false
// console.log(NaN == NaN); // false
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(+0, -0)); // false
// let obj1 = { // new Object
//   name: "xiecheng",
//   age: 34,
// };
// let obj2 = { // new Object
//   name: "xiecheng",
//   age: 34,
// };
// console.log(obj1 == obj2); // false 两个obj对应的两个内存空间
// console.log(Object.is(obj1, obj2)); // false 比较的是内存地址
// let obj1 = { // new Object
//   name: "xiecheng",
//   age: 34,
// };
// let obj2 = obj1
// console.log(obj1 == obj2); // true 内存地址一致
// console.log(Object.is(obj1, obj2)); // true 内存地址一致

// Object.assign 合并两个对象 参数1 目标对象 参数2 被合并对象
// 若属性中有相同则后者覆盖前者
// let x = {
//   a: 3,
//   b: 4,
// };
// let y = { ...x };
// console.log(y); // {a: 3, b: 4}
// let z = {
//   c: 5,
//   a:6
// };
// Object.assign(z, x);
// console.log(z); // {c: 5, a: 3, b: 4}

// in 判断当前对象是否包含某属性
// let x = {
//   a: 3,
//   b: 4,
// };
// console.log("a" in x); // true
// console.log("aa" in x); // false
// let arr = [1, 2, 3];
// console.log(3 in arr); // false 数组的属性为下标 下标3位置无值
// console.log(2 in arr); // true

// 对象的遍历
// let obj = {
//   name: "xiecheng",
//   age: 34,
//   school: "imooc",
// };
// for (let key in obj) {
//   console.log(key, obj[key]); // name xiecheng  age 34  school imooc
// }
// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]); // name xiecheng  age 34  school imooc
// });
// Object.getOwnPropertyNames
// let arr = [1, 2, 3];
// console.log(Object.getOwnPropertyNames(arr)); // ['0', '1', '2', 'length']
// console.log(Object.keys(arr)); // ['0', '1', '2']
// 制造一个不可枚举属性
// let my_obj = Object.create(
//   {},
//   {
//     getFoo: {
//       value: function () {
//         return this.foo;
//       },
//       enumerable: false,
//     },
//   }
// );
// my_obj.foo = 1
// console.log(my_obj); // {foo: 1, getFoo: ƒ}
// console.log(my_obj.getFoo()); // {foo: 1, getFoo: ƒ}
// console.log(Object.getOwnPropertyNames(my_obj)); // ['getFoo', 'foo']
// console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age', 'school']
// Object.getOwnPropertyNames(obj).forEach((key) => {
//   console.log(key, obj[key]); // name xiecheng  age 34  school imooc
// });
// console.log(Reflect.ownKeys(obj)); // ['name', 'age', 'school']
// Reflect.ownKeys(obj).forEach((key) => {
//   console.log(key, obj[key]); // name xiecheng  age 34  school imooc
// });

// 练习
// function ParentClass() {
//   this.test = "test";
// }
// ParentClass.prototype.inheritedMethod = function () {};
// function ChildClass() {
//   this.prop = 5;
//   this.method = function () {};
// }
// ChildClass.prototype = new ParentClass();
// ChildClass.prototype.prototypeMethod = function () {};
// console.log(new ChildClass()); // ChildClass {prop: 5, method: ƒ}
// console.log(
//   Object.getOwnPropertyNames(
//     new ChildClass() // ["prop", "method"]
//   )
// );
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
console.log(sym);
console.log(Reflect.ownKeys(obj)); // [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
