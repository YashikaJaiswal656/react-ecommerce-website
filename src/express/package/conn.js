const mongoose =require("mongoose");
const uri=("mongodb://localhost:27017/yashika");
const connect=async()=>{
  try{
mongoose.connect(uri);
console.log("suc");

  }
  catch{
console.log("err")
  }
}
module.exports=connect