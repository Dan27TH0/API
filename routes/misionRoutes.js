const express=require('express');
const router=express.Router();
const misionNexus=require('../models/Mison');

router.get('/api/mision', async (req, res) => {
    try{
        const misiones=await misionNexus.find();
        res.json(misiones);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/mision', async (req, res) => {
    const mision = new misionNexus({
        contenido: req.body.contenido,
        fecha: req.body.fecha
    });

    try {
        const newMision = await mision.save();
        res.status(201).json(newMision);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;