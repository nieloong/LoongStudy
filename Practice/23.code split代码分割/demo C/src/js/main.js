

const sum = (...args) => args.reduce((p, c) => p + c, 0);

/*
  通过js代码方式，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
*/

// ES10的import语法
import(/* webpackChunkName: 'testloong' */'./testloong')
  .then(({mul})=>{
    // 文件加载成功～～～
    // eslint-disable-next-line
    console.log('mul->',mul(2,7));
  })
  .catch(()=>{
    // eslint-disable-next-line
    console.log('文件加载失败～～～');
  });

// eslint-disable-next-line
console.log('sum->',sum(1, 2, 3, 4, 5,6, 8,1));
