import mongoose from 'mongoose';

// creating a blueprint for the user data like how the inf should be 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});

// as we created bp we need to store it..and conv into usable model
const User = mongoose.model('User', userSchema);

export default User;
