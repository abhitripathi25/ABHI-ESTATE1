import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect("mongodb://abhiiit1234:iitbombay1234@ac-eetykwa-shard-00-00.emcnefi.mongodb.net:27017,ac-eetykwa-shard-00-01.emcnefi.mongodb.net:27017,ac-eetykwa-shard-00-02.emcnefi.mongodb.net:27017/?ssl=true&replicaSet=atlas-729b8e-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err); 
})
const app = express(); 
app.use(express.json());
  
app.listen(3000, () => {   
    console.log('server is running at port 3000');
})

// here we are getting all the user route that we want 
// to use after including the first parameter
app.use('/api/user',userRouter )
app.use('/api/auth',authRouter )

// if someone give wrong route in url then this should 
// appear on the screen it means to create middleware
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500; 
    const message = err.message || 'INTERNAL SERVER ERROR';
    return res.status(statusCode).json({
        success:false,
        statusCode,message
    });
});