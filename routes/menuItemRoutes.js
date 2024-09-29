const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/Menu');
// menuItems

router.post('/', async(req ,res)=>{
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const respone = await newItem.save();
    console.log('data saved');
    res.status(200).json(respone);

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Interal server error'})
  }
});

router.get('/', async(req , res)=>{
  try{
   const data = await MenuItem.find();
    console.log('data fetch')
    res.status(200).json({data})
  }catch (err) {
    console.log(err);
    res.status(500).json({error: 'Interal server error'})
  };
});

router.get('/:testType',async (req , res)=>{
  try{
    const testType = req.params.testType;
  if(testType=='spicy' || testType=='sweets' || testType=='sour'){
    
    const respone = await MenuItem.find({taste:testType});
    console.log('response fetch');
    res.status(200).json(respone);
  }
  else{
    res.status(404).json({error:'Invalid test type'});
  }
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Invalid test type"});
  }
  // comments added for testing purpose 
});
module.exports = router;