// ①这种方式会引入所有的polyfill 导致可能有些polyfill是项目当中用不到的 却依然加载了进去。所以我们可以在预设@babel/preset-env中配置“useBuiltIns”："usage"用以取代下面的语句。设置“usage”后会自动引入需要的`polyfill`。 (过度引入 重复引入)

// import '@babel/polyfill'

// import "core-js/stable";
// import "regenerator-runtime/runtime";

import funs from './funs'
funs.getName()

// 1.arrow function
const arrowFun = () => {
  console.log('arrow-function', this)
}

// 2.class
class Person {
  constructor() {
    this.name = name
  }
  say() {
    alert('hello')
  }
}

// 3.promise es6新增
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() * 10 >= 5) {
      resolve('大于5')
    } else {
      reject('小于5')
    }
  }, 2000)
})
promise.then(res => console.log(res))

// 4.async await es7 需要polyfill 否则执行代码报错 regeneratorRuntime不存在
async function fn() {
  try {
    const result = await promise
    console.log(result)
  } catch(err) {
    console.warn('error', err)
  }
  console.log('--- after promise ---')
}

fn()

// 5.includes
const flag = [1, 2, 3].includes(1)
console.log('includes', flag)

exports.default =  {
  name: 'yxp'
} 
// 使用@babel/cli 需要安装@babel/core 否则在终端转译时 会报错 `can't find module '@babel/core'`
// 1.如果没有配置插件 直接使用babel转译时 会发现转译前后的文件内容是相同的。
// 2.项目根目录下新建一个文件`.babelrc`或者`babel.config.json`。旧版本则是`babel.config.js`。 plugins presets
// 3.安装一个插件 @babel/plugin-transform-arrow-plugin

// 预设 babel为了方便开发者 它将一组插件的集合成为预设 官方提供的有 @babel/preset-env @babel/preset-flow @babel/preset-react @babel/preset-typescript

// 使用async await时 会有这个变量 regeneratorRuntime



// 1.使用polyfill
// 2.按需加载polyfill 使用useBuiltIns: usage 及 corejs:2/3。使用polyfill会导致每个文件都会加载polyfill，譬如两个文件都有箭头函数，那么这俩个文件都会加载箭头函数的polyfill。按需加载只是在某种程度上减少了代码量，但polyfill还是有代码冗余的问题。polyfill的另一个缺点是会污染全局变量。
// 3.不使用polyfill