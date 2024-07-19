const express = require("express");
//Note: npm install express
const app = express();

app.use(express.json()); //to specify to express it is json

app.get("/:name", (req, res) => {
  //console.log(req.params.name); // to get from url
  console.log(req.query);

  res.status(200).json({
    message: "All about request object.",
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server is started.");
});
