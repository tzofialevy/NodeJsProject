const mongoose=require("mongoose");

const AdminSchema=mongoose.Schema({
    name:{type:String,maxlength:10,required:'true'},
    password:{type:String,required:'true'},
    email:{type:String,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]}   
})

module.exports=mongoose.model('AdminModel',AdminSchema)