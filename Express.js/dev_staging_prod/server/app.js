const path = require("path");
const morgan = require("morgan");
const config = require("./config.js");
const express = require("express");

const app = express()

// middleware
if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client/build")));

app.get('/yo', (req, res) => {
  res.send('yo')
})

app.get('/config', (req, res) => {
  res.send(config)
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

const PORT = process.env.PORT || config.LOCAL_HOST_PORT
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})