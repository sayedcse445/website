const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require("bcrypt")
const Post =require("../models/Post")

//Update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.params = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("You can update only Your Data")
    }
})


//Delete
// router.delete('/:Id', async (req, res) => {
//     try {
//       const postId = req.params.postId;
  
//       // Find the post and delete it
//       const deletedPost = await Post.findByIdAndDelete(postId);
//       if (!deletedPost) {
//         return res.status(404).json({ message: 'Post not found' });
//       }
  
//       return res.status(200).json({ message: 'Post deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });




router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted...")
            } catch (err) {
                res.status(500).json(err)
            }
        }catch(err){
            res.status(404).json("user not found")
        }
        }else {
            res.status(401).json("You can update only Your Data")
        }
    })


    //GET USER
    router.get("/:id",async(req,res)=>{
        try{

        }catch(err){
            res.status(500).json(err)
        }
    })


module.exports = router