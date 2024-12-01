import express from 'express';
import dotenv from  'dotenv';
import {connectToDatabase} from './config/dbConnect.js'


const app = express();

//to use env variables
dotenv.config({path:'backend/config/config.env'});

//to connect to databse
connectToDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`App is running on port: ${process.env.PORT}`)
})