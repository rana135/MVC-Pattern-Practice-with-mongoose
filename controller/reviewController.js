const ReviewModel = require("../model/ReviewSchema");

// post method:-
module.exports.createReview = async(req,res)=>{
    try{
        const result = await ReviewModel.create(req.body);
        res.status(200).json({
            status:"success",
            message:"review add successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"review add fail",
            err:error.message,
        })
        console.log(error);
    }
}
// All product get method:-
module.exports.getReview = async(req,res)=>{
    try{
        const result = await ReviewModel.find({});
        res.status(200).json({
            status:"success",
            message:"review get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"review get fail",
            err:error.message,
        })
        console.log(error);
    }
}
// Single product get method:-
module.exports.singleReview = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await ReviewModel.findOne({_id:id});
        res.status(200).json({
            status:"success",
            message:"Single review get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"Single review get fail",
            err:error.message,
        })
        console.log(error);
    }
}
// Single product Delete method:-
module.exports.deleteReview = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await ReviewModel.deleteOne({_id:id});
        res.status(200).json({
            status:"success",
            message:"Single review get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"Single review get fail",
            err:error.message,
        })
        console.log(error);
    }
}
// Single product Update method:-
module.exports.updateReview = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await ReviewModel.updateOne({_id:id},req.body,{runValidators:true});
        res.status(200).json({
            status:"success",
            message:"Single review get successfully",
            data:result,
        })
    } catch(error){
        res.status(500).json({
            status:"fail",
            message:"Single review get fail",
            err:error.message,
        })
        console.log(error);
    }
}