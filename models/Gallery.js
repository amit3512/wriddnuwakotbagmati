const mongoose = require('mongoose');
const GallerySchema = new mongoose.Schema({
    
    date:{
        type:String,required:true
    },

    category:{
        type:String,required:true
    },

    title:{
        type:String,required:true
    },

    image:[{
        type:String,required:true
    }],
})

module.exports = mongoose.model('gallery',GallerySchema);