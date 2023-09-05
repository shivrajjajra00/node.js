// const app = require("./app");

// // console.log(app.z());

// // const fs = require("fs");

// // fs.writeFileSync("new file3.text", " shiva");

// // const fs = require("fs");
// // console.log("-=>>>", __filename);

// // const fs = require("fs");
// // console.log("-=>>>", __dirname);

// // const http = require("http");
// // http
// //   .createServer((req, resp) => {
// //     resp.write("my name is shivraj");
// //     resp.end();
// //   })
// //   .listen(4200);

// // const http = require("http");
// // http
// //   .createServer((req, res) => {
// //     res.write("hello wecode");
// //     res.end();
// //   })
// //   .listen(1100);

// // const https = require("http");

// // https
// //   .createServer((req, resp) => {
// //     resp.write("<h1>hello shiva</h1>");
// //     resp.end();
// //   })
// //   .listen(1200);

// // const http = require("http");

// // http
// //   .createServer((req, res) => {
// //     res.write("hello brother");
// //     res.end();
// //   })
// //   .listen(1300);

// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "applicationjson" });
//     resp.write(
//       JSON.stringify({ name: "shiv", age: 12, mail: "shiv@test.com" })
//     );
//     resp.end();
//   })
//   .listen(4200);

// let http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.write("hello my name is shiva");
//     resp.end();
//   })
//   .listen(4300);

// const color = require("colors");
// console.log("hello".red);
// console.log("hello".blue);

// const http = require("http");
// const apps = require("./app");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(201, { "content-type": "applicationjson" });
//     resp.write(JSON.stringify(apps));
//     resp.end();
//   })
//   .listen(5500);

// console.log(process.argv);

// const fs = require("fs");

// let input = process.argv;

// fs.writeFileSync(input[2], input[2]);

// const fs = require("fs");

// let newfile = process.argv;

// fs.writeFileSync(newfile[2], newfile[3]);

// let http = require("http");

// http
//   .createServer((eq, resp) => {
//     resp.write("hello");
//     resp.end();
//   })
//   .listen(5000);

// const fs = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid value");
// }

// const fix = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//   fix.writeFileSync(input[3], input[4]);
// } else if (input[2] === "remove") {
//   fix.unlinkSync(input[3]);
// }

// const fs = require("fs");
// const path = require("path");

// const dirpath = path.join(__dirname, "notes");
// console.log(dirpath);
// const filepath = `${dirpath}/apple.txt`;
// fs.writeFileSync(filepath, "my name is apple");

// const fs = require("fs");
// const path = require("path");

// const dirpath = path.join(__dirname, "notes");
// console.log(dirpath);
// const filepath = `${dirpath}/apple.txt`;

// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

//-----------------------------------------------------------------------
//file ko update kese krte hain

/* const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "notes");
console.log(dirpath);
const filepath = `${dirpath}/apple.txt`;

fs.appendFile(filepath, " my file are update", (err) => {
  if (!err) {
    console.log("file is update");
  }
}); */

// ----------------------------------------------------------------------------------
// file ko  rename kese dete hain

/* const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "notes");
console.log(dirpath);
const filepath = `${dirpath}/apple.txt`;

fs.rename(filepath, `${dirpath}/fruit.txt`, (error) => {
  if (!error) console.log("file is updated");
}); */

//--------------------------------------------------------------------------
//file ko unlink ya delete kaise krte hain

/* const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "notes");
console.log(dirpath);

fs.unlinkSync(`${dirpath}/fruit.txt`); */

let a = 10;
let b = 20;

setTimeout(() => {
  b = 40;
}, 1000);

console.log(a + b);
