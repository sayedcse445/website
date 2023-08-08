const mongoose=require("mongoose")

const CategoriseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamps:true}
)
module.exports=mongoose.model("Categorise",CategoriseSchema)