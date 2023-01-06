const express = require("express");
const mongoose = require("mongoose")
const customerModel = require("../models/customer")
const orderModel = require("../models/order")
const router = express.Router();

var bodyParser = require('body-parser');
const { baseModelName } = require("../models/product");
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


//POST

router.post('/customer' , async (req , res)=> {
    try{

        let customer = await customerModel.create(req.body);
        res.json({
            status : "Success",
            customer
        })
    }
    catch (err){
        res.status(400).json({
            status : "Failed",
            message : err.message
        })
    }
})


// GET

router.get('/customer/customerID' , async (req , res)=> {
    try{
        let customerID = await customerModel.findOne(req.body);
        res.json({
            status : "Success",
            customerID
        })
    }
    catch (err){
        res.status(400).json({
            status : "Failed",
            message : err.message
        })
    }
})


// PUT

router.put('/email/costOfAnOrder' , async (req , res)=> {
    try{
        let customerBalance = await customerModel.updateOne({email : req.body.email} , {$set :{balance: req.body.balance}});

        res.json({
            status : "Success",
            customerBalance
        })
    }
    catch (err){
        res.status(400).json({
            status : "Failed",
            message : err.message
        })
    }
})

module.exports = router;