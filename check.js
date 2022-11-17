const bodyParser = require('body-parser')
const express=require('express')
const mongoose=require('mongoose')


var {checkModel}=require('./models/checkModel')
 var {checkRouter}=require('./controllers/checkController')

 mongoose.connect("mongodb+srv://aiswarya:aishumongo123@cluster0.qsdwiuq.mongodb.net/?retryWrites=true&w=majority ",{UseNewUrlParser:true})

var app= express()



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/check',checkRouter)

app.listen(process.env.PORT||3000,()=>{

    console.log("Server started at 3000")
})

