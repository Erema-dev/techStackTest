const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bikeSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rent :{
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('bikes', bikeSchema)