const fs = require("fs");
const path = require('path');

const setFile = (data) => {
    let tiem = new Date().toLocaleDateString();
    tiem = tiem.replace("/", "-").replace("/", "-");
    data.sendTime = new Date().toLocaleString();
    fs.exists(`${tiem}.txt`, (isTrue) => {
        if (isTrue) {
            fs.appendFile(`${tiem}.txt`, "," + JSON.stringify(data));
        } else {
            fs.writeFile(`${tiem}.txt`, JSON.stringify(data), 'utf8')
        }
    })

}
exports.setFile = setFile;
