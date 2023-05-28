
const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')

const mumbaicontroller = require ('../controller/mumbai.model')

// 1. GET request for all flight details
 
 router.get('/',mumbaicontroller.getmumbais)

// 2. GET request for Single flight details
  
  router.get('/:productid',mumbaicontroller.getmumbai)

// 3. POST request 

  router.post('/',mumbaicontroller.createmumbai)

// 4. PUT request

  router.put('/:productid',mumbaicontroller.updatemumbai)

// 5. DELETE request

  router.delete('/:productid',mumbaicontroller.deletmumbai)

  module.exports = router