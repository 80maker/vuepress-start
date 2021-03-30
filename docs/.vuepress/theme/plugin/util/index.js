const { path } = require('@vuepress/shared-utils')

module.exports = {
  name: 'custom-svg-sprite',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: ['CustomSvgSprite'],
  extendPageData($page) {
    if ($page.path === '/archives/') {
      return $page.pageType = 'archive';
    }
  },
  additionalPages() {
    const pages = [{
      path: '/archives/',
      frontmatter: {
        title: '文档归档'
      }
    }];
    return pages;
  }
}