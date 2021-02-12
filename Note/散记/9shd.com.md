---
title: "9shd.com各图片尺寸"
author: Loongking
date: 20210108
output: word_document
---

## 9shd.com图片尺寸

### （案例）搜索轮播图1680x580

### （案例）首页轮播广告1680x580

### （案例）播放页广告1680x580

### icon

分辨率：256x256

unpackage/res/icons/256x256.png

### 启动图

![截屏2021-01-08 下午9.47.32-202119](http://image.nie-long.com/截屏2021-01-08%20下午9.47.32-202119.png)

"splashscreen" : {
  "ios" : {
      "iphone" : {
          "default" : "unpackage/res/splash/splash.png", /*iPhone3启动图片选，分辨率：320x480*/
          "retina35" : "unpackage/res/splash/splash.png", /*3.5英寸设备(iPhone4)启动图片，分辨率：640x960*/
          "retina40" : "unpackage/res/splash/splash.png", /*4.0 英寸设备(iPhone5/iPhone5s)启动图片，分辨率：640x1136*/
          "retina47" : "unpackage/res/splash/splash.png", /*4.7 英寸设备(iPhone6)启动图片，分辨率：750x1334*/
          "retina55" : "unpackage/res/splash/splash.png", /*5.5 英寸设备(iPhone6 Plus)启动图片，分辨率：1242x2208*/
          "retina55l" : "unpackage/res/splash/splash.png", /*5.5 英寸设备(iPhone6 Plus)横屏启动图片，分辨率：2208x1242*/
          "iphonex" : "unpackage/res/splash/splash.png",
          "iphonexl" : "unpackage/res/splash/splash.png"
      },
      "ipad" : {
          "portrait" : "unpackage/res/splash/splash.png", /*iPad竖屏启动图片，分辨率：768x1004*/
          "portrait-retina" : "unpackage/res/splash/splash.png", /*iPad高分屏竖屏图片，分辨率：1536x2008*/
          "landscape" : "unpackage/res/splash/splash.png", /*iPad横屏启动图片，分辨率：1024x748*/
          "landscape-retina" : "unpackage/res/splash/splash.png", /*iPad高分屏横屏启动图片，分辨率：2048x1496*/
          "portrait7" : "unpackage/res/splash/splash.png", /*iPad iOS7竖屏启动图片，分辨率：768x1024*/
          "portrait-retina7" : "unpackage/res/splash/splash.png", /*iPad iOS7高分屏竖屏图片，分辨率：1536x2048*/
          "landscape7" : "unpackage/res/splash/splash.png", /*iPad iOS7横屏启动图片，分辨率：1024x768*/
          "landscape-retina7" : "unpackage/res/splash/splash.png" /*iPad iOS7高分屏横屏启动图片，分辨率：2048x1536*/
      }
  },
  "android" : {
      "mdpi" : "unpackage/res/splash/splash.png", /*普通屏启动图片，分辨率：240x282*/
      "ldpi" : "unpackage/res/splash/splash.png", /*大屏启动图片，分辨率：320x442*/
      "hdpi" : "unpackage/res/splash/splash.png", /*高分屏启动图片，分辨率：480x762*/
      "xhdpi" : "unpackage/res/splash/splash.png", /*720P高分屏启动图片，分辨率：720x1242*/
      "xxhdpi" : "unpackage/res/splash/splash.png" /*1080P高分屏启动图片，分辨率：1080x1882*/
  }
}