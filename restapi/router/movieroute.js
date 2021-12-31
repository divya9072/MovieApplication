const express=require('express')
const router=express.Router()
const mvTemp=require('../model/Moviemodel')

router.post('/searchedmovie',(req,res)=>{
    const searchmovie=new mvTemp
    ({
        Email:req.body.Email,
        Moviename:req.body.Moviename
    })
    searchmovie.save()
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})


module.exports= router
