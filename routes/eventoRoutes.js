const express = require('express');
const router = express.Router();
const eventoNexus = require('../models/Evento');

router.get('/api/evento', async (req, res) => {
    try {
        const eventos = await eventoNexus.find();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.post('/api/evento', async (req, res) => {
    const evento = new eventoNexus({
        dispositivo_id: req.body.dispositivo_id,
        tipo_evento: req.body.tipo_evento,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
    })

    try {
        const newEvento = await evento.save()
        res.status(201).json(newEvento)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

exports.default = router;