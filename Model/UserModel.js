const mongoose=require("mongoose");
const ProductModel = require("./ProductModel");

const UserSchema=mongoose.Schema({
    name:{type:String,maxlength:10,required:'true'},
    password:{type:String,required:'true'},
    email:{type:String},
    products:[ {type:mongoose.Schema.Types.ObjectId,ref: "ProductModel"}],
})

module.exports=mongoose.model('UserModel',UserSchema)