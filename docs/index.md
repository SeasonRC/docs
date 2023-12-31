---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Season RC Wiki"
  text: "您所需的，这里都有"
  tagline: 想要什么？自己进去找吧
  image:
    src: /logo.png
    alt: SeasonRC
  actions:
    - theme: brand
      text: 进入Wiki
      link: /server/info/server_info
    - theme: brand
      text: 游戏安装教程
      link: /game/install_guide
    - theme: alt
      text: 关于
      link: /about/about

features:
  - icon: 📟
    title: 查看服务器的各种信息
    details: 您可以查阅到目前正在进行的活动、查询排名记录......
  - icon: 📜
    title: 查询WMMT中的各种数据
    details: 您可以查阅到游戏包含的车辆、仪表......
  - icon: 🛠
    title: 寻求游戏的安装与问题解决
    details: 您可以在里面找到安装的教程，以及一些常见/不常见问题的解决办法
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ceb084 30%, #264879);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ceb084 50%, #04233a 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>