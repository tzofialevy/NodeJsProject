const Admin=require("../controller/Admin");
const Category = require("../controller/Category")
const router=require("express").Router()

router.post("/admin/createCategory", Admin.createCategory)
router.put("/admin/updateCategory/:id", Admin.updateCategory  )
router.get("/admin/getProductsByCategory/:categoryId", Category.getProductsByCategory  )

router.post("/admin/createProduct", Admin.createProduct)
router.put("/admin/updateProduct/:id", Admin.updateProduct  )

router.delete("/admin/deleteUser/:id", Admin.deleteUser)

module.exports = router

 
