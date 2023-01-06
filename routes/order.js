const express = require("express");
const mongoose = require("mongoose")
const orderModel = require("../models/order")
const productModel = require("../models/product")
const customerModel = require("../models/customer")
const router = express.Router();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


// POST 

router.post('/orders' , async (req , res)=> {
    const {customer_id , Product_id , Product_name , quantity} = req.body;

    let product = await productModel.findOne({Product_name : Product_name})
    let customerID = await customerModel.findOne({customer_id : customer_id})

    let price = product.Product_price;
    let totalCost = parseInt(quantity) * parseInt(price)

    if(product.Available_quantity < quantity){
        res.status(400).json({
            status : "Failed",
            message : "ITEM IS OUT OF STOCK"
        })
    }
    else if (customerID.balance < totalCost){
        res.status(400).json({
            status : "Failed",
            message : "INSUFFICIENT FUNDS"
        })
    }
    else{
        try{
            //let orders = await orderModel.create(req.body);
            let orders = await orderModel.create({
                customer_id : customer_id,
                Product_id : Product_id,
                Product_name : Product_name,
                quantity : quantity
            });
            res.json({
                status : "Success",
                orders
            })
        }
        catch (err){
            res.status(400).json({
                status : "Failed",
                message : err.message
            })
        }
    }
    
})


// GET

router.get('/orders/orderID' , async (req , res)=> {
    try{
        let orderID = await orderModel.findOne(req.body);
        res.json({
            status : "Success",
            orderID
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