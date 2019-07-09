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



## 2.引入路由

>js结尾不一定是组件，jsx结尾是组件,一般src下面App和index使用js，其他使用jsx
```
1). 下载路由包
	$ yarn add react-router-dom
2). 组件导入
	在App.js下导入
	import {BrowserRouter,Route} from 'react-router-dom'
	<BrowserRouter>
        <Switch>{/*只匹配其中一个,如果有匹配/组件的Route需要放在最后，不然所有路径返回/组件*/}
        	{/*主界面使用 / 路径*/}
            <Route path='/login' component = {Login}></Route>
            <Route path = '/' component={Admin}></Route>
         </Switch>
    </BrowserRouter>
```

## ceshi 

