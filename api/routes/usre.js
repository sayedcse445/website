const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")


//Register
router.post("/register", async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err)
    }
})





module.exports = router