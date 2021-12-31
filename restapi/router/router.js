const express=require('express')
const router=express.Router()
const rgTemp=require('../model/Registermodel')


router.post('/register',(req,res)=>{
    const {Email}=req.body
    const alreadyUser=rgTemp.findOne({Email});
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
    .then(data=>{
        console.log('usercreated')
        res.json(data)
    }).catch(error=>{
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

module.exports=router