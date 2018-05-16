const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("assets"));
app.use(express.static("dist"));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname + "/dist"});
});

app.get("/getBlogList", (req, res) => {
    res.json([
        {
            title: "纪念项目初成",
            subscribe: "技术就是要不断的折腾，经过一番踩坑、尝试，终于将我的个人网站的前端+node服务全都搞定了，经过这一次一系列的coding和代码部署，也对服务器的东西有了一定了解，当然深入还是需要更多的知识积累，希望自己在接下来的三年时间内将这个东西当养成游戏般持续建设下去，心里也会有那么一些小小的成就感吧。"
        }
    ]);
});

app.listen(80);