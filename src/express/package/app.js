const express=require("express");
const app=express();
const path=require("path");
const port=3000;
const data=require("./data.json");
const fs =require("fs");

app.use(express.urlencoded({extended:false}))


let user=[];
fs.readFile("./data.json",  (err, data) => {  
    user = JSON.parse(data || "[]");
});
app.get("/submit",(req,res)=>{
    console.log("submit");
    
})
app.get("/heloo",(req,res)=>{
    const body=req.body
user.push({...body,id:user.length+1})
fs.writeFile('./data.json',JSON.stringify(user),(err)=>{

if(!err){
    return res.json({status:"sucess",id:user.length})
}
})
   
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})