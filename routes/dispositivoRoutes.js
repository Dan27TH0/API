const express=require('express');
const router=express.Router();
const dispositivoNexus=require('../models/Dispositivo');

router.get('/api/dispositivo', async (req, res) => {
    try{
        const dispositivos=await dispositivoNexus.find();
        res.json(dispositivos);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.post('/api/dispositivo', async (req, res) => {
    const dispositivo = new dispositivoNexus({
        nombre: req.body.nombre,
        modelo: req.body.modelo,
        categoria_id: req.body.categoria_id
    })
    
    try{
        const newDispositivo = await dispositivo.save()
        res.status(201).json(newDispositivo)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;