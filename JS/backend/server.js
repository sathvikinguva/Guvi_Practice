const express = require('express');
const cors = require("cors");
const http = require("http");
const app = express();

app.use(cors());
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// });
app.use("/greet", (req, res, next) => {
    res.send({greetMsg: "Hello", token: "12345"});
});
const PORT = process.env.PORT;
app.set("PORT", 8000 || process.env.PORT);
http.createServer(app).listen(app.get("PORT"), "127.0.0.1");