// const Router = require("koa-router");
// const router = new Router({
//     // prefix: "/user"
// });
// // chattingRecords
// router.get("/text", async ctx => {
//     let a = { a: 1 }
//     ctx.status = 200;
//     // ctx.body = a;
//     ctx.response.message = JSON.stringify(a);
//     // ctx.response.status = 200;
//     // console.log("接口")
//     // let tiem = new Date().toLocaleDateString();
//     // tiem = tiem.replace("/", "-").replace("/", "-");
//     // fs.readFile(`${tiem}.json`, 'utf-8', function (err, data) {
//     //     if (err) {
//     //         console.log(err);
//     //     } else {
//     //         console.log(JSON.parse(data), 111111111);
//     //     }
//     // })
// })
// module.exports = router.routes();

const Router = require("koa-router");
// { prefix: "/todo" }
const router = new Router();

const Todos = [
    {
        id: 1,
        name: "任务1",
    },
];
router.post("/add", async (ctx) => {
    const { id, name } = ctx.request.body;
    Todos.push(id, name);
    ctx.body = { code: "ok", msg: "添加成功" };
});

router.put("/edit", async (ctx) => {
    const { id, name } = ctx.request.body;
    Todos.forEach(item => {
        if (item.id == id) {
            item.name = name
        }
    })
    ctx.body = { code: "ok", msg: "修改成功" };
});

router.post("/remove/:id", async (ctx) => {
    const { id } = ctx.params;
    Todos = Todos.filter((item) => item.id != id);
    ctx.body = { code: "ok", msg: "删除成功" };
});

router.get("/list", async (ctx) => {
    ctx.body = Todos
})

module.exports = router;
