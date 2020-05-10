const express = require('express');
const bosyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bosyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('You will get your dishes !!!');
})
.post((req,res,next) => {
    res.end('Will add the dishes: ' + req.body.name + 'with details' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("This method is not supported on /dishes");
})
.delete((req,res,next) => {
    res.end("Deleting all the /dishes");
});

module.exports = dishRouter;