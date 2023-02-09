// 改变值
Object.defineProperty(window, "PI", {
  value: 3.14,
  writable: false,
});
console.log(PI);

// const存在块级作用域
if (true) {
  const a = 5;
}
console.log(a); // a is not defined

// const定义的变量不能被改变
// const定义的引用数据类型不能修改存放地址,内部值可以修改
const obj = {
  name: "aaa",
  age: 18,
};
console.log(obj); // {name: 'aaa', age: 18}
obj.city = "西安"
console.log(obj); // {name: 'aaa', age: 18, city: '西安'}

// 引用数据类型可以改变
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// freeze冻结对象
const obj = {
  name: "aaa",
  age: 18,
};
Object.freeze(obj)
console.log(obj); // {name: 'aaa', age: 18}
obj.city = "西安"
console.log(obj); // {name: 'aaa', age: 18}

// freeze是个浅层冻结
const obj = {
  name: "aaa",
  age: 18,
  skill: {
    name: "code",
    age: 18,
  },
};
Object.freeze(obj);
console.log(obj.skill); // {name: 'code', age: 18}
obj.city = "西安";
obj.skill.city = "xianan"
console.log(obj.skill); // {name: 'code', age: 18, city: 'xianan'}
