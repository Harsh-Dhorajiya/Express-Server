const express = require("express");
const http = require("http");
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader',leaderRouter);

app.use(express.static(__dirname+ '/public'));

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Contet-type', 'text/html');
    res.end('<html><body><h1>Hello Express</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,() => {
    console.log(`Server is running at ${hostname}:${port}`);

});