const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    customer_id: {type: String , required:true},
    Product_id: {type: String , required: true},
    Product_name: {type:String , required: true},
    quantity:{type: Number , required: true}
})

const orderModel = mongoose.model("orders" , orderSchema);

module.exports = orderModel