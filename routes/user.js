const express = require('express')
const router = express.Router()
const routeController = require('../controllers/user')
router.get('/getAll', routeController.getAll)
//router.get('/all',routeController.getAllUsers)
//router.post('/login',routeController.userLogin)
//PfarEgnhMP0Al5bP
//linkindbusername

module.exports = router