const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Post")


//Create Post
    router.post("/",async(req,res)=>{
        const newPost =new Post(req.body)
        try{
              const savePost = await newPost.save()
              res.status(200).json(savePost)
        }catch(err){
            res.status(500).json(err)
        }
    })

  
//Update Post
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){

            try{
                const updatePost =await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                    $set:req.body
                },
                {new:true})
                res.status(200).json(updatePost)
            }catch(err){
                res.status(500).json(err)}
            }else{
                res.status(401).json("You can Updated only")
            }
        }catch(err){
        res.status(500).json(err)
    }
})

//Delete Post

router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){

            try{
               await post.delete()
                res.status(200).json("delete post....")
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("You can delete only your post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})




//GET USER
router.get("/:id",async(req,res)=>{
    try{
        const user =await User.findById(req.params.id)
        const {password, ...others} =user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router 