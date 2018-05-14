const express = require("express");
const app = express();

app.use(express.static("assets"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname + "/dist"});
});

app.listen(3000);