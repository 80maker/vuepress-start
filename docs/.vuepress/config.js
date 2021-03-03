module.exports = {
  title: 'hello vuepress',
  description: '我的第一个vupress站点',
  port: 8088,
  theme: require('./theme/index'),
  themeConfig: {
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🏠 内部链接', link: '/2021/03/02/one/' },
      { text: '🔥 外部链接(External)', link: 'https://google.com' },
    ],
    copyright: `© ${new Date().getFullYear()} ❤️ <a target="_blank" rel="external nofollow noopener" href="https://17ria.com/">Neil Chen</a>`
  }
}