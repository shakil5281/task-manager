const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
const userDataController = require('../controller/userDataController')
const taskController = require('../controller/taskController')
const SentEmailController = require('../controller/SentEmailController')
const AuthVeryfy = require('../middleware/Authvery')


// router setup
// get Router
router.get('/profile', AuthVeryfy, userDataController.profile)
router.get('/summary', AuthVeryfy, taskController.Summary)



// Curd Router 
router.get('/read/:status',AuthVeryfy, taskController.Readdata)
router.post('/createTask',AuthVeryfy, taskController.Create)

router.post('/update/:id',AuthVeryfy, taskController.UpdateTask)
router.get('/delete/:id',AuthVeryfy, taskController.Deletadata)

// active status
router.get('/crud/status/:status',AuthVeryfy, taskController.status)
router.get('/crud/ReadDate',AuthVeryfy, taskController.ReadDate)



// Post Router 
router.post('/signup', userController.register)
router.post('/signin', userController.login)
router.post('/update',AuthVeryfy, userController.passwordUpdate)
router.post('/profileupdate',AuthVeryfy, userController.profileupdate)


router.post('/recovery/:email', SentEmailController.RecoverVerifyEmail)
router.post('/OTPverify/:email/:otp', SentEmailController.RecoverVerifyOTP)
router.post('/passwordreset', SentEmailController.RecoverResetPass)






module.exports = router;