// // Set学习
// // 1. Set中成员值一定是唯一的不重复的
// // 2. Set add/delete/clear/has
// // 3. WeakSet add/delete/clear/has
// // 4. Set和WeakSet区别
// let s = new Set()
// console.log(s); // Set(0) {size: 0}

// let s = new Set([1, 2, 3]);
// console.log(s); // Set(3) {1, 2, 3}

// // Set中成员值一定是唯一的不重复的
// let s = new Set([1, 2, 3, 2]);
// console.log(s); // Set(3) {1, 2, 3}

// // -----s.add----支持链式操作----添加
// let s = new Set([1, 2, 3, 2]);
// s.add("imooc").add("es");
// console.log(s); // Set(5) {1, 2, 3, 'imooc', 'es'}

// // -----s.delete--------删除
// let s = new Set([1, 2, 3, 2]);
// s.delete(2)
// console.log(s); // Set(2) {1, 3}

// // -----s.clear----清空
// let s = new Set([1, 2, 3, 2]);
// s.clear()
// console.log(s); // Set(0) {size: 0}

// // -----s.has----判断set中是否有某值
// let s = new Set([1, 2, 3, 2]);
// s.has(1)
// console.log(s.has(1)); // true

// // -----s.size----判断set的长度
// let s = new Set([1, 2, 3, 2]);
// console.log(s.size); // 3

// // -----s.forEach----set的遍历
// let s = new Set([1, 2, 3, 2]);
// s.forEach((item) => console.log(item)); // 1 2 3

// // -----for...of----set的遍历---for...of可以遍历可以遍历的对象---set的key和value是一样的
// let s = new Set([1, 2, 3, 2]);
// for (const item of s) {
//   console.log(item); // 1 2 3
// }
// for (const item of s.keys()) {
//   console.log(item); // 1 2 3
// }
// for (const item of s.values()) {
//   console.log(item); // 1 2 3
// }
// for (const item of s.entries()) {
//   console.log(item); // [1, 1] [2, 2] [3, 3]
// }

// // 数组去重
// let arr = [1, 2, 3, 4, 2, 3];
// let s = new Set(arr);
// console.log(s); // Set(4) {1, 2, 3, 4}

// // 合并去重
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// let s = new Set([...arr1, ...arr2]);
// console.log(s); // Set(6) {1, 2, 3, 4, 5, 6}

// // 合并去重---返回数组---set->array
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// let s = new Set([...arr1, ...arr2]);
// console.log([...s]); // [1, 2, 3, 4, 5, 6]
// console.log(Array.from(s)); // [1, 2, 3, 4, 5, 6]

// // 交集
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);
// let reslut = new Set(arr1.filter((item) => s2.has(item)));
// console.log(reslut); // Set(3) {2, 3, 4}

// // 差集
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);
// let arr3 = new Set(arr1.filter((item) => !s2.has(item)));
// let arr4 = new Set(arr2.filter((item) => !s1.has(item)));
// console.log(arr3); // Set(1) {1}
// console.log(arr4); // Set(2) {5, 6}
// console.log([...arr3, ...arr4]);

// // -----WeakSet---只能存储对象
// ---xx.add()---添加对象
// let ws = new WeakSet();
// // ws.add(1); // 报错
// ws.add({
//   name: "imooc",
// });
// console.log(ws); // WeakSet {{…}}

// // ---xx.delete()---删除对象
// let ws = new WeakSet();
// // ws.add(1); // 报错
// ws.add({
//   name: "imooc",
// });
// ws.add({
//   age: 5,
// });
// ws.delete({
//   name: "imooc",
// });
// console.log(ws); // WeakSet {{…}, {…}} { name: "imooc"}存在于堆内存中,两个对象虽长得相同但对应的两个不同的内存空间

// // ---xx.delete()---删除对象
// let ws = new WeakSet();
// let obj1 = {
//   name: "imooc",
// };
// let obj2 = {
//   age: 5,
// };
// ws.add(obj1);
// ws.add(obj2);
// ws.delete(obj1);
// console.log(ws); // WeakSet {{…}}

// // ---xx.has()---是否存在某对象
// let ws = new WeakSet();
// let obj1 = {
//   name: "imooc",
// };
// let obj2 = {
//   age: 5,
// };
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws.has(obj2)); // true

// // ---xx.forEach---遍历--报错
// let ws = new WeakSet();
// let obj1 = {
//   name: "imooc",
// };
// let obj2 = {
//   age: 5,
// };
// ws.add(obj1).add(obj2);
// ws.forEach((item) => {
//   console.log(item); // 报错 WeakSet不能遍历 也是WeakSet和Set的区别
// });
// WeakSet中对对象是弱引用,最终会被垃圾回收机制回收(被释放内存),所以不能遍历

// // ----------垃圾回收机制------GC
// // WeakSet 弱引用
// // WeakSet和Set区别
// // 1. WeakSet只能存储对象 Set都可以存储
// // 2. WeakSet不能forEach遍历 Set可以
// // 3. WeakSet弱引用,不会被垃圾回收几率考虑 Set可以
