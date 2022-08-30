const UserSchema=require("../Model/UserModel");
const ProductSchema=require("../Model/ProductModel");

const createUser =async(req,res)=>{
    try{
    const userToSave=new UserSchema(req.body)
    const userAfterSave=userToSave.save()
    res.status(200).json(userAfterSave)
    }
    catch(err){
    res.status(500).json(err)
    }
}

const addProduct =async(req,res)=>{
    try{
    const productToAdd=await ProductSchema.findById(req.params.productId)
    const user = await UserSchema.findById(req.params.userId)
    user.products.push(productToAdd)
    res.status(200).json("product added to curt")
    }
    catch(err){
    res.status(500).json(err)
    }
}

const updateUser=async(req,res)=>{
    try{
        const { id } = req.params;
        const userToUpdate =await UserSchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({message:"update succeded", user: userToUpdate})
    }
    catch(err){
        res.status(400).json(err)
    }
}

const getShoppungCart=async(req,res)=>{
    try{
        const userProducts=await UserSchema.findById(req.params.id)
        req.status(200).json(userProducts.products)
    }
    catch(err){
        res.status(500).json(err)
    }
}


// const deleteUser = (req, res) => {
//     User.findByIdAndDelete(req.params.userId, (err, u) => {
//         if (err) {
//             res.json(err);
//         }
//         console.log("success delete");
//         res.status(200))


const deleteProductFromShopping=async(req,res)=>{
     try{
          const user=await UserSchema.findById(req.params.userId)
          //const product=await ProductSchema.findById(req.params.productId)
          const productToDelete = user.products.map(p=>p.name==req.params.productName)
          user.products.remove(productToDelete.id)
          user.save()
          res.status(200).json("product deleted successfuly")
     }
     catch(err){
        res.status(500).json(err)
    }
 }
module.exports={createUser, addProduct, updateUser, deleteProductFromShopping, getShoppungCart}
