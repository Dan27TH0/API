const express=require('express');
const router=express.Router();
const visionNexus=require('../models/Vision');

router.get('/api/vision', async (req, res) => {
    try{
        const visiones=await visionNexus.find();
        res.json(visiones);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/vision', async (req, res) => {
    const vision = new visionNexus({
        contenido: req.body.contenido,
        fecha: req.body.fecha
    })

    try {
        const newVision = await vision.save();
        res.status(201).json(newVision);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;