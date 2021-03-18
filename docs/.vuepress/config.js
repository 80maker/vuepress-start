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
    social: [
      {
        type: 'email',
        link: 'cmgddd@163.com'
      },
      {
        type: 'github',
        link: '80maker'
      },
      {
        type: 'qq',
        link: '//qm.qq.com/cgi-bin/qm/qr?k=5qf0UGmRJWavJGOgo5nemY2BezuGKa-V&jump_from=webapi'
      },
      {
        type: 'feed',
        link: '/rss.xml'
      }
    ],
    copyright: `© ${new Date().getFullYear()} ❤️ <a target="_blank" rel="external nofollow noopener" href="https://17ria.com/">Neil Chen</a>`
  },
  plugins: [
    require('./theme/plugin/util')
  ]
}