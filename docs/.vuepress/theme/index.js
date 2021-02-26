// .vuepress/theme/index.js
module.exports = (themeConfig, ctx) => {
  return {
    // ...
    plugins: [
      [
        '@vuepress/blog',
        {
          directories: [
            {
              id: 'post',
              dirname: '_post',
              path: '/'
            }
          ]
        }
      ]
    ]
  }
}