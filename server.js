const express = require("express");
const app = express();

app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname + "/assets/html/"});
});

app.listen(3000);