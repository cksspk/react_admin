# react

## 1.使用antd

    1). 下载antd包
    	$ yarn add antd
    2). 实现按需加载
    	$ yarn add react-app-rewired customize-cra babel-plugin-import
    3). 定义加载配置的js模块：添加文件：config-overrides.js
    	 const { override, fixBabelImports } = require('customize-cra');
         module.exports = override(
          fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
          }),
         );
    4). 自定义主题
    	下载：
    		$ yarn add less less-loader
    	修改 config-overrides.js
    	const { override, fixBabelImports, addLessLoader } = require('customize-cra');
         module.exports = override(
             //针对antd实现按需打包，根据import来打包
            fixBabelImports('import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
            // style: 'css',//自动打包相关样式
                style: true,
            }),
            addLessLoader({
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#1DA57A' },
            }),
         );
    		


