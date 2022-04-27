const http = require("http");

const Koa = require("koa");
const app = new Koa();


const httpServer = http.Server(app.callback());
httpServer.listen(7005);

const socket = require("./socket/index");
socket.S(httpServer);

const static = require("koa-static");
app.use(static(__dirname));

// let date = new Date().toLocaleDateString();
// date = date.replace("/", "-").replace("/", "-");
// fs.mkdir(path.join(__dirname, date), (err) => {
//     if (err) {
//         return
//     }
//     console.log('创建成功!');
// });

// app.listen(9527);
