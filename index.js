const express = require("express");
const http = require("http");
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;
const bodyParser = require("body-parser");

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/dishes',(req,res,next) => {
    res.end('You will get your dishes !!!');
});

app.post('/dishes',(req,res,next) => {
    res.end('Will add the dishes: ' + req.body.name + 'with details' + req.body.description);
});

app.put('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on /dishes");
});

app.delete('/dishes',(req,res,next) => {
    res.end("Deleting all the /dishes");
});


app.get('/dishes/:dishID',(req,res,next) => {
    res.end('You will get' + req.params.dishID + 'to you !!');
});

app.post('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on /dishes");
});

app.put('/dishes/:dishID',(req,res,next) => {
    req.write("Updating the dish:" +req.params.dishID )
    res.end('Will add the dishes: ' + req.body.name + 'with details' + req.body.description);
});

app.delete('/dishes/:dishID',(req,res,next) => {
    res.end("Deleting dish"+req.params.dishID);
});

app.use(express.static(__dirname+ '/public'));

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Contet-type', 'text/html');
    res.end('<html><body><h1>Hello Express</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,() => {
    console.log(`Server is running at ${hostname}:${port}`);

})