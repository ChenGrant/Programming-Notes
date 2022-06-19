const { createServer } = require("http");
const { readFileSync, writeFile } = require("fs");
const config = require("./config.js");

const createUser = (incomingData) => {
  const uid = JSON.parse(incomingData).user.uid;
  console.log(config.DATABASE);
  writeFile(
    `./${config.DATABASE}/users/${uid}.json`,
    incomingData,
    (err, data) => {
      err && console.log(err);
      data && console.log(data);
    }
  );
  writeFile(
    `./${config.DATABASE}/todos/${uid}.json`,
    JSON.stringify({ todos: [] }),
    (err, data) => {
      err && console.log(err);
      data && console.log(data);
    }
  );
};

const getTodos = (url) => {
  const uid = url.substring("/getUserTodos/".length);
  console.log(uid);
  readFileSync(`./${config.DATABASE}/todos/${uid}.json`, (err, data) => {
    err && console.log(err);
    data && console.log(data);
  });
  return uid;
};




createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET, HEAD, PUT",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  });

  console.log(req.method)
  if (req.method === "POST") {
    console.log('POST')
    let incomingData = "";
    req.on("data", (chunk) => (incomingData += chunk));
    req.on("end", () => {
      if (req.url === "/createUser") {
        res.write(incomingData);
        createUser(incomingData)
      }
      res.end();
    });
  } else if (req.method === "GET") {
    res.write("GET REQUEST RECIEVED");
    res.end();
  } else if (req.method === 'OPTIONS') {
    res.end()
  }
}).listen(process.env.PORT || 5000);
