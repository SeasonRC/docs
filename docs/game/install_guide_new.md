# 游戏正常安装与联网

该文档介绍如何安装 `SeasonRC` 服务器的 `WMMT6R` 客户端。  

## 一、下载客户端

首先，下载此文件：[SeasonRC_WMMT6R.zip](null)。  

下载完成之后，解压到任意 **非中文名、无空格** 的目录下。  

## 二、安装 NodeJS

在游戏根目录内，依次进入 “安装教程与可能需要用到的文件” > “NodeJS 安装程序” 文件夹，运行 `node-v16.16.0-x64.msi` 安装 NodeJS。  

![img](https://i.zerodream.net/d0e22cf6f807649cc2dc1e09d67886c5.png)

## 三、配置 TeknoParrot

进入 TP_Multiplayer 文件夹，找到 TeknoParrotUi.exe 双击启动，然后点击 “游戏设定” 按钮。  

![img](https://i.zerodream.net/453f1f9adeef5f1a43ae693438dd7ec5.png)  

点击 Game Executable 下方的地址栏，在弹出的窗口中找到游戏安装目录，选择 wmmt6r.exe  

![img](https://i.zerodream.net/c046bd9142d0ed403919e4cb9fd57d8e.png)  

![img](https://i.zerodream.net/d52224b53f591e5c7f6d0630da27bde2.png)  

配置完成之后点击保存设定即可。  

## 四、配置控制器

顾名思义，就是要配置游戏的控制器  

此处分为两种情况，一种是 PS 系列手柄/键盘/方向盘，另一种是 XBOX 系列手柄/第三方手柄（如北通等），根据自身情况选择  

### PS 系列手柄

游戏设定中该项必须是 `DirectInput`  

![img](https://i.zerodream.net/1331500845fb30f4dea41d4adb8e1942.png)  

进入主页中的控制器设置，根据左侧提示自行设置按钮

::: warning 警告
由于 PS 系列手柄的特性，在方向与油门刹车设置的时候，请在保持打盘打死 / 油门刹车踩死的情况下再去设置下一个按键。
:::

在主页的左上角点击三条杠按钮，点击设置  

![img](https://i.zerodream.net/84fc4b7f67597a9b0f64220e822212c1.png)  

将该处设置成与图片一样的形式  

![img](https://i.zerodream.net/3b420d6f407b4056a4a9f227aba87f49.png)  

### 键盘/方向盘
游戏设定中该项必须是 `DirectInput`  

![img](https://i.zerodream.net/1331500845fb30f4dea41d4adb8e1942.png)  

进入主页中的控制器设置，根据左侧提示自行设置按钮  

### XBOX 系列手柄/第三方手柄（如北通等）

游戏设定中该项必须是 `XInput`  

![img](https://i.zerodream.net/987c1a999e695aa500b6f28749d80e9b.png)  

进入主页中的控制器设置，根据左侧提示自行设置按钮  

设置完毕后，即可保存并关闭 TP 模拟器  

## 五、创建账号

1. 浏览器打开 [Zerodream](null)
2. 在左侧点击 “注册账号” 按钮
3. 按照提示填写信息，点击注册
4. 注册成功后，输入账号密码登录，然后使用微信扫码绑定微信
5. 绑定成功后，在右侧新建一张卡片，随意输入一个英文名字，点击创建

## 六、配置 SeasonRC 湾岸卡

1. 运行游戏目录下的 `SeasonRC 湾岸卡切换工具.exe`
2. 根据提示输入用户名和密码进行登录
3. 登录成功后，输入要使用的卡片序号，然后回车
4. 切换完毕后，关闭程序

## 七、运行 SeasonRC

第一次启动请运行游戏目录下的 `WMMTProxy_x64.exe` 程序  

后续可以运行 `SeasonRC 服务器专用启动器.exe`，也可以运行上面这个，都是一样的。  
