const mongoose=require('mongoose');

const registerTempelate=new mongoose.Schema({
    UserName:{
        type:String,
        // required:true
    },
    Password:{
        type:String,
        // required:true
    },

})
module.exports=mongoose.model('usertable_details', registerTempelate)
