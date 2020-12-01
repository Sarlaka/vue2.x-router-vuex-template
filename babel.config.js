/*
 * @Author: duchengdong
 * @Date: 2020-08-28 12:03:52
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 15:58:23
 * @Description: 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'mand-mobile',
        libraryDirectory: 'lib'
      }
    ]
  ]
}
