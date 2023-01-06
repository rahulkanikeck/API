const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    Product_id: {type: String , required:true},
    Product_type: {type: String , required: true},
    Product_name: {type:String , required: true},
    Product_price:{type: Number , required: true},
    Available_quantity: {type: Number , required: true}
})

const productModel = mongoose.model("products" , productSchema);

module.exports = productModel