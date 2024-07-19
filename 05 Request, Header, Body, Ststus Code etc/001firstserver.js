const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("First Web Server");
  res.end("First Web Server"); //res.end to send response to http module
});

server.listen(3000, () => {
  console.log("Server is started");
});
