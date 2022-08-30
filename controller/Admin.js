const UserSchema=require("../Model/UserModel");
const CategorySchema=require("../Model/CategoryModel");
const ProductSchema=require("../Model/ProductModel");

const createCategory =async(req,res)=>{
    try{
    const categoryToSave=new CategorySchema(req.body)
    const categoryAfterSave=categoryToSave.save()
    res.status(200).json(categoryAfterSave)
    }
    catch(err){
    res.status(500).json(err)
    }
}

const createProduct =async(req,res)=>{
    try{
    const ProductToSave=new ProductSchema(req.body)
    const ProductAfterSave=ProductToSave.save()
    res.status(200).json(ProductAfterSave)
    }
    catch(err){
    res.status(500).json(err)
    }
}

const deleteUser=async(req,res)=>{
    try{
        const user=await UserSchema.findById(req.params.id)
        await user.remove()
        await user.save()
        res.status(200).json("user deleted successfuly")
    }
    catch(err){
        res.status(400).json(err)
    }
}

const updateCategory = async (req, res)=>{
    try{
        const { id } = req.params;
        const categoryToUpdate =await CategorySchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({message:"update succeded", category: categoryToUpdate})
    }
    catch(err){
        res.status(400).json(err)
    }
}

const updateProduct = async (req, res)=>{
    try{
        const { id } = req.params;
        const productToUpdate =await ProductSchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({message:"update succeded", products: productToUpdate})
    }
    catch(err){
        res.status(400).json(err)
    }
}
module.exports={createCategory,createProduct,deleteUser,updateCategory,updateProduct}