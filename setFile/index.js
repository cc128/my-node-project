const fs = require("fs");
const path = require('path');

const setFile = (data) => {
    let time = new Date().toLocaleDateString();
    time = time.replace("/", "-").replace("/", "-");
    data.sendTime = new Date().toLocaleString();
    fs.access(`${time}.txt`, (err) => {
        if (err) {
            console.log("创建文件")
            fs.writeFile(`${time}.txt`, JSON.stringify(data), 'utf8', (err) => {
                if (err) return;
                // console.log("文件添加成功")
            })
        } else {
            console.log("续写文件")
            fs.appendFile(`${time}.txt`, "," + JSON.stringify(data), (err) => { });
            // console.log(time, data, fs.writeFile);
        }
    })

}
exports.setFile = setFile;
