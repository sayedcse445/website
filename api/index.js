const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/usre")

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(console.log("connected to mongodb..")).catch(err =>console.log(err))


app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.listen("4000",()=>{
    console.log("backend is connected");
})

