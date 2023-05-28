

const mongoose = require ('mongoose')
const { async } = require('rxjs')

const Bangalore = require ('../model/bangaloreschema')


// 1. GET/READ for all user method of CRUD

exports.getbangalores = async (req,res)=>{
    try{
        const bangalore = await Bangalore.find()

        res.status(200).json({
            msg:"bangalore data featched successfully",
            data: bangalore
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getbangalore = async (req,res)=>{
    try{
       const bangalore= await Bangalore.findById(req.params.productid)

       res.status(200).json({
        msg:"Single data featched successfully",
        data : bangalore
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createbangalore = async (req,res) =>{
    try{
        const bangalore = new Bangalore ({
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            place: req.body.place,
            price: req.body.price,
            image: req.body.image 
        })

        const data = await bangalore.save()

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
exports.updatebangalore = async (req,res)=>{
    try{
       const bangalore= await Bangalore.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:" updated successfully",
        data : bangalore
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletbangalore = async (req,res)=>{
    try{
       const bangalore= await Bangalore.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"deleted successfully",
        data : bangalore
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}