const http = require("http");

const Koa = require("koa");
const app = new Koa();

const httpServer = http.Server(app.callback());
httpServer.listen(7005);

const S = require("./socket/index");
S(httpServer);

const R = require("./router");
R(app)

const static = require("koa-static");
app.use(static(__dirname))

// app.listen(9527);
