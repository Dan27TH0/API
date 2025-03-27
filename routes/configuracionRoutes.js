const express=require('express');
const router=express.Router();
const configuracionNexus=require('../models/Configuracion');

router.get('/api/configuracion', async (req, res) => { 
    try {
        const configuraciones = await configuracionNexus.find();
        res.json(configuraciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/api/configuracion', async (req, res) => {
    const configuracion = new configuracionNexus({
        dispositivo_id: req.body.dispositivo_id,
        usuario_id: req.body.usuario_id,
        accesos: req.body.accesos || []
    })

    try {
        const newConfiguracion = await configuracion.save();
        res.status(201).json(newConfiguracion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;