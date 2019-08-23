module.exports = {
  title: 'my-blog',
  description: 'This is a Zeit Now 2.0 example',
  plugins: [
    "vuepress-plugin-cat",
    ['@vuepress/google-analytics', {
      ga: 'UA-12345678-9'
    }]
  ],
  // 导航链接
  themeConfig: {
    // 搜索
    // search: false,
    // searchMaxSuggestions: 10,
    // 上面组件
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Config Page', link: '/config' },
      {
        text: "GitHub",
        link: "https://github.com/nnqiu/vuepress"
      },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    // 侧边栏
    // sidebar: auto,
    sidebar: [
      {
        title: '首页',
        // 永远展开
        collapsable: false,
        children: [
          '/'
        ]
      },
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/nnqiu/vuepress',
    repoLabel: '查看源码'
  }
}
