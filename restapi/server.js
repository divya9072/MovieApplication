const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const schemaUrls=require('./router/router')
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_CREDENTIALS,(e)=>{
    if (e!==null || e!==undefined){
        console.log("db connected")
    } 
    else{
        e.toString()
    }
})

app.use(express.json())
app.use(cors())
app.use('/api',schemaUrls)

app.listen(process.env.PORT,()=>console.log("Server Started"))