const filePath = require("path").join(__dirname, "input.txt");
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log('input',input);
const mapp = input.map((item) => +item);
