const express = require('express');
const route = express.Router();
const multer = require('multer');
const path = require('path');
const { cloudinary } = require('../utils/cloudinary');
const Staff = require('../models/Staff');

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

  route.post('/add',upload.single('image'),async (req,res)=>{
    try{
      const result = await cloudinary.uploader.upload(req.file.path);
      const staff= new Staff({
            name: req.body.name,
            designation: req.body.designation,
            phone: req.body.phone,
            email: req.body.email,
            orderBy: req.body.orderBy,
            image: result.secure_url 
        });
     staff.save()
    .then(result => {
      res.status(201).json({
                          message: "Created successfully",
                          createdProduct: {
                          result
                         }
            
        });
    })
    }catch(err){
        return res.status(400).json({success:false,err:"Can't Process..."});
    }
    
});

route.get('/',async(req,res)=>{
  try {
      const staff = await Staff.find({}).sort({orderBy:1});
      return res.status(200).json({success:true,staffs:staff});
     } 
     catch(err){
      return res.status(400).json({success:false,err});
     }
});

route.put('/update/:id',upload.single('image'),async (req,res)=>{
  
    const result = await cloudinary.uploader.upload(req.file.path);
    if(result){
      var staffs = {
        name: req.body.name,
        designation:req.body.designation,
        phone:req.body.phone,
        email: req.body.email,
        orderBy: req.body.orderBy,
        image:result.secure_url
      }
    }else{
      staffs = {
        name: req.body.name,
        designation:req.body.designation,
        phone:req.body.phone,
        email: req.body.email,
        orderBy: req.body.orderBy,
        
    }
  }
 
  Staff.findByIdAndUpdate(req.params.id,{
    $set: {
      staffs
    }},
      (err,post) => {
               if(err) return res.status(400).json({success:false,err})
               return res.status(200).json({ message: "Updated Staff successfully"});
   },
   );
});

route.get("/:id",(req, res) => {
  Staff.findById(req.params.id).exec((err,staff)=>{
    if(err) {
        return res.send(err);
    }
    return res.json({success:true,staff});
          });
  
  
 
});

route.delete("/delete/:id",(req, res) => {
  try{
        Staff.findByIdAndRemove(req.params.id).exec((deleteItem)=>{
        return res.json({success:true,deleteItem});
          });
  }
   
    catch(err) 
    {
        return res.json(err);
    }
    
    
   
  });

module.exports = route;