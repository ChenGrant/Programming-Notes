const { createServer } = require("http");

const server = createServer((req, res) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET, HEAD, PUT",
    "Access-Control-Max-Age": 2592000, // 30 days
    'Access-Control-Allow-Credentials': 'true',
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  };
  let contentType;
  let data = "";

  if (req.method === "POST") {
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      res.writeHead(200, headers);
      res.write(data)
      console.log(data)
      res.end();
    });
  } else if (req.method === 'GET') {
    switch (req.url) {
      case "/html":
        contentType = "text/html";
        data = "<h1>This is HTML</h1>";
        break;

      case "/json":
        contentType = "application/json";
        data = JSON.stringify({
          name: "grant",
          age: 19,
        });
        break;
      default:
        contentType = "text/plain";
        data = "this is some text";
    }

    //headers = { ...headers, "Content-Type": contentType };
    res.writeHead(200, headers);
    res.write(data);
    res.end();
  }
});

server.listen(process.env.PORT || 3000);
