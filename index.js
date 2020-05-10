const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Contet-type', 'text/html');
    res.end('<html><body><h1>Hello Express</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,() => {
    console.log(`Server is running at ${hostname}:${port}`);

})