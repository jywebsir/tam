import pages from './config/pages'

export default {
  entryPagePath: `pages/${pages.map.entry}`,
  pages: pages.list,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTitleText: 'Tam Mobile',
    navigationBarTextStyle: 'black'
  }
}
