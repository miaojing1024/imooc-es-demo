// 1. 类(People) 构造函数 实例化对象 p1/p2
function People(name, age) {
  // console.log(this); // People {} this指向当前的实例化对象
  // 实例属性
  this.name = name;
  this.age = age;
  People.count++;
  // this.showName = function () {
  //   console.log("我的名字是" + this.name);
  // }; // 这样每次实例化一个对象就会new 一个Function不合理
}
// 定义静态属性
// 实例属性是定义到构造函数内的 静态属性是在类外的
People.count = 0;
// 静态方法方法
People.getCount = function () {
  console.log(this); // 指向当前的构造函数  People(name, age) {
  // console.log(this); // People {} this指向当前的实例化对象
  // 实例属性
  // this.name = name;
  // this.age = age;
  // People.count++; // this.showName = function () {
  // //   console.log("我的名字是" +…
  console.log("当前共用" + People.count + "个人");
};
// 实例方法
People.prototype.showName = function () {
  console.log("我的名字是" + this.name);
};
let p1 = new People("xiecheng", 34); // 实例化一个对象
console.log(p1); // People {name: 'xiecheng', age: 34}
p1.showName(); // 我的名字是xiecheng
let p2 = new People("zhangsan", 20);
console.log(p2); // People {name: 'zhangsan', age: 20}
p2.showName(); // 我的名字是zhangsan
// console.log(People.count) // 0
console.log(People.count); // 2 People.count++后的值
People.getCount(); // 当前共用2个人

// 2.
// let str = new String("imooc")
// console.log(str); // String {'imooc'}
// let arr = new Array()
// console.log(arr); // []
// let obj = new Object()
// console.log(obj); // {}
// console.log(Math.max(4, 5)); // 5
// console.log(Math.random()); // 输出0-1之间的随机数

// 3. 继承
// 父类
function Animal(name) {
  this.name = name;
}
Animal.prototype.showName = function () {
  console.log("名字是" + this.name);
};
// 子类 构造函数继承
// function Dog(name, color) {
//   Animal.call(this, name); // 继承属性 参数1 改变this指向 后面参数指向当前方法里面的参数
//   this.color = color;
// }
// let d1 = new Dog("wangcai", "wite");
// console.log(d1); // Dog {name: 'wangcai', color: 'wite'}
// d1.showName() // 报错 继承只能继承父类的属性不能继承方法

// 原型继承
// function Dog(name, color) {
//   this.color = color;
// }
// Dog.prototype = new Animal()
// Dog.prototype.constuctor = Dog
// let d1 = new Dog("wangcai", "wite");
// console.log(d1); // Dog {color: 'wite'}
// d1.showName() // 名字是undefined 构造函数继承可以继承属性 但是原型继承可以继承方法

// 组合继承
function Dog(name, color) {
  Animal.call(this, name);
  this.color = color;
}
Dog.prototype = new Animal()
Dog.prototype.constuctor = Dog
let d1 = new Dog("wangcai", "wite");
console.log(d1); // Dog {name: 'wangcai', color: 'wite'}
d1.showName() // 名字是wangcai 可以继承属性 可以继承方法
