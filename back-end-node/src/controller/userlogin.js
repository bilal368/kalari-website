const express = require('express');
const router = express.Router();
const { userlogin } = require('../models/userlogin')

exports.userlogin = async (req, res) => {
    const email1 = 'bilal@speechlogix.com'
    const password1 = 'Bilal@123'
    console.log("body",req.body);
    const email = req.body.username
    const password = req.body.password
    if(email1 == email ){
        if(password1 == password){
            res.status(200).json({status:true,message:"success"})
        }else{
            res.status(404).json({status:false,message:"password is incorrect"})
        }
    }else{
        res.status(400).json({status:false,message:"email does not exit"})
}
    
}