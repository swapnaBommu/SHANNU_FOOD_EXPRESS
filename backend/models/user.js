import mongoose from "mongoose";

const userSChema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
        maxLength:[50,"Your name cannot exceed 50 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true
    },
    password:{
        type: String,
        required:[ true, "Please enter your Password"],
        minLength:[6,'Password must be longer than 6 characters'],
    },
    profilePic:{
        type:String,
        default:"",
    },
    role:{
        type:String,
        default:"admin",

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
},{timestamps:true});


export default mongoose.model("User",userSChema);