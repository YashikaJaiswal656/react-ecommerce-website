const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    description:String,
    details:String,
    cat:String,
    price:Number,
    pic:String,
    rating:String
})
module.exports=mongoose.model("user",userSchema);