const mongoose=require("mongoose");
const ProductModel = require("./ProductModel");

const CategorySchema=mongoose.Schema({
    name:{type:String,maxlength:10,required:'true'},    
    // products:[ {type:ProductModel,required:'true'}]
    products:[ {type:mongoose.Schema.Types.ObjectId,ref: "ProductModel"}],
})

module.exports=mongoose.model('CategoryModel',CategorySchema)