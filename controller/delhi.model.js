

const mongoose = require ('mongoose')
const { async } = require('rxjs')

const Delhi = require ('../model/delhischema')


// 1. GET/READ for all user method of CRUD

exports.getdelhis = async (req,res)=>{
    try{
        const delhi = await Delhi.find()

        res.status(200).json({
            msg:"delhi data featched successfully",
            data: delhi
        })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 2. GET/READ for single user method of CRUD
exports.getdelhi = async (req,res)=>{
    try{
       const delhi= await Delhi.findById(req.params.productid)

       res.status(200).json({
        msg:"Single data featched successfully",
        data : delhi
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}


// 3. POST/CREAT method of CRUD
exports.createdelhi = async (req,res) =>{
    try{
        const delhi = new Delhi ({
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            place: req.body.place,
            price: req.body.price,
            image: req.body.image 
        })

        const data = await delhi.save()

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
exports.updatedelhi = async (req,res)=>{
    try{
       const delhi= await Delhi.findByIdAndUpdate(req.params.productid,req.body)

       res.status(200).json({
        msg:" updated successfully",
        data : delhi
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}

// 5. DELET for user method of CRUD
exports.deletdelhi = async (req,res)=>{
    try{
       const delhi= await Delhi.findByIdAndDelete(req.params.productid)

       res.status(200).json({
        msg:"deleted successfully",
        data : delhi
     })
    }catch(err){
        res.status(501).json({
            msg:"Somethng went wrong",
            error:err
        })
    }
}