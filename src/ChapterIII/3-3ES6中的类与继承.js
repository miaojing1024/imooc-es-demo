// // 1.在es6定义类
// class People {
//   // 构造函数
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }
// let p1 = new People("xiecheng", 34);
// console.log(p1); // People {name: 'xiecheng', age: 34}
// p1.showName(); // xiecheng

// // 2.es6实现继承
// class Coder extends People {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }
//   showCompany(){
//     console.log(this.company)
//   }
// }
// let c1 = new Coder('zhangsan',25,'imooc')
// console.log(c1); // Coder {name: 'zhangsan', age: 25, company: 'imooc'}
// c1.showName() // zhangsan
// c1.showCompany() // imooc
// c1.sex = 1
// console.log(c1.sex) // male 设置的顶层属性也可以被继承
// console.log(Coder.getCount()); // 5 Coder

// 3. 定义顶层属性
// class People {
//   // 构造函数
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this._sex = -1; // 设置初始值
//   }
//   get sex() {
//     // return 'male'
//     return this._sex;
//   }
//   set sex(val) {
//     // this.sex = val // 代码陷入死循环 一直在设置值 采取中间变量_sex实现
//     this._sex = val;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }
// let p1 = new People("xiecheng", 34);
// console.log(p1); // People {name: 'xiecheng', age: 34}
// p1.showName(); // xiecheng
// console.log(p1.sex); // male
// p1.sex = "female"; // 只有get方法时
// console.log(p1.sex); // 报错 此时是只读的
// p1.sex = "female"; // 有set方法时
// console.log(p1.sex); // female
// // 使用sex属性和直接用constructor设置属性差别: constructor是直射直显 sex属性可以进行逻辑操作(eg: 0:femal 1:male)
// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this._sex = -1; // 设置初始值
//   }
//   get sex() {
//     if (this._sex === 1) {
//       return "male";
//     } else if (this._sex === 0) {
//       return "female";
//     } else {
//       return "error";
//     }
//   }
//   set sex(val) {
//     if (val === 0 || val === 1) {
//       this._sex = val;
//     }
//   }
// }

// 4. 静态方法:和实例化对象无关,直接定义到类中 es6规定class内部只能定义静态方法
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._sex = -1; // 设置初始值
  }
  get sex() {
    return this._sex;
  }
  set sex(val) {
    this._sex = val;
  }
  showName() {
    console.log(this.name);
  }
  // static getCount() {
  //   return 5
  // }
  static count = 0 // 报错
}
// console.log(p1.getCount()); // 报错
// console.log(People.getCount()); // 5 静态方法直接在类下直接调用 coder也可直接调用 
let p1 = new People("xiecheng", 34);

// 5. 静态属性:类似es5定义静态属性方法
People.count = 9
console.log(People.count); // 9
