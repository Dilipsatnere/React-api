
const express = require ('express')
const router = express.Router()
const User = require ('../model/userschema')
const mongoose = require ('mongoose')
const usercontroller = require ('../controller/user.model')

// 1. code to handle GET request for all users
 router.get('/', usercontroller.getusers)
  

// 2. code to handle GET request for single user
router.get('/:productid',usercontroller.getuser)
 

// 3. code to handle POST request for user
router.post('/', usercontroller.createuser)
      

// 4. code to handle PUT request for all users
router.put('/:productid', usercontroller.updateuser)


// 5. code to handle DELETE request for all users
router.delete('/:productid', usercontroller.deletuser)


 module.exports = router