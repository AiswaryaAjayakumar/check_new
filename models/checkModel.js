var mongoose= require('mongoose')


var checkSchema= new mongoose.Schema(

    {
        name:{
            type:String,
            required:true
        },
       
     
       place:{
        type:String,
        required:true
       },
       ph:{
        type:Number,
        required:true
       }
    }
)

var checkModel= mongoose.model('checks',checkSchema)


module.exports={checkModel}