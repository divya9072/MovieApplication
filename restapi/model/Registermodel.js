const mongoose=require('mongoose');

const registerTemp=new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model('usertable_details', registerTemp)
