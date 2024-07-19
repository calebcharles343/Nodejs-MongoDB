let fs = require("fs"); // module for reading files

// let data = fs.readFileSync("002 callbacks in node-js.txt");

// console.log(data.toString());

fs.readFile("002 callbacks in node-js.txt", (error, data) => {
  if (error) return console.log(error);
  console.log(data.toString());
});

console.log("Program Ended");
