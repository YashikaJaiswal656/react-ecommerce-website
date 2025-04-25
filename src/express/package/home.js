const express=require("express")
const app=express()
const path=require("path")
const port=3000
const fs=require("fs")
const data=require('./data.json')
app.use(express.urlencoded({extended:false}))
let user=[]
fs.readFile('./data.json',(err,data)=>{
    user=JSON.parse(data ||[])
})
app.get('/hello',(req,res)=>{
    const body=req.body
    user.push({...body,id:user.length+1})
    fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
        if(!err){
            return res.json({status:"sucess", id:user.length})
        }
    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})