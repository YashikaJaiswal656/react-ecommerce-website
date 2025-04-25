import mongoose from "mongoose";
const log_schema=new mongoose.Schema({
    name:String,
    email:String,
    iss:String,
    sub: Number,
    picture: String,
    email_verified: String,
    locale: String,
    iat: Number,
    exp:Number
})
const Log = mongoose.model("Log", log_schema);
export default Log;