const express=require("express");
const app=express();
const path=require("path")
const port=3000;
app.set('view engine','ejs');
const data={
  
    id:2,
    name:"yashika",
    course:"full stack development",
    about:"i am a student",
    contact:"yashika30@gmail.com",
    blog:"yashika656",
    email:"yashika79@"
  }
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/Home",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public","/home.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public","/about.html"))
})
app.get("/info/:name",(req,res)=>{
    const name=req.params.name;
res.render('info',{name})
})
app.get("/data",(req,res)=>{
    res.json(data)
})
app.get('/mail',(req,res)=>{

    res.send(`${data.email}`)
  })
app.listen(port,()=>{
console.log(`http://localhost:${port}`)
})