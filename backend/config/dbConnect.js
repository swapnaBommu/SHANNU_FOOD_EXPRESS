import {mongoose} from 'mongoose';

export const connectToDatabase = () => {
   let db_url = process.env.DB_LOCAL_URI;

   mongoose.connect(db_url).then((con)=>{
    console.log(`successfully connected to the mongodb ${con?.connection?.host}`);
   })
  };