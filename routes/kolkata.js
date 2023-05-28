

const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')

const kolkatacontroller = require ('../controller/kolkata.model')

// 1. GET request for all flight details
 
 router.get('/',kolkatacontroller.getkolkatas)

// 2. GET request for Single flight details
  
  router.get('/:productid',kolkatacontroller.getkolkata)

// 3. POST request 

  router.post('/',kolkatacontroller.createkolkata)

// 4. PUT request

  router.put('/:productid',kolkatacontroller.updatekolkata)

// 5. DELETE request

  router.delete('/:productid',kolkatacontroller.deletkolkata)

  module.exports = router