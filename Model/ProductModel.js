const mongoose=require("mongoose");

const ProductSchema=mongoose.Schema({
    name:{type:String,maxlength:10,required:"true"},
    amount:{type:Number,minlength:0,required:"true"},
    CategoryId:{type:mongoose.Schema.Types.ObjectId,ref:"CategoryModel"}
})

module.exports=mongoose.model('ProductModel',ProductSchema)