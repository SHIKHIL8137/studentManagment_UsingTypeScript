import express from 'express';
import connectDB from "./config/connectDB";
import dotenv from 'dotenv';
import routes from './routes/routes'

dotenv.config()


const app= express()


app.use(express.json())


connectDB()
app.use(routes)

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
  

app.listen(process.env.PORT_SERVER,()=>{
    console.log(`server is running at port ${process.env.PORT_SERVER}`);
    
})