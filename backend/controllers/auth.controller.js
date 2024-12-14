import User from '../models/user.js';
import bcrypt from 'bcryptjs';


export const signUp = async (req,res)=>{
    try{
        //get details passed from the FE in req.body
        const {name, email, password,confirmPassword} = req.body;

        //check if password and confirmPassword are same or not
        if(password !== confirmPassword){
            res.status(400).json({Error:'Password does not match'});
        }

        //hash the password using bcrypt package before saving into db
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password,salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            profilePic:"https://t3.ftcdn.net/jpg/09/30/56/84/240_F_930568479_3SMFdM4vylTPdvv5onY5I0AJUjauZW7k.jpg"
          });
      
          if (newUser) {
            // Generate JWT token here
            await newUser.save();
      
            res.status(201).json({
              _id: newUser._id,
              name: newUser.name,
            });
          } else {
            res.status(400).json({ error: "Invalid user data" });
          }

    }catch(error){
        console.log('Error in signup controller',error.message);
        res.status(500).json({Error: 'Internal server error'})
    }
};