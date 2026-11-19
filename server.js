// Your server code goes here. Host your server on localhost:3000

// console.log("Node.js is running!");

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile("index.html", function (error, data) {
            if (error) {
                res.writeHead(500);
                res.end("Error loading file");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end("File not found");
    }
});


server.listen(3000, function () {
    console.log("Server is running http://localhost:3000");
});