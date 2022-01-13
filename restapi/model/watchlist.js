const Mongoose=require('mongoose');
const WatchList = new Mongoose.Schema({
  //to use our own id
//    _id:{type:String,required:true},
//    count:{
//        type:Number,
//        required:true
//    },
//    genre:{type:String,required:false}
 
 
       _id: {type:String,required:true},
       watchlist:{type:[String]},
       genreId:{type:[Number]}
      
})
module.exports=Mongoose.model('WatchListData', WatchList)
 
 
 

