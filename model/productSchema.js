const mongoose = require("mongoose");

const productSchema= mongoose.Schema({
    name:{
        require:true,
        type:String,
    },
    description:{
        require:[true,"You have  must be describe your product"],
        type:String,
        minLength:[10,"min length must be 10 character"],
        maxLength:[100,"max length can't be more than 100 character"]
    },
    price:{
        require:true,
        type:Number,
        min:[0,"can't be negative"],
        max:[1000,"can't be upper 1000"],
    }

})
const ProductModel = mongoose.model("productDb",productSchema);
module.exports=ProductModel;