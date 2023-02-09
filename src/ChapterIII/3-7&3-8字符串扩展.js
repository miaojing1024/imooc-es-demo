// // 一. unicode关于字符的表示法
// // es6中加强了对unicode字符的支持 \uxxxx
// // \u代表当前是unicode的字符 xxxx码点 0000~ffff
// // 字符的unicode表示法 eg:ji 码点 0x20BB7
// // 0x20BB7超出范围 -> \u20BB+7 修复写法\u{20BB7}
// // \u{41} -> A
// // \n换行 \r回车 \t制表符
// console.log("\z" === "z"); // true
// // \HHH三个八进制的数的话表示的是一个字符 \172 -> z
// // \xHH后两个十六进制的数的话表示的是一个字符 \x7A -> z
// // console.log("\172" === "z");
// // z字符串表达的方式
// // 1. z
// // 2. \z
// // 3. \172
// // 4. \x7A
// // 5. \u007A
// // 6. \u{7A}

// // 二. 字符串的遍历器接口
// for (const item of 'imooc') {
//   console.log(item); // i m o o c
// }

// // 三. 模板字符串
// // 想实现换行
// const str1 = '啊实打实坎大哈就是的'
// + '市爱上客户达克拉'
// + '还是得卡号是的'
// console.log(str1); // 啊实打实坎大哈就是的市爱上客户达克拉还是得卡号是的(不会实现换行)

// const str1 = '啊实打实坎大哈就是的\n'
// + '市爱上客户达克拉\n'
// + '还是得卡号是的'
// console.log(str1);
// // 啊实打实坎大哈就是的
// // 市爱上客户达克拉
// // 还是得卡号是的

// const a = 20;
// const b = 14;
// const c = "es";
// const str2 = "我的年龄是:" + a + b + ",我在讲" + c;
// const str3 = "我的年龄是:" + (a + b) + ",我在讲" + c;
// console.log(str2); // 我的年龄是:2014,我在讲es
// console.log(str3); // 我的年龄是:34,我在讲es

// const str3 = "啊实打实坎\n大哈就是的市爱上客户达\n克拉还是得卡号是的";
// console.log(str3);
// // 啊实打实坎
// // 大哈就是的市爱上客户达
// // 克拉还是得卡号是的

// const str3 = `啊实打实坎
// 大哈就是的市爱上客户达
// 克拉还是得卡号是的`;
// console.log(str3);
// // 啊实打实坎
// // 大哈就是的市爱上客户达
// // 克拉还是得卡号是的

// const str4 = `
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
// `
// console.log(str4);
// // <ul>
// //   <li>1</li>
// //   <li>2</li>
// //   <li>3</li>
// // </ul>

// const a = 20;
// const b = 14;
// const c = "es";
// const str3 = `我的年龄是:${a + b},我在讲${c}`;
// console.log(str3); // 我的年龄是:34,我在讲es

// // 四. 嵌套模板
// // 初始写法
// const isLargeScreen = () => {
//   return true;
// };
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big' : 'icon-small'
// console.log(class1); // icon icon-big

// // es6写法
const isLargeScreen = () => {
  return true;
};
let class1 = "icon";
class1 = `icon icon-${isLargeScreen() ? "big" : "small"}`;
console.log(class1); // icon icon-big
