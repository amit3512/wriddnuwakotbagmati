const express = require('express');
const route = express.Router();
const Event = require('../models/Event');
  
route.post('/add',(req,res)=>{
    try{
      
        const post= new Event({
          date:req.body.date,
          name: req.body.name,
          description:req.body.description
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
        const user = await Event.find({}).sort({createdAt:-1});
        return res.status(200).json({success:true,users:user});
       } 
       catch(err){
        return res.status(400).json({success:false,err});
       }
});


route.put('/update/:id',(req,res)=>{
  Event.findByIdAndUpdate(req.params.id,{
      $set: {
        date:req.body.date,
        name: req.body.name,
        description:req.body.description
        // image: req.file.path
      }},
        (err,post) => {
                 if(err) return res.status(400).json({success:false,err})
                 return res.status(200).json({ message: "Updated Notice successfully"});
     }
     );
});

route.get("/:id",(req, res) => {
  
  Event.findById(req.params.id).exec((err,event)=>{
    if(err) {
        return res.send(err);
    }
    return res.json({success:true,event});
          });
    
   
  });

  route.delete("/delete/:id",(req, res) => {
  try{
    Event.findByIdAndRemove(req.params.id).exec((deleteItem)=>{
        return res.json({success:true,deleteItem});
          });
  }
   
    catch(err) 
    {
        return res.json(err);
    }
    
    
   
  });

module.exports = route;