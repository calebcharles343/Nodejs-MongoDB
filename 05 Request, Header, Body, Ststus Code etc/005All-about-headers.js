/*
In Node.js, headers are part of the HTTP request and response structure.
 They represent metadata associated with the request or response, such as 
 content type, content length, authorization, and more. Headers are used to
pass additional information between the client and server to ensure the 
correct transfer of data. For example, in a response, the 'Content-Type' 
header tells the client what the type of returned content is 
(like 'application/json' for JSON data), and in a request, 
the 'Authorization' header might contain credentials for authentication.
*/

const http = require("http");

const data = [
  {
    id: 1,
    name: "Charles",
  },
  {
    id: 2,
    name: "Chris",
  },
  {
    id: 3,
    name: "Roi",
  },
  {
    id: 4,
    name: "David",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json"); // set header
  res.setHeader("Content-Language", "en-US");
  res.setHeader("Date", new Date(Date.now()));
  res.setHeader("X-Powerd-By", "Node.js");

  res.end(
    JSON.stringify({
      success: true,
      results: data.length,
      data: data,
    })
  );
});

server.listen(3000, () => {
  console.log("server is started");
});
