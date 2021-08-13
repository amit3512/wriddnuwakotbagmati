const mongoose = require('mongoose');
const StaffSchema = new mongoose.Schema({
    
    name:{
        type:String,required:true
    },

    designation:{
        type:String,required:true
    },

    phone:{
        type:Number,required:true
    },

    email:{
        type:String,required:true
    },

    orderBy:{
        type:Number,required:true
    },

    image:{
        type:String,required:true
    },
})

module.exports = mongoose.model('staff',StaffSchema);