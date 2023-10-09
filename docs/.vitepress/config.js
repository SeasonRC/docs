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

      // 搜索功能
      algolia: {
        appId: "A0N9LSOX9R",
        apiKey: "26500109ada0a476d8c47f08d31e08e4",
        indexName: "SRC-Search",
        locales: {
          root: {
            label: "简体中文",
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
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
        message: "由 VitePress 和 Algolia DocSearch 强力驱动",
      },
    }
  }