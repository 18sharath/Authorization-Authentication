const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
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

UserSchema.statics.findAndValidate=async function(username,password){
    const foundUser=await this.findOne({username});
    const isValid=await bcrypt.compare(password,foundUser.password);
    return isValid?foundUser:false
}

const User=mongoose.model('User',UserSchema);
module.exports=User;

