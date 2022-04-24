// const fs = require("fs");
const http = require("http");

const Koa = require("koa");
const app = new Koa();


const httpServer = http.Server(app.callback());
httpServer.listen(7005);

const socket = require("./socket/index");
socket.S(httpServer);

const static = require("koa-static");
app.use(static(__dirname));

// app.listen(9527);
