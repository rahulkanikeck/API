const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const customerSchema = new Schema({
    customer_id: {type: String , required:true},
    customer_name: {type: String , required: true},
    email: {type:String , unique: true},
    balance:{type: Number , required: true}
})

const customerModel = mongoose.model("customers" , customerSchema);

module.exports = customerModel