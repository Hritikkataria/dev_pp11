// fs => file system

const fs = require("fs");
// console.log(fs);
 // utf-8 => format for plain text!!
let f1 = fs.readFileSync("./f1.txt");

console.log(f1 + "");


fs.writeFileSync("./index.txt", "Hello World !!!");


