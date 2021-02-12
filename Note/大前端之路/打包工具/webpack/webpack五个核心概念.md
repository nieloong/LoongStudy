<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-03 17:55:52
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-03 18:24:24
 * @FilePath: /Note/大前端之路/打包工具/webpack/webpack五个核心概念.md
 * @Descripttion:
 * @version:
-->
### webpack五个核心概念

1. **Entry**

&ensp;&ensp;入口`Entry`指示 Webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. **Output**

&ensp;&ensp;输出`Output`指示Webpack打包后资源 bundles 输出到哪里去，以及如何命名。

3. **Loader**

&ensp;&ensp;`Loader`让Webpack能够去处理那些非javascript文件（Webpack自身只理解JavaScript）

4. **Plugins**

&ensp;&ensp;插件`Plugins`可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. **Mode**

&ensp;&ensp;模式`Mode`指示webpack使用相应模式的配置。

|选项|描述|特点|
|:---:|:---:|:---|
|development|会将process.env.NODE_ENV的值设为development。启用NamedChunksPlugin和NamedModulesPlugin。|能让代码本地调试运行的环境|
|production|会将process.env.NODE_ENV的值设为production。启用FlagDependencyUsagePlugin,FlagIncludedChunksPlugin,ModuleConcatenationPlugin,NoEmitOnErrorsPlugin,OccurrenceOrderPlugin,SideEffectsFlagPlugin和UglifyjsPlugin.|能让代码优化上线运行环境|