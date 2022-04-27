const fs = require("fs");
const file = require("../setFile/index")

const chatRoom = (socket) => {
    socket.on("sendMsg", data => {
        file.setFile(data)
    })
}
exports.chatRoom = chatRoom;