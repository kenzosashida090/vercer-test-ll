const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Me gustas Gera"));

app.listen(3002, () => console.log("Server ready on port 3001."));

module.exports = app;