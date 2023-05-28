

const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')

const delhicontroller = require ('../controller/delhi.model')

// 1. GET request for all flight details
 
 router.get('/',delhicontroller.getdelhis)

// 2. GET request for Single flight details
  
  router.get('/:productid',delhicontroller.getdelhi)

// 3. POST request 

  router.post('/',delhicontroller.createdelhi)

// 4. PUT request

  router.put('/:productid',delhicontroller.updatedelhi)

// 5. DELETE request

  router.delete('/:productid',delhicontroller.deletdelhi)

  module.exports = router