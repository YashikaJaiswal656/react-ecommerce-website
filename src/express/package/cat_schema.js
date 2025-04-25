const mongoose=require("mongoose");
const cat_Schema=new mongoose.Schema({
    cat:String,
    slug:String
})
module.exports=mongoose.model("cat",cat_Schema);
