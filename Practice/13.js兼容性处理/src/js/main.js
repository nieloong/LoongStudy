// import '@babel/polyfill'

const add = (x, y) => (x + y) << 2;

const promise = new Promise((resolve) => {
  setTimeout(()=>{
    console.log('loong最帅～～～')
    resolve()
  },1000)
})

console.log(promise)

// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.warn('[looong]-',add(2,6))