const fs = require("fs");
const file = require("../setFile/index")

const chatRoom = (socket) => {
    // 接收发送的消息
    socket.on("chatMsg", data => {
        console.log("收到消息")
        file.setFile(data);
        // 发送接收的消息
        socket.broadcast.emit("chatMsg", data);
    })

}
exports.chatRoom = chatRoom;