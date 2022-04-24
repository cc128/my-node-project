let userList = []; //用户列表
let onLineUserIds = []; // 在线用户id

const S = server => {
    const { Server } = require("socket.io");
    const io = new Server(server);
    io.on("connection", socket => {
        // 返回连接着id
        socket.emit("socketId", {
            socketId: socket.id,
            userList: userList
        });
        socket.on("linkUser", data => {
            console.log(data, 33333)
        })
        // onLineUserIdsFn(socket.adapter.rooms); // 在线用户id --方法
    })
}
exports.S = S;
// 在线用户id --方法
let onLineUserIdsFn = (rooms) => {
    let u = rooms.keys();
    onLineUserIds = [];
    for (const key of u) {
        onLineUserIds.push(key)
    }
    console.log(onLineUserIds, "在线用户id")
}