const User=require("../controller/User");
const Category = require("../controller/Category")
const router=require("express").Router()

router.post("/createUser",User.createUser)
router.put("/updateUser/:id",User.updateUser)
router.post("/addProduct/:productId/:userId",User.addProduct)
router.delete("/deleteProductFromShopping/:userId/:productName",User.deleteProductFromShopping)
router.get("/getShoppungCart/:id",User.getShoppungCart)
router.get("/getProductsByCategory/:id", Category.getProductsByCategory  )

module.exports = router

