import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

// yha hume user ke trf se jo milega wo bhejenge db me
export const signup = async(req,res,next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
    res.status(201).json('user created successfully');
 } catch (error){
        next(error)
    }
 }