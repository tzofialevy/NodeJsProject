const CategorySchema=require("../Model/CategoryModel");

const getProductsByCategory=async(req,res)=>{
    try{
        const category = await CategorySchema.findById(req.params.categoryId)
        res.status(200).json(category.products)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getAllCategory=async(req,res)=>{
    try{
        const Allcategory = await CategorySchema.find()
        res.status(200).json(Allcategory)
    }
    catch(err){
        res.status(500).json(err)
    }
}
module.exports={getProductsByCategory,getAllCategory}