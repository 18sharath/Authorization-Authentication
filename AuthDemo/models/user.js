const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username Must']
    },
    password:{
        type:String,
        required:[true,'password Must']
    }
})

const User=mongoose.model('User',UserSchema);
module.exports=User;

