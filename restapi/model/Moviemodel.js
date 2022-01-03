const mongoose=require('mongoose');

const movieTemp=new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Moviename:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('movie_lists', movieTemp)

