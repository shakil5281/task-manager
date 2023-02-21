const OTPModel = require('../model/OTPModel')
const User = require('../model/user')
const SentEmailutility = require("../utility/SentEmailutility");
const bcrypt = require('bcryptjs')

exports.RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        // Email Account Query
        let UserCount = (await User.aggregate([{$match: {email: email}}, {$count: "total"}]))
        if(UserCount.length>0){
            console.log(UserCount)
            // OTP Insert
            await OTPModel.create({email: email, otp: OTPCode})
            // Email Send
            let SendEmail = await SentEmailutility(email,"Your PIN Code is= "+OTPCode,"Task Manager PIN Verification")
            res.status(200).json({status: "success", data: SendEmail})
        }
        else{
            res.status(404).json({status: "fail", data: "User Not Found"})
        }

    }catch (e) {
        console.log(e)
        res.status(500).json({status: "fail", data:e})
    }

}




exports.RecoverVerifyOTP=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;
    try {
        let OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}])
        if (OTPCount.length>0) {
            let OTPUpdate = await OTPModel.updateOne({email: email, otp: OTPCode, status: status}, {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            })
            res.status(200).json({status: "success", data: OTPUpdate})
        } else {
            res.status(404).json({status: "fail", data: "Invalid OTP Code"})
        }
    }
    catch (e) {
        res.status(500).json({status: "fail", data:e})
    }
}



exports.RecoverResetPass=async (req,res)=>{

    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            const password = await bcrypt.hash(NewPass, 12)
            let PassUpdate = await User.updateOne({email: email}, {
                password: password
            })
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(404).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (e) {
        res.status(500).json({status: "fail", data:e})
    }
}
