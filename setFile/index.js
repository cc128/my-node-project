const fs = require("fs");
const path = require('path');

const setFile = (data) => {
    let tiem = new Date().toLocaleDateString();
    tiem = tiem.replace("/", "-").replace("/", "-");
    data.sendTime = new Date().toLocaleString();
    fs.exists(`${tiem}.txt`, (isTrue) => {
        if (isTrue) {
            console.log(333333333333)
            // fs.readFile(`${tiem}.json`, 'utf-8', function (err, data) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(JSON.parse(data));
            //     }
            // })
            fs.appendFile(`${tiem}.txt`, "," + JSON.stringify(data), (err) => {
                if (err) {
                    console.log("写入失败")
                } else {
                    console.log("写入成功")
                }
            });
        } else {
            fs.writeFile(`${tiem}.txt`, JSON.stringify(data), 'utf8', (error) => {
                if (error) {
                    console.log(error);
                    return false;
                }
                console.log('写入成功');
            })
        }
    })




}
exports.setFile = setFile;
