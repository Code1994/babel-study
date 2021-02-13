// .babelrc 依赖于当前项目只有一个package.json文件 而且该文件必须与.babelrc同一目录
// 而babel.config.js是项目范围级别的配置 不受上述限制
// 同一目录下.babelrc.json文件的优先级高于babel.config.json文件
// 没有安装core-js@2 直接执行 会找不到包。另外要注意core-js@2与core-js@3是不能共存的
module.exports = function(api) {
  api.cache(true)
  const env = process.env.NODE_ENV
  console.log(env)
  // babel-plugin-transform-node-env-inline的简写形式
  let plugins = ["transform-node-env-inline"]
  let presets = []
  switch (env) {
    // polyfill 搭配 preset-env 使用
    case 'polyfill':
      plugins = plugins.concat([
      ])
      presets = presets.concat([
        [
          "@babel/preset-env", {
            // 设置为 false 会引入polyfill全量包
            useBuiltIns: 'entry',
            // 设置为 false, 保留 ES module, 方便 webpack 做 tree shaking
            // modules: false,
            targets: '> 1%',
            // corejs: 3
          }
        ]
      ])
      break

    case 'runtime':
      plugins = plugins.concat([
        [
          "@babel/plugin-transform-runtime"
        ]
      ])
      presets = presets.concat([
        [
          "@babel/preset-env"
        ]
      ])
      break

    case 'core2':
      plugins = plugins.concat([
        [
          "@babel/plugin-transform-runtime", {
            corejs: 2
          }
        ]
      ])
      presets = presets.concat([
        [
          "@babel/preset-env"
        ]
      ])
      break

    case 'core3':
      plugins = plugins.concat([
        [
          "@babel/plugin-transform-runtime", {
            corejs: 3,
            useESModules: true
          }
        ]
      ])
      presets = presets.concat([
        [
          "@babel/preset-env", {
            modules: false
          }
        ]
      ])
      break

    default:
      plugins = []
      presets = []
  }

  return {
    plugins,
    presets,
    babelrcRoots: ['.', './src/*']
  }
}


