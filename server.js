const express = require("express");
const app = express();

const math = require("./brain");

app.get("/", (request, response) => {
    response.send("Hello :D");
});

// suma
app.use(express.json());   

app.get("/sum/:x1/x2", (request, response) => {
    let x1 = parseInt(request.params.x1); 
    let x2 = parseInt(request.params.x2);
    let total = math.sum(x1,x2);
    response.send(total.toString);
});

app.get("/sum", (request, response) => {
    let x1 = parseInt(request.query.x1); 
    let x2 = parseInt(request.query.x2);
    let total = math.sum(x1,x2);
    response.send(total.toString);
});

//resta

app.get("/rest/:x1/x2", (request, response) => {
    let x1 = parseInt(request.params.x1); 
    let x2 = parseInt(request.params.x2);
    let total = math.rest(x1,x2);
    response.status(200).send(total.toString);
});

app.get("/rest", (request, response) => {
    let x1 = parseInt(request.query.x1); 
    let x2 = parseInt(request.query.x2);
    let total = math.rest(x1,x2);
    response.send(total.toString);
});

//multiplicacion

app.get("/multi/:x1/x2", (request, response) => {
    let x1 = parseInt(request.params.x1); 
    let x2 = parseInt(request.params.x2);
    let total = math.multi(x1,x2);
    response.status(200).send(total.toString);
});

app.get("/multi", (request, response) => {
    let x1 = parseInt(request.query.x1); 
    let x2 = parseInt(request.query.x2);
    let total = math.multi(x1,x2);
    response.send(total.toString);
});

// division

app.get("/divide/:x1/x2", (request, response) => {
    let x1 = parseInt(request.params.x1); 
    let x2 = parseInt(request.params.x2);
    if (value2 === 0) {
        response.status(400).send("Zero not is a divider number valid");
    } else {
        let total = math.divide(x1,x2);
        response.status(200).send(total.toString);
    }
    response.status(200).send(total.toString);
});

app.get("/divide", (request, response) => {
    let x1 = parseInt(request.query.x1); 
    let x2 = parseInt(request.query.x2);
    if (value2 === 0) {
        response.status(400).send("Zero not is a divider number valid");
    } else {
        let total = math.divide(x1,x2);
        response.status(200).send(total.toString);
    }
    response.status(200).send(total.toString);
});

app.listen(3000, () => console.log("Listening on port 3000"));