const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isemail');

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim: true,
        validate:{
            validator: isEmail,
            message: 'Invalid address'
        }
    },
    password:{
        type:String,
        required: true
    }
})

const Todo = mongoose.model("User", todoSchema)
module.exports = Todo