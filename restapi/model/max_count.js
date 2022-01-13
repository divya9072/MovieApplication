const Mongoose=require('mongoose');
const MaxCount = new Mongoose.Schema({
  _id:{type:String,required:true},
  count:{
      type:Number,
      required:true
  },
  genre:{type:[Number],required:false}
})
module.exports=Mongoose.model('MaxCountData', MaxCount)
 
 
 

