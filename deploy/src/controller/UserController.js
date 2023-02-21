const User = require('../model/user') 
const bcrypt = require('bcryptjs')




// User Registration
exports.register = async (req, res) =>{

    const {firstName, lastName,  email,  password} = req.body
    if(!firstName || !lastName|| !email || !password){
        return res.status(422).json({ Error: "Pls ! Data insert full fill."})
    }

    try{
        const userexits =  await User.findOne({email})
        if(userexits){
            res.status(404).json({ Error: "User alreday Existing"})
        }else{
            const user = new User({firstName, lastName,  email,  password})
            await  user.save()           
            res.status(201).json({Message : "Registration Successfull"}) 
        }
          
    }catch(err){
        res.status(505).json({error: "server side err!"})
        console.log(err)
    }
}


// User Login

exports.login = async (req, res) =>{
    try{
        const {email, password} = req.body
            if(!email || !password){
                res.clearCookie('jwtoken')
                return res.status(422).json({ Error: "Pls ! Proper form full fill."})
            }

            const userexits =  await User.findOne({email})
            if(userexits){
                const isMatch = await bcrypt.compare(password, userexits.password)
                const token = await userexits.generateAuthToken()
                if(isMatch){
                    res.status(200).json({Message : "Login Successfull", Token : token}) 
                }else{
                    res.status(404).json({Message : "Passwrod dose not match!"}) 
                }
            }else{
                res.status(404).json({Message : "Email dose not match!"}) 
            }
    }

    catch(err){
        res.status(505).json({error: "server side err!"})
        console.log(err)
    }
}



// Update Password
exports.passwordUpdate = async (req, res) =>{

    const { old_pass, new_pass, confirm_pass} = req.body;

    if(!old_pass || !new_pass || !confirm_pass){
        res.status(412).json({ Message : "Pls! Proper Form fillup"})
    }

    try{

        const userexits =  await User.findOne({_id: req.userId})
         if(userexits){
            const isMatch = await bcrypt.compare(old_pass, userexits.password)
            if(!isMatch){
                res.status(404).json({ Message: "Old Password Not Match"})
            }else if(new_pass != confirm_pass){
                res.status(404).json({ Message: "Password dose not match"})
            }else{
                const password = await bcrypt.hash(new_pass, 12)
                const cpassword = await bcrypt.hash(confirm_pass, 12)
                 await User.updateOne({_id: req.userId}, { $set:{password: password, cpassword: cpassword}})
                 res.status(202).json({ Message: "Password Update Successfull"})
            }

         }else{
            res.status(404).json({ Message : "Password Not Match"})
         }

    }catch(err){
        console.log(err)
        res.status(500).json({ Message : "Server side error!"})
    }
}





// Profile Udpate
exports.profileupdate = async (req, res) =>{

    const {name, username, email, phone} = req.body

    if(!name || !username || !email || !phone){
        return res.status(422).json({ Error: "Pls ! Data insert full fill."})
    }

    try{
        await User.updateOne({_id: req.userId}, { $set:{name, username, email, phone}})
        res.status(202).json({ Message: "Profile Update Successfull"})

    }catch(err){
        res.status(505).json({error: "server side err!"})
        console.log(err) 
    }
}