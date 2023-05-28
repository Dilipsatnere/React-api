

const express = require ('express')
const router = express.Router()

const mongoose = require ('mongoose')

const bookingcontroller = require ('../controller/booking.model')

// 1. GET request for all flight details
 
 router.get('/',bookingcontroller.getbookings)

// 2. GET request for Single flight details
  
  router.get('/:productid',bookingcontroller.getbooking)

// 3. POST request 

  router.post('/',bookingcontroller.createbooking)

// 4. PUT request

  router.put('/:productid',bookingcontroller.updatebooking)

// 5. DELETE request

  router.delete('/:productid',bookingcontroller.deletbooking)

  module.exports = router