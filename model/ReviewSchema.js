const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    customer_name: {
        require: true,
        type: String,
    },
    review: {
        require: [true, "You have  must be describe review"],
        type: String,
        minLength: [10, "review must be 10 character"],
        maxLength: [100, "review can't be more than 100 character"]
    },
    star: {
        require: true,
        type: Number,
        min: [0, "can't be negative"],
        max: [5, "can't be upper 5"],
    }
})

const ReviewModel = mongoose.model("review",reviewSchema);
module.exports=ReviewModel;