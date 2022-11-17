const bodyParser = require("body-parser")

const express= require('express')

const mongoose =require('mongoose')
const { checkModel } = require("../models/checkModel")



const checkRouter= express.Router()


checkRouter.use(bodyParser.urlencoded({extended:false}))
checkRouter.use(bodyParser.json())


checkRouter.get('/',(req,res)=>{

    res.send("HELLO")
})


checkRouter.post('/read',(req,res)=>{

    var checkObject= new checkModel(req.body)
    res.json(checkObject)
    
    checkObject.save(
        (error)=>{
            if(error){
                res.send(error)
            }
            else{
                res.json({'status':"success"})
            }
        }
    )
})
checkRouter.get('/viewall',async(req,res)=>{
 try{
    var result= await checkModel.find()
    res.json(result)

 }
 catch(error)
 {
    res.send(error)
 }
})
checkRouter.post('/search',async(req,res)=>{

    try{
        var result=await checkModel.find(req.body)
        res.json(result)
    }
    catch(error)
    {
        res.send(error)
    }


})
checkRouter.post('/edit',async(req,res)=>{

try{

    var result= await checkModel.findOneAndUpdate({"_id":req.body._id},req.body)
    res.json(result)
}
catch(error){
    res.send(error)
}

})
checkRouter.post('/delete',async(req,res)=>{
try{
    var result= await checkModel.findByIdAndDelete({"_id":req.body._id})
}
catch(error){
    res.send(error)
}

})

module.exports={checkRouter}
