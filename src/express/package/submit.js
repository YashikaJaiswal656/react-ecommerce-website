import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { OAuth2Client } from 'google-auth-library';
import schema from "./schema.js";
import cat_Schema from "./cat_schema.js";
import Checkout from "./checkout_schema.js";
import Log from "./log_schema.js";
const PORT=3000
const app=express();
app.use(cors());
const upload = multer({ dest: 'image/' });
app.use('/image', express.static('image'));

app.post('/submit', upload.single('pic'), async (req, res) => {
  try {
    const { name, description, details, cat, rating, price } = req.body;
    const pic = req.file ? req.file.filename : ""; 

    const newProduct = new schema({
      name,
      description,
      details,
      cat,
      rating,
      price,
      pic
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Failed to save product", error });
  }
});

app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error("MongoDB Error:", err));

  app.get("/submit",async(req,res)=>{
    try{
const users=await schema.find()
res.json(users)
    }
    catch(error){
console.log("error",error);

    }
})


app.get("/insert",async(req,res)=>{
  try{
const cat=await cat_Schema.find()
res.join(cat)
}
  catch{
   console.log("failed")
  }
})
app.post("/insert",async(req,res)=>{
  try{
const {cat,slug}=req.body
const newCat=new cat_Schema({cat,slug})
await newCat.save()
res.status(201).json(newCat)
  }
  catch{
console.log("nope")
  }
})
app.get("/login",async(req,res)=>{
  try{
const log=await log_schema.find()
res.join(log)
  }
  catch{
console.log("ee");

  }
})

app.post("/login", async (req, res) => {
  const userData = req.body;

  try {
    let existingUser = await Log.findOne({ email: userData.email });

    if (!existingUser) {
      const newUser = new Log(userData);
      await newUser.save();
      console.log("🆕 New user saved:");
      return res.status(200).json(newUser);
    } else {
      console.log("ℹ️ User already exists:");
      return res.status(200).json(existingUser);
    }
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/categories", async (req, res) => {
  try {
    const categories = await cat_Schema.find(); // fetch all docs
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
});
app.get("/pr",async(req,res)=>{
  try{
    const name=await schema.find()
    res.json(name)
  }
  catch{
    console.log("nope")
  }
})
app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
await schema.findByIdAndDelete(id)
res.status(200).json({message:"sucess"})
})

app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await schema.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


app.put('/update/:id', upload.single('pic'), async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = {
      name: req.body.name,
      description: req.body.description,
      details: req.body.details,
      cat: req.body.cat,
      rating: req.body.rating,
      price: req.body.price,
    };

    if (req.file) {
      updatedData.pic = req.file.filename;
    }

    const updatedProduct = await schema.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update product", error });
  }
});


app.post('/checkout', async (req, res) => {
  const { name, quantity, price, gst, total } = req.body;

  try {
    const newOrder = new Checkout({
      name,
      quantity,
      price,
      gst,
      total
    });

    await newOrder.save();
    await Checkout.deleteMany({ _id: { $ne: newOrder._id } }); // delete all others except current

    res.json({ success: true });
    

  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ success: false });
  }
});
app.get("/checkout",async(req,res)=>{
  try{
const checkout=await Checkout.find()
res.json(checkout)

  }
  catch{
console.log("errr");

  }
})
  app.listen(PORT,()=>{
    console.log("sucess")
  })

