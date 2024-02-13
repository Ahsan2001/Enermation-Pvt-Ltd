const mongoose = require("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema({
    firstName: {type:String , require: true},
    lastName: {type:String , require: true},
    phone: {type:Number , require: true},
    email: { type: String, index: true, unique: true, required: true },
    password: {type:String , require: true},
},
{   
    timestamps: true,
})


module.exports = mongoose.model("User", userSchema, "users");