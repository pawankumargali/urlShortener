const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.route('/signup')
.post(async (req,res) => {
    let {username,password} = req.body;
    try {
        let user = await User.findOne({username:username});
        if(!user) {
            let hash = bcrypt.hashSync(password, 10);
            let newUser = new User({username:username, password:hash});
            await newUser.save();
            res.status(201).json({
                msg:'User signed up successfully. Proceed to LogIn route'
            });
        } 
        else {
            res.status(409).json({msg:'User already exists. Please Login'});
        }
    } 
    catch(e) {
        res.status(500).json({msg:"Sign Up failed"});
    }
})

router.route('/login')
.post(async (req,res) => {
    try {
        let {username,password} = req.body;
        let user = await User.findOne({username:username});
        if(!user) res.status(404).json({msg:'User doesn\'t exist or Invalid username'});
        else {
            let result = bcrypt.compareSync(password, user.password);
            if(result==true) {
                const token = jwt.sign({userId:user._id}, process.env.SECRET, {expiresIn:"1h"});
                res.status(200).json({
                    msg:`Authentication successful. Add token to Authroization header with bearer for
                        further requests`,
                    token:token
                })
            }
            else {
                res.status(401).json({msg:'Invalid password'})
            }
        }
    }
    catch(e) {
        res.status(500).json({msg:"Login In failed"});
    }
})

module.exports = router;