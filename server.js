const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4020;

app.use(express.static(__dirname + "\\resources"));

app.listen(PORT, () => {
    console.log("server started. (PORT: " + PORT + ")");
});

app.get(["/", "/main"], (request, response) => {
    response.sendFile(__dirname + "\\index.html");
});