// var webpack = require('webpack');
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

function publicPath() {
    if (process.env.NODE_ENV == 'production') {
        return "././";
    } else {
        return "/";
    }
}

// vue.config.js
module.exports = {
    // publicPath:"././",
    publicPath: publicPath(),
    // 国际化配置 使用其它语言，默认情况下中文语言包依旧是被引入的
    configureWebpack: {
        // plugins: [
        //     new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
        // ]
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    devServer: {
        host: "0.0.0.0", //指定使用一个 host。默认是 localhost，这里默认值即可
        port: 8080, //指定端口
        hot: true, // 开启热更新
        https: false, // 是否开启https模式
        // proxy: { // 请求代理服务器
        //     '/springbootjlvpC': { //带上api前缀的
        //         target: 'http://localhost:8081/springbootjlvpC/', //代理目标地址
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: { // 在发出请求后将/api替换为''空值，这样不影响接口请求
        //             '^/springbootjlvpC': ''
        //         }
        //     }
        // }
    }
}