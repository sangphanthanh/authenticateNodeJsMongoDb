const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

//Register
router.post('/register',(req,res,next)=>{
	let newUser = new User({
		username: req.body.username,
		password: req.body.password,
		IsAdmin:  req.body.isAdmin,
		RfidUID:  req.body.RfidUID
	});
	var tempUser = User.getUserByUsername(newUser.username,(err,user)=>{
		if(err) throw err;
		if(!user){
			User.addUser(newUser,(err,user)=>{
				if(err){
					res.json({success: false, msg: 'Fail to register'+ err});	
				}else{
					res.json({success: true, msg: 'User registered'});
				}
				});
		}else{
			res.json({success: false, msg: 'Username already added'});	
		}
	});
});

//Authenticate
router.post('/authenticate',(req,res,next)=>{
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username,(err,user)=>{
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}
		User.comparePassword(password, user.password, (err, isMatch)=>{
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user.toJSON(), config.secret,{
					expiresIn: config.TokenTime
				});
				res.json({
					success: true,
					token: "JWT " + token,
					user:{
						id: user._id,
						username: user.username,
						IsAdmin: user.IsAdmin,
						RfidUID: user.RfidUID
					}
				});
			}else{
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

//Profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
	console.log("JSON: "+req.user);
	res.json({user: req.user});
});

module.exports = router;