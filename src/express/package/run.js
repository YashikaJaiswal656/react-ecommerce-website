const mongoose=require("mongoose");
const data=require("./conn");
const run=async () => {
  try{
await data()
const db=mongoose.connection.useDb("local");
await db.collection('startup_log').insertMany([{
  name:"yashika",
  last_name:"jaiswal",
  hobbies:"reading"
},{
  name:"varsha",
  last:"rani"
}]);
console.log("sucess");

  }
  catch{
console.log("err");

  }
}
run()