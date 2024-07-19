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
