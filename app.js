
const path=require('path')
const express= require('express')
const cors =require('cors')
const app=express()
app.use(express.json())
app.use(require("./routes/home.routes"))



puerto=process.env.PORT || 3000
app.listen(puerto,()=>{
console.log(`se inicio el servidor`)
})
