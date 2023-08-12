const mongooese =require("mongoose")

const catagorieSchema = new mongoose.Schem({
    name:{
        type:String,
        required:true
    }
    
},
{timestamps:true}
);

module.exports=mongooese.model("catagorie",catagorieSchema)