// Object.assign
// let target = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 4,
//     f: 5,
//     g: 6,
//   },
// };
// let source = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 4,
//     f: 5,
//   },
// };
// console.log(Object.assign(target, source)); // 输出值会将source中没有target的g属性值覆盖掉 按理应该保存下来

// let a = 5;
// let b = a;
// a = 6;
// console.log(a, b); // 6 5 基本数据类型深拷贝

// let obj1 = {
//   name: "xiecheng",
//   age: 34,
// };
// let obj2 = obj1;
// obj2.age = 18;
// console.log(obj1); // {name: 'xiecheng', age: 18}
// console.log(obj2); // {name: 'xiecheng', age: 18} 引用数据类型浅拷贝,拷贝的是堆的地址

// 实现深拷贝
// stringify
// let str = JSON.stringify(obj1);
// let obj2 = JSON.parse(str);
// obj2.age = 18;
// console.log(obj1); // {name: 'xiecheng', age: 34}
// console.log(obj2); // {name: 'xiecheng', age: 18} 实现深拷贝
//
// 判断数据类型
// console.log(typeof "imooc"); // string
// console.log(Object.prototype.toString.call({})); // [object Object]
// console.log(Object.prototype.toString.call([]).slice(8, -1)); // Array
// let obj1 = {
//   name: "xiecheng",
//   age: 34,
// };
// let arr1 = [1, 2, 3];
// console.log(obj1.toString()); // [object Object]
// console.log(arr1.toString()); // 1,2,3
// console.log(toString.call("123")); //[object String]
// console.log(toString.call(undefined)); //[object Undefined]
// console.log(toString.call({})); //[object Object]
// console.log(toString.call([])); //[object Array]

let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};
let deepClone = (target) => {
  let targetType = checkType(target);
  let result;
  if (targetType === "Object") {
    result = {};
  } else if (targetType === "Array") {
    result = [];
  } else {
    return target;
  }
  for (let key in target) {
    let value = target[key];
    let valueType = checkType(value);
    if (valueType === "Object" || valueType === "Array") {
      result[key] = deepClone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
};
let arr1 = [1, 2, { age: 18 }];
let arr2 = deepClone(arr1);
arr2[1] = 18;
arr2[2].age = 34;
console.log(arr1); // [1, 2, {…}]
console.log(arr2); // [1, 18, {…}]

let obj1 = {
  name: "xiecheng",
  hobby: ["coding", "eating"],
};
let obj2 = deepClone(obj1);
obj2.name = "xixi";
obj2.hobby[1] = "eating some";
console.log(obj1); // {name: 'xiecheng', hobby: Array(2)}
console.log(obj2); // {name: 'xixi', hobby: Array(2)}
