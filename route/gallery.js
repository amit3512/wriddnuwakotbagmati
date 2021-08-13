const express = require('express');
const route = express.Router();
const multer = require('multer');
const { cloudinary } = require('../utils/cloudinary');
const Gallery = require('../models/Gallery');

const storage = multer.diskStorage({
    // destination: function(req, file, cb) {
    //   cb(null, path.join('uploads/'));
    // },
    // filename: function(req, file, cb) {
    //   cb(null,file.originalname);
    // }
  });

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
  });

  route.post(
    "/multiple",
    upload.array("image", 6),
    async (req, res) => {
  
        // req.files is array of `image` files
        // req.body will contain the text fields,
        // if there were any
        var imageUrlList = [];
  
        for (var i = 0; i < req.files.length; i++) {
            var locaFilePath = req.files[i].path;
  
            // Upload the local image to Cloudinary
            // and get image url as response
            var result = await  cloudinary.uploader.upload(locaFilePath);
            imageUrlList.push(result.secure_url);
        }
  
        var response = imageUrlList;
  
        // return res.send(response);
        const post= new Gallery({
           
          date: req.body.date,
          category: req.body.category,
          title: req.body.title,
          image: response.map((uri)=>uri)
      });
   
    post.save()
  .then(result => {
    res.status(201).json({
      message: "Created successfully",
      post:post
      });
  })
    }
  );


  //getPhoto
route.get("/",(req, res) => {
  Gallery.find({}).exec((err,galleries)=>{
     if(err) {
         return res.json(err);
     }
     return res.json({success:true,galleries});
           });
});
//getPhotoByCategory
route.get("/:category",(req, res) => {
     Gallery.find({category:req.params.category}).exec((err,galleries)=>{
        if(err) {
            return res.json(err);
        }
        return res.json({success:true,galleries});
              });
});

//getPhotoByTitle
route.get("/title/:title",(req, res) => {
    Gallery.find({title:req.params.title}).exec((err,galleries)=>{
      if(err) {
          return res.json(err);
      }
      return res.json({success:true,galleries});
            });
});

route.delete("/delete/:id",(req, res) => {
  try{
    Gallery.findByIdAndRemove(req.params.id).exec((deleteItem)=>{
        return res.json({success:true,deleteItem});
          });
     }
   
   catch(err) 
    {
        return res.json(err);
    }
    
    
   
  });

module.exports = route;