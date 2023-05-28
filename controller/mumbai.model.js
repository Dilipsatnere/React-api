
const mongoose = require ('mongoose')
const { async } = require('rxjs')

const Mumbai = require ('../model/mumbaischema')


// 1. GET/READ for all user method of CRUD

exports.getmumbais = async (req,res)=>{
    try{
        const mumbai = await Mumbai.find()

        res.status(200).json({
            msg:"mumbai data featched successfully",
            data: mumbai
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getmumbai = async (req,res)=>{
    try{
       const mumbai= await Mumbai.findById(req.params.productid)

       res.status(200).json({
        msg:"Single data featched successfully",
        data : mumbai
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createmumbai = async (req,res) =>{
    try{
        const mumbai = new Mumbai ({
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            place: req.body.place,
            price: req.body.price,
            image: req.body.image 
        })

        const data = await mumbai.save()

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
exports.updatemumbai = async (req,res)=>{
    try{
       const mumbai= await Mumbai.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:" updated successfully",
        data : mumbai
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletmumbai = async (req,res)=>{
    try{
       const mumbai= await Mumbai.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"deleted successfully",
        data : mumbai
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}