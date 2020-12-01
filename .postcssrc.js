/*
 * @Author: duchengdong
 * @Date: 2020-08-28 16:00:57
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 16:01:24
 * @Description: 
 */
module.exports = {
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 100,
            minPixelValue: 2,
            propWhiteList: []
        })
    ]
}