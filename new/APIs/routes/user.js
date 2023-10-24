const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');
const authenticateWithToken = require('../middleware/middlewre')


//building APIs

router.post('/createuser', usercontroller.createData)
router.get('/getalldata', usercontroller.getAlldata)
router.get('/getbyid/:id', usercontroller.getById)
router.post('/updatebyid/:id',authenticateWithToken,usercontroller.updateById)
router.post('/deletebyid/:id',usercontroller.deleteById)
router.post('/signup', usercontroller.signup)
router.post('/signin',usercontroller.signin)

module.exports=router