const express = require("express");
const router = express.Router();
const review = require("../controller/reviewController");

// route:-
router.route('/')
.get(review.getReview)
.post(review.createReview)

router.route('/:id')
.get(review.singleReview)
.delete(review.deleteReview)
.patch(review.updateReview)


// router.post('/',review.createReview);
module.exports = router;
