

const mongoose = require ('mongoose')
const schema = mongoose.Schema

const delhischema = schema({
    _id : schema.Types.ObjectId,
    name : {type:String,require:true},
    place : {type:String,require:true},
    price : {type:String,require:true},
    image : {type:String,require:true}
    
})

module.exports = mongoose.model("Delhi",delhischema)
