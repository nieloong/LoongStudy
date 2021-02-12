<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-12 10:42:31
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-12 10:44:33
 * @FilePath: /LoongStudy/Note/大前端之路/Git/如何删除Git上的远程文件夹.md
 * @Descripttion:
 * @version:
-->

# 如何删除Git上的远程文件夹

### 方法一

这里以删除 test文件夹为案例

```shell
git rm -r --cached test //--cached不会把本地的test删除
git commit -m 'delete test dir'
git push -u origin master
```

### 方法二

如果误提交的文件夹比较多，方法一也较繁琐

直接修改`.gitignore`文件,将不需要的文件过滤掉，然后执行命令:

```shell
git rm -r --cached .
git add .
git commit
git push  -u origin master
```
