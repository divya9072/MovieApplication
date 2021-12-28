const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const schemaUrls=require('./router/router')
const cors=require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_CREDENTIALS,()=>console.log("Database Connected Successfully"))

app.use(express.json())
app.use(cors())
app.use('/api',schemaUrls)

app.listen(3001,()=>console.log("Server Started"))