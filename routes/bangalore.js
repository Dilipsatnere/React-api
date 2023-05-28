

const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')

const bangalorecontroller = require ('../controller/bangalore.model')

// 1. GET request for all flight details
 
 router.get('/',bangalorecontroller.getbangalores)

// 2. GET request for Single flight details
  
  router.get('/:productid',bangalorecontroller.getbangalore)

// 3. POST request 

  router.post('/',bangalorecontroller.createbangalore)

// 4. PUT request

  router.put('/:productid',bangalorecontroller.updatebangalore)

// 5. DELETE request

  router.delete('/:productid',bangalorecontroller.deletbangalore)

  module.exports = router