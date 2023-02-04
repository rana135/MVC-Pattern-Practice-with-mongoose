const express = require("express");
const router = express.Router();
const products = require("../controller/productController")

router.route('/rana')
.get(products.getProduct)
.post(products.createProduct)

router.route('/anik/:id')
.get(products.getSingleProduct)
.delete(products.deleteProduct)
.patch(products.updateProduct)

module.exports=router;