module.exports = api => {
  // 如果不写api.cache(true) ，会报一个很奇怪的错
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // 修饰器
      ['@babel/proposal-decorators', {legacy: true}],
      ['import', {libraryName: '@ant-design/react-native'}], // 与 Web 平台的区别是不需要设置 style
    ],
  }
}
