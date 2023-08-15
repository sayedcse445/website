const router =require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');


//Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, categories } = req.body;

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            categories
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// router.post("/register",async(req,res)=>{
//     try{
//         const salt= await bcrypt.genSalt(10)
//         const hashedpass= await bcrypt.hash(req.body.password,salt)
//         const newUser = new User ({
//             username:req.body.username,
//             email:req.body.email,
//             password:hashedpass
//         })

//         const user = await newUser.save()
//         res.status(200).json(user)
//     }catch(err){
//         res.status(500).json("err")
//     }
// })


//Login
router.post("/login",async(req,res)=>{
    try{
        const user =await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong credentials..")

        const validate= await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong credentials..")

        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=router