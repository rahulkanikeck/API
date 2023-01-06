const express = require("express");
const mongoose = require("mongoose")
const productModel = require("../models/product")
const router = express.Router();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())




// POST 

router.post('/product' , async (req , res)=> {
    try{
        let product = await productModel.create(req.body);
        res.json({
            status : "Success",
            product
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

router.get('/product/productID' , async (req , res)=> {
    try{
        let productID = await productModel.findOne(req.body);
        res.json({
            status : "Success",
            productID
        })
    }
    catch (err){
        res.status(400).json({
            status : "Failed",
            message : err.message
        })
    }
})


router.get('/product/productType' , async (req , res)=> {
    try{
        let productType = await productModel.find(req.body);
        res.json({
            status : "Success",
            productType
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
router.put('/productName/availableQuantity' , async (req , res)=> {
    try{
        const updateQnty = await productModel.updateOne({Product_name: req.body.Product_name} , {$set :{Available_quantity: req.body.Available_quantity}});
        res.json({
            status : "Success",
            updateQnty
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