const express = require('express');
const router = express.Router();
const encioNexus = require('../models/Envio');

router.get('/api/encio', async (req, res) => {
    try {
        const encios = await encioNexus.find();
        res.json(encios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.post('/api/encio', async (req, res) => {
    const encio = new encioNexus({
        fecha_envio: req.body.fecha_envio,
        direccion: req.body.direccion || {},
        estado_envio: req.body.estado_envio,
    })

    try {
        const newEncio = await encio.save();
        res.status(201).json(newEncio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


module.exports = router;