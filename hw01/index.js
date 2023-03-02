const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write(
    "<html><body><h1>Homework 1, hello from Denis Yurovsky</h1></body></html>"
  );
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
