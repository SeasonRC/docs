export default {
    lang: 'zh-CN',
    title: 'Season RC Wiki',
    description: 'A WMMT Wiki',
  
    // Theme related configurations.
    themeConfig: {
      logo: '/imgs/logo.png',
      lastUpdated: true,

      // 导航栏（顶部）
      nav: [
        { text: '主页', link: '/' },
        { 
          text: '服务器',
          items: [
            { text: '服务器公告', link: '/server/server_info' },
            { text: '在线活动信息', link: '/server/online_event' }
          ]
        },
        {
          text: '数据',
          items: [
            { text: '比赛用仪表', link: '/data/meters' },
            { text: '等级', link: '/data/levels' }
          ]
        }
      ],

      // 侧边栏（左侧）
      sidebar: [
        {
          text: '服务器',
          items: [
            { text: '服务器公告', link: '/server/server_info' },
            { text: '在线活动信息', link: '/server/online_event' }
          ]
        }
      ],

      // 本地化搜索（已对接flexSearch，但有一点点Bug）
      search: {
        provider: 'local'
      },

      // 编辑此页（文章末尾显示）
      editLink: {
        pattern: "https://github.com/https://github.com/SeasonRC/docs/edit/main/docs/:path",
        text: "编辑此页",
      },

      // 最后更新
      lastUpdatedText: "最后一次更新",

      // 右侧导览
      outlineTitle: "在此页面上的内容",

      // 页尾文章切换
      docFooter: {
        next: "下一篇",
        prev: "上一篇",
      },

      // 社交链接（右上角）
      socialLinks: [
        { icon: "github", link: "https://github.com/Zj031210" }
      ],

      // 页脚
      footer: {
        copyright: "Copyright © 2023-present Season Racing Club",
        message: "由 VitePress 和 Flex Search 强力驱动",
      },
    }
  }