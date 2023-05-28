

const mongoose = require ('mongoose')
const { async } = require('rxjs')

const Booking = require ('../model/bookingschema')


// 1. GET/READ for all user method of CRUD

exports.getbookings = async (req,res)=>{
    try{
        const booking = await Booking.find()

        res.status(200).json({
            msg:"booking data featched successfully",
            data: booking
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getbooking = async (req,res)=>{
    try{
       const booking= await Booking.findById(req.params.productid)

       res.status(200).json({
        msg:"Single data featched successfully",
        data : booking
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createbooking = async (req,res) =>{
    try{
        const booking = new Booking ({
            _id : new mongoose.Types.ObjectId(),
            city: req.body.city,
            name: req.body.name,
            image: req.body.image,
            checkin: req.body.checkin,
            checkout: req.body.checkout,
            guest: req.body.guest,
            room: req.body.room,
            place: req.body.place,
            price: req.body.price,
            bookingdays: req.body.bookingdays,
            finalprice: req.body.finalprice 
        })

        const data = await booking.save()

        res.status(200).json({
            msg:" created successfully",
            data: data
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 4. PUT/UPDATE for user method of CRUD
exports.updatebooking = async (req,res)=>{
    try{
       const booking= await Booking.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:" updated successfully",
        data : booking
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletbooking = async (req,res)=>{
    try{
       const booking= await Booking.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"deleted successfully",
        data : booking
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}