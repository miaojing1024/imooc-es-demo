// Symbol
// 1. 一种新的原始数据类型
// 基本数据类型: (7种)
// 数字,字符串,undefined,布尔值,null,函数,对象+Symbol
// Symbol的声明
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1); // Symbol()
// console.log(s2); // Symbol()
// console.log(s1 === s2); // false Symbol本意代表象征的意思 在es6中他是独一无二的

// let s1 = Symbol('foo') // 传递参数 用于对symbol的描述
// let s2 = Symbol('bar')
// console.log(s1); // Symbol(foo)
// console.log(s2); // Symbol(bar)
// console.log(s1 === s2); // false

// const obj = {
//   name: "imooc",
// };
// let s = Symbol(obj);
// console.log(s); // Symbol([object Object]) 当参数为对象的话 会自动调用对象的toString方法将其转化为字符串

// const obj = {
//   name: "imooc",
//   toString(){
//     return this.name
//   }
// };
// let s = Symbol(obj);
// console.log(s); // Symbol(imooc)

// let s = Symbol()
// s.name = 'imooc'
// console.log(s); // Symbol()

// Symbol 不是一個構造函數 不能使用new
// let s = new Symbol() // 报错

// Symbol的描述-----x.description
// let s = Symbol();
// console.log(s.description); // undefined
// s = Symbol("foo");
// console.log(s.description); // foo

// Symbol的另一种描述------Symbol.for
// let s1 = Symbol.for("foo")
// console.log(s1); // Symbol(foo)

// let s1 = Symbol.for("foo");
// let s2 = Symbol.for("foo");
// console.log(s1 == s2); // true Symbol.for创建的值相当于是定义在全局环境中 `类比Symbol另一种描述方式两者不相等`

// function foo(){
//   return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y); // true Symbol.for创建的值相当于是定义在全局环境中

// ---------Symbol.keyFor----------
// const s1 = Symbol("foo")
// console.log(Symbol.keyFor(s1)) // undefined
// const s2 = Symbol.for("foo")
// console.log(Symbol.keyFor(s2)) // foo Symbol.keyFor返回一个已经登记的Symbol的key Symbol.for表示登记在全局

// 2. Symbol的常见应用场景
// const grade = {
//   张三: { address: "xxx", tel: "111" },
//   李四: { address: "yyy", tel: "222" },
//   李四: { address: "zzz", tel: "333" },
// };
// console.log(grade) // {张三: {…}, 李四: {…}} key值相同被覆盖

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//   stu1: { address: "yyy", tel: "222" },
//   stu2: { address: "zzz", tel: "333" },
// };
// console.log(grade) // {stu1: {…}, stu2: {…}} stu1和stu2被理解为常亮吧

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//   [stu1]: { address: "yyy", tel: "222" },
//   [stu2]: { address: "zzz", tel: "333" },
// };
// console.log(grade) // {李四: {…}} stu1和stu2被理解为变量 上线文查看值为啥返回,值相同被覆盖

// 此时可以用Symbol解决
// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//   [stu1]: { address: "yyy", tel: "222" },
//   [stu2]: { address: "zzz", tel: "333" },
// };
// console.log(grade) // {Symbol(李四): {…}, Symbol(李四): {…}} Symbol独一无二的
// console.log(grade[stu1]) // {address: 'yyy', tel: '222'}
// console.log(grade[stu2]) // {address: 'zzz', tel: '333'}

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// const user = new User("xiecheng");
// console.log(user.getName()); // xiecheng

// const sym = Symbol("imooc");
// class User {
//   constructor(name) {
//     this.name = name;
//     this[sym] = "imooc.com"; // 如果当前的属性是变量的话 可以用中括号表示this.xxx
//   }
//   getName() {
//     return this.name + this[sym];
//   }
// }
// const user = new User("xiecheng");
// console.log(user.getName()); // xiechengimooc.com

// Symbol属性不会被一般遍历读取 可以作为一种隐私属性
// const sym = Symbol("imooc");
// class User {
//   constructor(name) {
//     this.name = name;
//     this[sym] = "imooc.com"; // 如果当前的属性是变量的话 可以用中括号表示this.xxx
//   }
//   getName() {
//     return this.name + this[sym];
//   }
// }
// const user = new User("xiecheng");
// for (const key in user) {
//   console.log(key); // name Symbol类型不会被遍历
// }
// for (const key of Object.keys(user)) {
//   console.log(key); // name Symbol类型不会被遍历
// }
// for (const key of Object.getOwnPropertySymbols(user)) {
//   console.log(key); // Symbol(imooc) 只能取到Symbol属性
// }
// for (const key of Reflect.ownKeys(user)) {
//   console.log(key); // name Symbol(imooc) 两个属性都可以取到
// }

// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case "Triangle":
//       area = 1;
//       break;
//     case "Circle":
//       area = 2;
//       break;
//   }
//   return area;
// }
// console.log(getArea("Triangle")); // 1 Triangle出现两次代码风格不好(魔术字符串)

// const shapeType = {
//   triangle: "Triangle",
//   circle: "Circle",
// };
// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = 1;
//       break;
//     case shapeType.circle:
//       area = 2;
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle)); // 1 讲师意思:此时Triangle只需要出现一次,消除了魔术字符串 我:???

// 对于此函数 key值对应的value不重要 只需确保key值不重复即可 所以可使用Symbol消除魔术字符串
// const shapeType = {
//   triangle: Symbol(),
//   circle: Symbol(),
// };
// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = 1;
//       break;
//     case shapeType.circle:
//       area = 2;
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle)); // 1 
