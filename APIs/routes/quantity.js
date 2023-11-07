const express = require('express');
const router = express.Router();

const quantitycontroller = require("../controllers/quantity")


router.post("/quantity", quantitycontroller.createQuantity)
router.get("/products/:productId/quantity", quantitycontroller.getQuantityByProductId)
module.exports=router