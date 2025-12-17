const mongoose=require("mongoose")
const counterSchema = new mongoose.Schema({
    id:{type:String,required:true},
    seq:{type:Number,default:0}
})
//table creation
module.exports=mongoose.model("Counter",counterSchema)
 //model_name but table creation will be small firstletter -counter
 