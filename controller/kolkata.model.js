

const mongoose = require ('mongoose')
const { async } = require('rxjs')

const Kolkata = require ('../model/kolkataschema')


// 1. GET/READ for all user method of CRUD

exports.getkolkatas = async (req,res)=>{
    try{
        const kolkata = await Kolkata.find()

        res.status(200).json({
            msg:"kolkata data featched successfully",
            data: kolkata
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getkolkata = async (req,res)=>{
    try{
       const kolkata= await Kolkata.findById(req.params.productid)

       res.status(200).json({
        msg:"Single data featched successfully",
        data : kolkata
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createkolkata = async (req,res) =>{
    try{
        const kolkata = new Kolkata ({
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            place: req.body.place,
            price: req.body.price,
            image: req.body.image 
        })

        const data = await kolkata.save()

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
exports.updatekolkata = async (req,res)=>{
    try{
       const kolkata= await Kolkata.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:" updated successfully",
        data : kolkata
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletkolkata = async (req,res)=>{
    try{
       const kolkata= await Kolkata.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"deleted successfully",
        data : kolkata
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}