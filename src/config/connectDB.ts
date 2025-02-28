import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()



const connectDB=async ()=>{
    try {
        const dbURI  = process.env.MONGODB_CONNECTION_LINK as string;
        await mongoose.connect(dbURI)
        console.log('DataBase is connected successfully');
        
    } catch (error) {
        console.log('db connection failed');
        
    }
}


export default connectDB;