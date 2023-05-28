
const mongoose = require ('mongoose')
const schema = mongoose.Schema

const bookingschema = Schema({
    _id:schema.Types.ObjectId,
    city: {type:String,require:true},
    name: {type:String,require:true},
    image: {type:String,require:true},
    checkin: {type:String,require:true},
    checkout: {type:String,require:true},
    guest: {type:String,require:true},
    room: {type:String,require:true},
    place: {type:String,require:true},
    price: {type:String,require:true},
    bookingdays: {type:String,require:true},
    finalprice: {type:String,require:true}
})

module.exports = mongoose.model("Booking",bookingschema)