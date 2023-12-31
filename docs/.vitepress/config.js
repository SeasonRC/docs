export default {
    lang: 'zh-CN',
    title: 'Season RC Wiki',
    description: 'A WMMT Wiki',
  
    // Theme related configurations.
    themeConfig: {

      head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
      ],

      logo: { src: '/logo.png', width: 24, height: 24 },
      lastUpdated: true,

      // 侧边栏
      sidebar: {
        '/server/': [
          {
            text: '服务器',
            collapsed: false,
            items: [
              { text: '服务器公告', link: '/server/info/server_info' },
              { text: '更新历史', link: '/server/info/update_history' }
            ]
          },
          {
            text: '在线活动信息',
            collapsed: false,
            items: [
              { text: '最新活动', link: '/server/online_events/latest_event' },
              {
                text: '以往在线活动',
                collapsed: true,
                items: [
                  { text: '#4 OCM 18st 福冈区域', link:'/server/online_events/old_event/4th_OCM' },
                  { text: '#3 OCM 13st 新环线区域', link: '/server/online_events/old_event/3rd_OCM' },
                  { text: '远古活动集', link: '/server/online_events/old_event/ancient_event' }
                ]
              }
            ]
          },
          {
            text: '排行榜',
            collapsed: false,
            items: [
              { text: 'TimeAttack 排名', link: '/server/rank/timeattack_rank' },
              { text: 'OCM 排名', link: '/server/rank/ocm_rank' },
              { text: 'VSORG 排名', link: '/server/rank/vsorg_rank' }
            ]
          },
          {
            text: '车辆数据',
            collapsed: false,
            items: [
              { text: '服务器改车站', link: '/server/car_data/car_editor' }
            ]
          }
        ],

        '/game/': [
          {
            text: '游戏',
            collapsed: false,
            items: [
              { text: '游戏安装教程', link: '/game/install_guide' },
              { text: '常见问题修复', link: '/game/problem_fix' },
              { text: '游戏安装教程（暂未启用）', link: '/game/install_guide_new' }
            ]
          }
        ],

        '/data/': [
          {
            text: '数据',
            collapsed: false,
            items: [
              { text: '比赛用仪表', link: '/data/normal_data/meters' },
              { text: '等级', link: '/data/normal_data/levels' }
            ]
          },
          {
            text: '车辆',
            collapsed: false,
            items: [
              { text: '车辆一览', link: '/data/car_data/cars' },
              { text: '隐藏车大全', link: '/data/car_data/hide_cars' }
            ]
          }
        ]
      },

      // 导航栏
      nav: [
        { text: '主页', link: '/' },
        {
          text: '服务器',
          items: [
            {
              items: [
                { text: '服务器公告', link: '/server/info/server_info' },
                { text: '在线活动信息', link: '/server/info/online_event' },
                { text: '更新历史', link: '/server/info/update_history' }
              ]
            },
            {
              items: [
                { text: '最新活动', link: '/server/online_events/latest_event' },
                { text: '以往在线活动', link: '/server/online_events/old_event/4th_OCM' }
              ]
            },
            {
              items: [
                { text: 'TimeAttack 排名', link: '/server/rank/timeattack_rank' },
                { text: 'OCM 排名', link: '/server/rank/ocm_rank' },
                { text: 'VSORG 排名', link: '/server/rank/vsorg_rank' }
              ]
            },
            {
              items: [
                { text: '服务器改车站', link: '/server/car_data/car_editor' }
              ]
            }
          ]
        },
        {
          text: '游戏',
          items: [
            {
              items: [
                { text: '游戏安装教程', link: '/game/install_guide' },
                { text: '常见问题修复', link: '/game/problem_fix' }
              ]
            },
            {
              items: [
                { text: '游戏安装教程（暂未启用）', link: '/game/install_guide_new' }
              ]
            }
          ]
        },
        {
          text: '数据',
          items: [
            {
              items: [
                { text: '比赛用仪表', link: '/data/normal_data/meters' },
                { text: '等级', link: '/data/normal_data/levels' }
              ]
            },
            {
              items :[
                { text: '车辆一览', link: '/data/car_data/cars' },
                { text: '隐藏车大全', link: '/data/car_data/hide_cars' }
              ]
            }
          ]
        },
        { text: '关于', link: '/about/about' }
      ],

      // 本地化搜索（已对接flexSearch，但有一点点Bug）
      search: {
        provider: 'local'
      },

      // 零散的汉化
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '浅色/深色模式',
      sidebarMenuLabel: '菜单',

      // 编辑此页（文章末尾显示）
      editLink: {
        pattern: "https://github.com/SeasonRC/docs/tree/main/docs/:path",
        text: "在 GitHub 上编辑此页",
      },

      // 最后更新
      lastUpdatedText: "最后一次更新于",

      // 右侧导览
      outlineTitle: "在此页面上的内容",

      // 页尾文章切换
      docFooter: {
        next: "下一篇",
        prev: "上一篇",
      },

      // 社交链接（右上角）
      socialLinks: [
        { icon: "github", link: "https://github.com/SeasonRC" }
      ],

      // 页脚
      footer: {
        copyright: "Copyright © 2023-Present Season Racing Club",
        message: "由 VitePress 和 Flex Search 强力驱动",
      },
    }
  }
