const express = require('express');
const route = express.Router();

const mongoose = require("mongoose");
 
const Message = require('../models/Message');
  
route.post('/add',(req,res)=>{
    try{
      
        const message= new Message({
  
          name: req.body.name,
          message:req.body.message
        });
     
      message.save()
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
        const message = await Message.find({});
        return res.status(200).json({success:true,messages:message});
       } 
       catch(err){
        return res.status(400).json({success:false,err});
       }
});

route.get("/:id",(req, res) => {
  
  Message.findById(req.params.id).exec((err,message)=>{
  if(err) {
      return res.send(err);
  }
  return res.json({success:true,message});
        });
  
 
});

route.put('/update/:id',(req,res)=>{
    Message.findByIdAndUpdate(req.params.id,{
      $set: {
        date:req.body.date,
        name: req.body.name,
        message:req.body.message
        // image: req.file.path
      }},
        (err,post) => {
                 if(err) return res.status(400).json({success:false,err})
                 return res.status(200).json({ message: "Updated Message successfully",
                 createdProduct: {
                   
                   request: {
                     type: 'GET',
                     url: "http://localhost:3000/user/" 
                 }
                     }});
     },
     );
});

route.delete("/delete/:id",(req, res) => {
  try{
        Message.findByIdAndRemove(req.params.id).exec((deleteItem)=>{
        return res.json({success:true,deleteItem});
          });
  }
   
    catch(err) 
    {
        return res.json(err);
    }
    
    
   
  });

module.exports = route;