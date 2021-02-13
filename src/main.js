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
