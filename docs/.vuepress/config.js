module.exports = {
  title: 'hello vuepress',
  description: '我的第一个vupress站点',
  port: 8088,
  theme: require('./theme/index'),
  themeConfig: {
    copyright: `© ${new Date().getFullYear()} ❤️ <a target="_blank" rel="external nofollow noopener" href="https://17ria.com/">Neil Chen</a>`
  }
}