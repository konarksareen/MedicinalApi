require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
var fs = require ('fs');
var csv = require ('csv-parser');
const connection = require("./common/connection");
const responses = require("./common/responses");
app.use(express.json());



app.use(responses());
const v1Routes = require("./v1/routes");
require('./v1/controllers/index');


app.use("/api/v1", v1Routes);
const httpServer = server.listen(process.env.PORT, async () => {
    console.log(`Environment:`, process.env.NODE_ENV);
    console.log(`Running on:`, process.env.PORT);

    connection.mongodb();
});


// var input = [];
// fs.createReadStream('Product list - Sheet1 copy.csv').pipe(csv({}))
// .on('data', (data) => {
// input.push(data)
// }).on('end', ()=> {
//     console.log(input);
// })

