const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
const userDataController = require('../controller/userDataController')
const taskController = require('../controller/taskController')
const AuthVeryfy = require('../middleware/Authvery')


// router setup
// get Router
router.get('/', AuthVeryfy, userDataController.home)
router.get('/summary', AuthVeryfy, taskController.Summary)



// Curd Router 
router.get('/read/:status',AuthVeryfy, taskController.Readdata)
router.post('/createTask',AuthVeryfy, taskController.Create)

router.post('/update/:id',AuthVeryfy, taskController.Updatedata)
router.get('/delete/:id',AuthVeryfy, taskController.Deletadata)

// active status
router.get('/crud/status/:status',AuthVeryfy, taskController.status)
router.get('/crud/ReadDate',AuthVeryfy, taskController.ReadDate)



// Post Router 
router.post('/signup', userController.register)
router.post('/signin', userController.login)
router.post('/update',AuthVeryfy, userController.passwordUpdate)
router.post('/profile',AuthVeryfy, userController.profileupdate)






module.exports = router;