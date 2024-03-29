const Router = require("koa-router");
const cors = require('koa2-cors');
const router = new Router({
    prefix: "/api"
});
// const bodyParser = require("koa-bodyparser");
const fs = require("fs");

const chatAPI = require("./chatAPI.js");
chatAPI(router); //聊天室api

const R = (app) => {
    app.use(
        cors({
            origin: (ctx) => { //设置允许来自指定域名请求
                // if (ctx.url === '/test') {
                //     return '*'; // 允许来自所有域名请求
                // }
                return 'http://192.168.1.6:8080'; //只允许http://localhost:8080这个域名的请求
            },
            maxAge: 5, //指定本次预检请求的有效期，单位为秒。
            credentials: true, //是否允许发送Cookie
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
            allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
        }))
        //     .use(bodyParser())
        .use(router.routes())
        .use(router.allowedMethods());
}
module.exports = R;