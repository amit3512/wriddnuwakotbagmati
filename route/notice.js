const express = require('express');
const route = express.Router();
// const multer = require('multer');
const mongoose = require("mongoose");
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, path.join('uploads/'));
//     },
//     filename: function(req, file, cb) {
//       cb(null,file.originalname);
//     }
//   });
  
//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
  
//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 10
//     },
//     fileFilter: fileFilter
//   });

  
 
const Notice = require('../models/Notice');
  
route.post('/add',(req,res)=>{
    try{
      const post= new Notice({
          date:req.body.date,
          name: req.body.name,
          description:req.body.description
          // image: req.file.path 
        });
     
      post.save()
    .then(result => {
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            result
            }
        
      });
    })
    }catch(err){
        return res.status(400).json({success:false,err:"Can't Process..."});
    }
    
})

route.get('/',async(req,res)=>{
    try {
        const user = await Notice.find({}).sort({createdAt:-1});
        return res.status(200).json({success:true,users:user});
       } 
       catch(err){
        return res.status(400).json({success:false,err});
       }
});


route.put('/update/:id',(req,res)=>{
    Notice.findByIdAndUpdate(req.params.id,{
      $set: {
        date:req.body.date,
        name: req.body.name,
        description:req.body.description
      }},
        (err,post) => {
                 if(err) return res.status(400).json({success:false,err})
                 return res.status(200).json({ message: "Updated Notice successfully",
                 createdProduct: {
                   
                   request: {
                     type: 'GET',
                     url: "http://localhost:3000/user/" 
                 }
                     }});
     },
     );
});

route.get("/:id",(req, res) => {
  
    Notice.findById(req.params.id).exec((err,notice)=>{
    if(err) {
        return res.send(err);
    }
    return res.json({success:true,notice});
          });
    
   
  });

  route.delete("/delete/:id",(req, res) => {
  try{
        Notice.findByIdAndRemove(req.params.id).exec((deleteItem)=>{
        return res.json({success:true,deleteItem});
          });
  }
   
    catch(err) 
    {
        return res.json(err);
    }
    
    
   
  });

module.exports = route;