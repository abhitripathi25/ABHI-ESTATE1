import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://abhiiit1234:iitbombay1234@abhiestate1.emcnefi.mongodb.net/ABHIESTATE1?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err); 
})
const app = express(); 
  
app.listen(3000, () => {   
    console.log('server is running at port 3000');
})