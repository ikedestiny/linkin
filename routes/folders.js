const express = require('express')
const router = express.Router()
const routeController = require('../controllers/folders')
router.get('/getAll', routeController.getAll)
router.post('/addFolder',routeController.addFolder)
router.get("/:folder_id/links",routeController.getAllLinksInFolder)
router.post("/:folder_id/addLink",routeController.addLinkToFolder)
//router.get('/all',routeController.getAllUsers)
//router.post('/login',routeController.userLogin)
//PfarEgnhMP0Al5bP
//linkindbusername

module.exports = router