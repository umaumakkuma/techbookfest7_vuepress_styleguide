module.exports = {
  base: '/vuepress/',
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/adjustment-layout.css' }],
    ['link', { rel: 'stylesheet', href: '/styles/main.css' }]
  ],
  themeConfig: {
    sidebar: [
      '/',
      '/buttons', // h1, h2が表示される項目名になります
      // 下記の記述だと h1 として表示される項目名を指定できます
      // ['/buttons', 'ボタン']
      '/typography',
      '/list'
    ]
  }
}
