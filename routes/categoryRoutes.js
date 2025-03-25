const express=require('express');
const router=express.Router();
const categoryNexus=require('../models/Category');

router.get('/api/category', async (req, res) => {
    try{
        const categorys=await categoryNexus.find();
        res.json(categorys);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/category', async (req, res) => {
    const category = new categoryNexus({
        descripcion: req.body.descripcion
    })
    
    try{
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;