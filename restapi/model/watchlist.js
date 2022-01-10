const Mongoose=require('mongoose');
 
const WatchList = new Mongoose.Schema({
   //to use our own id
   _id:{type:String,required:true},
   count:{
       type:Number,
       required:true
   }
   
 
})
 
 
module.exports=Mongoose.model('WatchListData', WatchList)
 
 
 

