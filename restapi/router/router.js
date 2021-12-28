const express=require('express')
const router=express.Router()
const registerTemplateCopy=require('../model/Registermodel')

router.post('/register',(req,res)=>{
    const registerUser=new registerTemplateCopy({
        UserName:req.body.UserName,
        Password:req.body.Password
    })
    registerUser.save()
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})

module.exports=router