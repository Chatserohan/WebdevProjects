const express = require('express')
const router = express.Router()
const UserController = require('../controllers/usercontroller.js')


router.get('/',UserController.home)
router.get('/login',UserController.login)
router.get('/resgistration',UserController.resistration)
router.post('/resgistration',UserController.createuserDoc)
router.post('/login',UserController.verifyLogin)

module.exports = router 