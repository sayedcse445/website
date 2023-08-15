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

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Get the user id from the URL parameter

        // Find user by id
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user's username and email
        if (req.query.username) {
            user.username = req.query.username;
        }
        if (req.query.email) {
            user.email = req.query.email;
        }

        // Save the updated user
        await user.save();

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// router.get('/:id', async (req, res) => {
//     try {
//         const userId = req.params.id; // Get the user id from the URL parameter

//         // Find user by id
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Filter out sensitive information
//         const safeUser = {
//             username: user.username,
//             email: user.email
//         };

//         res.status(200).json(safeUser);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });


module.exports = router


