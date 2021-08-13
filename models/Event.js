const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    date:{
        type:String,required:true
    },
    name:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
},{timestamps:true})

module.exports = mongoose.model('event',EventSchema);