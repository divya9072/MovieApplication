const express=require('express')
const router=express.Router()
const rgTemp=require('../model/Registermodel')
const WatchList = require('../model/watchlist')
 
 
router.post('/register',async(req,res)=>{
   const {Email}=req.body
   const alreadyUser=await rgTemp.findOne({Email});
   if(alreadyUser){
       res.json({
           message:"You are already registered..!!"
       }) 
   }else{
   const registerUser=new rgTemp
   ({
       UserName:req.body.UserName,
       Password:req.body.Password,
       Email:req.body.Email
   })
   registerUser.save()
   .then(
       res.json({
           status:'ok' ,
           message:'REGISTERED SUCCESSFULLY'
       })
   ).catch(error=>{
       res.json(error)
   })
    }
})
 
 
 
 
router.post('/login',async(req,res)=>{
   const userDetail= await rgTemp.findOne
   ({
       Email:req.body.Email,
       UserName:req.body.UserName,
       Password:req.body.Password
   })
   if(userDetail){
       return res.json({
           status:'ok' ,
           message:'Welcome Back User'
       })
   }
   else{
       return res.json({
           status:'error',
           message:'Username/Password incorrect'
       })
   }
})
 
const mvTemp=require('../model/Moviemodel')
 
// router.post('/searchedmovie',async(req,res)=>{
//    try{
//        const searchmovie=await mvTemp.findOneAndUpdate({
//            Email:req.body.Email
//        },{
//            $addToSet:{
//                Moviename: req.body.Moviename
//            }
//        },{upsert:true});
//    }catch(err){
//        console.log(err);
//    }
// })
 
module.exports=router
 
 
router.post('/watchlist',async(req,res)=>{
 
console.log(req.body.Email);
 
try {
 
mvTemp.findOneAndUpdate({
       Email:req.body.Email
   },{
       $addToSet:{
           WatchList: req.body.movieId
       }
   },{upsert:true}).then(
 
 console.log('user model updated')
   ).catch(err=>{
       console.log(err)
   });
 
const movie = await WatchList.findOne({_id:req.body.movieId});
if(movie){
//    var tempCount = movie.count+1;
//    console.log(tempCount)
var temp =   await WatchList.findOneAndUpdate({
       _id:movie._id
   },{
       count:movie.count+1
   });
   res.json({movie:temp,message:'Wallah!!! Updated'})
}else{
   const AddMovieToWatchList =new WatchList({
       _id:req.body.movieId,
       count:1
   });
   AddMovieToWatchList.save().then(
       res.json({
           message:'Movie added'
       })
   ).catch(err=>{
console.log(err)
       res.json({message:'Error'+err.toString()})
   })
 
}
} catch (error) {
   res.json({error:error})
}
  
})
 
 
router.get('/maxWatchList',async(req,res)=>{
 
   try {
 const movie= await WatchList.find().sort({count:-1}).limit(5)
 res.json({movies:movie})
 
   } catch (error) {
       res.json(error)
      
   }
  
})
 


