
const productSchema = require("../model/productSchema");

// post method:-
module.exports.createProduct = async(req,res)=>{
    try{
        const result = await productSchema.create(req.body);
        res.status(200).json({
            status:"success",
            message:"product post successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"product post Fail",
            err:error.message,
        })
        console.log(error);
    }
}

// All product get:-
module.exports.getProduct = async(req,res)=>{
    try{
        const result = await productSchema.find({}).select({__v:0,price:0});
        res.status(200).json({
            status:"success",
            message:"product get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"product get Fail",
            err:error.message,
        })
        console.log(error);
    }
}

// Get Single product:-
module.exports.getSingleProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await productSchema.findOne({_id:id});
        res.status(200).json({
            status:"success",
            message:"Single product get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"Single product get Fail",
            err:error.message,
        })
        console.log(error);
    }
}

// product delate:-
module.exports.deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await productSchema.deleteOne({_id:id});
        res.status(200).json({
            status:"success",
            message:"product delete successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"product delete Fail",
            err:error.message,
        })
        console.log(error);
    }
}

// product Update:-
module.exports.updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await productSchema.updateOne({_id:id},req.body,{runValidators:true});
        res.status(200).json({
            status:"success",
            message:"product update successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"product update Fail",
            err:error.message,
        })
        console.log(error);
    }
}