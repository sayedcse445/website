const express =require ("express")
const app = express()
const dotenv = require("dotenv")
const mongooese= require("mongoose")
const authRoute =require("./routes/auth")
const userRouter = require("./routes/user")
const postRouter = require("./routes/post")


dotenv.config()
app.use(express.json())

mongooese.connect(process.env.MONGO_URL,{
})
.then(console.log("connected database"))
.catch((err)=>console.log(err))

app.use("/api/auth",authRoute)
app.use("/api/user",userRouter)
app.use("/api/post",postRouter)
app.listen ("5000",()=>{  
    console.log('Backend is api2 conneted');
})