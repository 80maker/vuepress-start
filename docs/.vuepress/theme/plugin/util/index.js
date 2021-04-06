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
    } else if ($page.path === '/categories/') {
      return $page.pageType = 'category';
    } else if (/^\/categories\/\w/.test($page.path)) {
      return $page.pageType = 'categoryItem';
    } else if ($page.path === '/tags/') {
      return $page.pageType = 'tag';
    } else if (/^\/tags\/\w/.test($page.path)) {
      return $page.pageType = 'tagItem';
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