const router = require("express").Router();
const User = require('../models/User')
const Post =require("../models/Post")

//Create Post
router.post("/", async (req, res) => {
    const newPost =new Post(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    }catch (err){
        res.status(500).json(err)
    }
})




//Delete
// router.delete("/:userId", async (req, res) => {
//     try {
//         const userId = req.params.userId;
        
//         // Perform any additional authorization checks here before proceeding
        
//         const deletedUser = await User.findByIdAndDelete(userId);
//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Also, consider deleting related posts or other associated data if necessary
        
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });



//UPDATE POST
router.put('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
            if(post.username === req.body.params){
                try{
                    const update = await Post.findByIdAndUpdate(req.params.id,{
                        $set:req.body
                    },{new:true}
                    )
                    res.status(200).json(update)
                }catch(err){
                    res.status(500).json(err)
                }
            }else{
                res.status(401).json("You can update only your Post")
            }
    }catch(err){
        res.status(500).json(err)
    }
})




//DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json("Post not found");
        }
        
        if (post.username === req.body.username) {
            try {
                await post.remove(); // Use remove() method instead of delete()
                res.status(200).json("Post has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your Post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


//GET ALL POST
router.get('/:id', async (req, res) => {
    const username= req.query.user;
    const catName = req.query.cat;
    try {
        let post;
        if(username){
            post=await Post.find({username})
        }else if(catName){
            post =await Post.find({catagorie:{
                $in:[catName]
            }})
        }else {
            post =await Post.find()
        }
        res.status(200).json(post)
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router


