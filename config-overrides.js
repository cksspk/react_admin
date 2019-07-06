const { override, fixBabelImports, addLessLoader } = require('customize-cra');

 module.exports = override(
     //针对antd实现按需打包，根据import来打包
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
    // style: 'css',//自动打包相关样式
        style: true,
    }),
    //使用less-load对二源码中的less的变量进行重新指定
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
 );