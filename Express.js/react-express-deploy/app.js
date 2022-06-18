const express = require("express");
const app = express();
const path = require("path");
const config =  require('./config.js');
const LOCALHOST_PORT = 5000

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/passwords", (req, res) => {
  res.json({ name: "Grant" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || LOCALHOST_PORT;
app.listen(port);
console.log(`server started on port: ${port}`);
