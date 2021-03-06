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
          ],
          globalPagination: {
            lengthPerPage: 5,
          },
          frontmatters: [
            {
              id: "tag",
              keys: ['tag', 'tags'],
              path: '/tags/',
              frontmatter: { title: 'Tag' },
              pagination: {
                lengthPerPage: 2,
                prevText: '上一页',
                nextText: '下一页'
              }
            },
            {
              id: "category",
              keys: ['category', 'categories'],
              path: '/categories/',
              frontmatter: { title: 'Category' },
              pagination: {
                lengthPerPage: 2,
                prevText: '上一页',
                nextText: '下一页'
              }
            }
          ]
        }
      ]
    ]
  }
}