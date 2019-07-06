# react

## 1.使用antd

    1). 下载antd包
    	$ yarn add antd
    2). 实现按需加载
    	$ yarn add react-app-rewired customize-cra babel-plugin-import
    3). 定义加载配置的js模块：config-overrides.js
    	 const { override, fixBabelImports } = require('customize-cra');
         module.exports = override(
          fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
          }),
         );
    	


