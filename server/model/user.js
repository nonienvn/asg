const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20

    },
      
    dob: { type: Date, default: new Date() },
    
    
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    
    gender: {
        type: String,
        enum: ["Male", "Female"]
    

    },
    address: {
        type: String,

    }
    
}, {timeStamps: true});


module.exports = mongoose.model('User', userSchema)