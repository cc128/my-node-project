const fs = require("fs");

let D = {
    code: "ok",
    data: [],
    msg: "查询成功"
}
const chatAPI = (router) => {
    // 聊天记录列表
    router.get("/chatList", async (ctx) => {
        // console.log(ctx, 222)
        ctx.response.status = 200;
        let T = new Date().toLocaleDateString();
        T = T.replace("/", "-").replace("/", "-");
        try {
            let data = fs.readFileSync(`${T}.txt`, 'utf-8');
            D.data = JSON.parse(`[${data}]`);
            ctx.body = D;
        } catch {
            ctx.body = D;
        }
    })
}
module.exports = chatAPI;