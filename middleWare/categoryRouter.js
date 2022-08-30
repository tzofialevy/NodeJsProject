const Category = require('../controller/Category')
const router=require("express").Router()

router.get('/getAllCategory', Category.getAllCategory)

module.exports = router
