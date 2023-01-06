const express = require('express');
const app = express();

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/api_web_tech_assignment")
mongoose.set('strictQuery', false);

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const productRoute = require('./routes/product');
const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');

app.use('/' , productRoute);
app.use('/' , customerRoute);
app.use('/' , orderRoute)

app.get("*", (req, res) => {
    res.status(404).send("API not found")
})



app.listen(3000 , ()=> {
    console.log("The server is up at port 3000");
})